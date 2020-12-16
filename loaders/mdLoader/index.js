const fs = require('fs');
const path = require('path');
const hash = require('hash-sum');
const LRU = require('lru-cache');
const hljs = require('highlight.js');

// markdown-it 插件
const emoji = require('markdown-it-emoji');
const anchor = require('markdown-it-anchor');
const toc = require('markdown-it-table-of-contents');

const containers = require('./containers');

const md = require('markdown-it')({
  html: true,
  highlight: function (str, lang) {
    console.log('-------------------------------------');
    console.log(lang);
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre><code>${hljs.highlight(lang, str, true).value}</code></pre>`
      } catch (_) {}
    }
    return `<pre v-pre><code>${md.utils.escapeHtml(str)}</code></pre>`
  }
})
.use(emoji)
.use(anchor, {
  permalink: true,
  permalinkBefore: true,
  permalinkSymbol: '#'
})
.use(toc, {
  includeLevel: [2, 3]
})
.use(containers);

const cache = LRU({ max: 1000 });

module.exports = function(source) {
  const isProd = process.env.NODE_ENV === 'production';
  const file = this.resourcePath;
  const key = hash(file + source);
  const cashed = cache.get(key);

  // if (cached && (isProd || /\?vue/.test(this.resourceQuery))) {
  //   return cashed;
  // }
  const html = md.render(source);
  const res = (`
  <template>
  <div>${html}</div>
  </template>
  `);
  cache.set(key, res);
  return res;
}
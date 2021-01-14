## vue单元测试问题总结
### 公共localVue
在 **__test__/views** 目录下创建 **app.js**, 按照正常项目main.js中初始换Vue.
统一处理依赖文件
```javascript
import Vue from 'vue';
import iView from 'iview';
// ...
Vue.use(iView);
export default Vue;
```

### mock this.$ajax
修改 **app.js**
```javascript
//...
import axios from 'axios';
jest.mock('axios');
// 解决axios.create() 返回undefined问题
axios.create = jest.fn(() => axios);
Vue.prototype.$ajax = axios;
//...

```
1. mock get
```javascript
// 正常返回
axios.get.mockResolvedValue({});
// 网络异常
axios.get.mockRejectedValue();
```

2. mock post
```javascript
// 正常返回
axios.post.mockResolvedValue({});
// 网络异常
axios.post.mockRejectedValue();
```

### mock store
```javascript
import { mount } from '@vue/test-utils';
import localVue from './app.js';
import Vuex from 'vuex';
const store = new Vuex.Store({});
const wrapper = mount(Component, { localVue, store });
```

### mock this.xxx
```javascript
const wrapper = mount(Component, { localVue, mocks: { xxx: 'xxx' } });
```

### click
1. 点击按钮函数被触发(当click事件是子组件的事件,在父组件内不属于DOM原生事件，所以不能使用 **trigger**，应该使用 **$emit**)
```javascript
const btn = wrapper.find('button');
btn.vm.$emit('click');
```

### require.context
1. 原项目中有自动引入固定前缀组件的插件，需要用到webpack的require.context函数对文件做检索，然后babel-jest是没有的，所以需要引入一个三方插件来提供这个这个功能
2. 安装依赖 **babel-plugin-require-context-hook**
3. 配置babel.config
```javascript
modlue.exports = {
  //...
  env: {
  test: {
    plugins: ['require-context-hook']
  }
};
```
4. 添加register-context.js 文件
```javascript
import registerRequireContextHook from 'bable-plugin-require-context-hook/register';
registerRequireContextHook();
```
5. 添加jest预配置
```
setupFiles: [
  "<rootDir>/__test__/unit/register-context.js"
]
```

### TypeError: document.createRange is not a function
```javascript
document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  commonAncestorContainer: {
    nodeName: 'BODY',
    ownerDocument: document
  }
});
```
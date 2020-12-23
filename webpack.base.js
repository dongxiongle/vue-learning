const { resolve } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');


module.exports = {
  resolveLoader: {
    modules: ['node_modules', './loaders/']
  },
  mode: 'production',
  entry: {
    index: './src/app.ts'
  },
  output: {
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'assets/[name].[hash:8].js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: { appendTsSuffixTo: [/\.vue$/] }
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /\.md$/,
        use: ['vue-loader', {
          loader: resolve(__dirname, './loaders/mdLoader')
        }]
      },
      {
        test: /\.(le|c)ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.(jpg|png|woff|eot|ttf|svg|gif)$/,
        use: [{
          loader: 'file-loader'
        }]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'vue-learning',
      template: './public/index.html',
      filename: 'index.html'
    })
  ]
};

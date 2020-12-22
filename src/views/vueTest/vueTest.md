## vue单元测试
### 公共localVue
在 **__test__/views** 目录下创建 **app.js**, 按照正常项目main.js中初始换Vue.
导入依赖插件
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
* mock get
```javascript
// 正常返回
axios.get.mockResolvedValue({});
// 网络异常
axios.get.mockRejectedValue();
```

* mock post
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
* 点击按钮函数被触发(当click事件是子组件的事件,在父组件内不属于DOM原生事件，所以不能使用 **trigger**，应该使用 **$emit**)
```javascript
const btn = wrapper.find('button');
btn.vm.$emit('click');
```
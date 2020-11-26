<template>
  <div class="contentWrap">
    <h1>proxy and reflect</h1>
    <p>方法</p>
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
@Component
export default class ProxyAndReflect extends Vue {
  name = "ProxyAndReflect";
}
const myTarget = {
  foo: ''
};
const proxy = new Proxy(myTarget, {
  get(target, property, receiver) {
    console.log('get()');
    return Reflect.get(target, property, receiver);
  }
});
proxy.foo;
</script>
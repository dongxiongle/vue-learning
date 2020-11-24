<template>
  <div>
    <h4>队列</h4>
    <p>先进先出</p>
    <p>队列方法</p>
    <ul>
      <li>添加元素，新的项只能添加到队列末尾</li>
      <li>移除元素，遵循先进先出原则，最先添加的项是最先被移除</li>
      <li>查看队列头元素</li>
      <li>是否为空</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class QueueC extends Vue {

}

let item: Array<any> = [];
class Queue {
  // 添加
  enQueue() {
    item.push();
  }
  // 移除
  delQueue() {
    return item.shift()
  }
  // 头元素
  front() {
    return item[0];
  }
  // 是否为空
  isEmpty() {
    return item.length === 0;
  }
  
}
</script>
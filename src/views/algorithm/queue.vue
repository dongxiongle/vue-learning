<template>
  <div>
    <queue-md />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import QueueMd from './queue.md';

@Component({
  components: { QueueMd }
})
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
<template>
  <div>
    <List />
  </div>
</template>
<script lang="ts">
import List from './list.md';
import {LinkedList} from './linkedList';
import { Vue, Component } from 'vue-property-decorator';
@Component({
  components: {
    List
  }
})
export default class LinkList extends Vue {}
</script>
<template>
  <div>{{title}}</div>
</template>
<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  @Component
  export default class Ocollect extends Vue{
    title: string = '收集1';
  }
</script>

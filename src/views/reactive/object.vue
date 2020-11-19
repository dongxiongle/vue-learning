<template>
  <div>object</div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import {Observer} from './observer';

@Component
export default class ObjectDefine extends Vue {
  mounted() {
    let car = new Observer({
      'price': 3000,
      'brand': 'b'
    });
    car.value.brand = 'c';
  }
}
</script>
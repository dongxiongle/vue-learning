<template>
  <!-- <transition> -->
  <router-view :key="key" />
  <!-- </transition> -->
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "AppMain",
})
export default class AppMain extends Vue {
  get key() {
    return this.$route.path;
  }
}
</script>
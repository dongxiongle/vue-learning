<template>
  <div style="width: 256px">
    <el-menu mode="vertical">
      <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"/>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import SidebarItem from './SidebarItem.vue';
import { routes } from '../../router/index';

@Component({
  name: 'Sidebar',
  components: {
    SidebarItem
  }
})
export default class Sidebar extends Vue {
  openKeys: Array<string> = ['/'];
  get routes() {
    return routes;
  }

  private onOpenChange(openKeys: Array<string>) {
    this.openKeys = openKeys;
  }
}
</script>

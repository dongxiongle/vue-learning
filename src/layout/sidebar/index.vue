<template>
  <el-menu mode="vertical" style="height:100vh;overflow-y: auto;">
    <sidebar-item :item="routes" :base-path="routes.path"/>
  </el-menu>
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
    const { path } = this.$route;
    const route = routes.find(item => item.path !== '/' && path.indexOf(item.path) > -1);
    return route;
  }

  private onOpenChange(openKeys: Array<string>) {
    this.openKeys = openKeys;
  }
}
</script>
<style lang="less">
.el-menu {
  // min-height: 100vh;
  .el-menu-item, .el-submenu__title {
    line-height: 46px;
    height: 46px;
  }
}
.el-menu .el-submenu .el-menu-item {
  height: 40px;
  line-height: 40px;
}
</style>
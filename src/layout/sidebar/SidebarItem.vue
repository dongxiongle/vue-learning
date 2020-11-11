<template>
  <div v-if="!item.meta.hidden" class="">
    <template v-if="hasOneShowingChild(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren)">
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)">
          <span>{{onlyOneChild.meta.title}}</span>
        </el-menu-item>
      </app-link>
    </template>
    <el-submenu v-else :index="resolvePath(item.path)">
      <span slot="title">{{item.meta.title}}</span>
      <template v-for="child in item.children">
        <template v-if="!child.meta.hidden">
          <sidebar-item
            v-if="child.children && child.children.length > 0"
            :item="child"
            :key="resolvePath(child.path)"
            :base-path="resolvePath(child.path)"
          ></sidebar-item>
          <app-link v-else :to="resolvePath(child.path)" :key="resolvePath(child.path)">
            <el-menu-item :index="resolvePath(child.path)">
              <span>{{child.meta.title}}</span>
            </el-menu-item>
          </app-link>
        </template>
      </template>
    </el-submenu>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { RouteConfig } from 'vue-router';
import path from 'path';
import AppLink from './Link.vue';
import { isExternal } from '../../utils';

@Component({
  name: 'SidebarItem',
  components: {
    AppLink
  }
})
export default class SidebarItem extends Vue {
  @Prop({ required: true, default: {} })
  item!: RouteConfig;
  @Prop({ default: false })
  isNest!: boolean;
  @Prop({ default: '' })
  basePath!: string;

  onlyOneChild: null = null;

  private hasOneShowingChild(children = [], parent: any) {
    const showingChildren = children.filter((item: any) => {
      if (!item.meta || item.meta.hidden) {
        return false;
      } else {
        this.onlyOneChild = item;
        return true;
      }
    });
    if (showingChildren.length === 1) {
      return true;
    }
    if (showingChildren.length === 0) {
      this.onlyOneChild = { ...parent, path: '', noShowingChildren: true };
      return true;
    }
    return false;
  }

  private resolvePath(routePath: string) {
    if (isExternal(routePath)) {
      return routePath;
    }
    return path.resolve(this.basePath, routePath);
  }
}
</script>
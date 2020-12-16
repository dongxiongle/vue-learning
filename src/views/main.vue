<template>
  <div class="homeWrap">
    <el-row :gutter="32">
      <template v-for="(item) in routerList">
        <el-col :key="item.path" :xs="12" :sm="6" class="itemWrap">
          <app-link :to="item.path" class="linkItem">
            <span>{{item.meta.title}}</span>
          </app-link>
        </el-col>
      </template>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { routes } from '../router/index';
import AppLink from '../layout/sidebar/Link.vue';
@Component({
  components: {
    AppLink
  }
})
export default class Main extends Vue{
  get routerList() {
    return routes.filter(item => item.path !== '/');
  }
}
</script>
<style lang="less">
.homeWrap {
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px 20px;
}
.itemWrap {
  cursor: pointer;
  padding: 10px 16px;
  text-align: center;
  font-size: 14px;
  line-height: 22px;
}

.itemWrap:hover .linkItem {
  transform: translateY(-1px);
  box-shadow: 0 2px 4px 0 rgb(207, 205, 205);
}

.linkItem {
  display: block;
  padding: 20px 0;
  border: 1px solid #eee;
  border-radius: 4px;
  transition: transform 0.2s;
}
</style>
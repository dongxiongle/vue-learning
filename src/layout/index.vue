<template>
    <el-container>
      <el-aside>
        <sidebar />
      </el-aside>
      <el-container>
        <el-main>
          <app-main />
        </el-main>
      </el-container>
    </el-container>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Sidebar from './sidebar/index.vue';
import AppMain from './AppMain.vue';
@Component({
  name: 'Layout',
  components: {
    Sidebar,
    AppMain
  }
})
export default class Layout extends Vue {}
</script>
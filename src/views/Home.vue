<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <el-menu router :default-active="activeIndex" class="el-menu-demo" mode="vertical" @select="handleSelect">
          <el-menu-item index="/home/echart1">入门案例</el-menu-item>
          <el-menu-item index="/home/echart2">常用基本配置项</el-menu-item>
          <el-menu-item index="/home/echart3">多组数据</el-menu-item>
          <el-menu-item index="/home/echart4">折线图</el-menu-item>
          <el-menu-item index="/home/echart5">柱状图</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
// import {home, } from "../api/index";
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  created(){
    // home().then(res => {
    //   console.log('created')
    //   console.log(res)
    // })
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

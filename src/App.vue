<template>
  <div id="app">
    <!-- 这里excude='name' 用的是我们组建导出是指定的名字 这里要仔细.否组bug很难发现 -->
    <keep-alive exclude="detail">
       <router-view/>
    </keep-alive>
   
    <maintabbar> </maintabbar>
  </div>
</template>

<script>
import maintabbar from './components/content/maintabbar/maintabbar'

export default {
  name: 'App',
  components: {
    maintabbar
  }
}
</script>

<style>
  @import './assets/css/base.css';
</style>

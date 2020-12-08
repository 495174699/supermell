<template>
  <div id="app">
    <keep-alive>
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

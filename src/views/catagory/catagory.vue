<template>
  <div class="wrapper">
      <ul class="content"> 
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
        <li>好好好&</li>
      </ul>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name:'category',
    data() {
      return {
        scroll:null
      }
    },
    mounted() {
      this.scroll = new Bscroll(document.querySelector('.wrapper'),{
          probeType:3,
          pullUpLoad:true
      })
       this.scroll.on('scroll', lo => {
        console.log(lo);
      })
      this.scroll.on('pullingUp',() => {
        console.log('121111111111111111111111111111')
        setTimeout(() => {
         
        },2000)
      })
    }
}
</script>

<style>
.wrapper {
  width: 100%;
  height: 150px;
  background-color: red;
  overflow: hidden;
}
</style>
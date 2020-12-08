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
       this.scroll.on('scroll', postion => {
        console.log(postion);
      })
      this.scroll.on('pullingUp',() => {
       
      })
    }
}
</script>

<style>
.wrapper {
  width: 100%;
  height: 150px;
  /* background-color: blue; */
  overflow: hidden;
}
</style>
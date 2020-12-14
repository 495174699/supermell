<template>
  <div class="back-top" >
      <img src="../../../assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
    name:'backtop',
}
</script>

<style>
    .back-top {
        position: fixed;
        transform: scale(.5);
        bottom: 20px;
        right: -15px;
        z-index: 999;
    } 
</style>
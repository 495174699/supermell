<template>
  <div>
    <nav-bar>
      <div slot="left" class="left">
        <img src="../../../assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="center">
      <span>商品</span>
      <span>参数</span>
      <span>评论</span>
      <span>推荐</span>
      </div>  
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar'
export default {
    name:'detailitem',
    components:{
    NavBar
    }
}
</script>

<style>
.left {
  margin-top: 3px;
}
  .center {
    display: flex;
  }
  .center span {
    width: 40px;
  /* height: 25px; */
  text-align: center;
  margin: 0 2px;
  font-size: 14px; 
   /* background-color: blue; */
  }
</style>
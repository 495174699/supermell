<template>
   <tab-bar>
       <tab-bar-item path="/home" activeColor='red'>
         <img src="../../../assets/img/tabbar/home.svg" alt="" slot="item-icon">
         <img slot="item-icon-active" src="../../../assets/img/tabbar/home_active.svg" alt="">
         <div slot="item-text">首页</div>
       </tab-bar-item>
       <tab-bar-item path="/cate"  activeColor='red'>
          <img src="../../../assets/img/tabbar/category.svg" alt="" slot="item-icon" >
          <img slot="item-icon-active" src="../../../assets/img/tabbar/category_active.svg" alt="">
         <div slot="item-text">分类</div>
       </tab-bar-item>
       <tab-bar-item path="/catagory"  activeColor='red'>
          <img src="../../../assets/img/tabbar/shopcart.svg" alt="" slot="item-icon">
          <img slot="item-icon-active" src="../../../assets/img/tabbar/shopcart_active.svg" alt="">
         <div slot="item-text">购物车</div>
       </tab-bar-item>
       <!-- <tab-bar-item path="/profile"  activeColor='red'>
          <img src="../../../assets/img/tabbar/profile.svg" alt="" slot="item-icon">
          <img slot="item-icon-active" src="../../../assets/img/tabbar/profile_active.svg" alt="">
         <div slot="item-text">首页</div>
       </tab-bar-item> -->
    </tab-bar>
</template>

<script>
import TabBar from '../../common/tabbar/TabBar'
import TabBarItem from '../../common/tabbar/TabBarItem'
export default {
    name:'maintabbar',
    components:{
    TabBar,
    TabBarItem
    }
}
</script>

<style>

</style>
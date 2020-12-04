<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <homerecommond :recommond='recommends'></homerecommond>
    <feauture>
      <img src="" alt="">
    </feauture>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import HomeSwiper from './childComps/homeSwiper'
import {getHomeMultidata} from '../../network/home'
import homerecommond from './childComps/homerecommond'
import feauture from './childComps/feauture'


export default {
  name:'home',
  components: {
    NavBar,
   HomeSwiper,
   homerecommond,
   feauture
  
  },
  data() {
    return {
      banners:[],
      recommends:[],
      arr:[1,2,3]
    }
  },
  created() {
    getHomeMultidata().then(res => {
  //  this.result = res
  // console.log(res);
  // console.log(res.data.data);
  console.log(res.data.data.banner.list);
  console.log(res.data.data.recommend.list);
  this.banners =res.data.data.banner.list
  this.recommends = res.data.data.recommend.list
}).catch(err => {
    console.log(err);
})
  }
}
</script>

<style> 
 .home-nav {
   background-color: pink;
   color: #fff;
 }
</style>
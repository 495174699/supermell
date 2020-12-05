<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <homerecommond :recommond='recommends'></homerecommond>
    <feauture/>
    <tab-control :title="['流行','新款','精品']" @t-c-click='tabclick'></tab-control>
    <goods-list :goods="show">
        <!-- <good-list-item></good-list-item> -->
    </goods-list>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import HomeSwiper from './childComps/homeSwiper'
import homerecommond from './childComps/homerecommond'
import feauture from './childComps/feauture'
import TabControl from '../../components/content/tabcontrol/TavControl'
import GoodsList from '../../components/content/goods/GoodsList'
import GoodsListItem from '../../components/content/goods/GoodListItem'
import {getHomeMultidata,getHomeGoods} from '../../network/home'
import GoodListItem from '../../components/content/goods/GoodListItem.vue'

export default {
  name:'home',
  components: {
  NavBar,
   HomeSwiper,
   homerecommond,
   feauture,
   TabControl,
   GoodsListItem,
   GoodsList
  
  },
  data() {
    return {
      banners:[],
      recommends:[],
      arr:[1,2,3],
      goods: {
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      counttype:'pop'
    }
  },
  created() {
  this.getHomeMultidata()
  this.getHomeGoods('pop')
  this.getHomeGoods('new')
  this.getHomeGoods('sell')
  },

  methods:{
    tabclick(index) {
      switch(index) {
        case 0 :
          this.counttype = 'pop'
          break
        case 1 :
          this.counttype = 'new'
          break
        case 2 :
          this.counttype = 'sell'
          break
      }
    },

    getHomeMultidata() {
       getHomeMultidata().then(res => {
        this.banners =res.data.data.banner.list
         this.recommends = res.data.data.recommend.list
        //  console.log(11);
         }).catch(err => console.log(err))
    },
    getHomeGoods (type) {
      const page = this.goods[type].page+1
      getHomeGoods(type,page).then(res => {
      this.goods[type].list.push(...res.data.data.list)
      this.goods[type].page+=1
      console.log(res);
        })
    }
    
  },
  computed: {
    show() {
      return this.goods[this.counttype].list
    }
  }
}
</script>

<style> 
#home {
  padding-top: 44px;
}
 .home-nav {
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
    z-index: 1;
   background-color: pink;
   color: #fff;
 }

</style>
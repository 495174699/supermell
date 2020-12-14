<template>
 <div id="detail">
  <detail-item class="fix" ref="navbar" @titleClick="titleClick" :count="count"></detail-item>

  <srcoll id="detali-srcoll" ref="scroll"  @scroll='navscroll' :probe-type="3">
  <detail-swiper :topimages='topimages' class="detail-swiper"> </detail-swiper>
  <detail-base-info :all='all'></detail-base-info>
  <logos :logodata='logodata'></logos>
  <show :detailInfo='detailInfo'></show>
  <detail-item-params ref="params" :itemParams='itemParams'></detail-item-params>
  <detail-ping-lun ref="pinglun" :rate='rate'></detail-ping-lun>
  <hr>
  <goods-list ref="list" :goods='recommends'> 
  </goods-list>
</srcoll> 
 <back-top @click.native='topclick' ref="oo" v-show="isshow"></back-top>
<detial-nav-bar @addcart="addcart"></detial-nav-bar>
</div>
</template>

<script>
// import NavBar from '../../components/common/navbar/NavBar'
import DetailItem from './childcomponents/DetailItem'
import {getHomeMultidata,all,logo,getRecommend} from '../../network/detail'
import DetailSwiper from './childcomponents/DetailSwiper'
import detailBaseInfo from './childcomponents/DetailBaseInfo'
import logos from './childcomponents/logo'
import srcoll from '../../components/common/srcoll/srcoll'
import DetailItemParams from './childcomponents/DetailItemParams'
import DetailPingLun from './childcomponents/DetailPingLun'
import Show from './childcomponents/Show.vue'
import GoodsList from '../../components/content/goods/GoodsList'
import DetialNavBar from './childcomponents/DetialNavBar'
import BackTop from '../../components/content/backtop/BackTop.vue'
export default {  
    name:'detail',
    data() {
      return {
         iid:null,
         topimages:[],
         all:{},
         logodata:{},
         itemParams:{},
         rate:{},
         detailInfo:{},
         recommends:[],
         themeTopYs:[],
        count:0,
        isshow:false
      }
    },
    methods:{
     titleClick(index) {
       this.$refs.scroll.scrollto(0,-this.themeTopYs[index],200)
     },
     navscroll(op) {
     
      if(-op.y<=this.themeTopYs[1]) {
          this.count = 0
          this.$refs.navbar.count = this.count
      }
       if(-op.y>this.themeTopYs[1]-20 && -op.y <=this.themeTopYs[2]){
        this.count = 1
         this.$refs.navbar.count = this.count
       }
       if(-op.y>this.themeTopYs[2]-20 &&　-op.y <=this.themeTopYs[3]) {
        this.count = 2
         this.$refs.navbar.count = this.count
       }
       if(-op.y>this.themeTopYs[3]-20) {
        this.count = 3
         this.$refs.navbar.count = this.count
       }
      if( - op.y > 1000) {
       this.isshow = true
      }else {
        this.isshow = false
      }
     },
    addcart() {
    console.log(11);
    const product = {}
    product.image = this.topimages[0]
    product.title = this.all.title
    product.desc = this.all.desc
    product.price = this.all.price
    product.iid = this.iid
    this.$store.dispatch('addCart',product)
  },
    topclick() {
     this.$refs.scroll.scrollto(0,0)
    },
    },
    updated() {
      this.themeTopYs = []
      this.themeTopYs.push(0)
      // console.log(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      this.themeTopYs.push(this.$refs.pinglun.$el.offsetTop)
      this.themeTopYs.push(this.$refs.list.$el.offsetTop)
    },
    mounted() {
      
    },
    components: {
      DetailItem,
      DetailSwiper,
      detailBaseInfo,
      logos,
      srcoll,
      DetailItemParams,
      DetailPingLun,
      Show,
      GoodsList,
      DetialNavBar,
      BackTop,
    },
   created() {
    // console.log(333333);
    //获取iid
     this.iid =  this.$route.params.iid
    // 请求详情数据
     getHomeMultidata(this.iid).then(res => {
      console.log(res);
      this.topimages = res.data.result.itemInfo.topImages
      this.all = new all(res.data.result.itemInfo,res.data.result.columns,res.data.result.shopInfo.services)
      this.logodata = new logo(res.data.result.shopInfo)
      this.detailInfo = res.data.result.detailInfo
      this.itemParams = res.data.result.itemParams
      console.log(this.itemParams);
      this.rate = res.data.result.rate
     })
      // 请求推荐数据
      getRecommend().then(res => {
        console.log(res);
        this.recommends = res.data.data.list
      })
    //    this.$nextTick( () => {
    //     this.themeTopYs = []
    //   this.themeTopYs.push(0)
    //   // console.log(this.$refs.params.$el.offsetTop);
    //   this.themeTopYs.push(this.$refs.params.$el.offsetTop)
    //   this.themeTopYs.push(this.$refs.pinglun.$el.offsetTop)
    //   this.themeTopYs.push(this.$refs.list.$el.offsetTop)
    //  })
    }
}
</script>

<style scoped>
.detail-swiper {
 margin-bottom: 3px;
}
#detail {
  /* height: 100vh; */
  position: relative;
  z-index: 10;
  background-color: #fff;
  padding-top: 44px;
}
#detali-srcoll {
  position: relative;
  z-index: 1;
  height: 100vh;
}
.fix {
  top: -1px;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 2;
  background-color: #fff;
}
hr{
  background-color: black;
}
</style>
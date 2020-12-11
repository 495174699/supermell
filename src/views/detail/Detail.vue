<template>
 <div id="detail">
   <detail-item class="fix" @titleClick="titleClick"></detail-item>
  <srcoll id="detali-srcoll" ref="scroll">
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
         themeTopYs:[]
      }
    },
    methods:{
     titleClick(index) {
       console.log(index);
       this.$refs.scroll.scrollto(0,-this.themeTopYs[index],1000)
     }
    },
    updated() {
      this.themeTopYs = []
      this.themeTopYs.push(0)
      console.log(this.$refs.params.$el.offsetTop);
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
      GoodsList
    },
   created() {
    console.log(333333);
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
  z-index: 99;
  background-color: #fff;
  padding-top: 44px;
}
#detali-srcoll {
  position: relative;
  z-index: 1;
  height: 100vh;
}
.fix {
  top: 0;
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
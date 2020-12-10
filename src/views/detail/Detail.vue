<template>
  <srcoll id="detali-srcoll">
  <div id="detail">
   <detail-item class="fix"></detail-item>
  <detail-swiper :topimages='topimages' class="detail-swiper"> </detail-swiper>
  <detail-base-info :all='all'></detail-base-info>
  <logos :logodata='logodata'></logos>
  <show :detailInfo='detailInfo'></show>
  <detail-item-params  :itemParams='itemParams'></detail-item-params>
  <detail-ping-lun :rate='rate'></detail-ping-lun>
  </div>
</srcoll>
</template>

<script>
// import NavBar from '../../components/common/navbar/NavBar'
import DetailItem from './childcomponents/DetailItem'
import {getHomeMultidata,all,logo} from '../../network/detail'
import DetailSwiper from './childcomponents/DetailSwiper'
import detailBaseInfo from './childcomponents/DetailBaseInfo'
import logos from './childcomponents/logo'
import srcoll from '../../components/common/srcoll/srcoll'
import DetailItemParams from './childcomponents/DetailItemParams'
import DetailPingLun from './childcomponents/DetailPingLun'
import Show from './childcomponents/Show.vue'
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
         detailInfo:{}
      }
    },
    methods:{
     
    },
    components: {
      DetailItem,
      DetailSwiper,
      detailBaseInfo,
      logos,
      srcoll,
      DetailItemParams,
      DetailPingLun,
      Show
    },
   created() {
    console.log(333333);
     this.iid =  this.$route.params.iid
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
    }
}
</script>

<style scoped>
.detail-swiper {
 margin-bottom: 3px;
}
#detail {
  /* height: 100vh; */
  background-color: #fff;
  /* padding-top: 44px; */
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
</style>
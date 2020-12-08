<template>
  <div id="detail">
  <detail-item/>
  <detail-swiper :topimages='topimages' class="detail-swiper"> </detail-swiper>
  <detail-base-info :all='all'></detail-base-info>
  <logos :logodata='logodata'></logos>
  </div>
</template>

<script>
// import NavBar from '../../components/common/navbar/NavBar'
import DetailItem from './childcomponents/DetailItem'
import {getHomeMultidata,all,logo} from '../../network/detail'
import DetailSwiper from './childcomponents/DetailSwiper'
import detailBaseInfo from './childcomponents/DetailBaseInfo'
import logos from './childcomponents/logo'
export default {  
    name:'detail',
    data() {
      return {
         iid:null,
         topimages:[],
         all:{},
         logodata:{}
      }
    },
    methods:{
     
    },
    components: {
      DetailItem,
      DetailSwiper,
      detailBaseInfo,
      logos
    },
   created() {
     console.log(333333);
     this.iid =  this.$route.params.iid
     getHomeMultidata(this.iid).then(res => {
      console.log(res);
      this.topimages = res.data.result.itemInfo.topImages
      this.all = new all(res.data.result.itemInfo,res.data.result.columns,res.data.result.shopInfo.services)
      this.logodata = new logo(res.data.result.shopInfo)
     })
    }
}
</script>

<style>
.detail-swiper {
 margin-bottom: 3px;
}
</style>
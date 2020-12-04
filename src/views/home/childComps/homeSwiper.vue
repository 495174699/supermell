<template>
   <swiper>
     <swiper-item v-for='(item,index) in banners' :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import Swiper from '../../../components/common/swiper/Swiper'
import SwiperItem from '../../../components/common/swiper/SwiperItem'
export default {
    name:'homeswiper',
    props:{
        banners:{
            type:Array,
            default() {
                return []
            }
        }
    },
    components:{
        Swiper,
        SwiperItem
    }
}
</script>

<style>

</style>
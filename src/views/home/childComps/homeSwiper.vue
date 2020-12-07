<template>
   <swiper>
     <swiper-item v-for='(item,index) in banners' :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgload">
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
    data() {
        return {
            isload:false
        }
    },
    components:{
        Swiper,
        SwiperItem
    },
    methods: {
        imgload() {
            if(!this.isload) {
                 this.$emit('imgload')
                 this.isload = true
            }
           
        }
    }
}
</script>

<style>
    
</style>
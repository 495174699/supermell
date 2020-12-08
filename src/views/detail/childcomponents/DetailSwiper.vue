<template>
    <swiper class="oo">
        <swiper-item v-for="item in topimages">
            <img :src="item" alt="">
        </swiper-item>
    </swiper>
</template>

<script>
// import Swiper from '../../../components/common/swiper/Swiper.vue'
// import SwiperItem from '../../../components/common/swiper/SwiperItem.vue'
import {Swiper,SwiperItem} from '../../../components/common/swiper'
export default {
    name:"detailswiper",
    props:{
        topimages:{
            type:Array,
            datault() {
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
 .oo {
     width: 100%;
     height: 300px;
 }
</style>
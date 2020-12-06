<template>
   <div class="wrapper" ref="wrapper">
       <div class="content">
           <slot>

           </slot>
       </div>
   </div>
</template>

<script>
import bscroll from 'better-scroll'
export default {
    name:'scroll',
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad: {
            type:Boolean,
            default: false
        }
    },
    data() {
        return {
            scroll: null,
            message:'111'
        }
    },
    mounted() {
        this.scroll = new bscroll(this.$refs.wrapper,{
            // 点击
            click:true,  
            // 滚动类型
            probeType:this.probeType,
            // 加载
            pullUpLoad:this.pullUpLoad
        })
        this.scroll.on('scroll',option => {
            // console.log(option);
            this.$emit('scroll',option)
        })
        // 上拉加载更多  pullingup事件
        this.scroll.on('pullingUp',() => {
         this.$emit('pullingUp')
        })
    },
    methods:{
        scrollto(x,y,time=500) {
            this.scroll.scrollTo(x,y,time)
        },
        finishPullUp() {
            this.scroll.finishPullUp()
            // console.log(11);
        }
    }
}
</script>

<style>

</style>
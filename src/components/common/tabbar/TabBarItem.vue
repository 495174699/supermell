<template>
<div class="tab-bar-item" @click="itemclick">
    <div v-if="!isactive">
        <slot name="item-icon"></slot>
    </div>
    <div v-else>
         <slot name="item-icon-active"></slot>
    </div>
   <div :style='activestyle'> 
       <slot name="item-text" ></slot>
    </div>
</div>
</template>

<script>
export default {
    name:'tabbaritem',
    data() {
        return {
            // isactive:true,  
        }
    },
    props: {
        path:String,
        activeColor:{
            type:String,
            defoult:'red'
        }
    },
    computed: {
        isactive() {
            return  this.$route.path.indexOf(this.path) !==-1
        },
        activestyle() {
            return this.isactive ? { color:this.activeColor}:{}
        }
    },
    methods: {
        itemclick() {
           this.$router.replace(this.path)
        }
    }
}
</script>

<style>
.tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
}
.tab-bar-item img {
    widows: 24px;
    height: 24px; 
    /* 去掉图片下的3px */
    vertical-align: middle;
    margin-bottom: 2px;
    margin-top: 3px;
}

</style>
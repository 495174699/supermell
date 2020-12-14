<template>
    <div class="alent">
       <div v-show="isShow">{{message}}</div>
    </div>
</template>

<script>
export default {
    name:'alent',
    props:{
        isShow:  {
            type:Boolean,
            default:false
        },
        message:{
            type:String,
            default:''
        }
    }
}
</script>

<style scoped>
    .alent{
        position: fixed;
        left: 50%;
        top: 80%;
        transform: translate(-50%,-50%);
        height: 25px;
        color: #fff;
        text-align: center;
        line-height: 25px;
        border-radius: 8px;
        background-color: rgba(0, 0, 0, .8);
        z-index: 99999999;
    }
</style>
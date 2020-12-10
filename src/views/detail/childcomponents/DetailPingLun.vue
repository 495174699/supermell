<template>
    <div class="pinglun" v-if="Object.keys(rate) !== 0">
        <div class="head">
            <span>用户评论</span>
            <span>更多</span>
        </div>
        <div class="center">
            <img :src="rate.list[0].user.avatar" alt="" width="50px" height="50px">
            <span>{{rate.list[0].user.uname}}</span>
            <div class="content">
                {{rate.list[0].content}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'detailpinglun',
    props:{
        rate:{
            type:Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style scoped>
    .pinglun{
        margin-top: 20px;
        width: 100%;
        height: 200px;
        /* height: 100px; */
     
        /* border: 1px solid red; */
    }
    .head {
        display: flex;
        color: black;
        font-size: 18px;
        justify-content: space-between;
    }
    .center {
        display: block;
    }
    .center img {
         vertical-align:middle;
    }
    .content {
        text-indent: 2em;
    }
</style>
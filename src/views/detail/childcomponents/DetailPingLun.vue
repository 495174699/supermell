<template>
    <div class="pinglun" v-if="Object.keys(rate).length != 0">
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
            <div class="hh">
                <span></span>
                <span>日期:{{rate.list[0].created | showDate}}</span>
            </div>
        </div>
        <div class="buttom">
            更多推荐:
        </div>
    </div>
</template>

<script>
import {formatDate} from '../../../components/common/utiles'
export default {
    name:'detailpinglun',
    props:{
        rate:{
            type:Object,
            default() {
                return {}
            }
        }
    },
    filters:{
        showDate(value) {
            // 1.将时间戳转化为date对象
            const date = new Date(value * 1000)
            // 2.对date进行格式化  
            return formatDate(date,'yyyy-MM-dd hh:mm:ss')
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
          margin-bottom: 29px;
    }
    .center img {
         vertical-align:middle;
    }
    .content {
        text-indent: 2em;
      
        color:black;
        font-size: 16px;
    }
    .hh {
        display: flex;
        justify-content: space-between;
    }
    .buttom {
        color: black;
        font-weight: 700;
    }
</style>
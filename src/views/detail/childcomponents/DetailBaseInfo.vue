<template>
  <div id="detail-base-info" v-if="Object.keys(all).length !== 0">
      <!-- title部分 -->
      <div class="title">{{all.title}}</div>
        <!-- 价钱部分 -->
        <div class="price">
            <span class="newprice">{{all.price}}</span>
            <span class="oldprice"><del>{{all.oldPrice}}</del></span>
            <span class="discount">{{all.discount}}</span>
        </div>
        <div class="center">
            <span v-for="item in all.columns">{{item}}</span>
            <!-- <span>{{ all.columns[0] }}</span>
            <span>{{ all.columns[1] }}</span> -->
            <!-- <span>{{ all.services[all.services.length-1].name }}</span> -->
        </div>
        <div class="end">
            <span v-for="index in all.services.length-1" :key="index">
               <img :src="all.services[index].icon" alt="">
               {{all.services[index].name}}
            </span>
        </div>
  </div>
</template>

<script>
export default {
    name:'detailbaseinfo',
    props:{
        all:{
            type:Object,
            default() {
                return {}
            }
        }
    },
   data() {
       return {
           index:0
       }
   }
}
</script>

<style>
 #detail-base-info {
     width: 100%;
     /* height: 150px; */
     /* border: 1px solid red; */
 }
 .title {
      font-size: 18px;
     font-weight: 800;
     margin-bottom: 5px;
 }
 .price {
     width: 100%;
      margin-bottom: 5px;
 }
 .newprice {
     font-weight: 400;
     /* color: red; */
 }
 .oldprice {
     font-size: 14px;
     font-weight: 100;
 }
 .center {
     display: flex;
     justify-content:space-between;
     font-size: 12px;
     border-bottom: 1px solid #ccc;
 }
 .end {
     display: flex;
     justify-content: space-between;
     width: 100%;
     height: 50px;
     line-height: 50px;
     /* background-color: red; */
 }
 .end span img {
     width: 14px;
     height: 14px;
 }
  .end span {
      font-size: 11px;
  }
</style>
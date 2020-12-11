<template>
  <div class="show" v-if="Object.keys(detailInfo).length !== 0">
      <span class="title">{{detailInfo.detailImage[0].key}}:</span>
      <div class="content">
          <img v-for="item in detailInfo.detailImage[0].list" :src="item" alt="">
      </div>
  </div>
</template>

<script>
export default {
name:'name',
props:{
    detailInfo:{
        type:Object,
        default() {
            return {}
        }
    }
}
}
</script>

<style scoped>
    .content{
        margin-top: 5px;
        border-top: 1px solid red;
    }
     .content img {
         width: 100%;
         height: 350px;
         margin-bottom: 5px;
     }
     .title {
         display: block;
         font-size: 20px;
         color: black;
         font-weight: 700;
         width: 100vw;
          border-bottom: 1px solid black;
     }
</style>>


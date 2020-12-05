<template>
  <div class="goods-item">
      <a :href="goodsitem.link">
      <img :src="goodsitem.show.img" alt="">
        <div>
            <p>{{goodsitem.title}}</p>
        </div>
        <p>
        <span class="price">{{goodsitem.price}}$/</span>
        
        <span class="collect">{{goodsitem.cfav}}❤</span>
        </p>
        </a>
  </div>
  
</template>

<script>

export default {
    name:'goodsitem',
    props: {
        goodsitem:{
            tyoe:Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style>
    .goods-item {
        /* float: left; */
        /* width: 148px; */
        width: 48%;
        height: 290px;
        border: 1px solid pink;
        margin: 5px 0;
        border-radius: 8px;
        /* background-color:red; */
    }
    .goods-item div {
        width: 100%;
        height: 18px;
        margin-bottom: 2px;
        text-align: center;
        overflow: hidden;
    }
    .goods-item div p {
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .goods-item a >p {
        text-align: center;
    }
    .price {
        color: red
    }
    .goods-item img {
        width: 100%;
        height: 240px;
        border-radius: 8px;
    }
</style>
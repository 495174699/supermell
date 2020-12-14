<template>
  <div class="goods-item"  @click="itemClick">
      <!-- <a :href="goodsitem.link"> -->
          <!-- @load 可以监听图片的加载比原生的img.onload = () => {} -->
      <img :src="showImage" alt="" @load='onload'>
        <div>
            <p>{{goodsitem.title}}</p>
        </div>
        <p>
        <span class="price">{{goodsitem.price}}$/</span>
        <span class="collect">{{goodsitem.cfav}}❤</span>
        </p>
        <!-- </a> -->
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
    },
    computed:{
        showImage() {
            return this.goodsitem.image || this.goodsitem.show.img
        },
        showa() {
           if(this.goodsitem.iid ) {
               return  this.$router.push('/detail/'+this.goodsitem.iid) 
           }
           else {
               return  this.$router.replace('http:///www.baidu.com')
              
           }
        }
    },  
    methods: {
        // 利用事件总线发送方法 
        onload() {
           this.$bus.$emit('load')
        //    console.log(11);
        },
        itemClick() {
            // this.$router.push('/detail/'+this.goodsitem.iid)
            // this.$router.push(this.showa)
            this.showa
            // console.log(11);
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
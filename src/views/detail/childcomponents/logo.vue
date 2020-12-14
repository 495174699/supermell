<template>
   <div v-if="Object.keys(logodata).length !== 0">

       <h3 class="title">商家信息:</h3>

      <div class="logo">
          <span>
               <a :href="logodata.shopUrl"><img :src="logodata.shopLogo" alt="" ></a>
          </span>
          <span>
              {{logodata.name}}
          </span>
      </div>

      <div class="content">
        <div class="left">
             <p>{{logodata.cSells}} <br> 总销量</p>
        </div>
         <div class="left">
             <p>{{logodata.cGoods}}<br> 全部宝贝</p>
        </div>
         <div class="logo-right">
             <li v-for="item in logodata.score">
                 {{item.name}}
                 {{item.score}}
             </li>
        </div>
      </div>
   </div>
</template>

<script>
export default {
    name:'logo',
    props:{
        logodata:{
            type:Object,
            default() {
                return {}
            }
        },
    },
    created() {
        // console.log(this.logodata.shopUrl);
    }
}
</script>

<style  scoped>
.logo img {
    border-radius: 50%;
    /* 图片与文字对其方式 */
    vertical-align:middle;
    width: 50px;height: 50px;
}
.logo span:nth-child(1) {
    margin-right: 10px;
}
.content {
    display: flex;
    width: 100%;
    height: 100px;
    /* border: 1px solid red; */
} 
.title {
    /* font-weight: 700; */
    color: black;
    border-bottom: 1px solid black;
}
.left {
    padding-top: 30px;
    text-align: center;
    width: 80px;
    height: 100px;
    /* line-height: 100px; */
}
.logo-right li {
    margin-top: 9px;
    list-style: none;
}
.logo-right {
    text-align: center;
    margin-left: 15px;
}
.canshu {
    width: 100%;
    height: 400px;
    border: 1px solid red;
} 
</style>
<template>
  <div>
    <nav-bar>
      <div slot="left" class="left" @click="imgClick">
        <img src="../../../assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="center">
        <div class="detail-item" v-for="(item,index) in titile" @click="itemClick(index)" :class="{active:index == count}">
          {{item}}
          </div>
      </div>  
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar'
export default {
    name:'detailitem',
    data() {
      return{
       titile:  ['商品','参数','评论','推荐'],
       count:0
      }
    },
    methods:{
      imgClick() {
        this.$router.back()
        // this.$router.go(-1)
      },
      itemClick(index) {
        this.count = index,
        this.$emit('titleClick',index)
      }
    },
    components:{
    NavBar
    }
}
</script>

<style>
.left {
  margin-top: 3px;
}
  .center {
    display: flex;
  }
.detail-item {
  flex: 1;
}
.active{
  color: red;
}
</style>
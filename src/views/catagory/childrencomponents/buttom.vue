<template>
  <div class="buttom">
      <div class="left">
          <input type="checkbox" name="" id="all" :checked="isSelect" @click="click"><label for="all">全选</label>合计:{{getMoney}}
      </div>
        <div class="right" @click="allClick">
            去结算({{cartLength}})
        </div>
         <alent :isShow="isShow" :message="message"></alent>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import alent from '../../../components/common/alent'
export default {
    name:'buttom',

         data() {
        return {
        isSelects:true,
        message:'',
        isShow:false
        }
    },
    components:{
           alent
    },
    computed:{
      ...mapGetters([`cartList`, `cartLength`]),

     getMoney() {
        var sum = 0
          for (let item of this.cartList) {
              if(item.isChecked) {
            sum = sum + item.price.substr(1,4)*item.count
            //   console.log(2);
              }  
          }
          return '$'+sum.toFixed(2)
      },
      isSelect() {
          this.isSelects = !(this.cartList.filter(item => !item.isChecked).length)
          return !(this.cartList.filter(item => !item.isChecked).length)
      }
      
  },
  methods:{
      click() {
          if(this.isSelects == false) {
            for (let item of this.cartList) {
              item.isChecked = true
          }
          }
          else{
               for (let item of this.cartList) {
              item.isChecked = false
          }
          }
         
          
      },
      allClick() {
          if(this.cartLength == 0) {
        this.isShow = true;
        this.message = '购物车没有商品';
        setTimeout(() => {
        this.isShow=false;
        this.message = '';
      },1000)
          }
      }
  },
}
</script>

<style >
.buttom {
    position: fixed;
    bottom:49px;
    left: 0;
    right: 0;
    width: 100%;
    height: 40px;
    /* text-align: center; */
    background-color: #ccc;
    border-top: 1px solid black;
    /* border: 1px solid red; */
}
.left {
    float: left;
    /* width: 70px; */
    height: 100%;
   
    line-height: 40px;
}
.left label {
     font-weight: 700;
     color: black;
     margin-right: 5px;
}
.left  input {
    width: 20px;
    height: 20px;
    /* margin-left: 10px; */
    border-radius: 8px;
}
.buttom .right {
    float: right;
    text-align: center;
    line-height: 40px;
    width: 30%;
    color: #fff;
    height: 100%;
    background-color: red;
}
</style>
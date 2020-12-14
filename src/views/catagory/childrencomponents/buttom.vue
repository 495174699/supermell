<template>
  <div class="buttom">
      <div class="left">
          <input type="checkbox" name="" id="all"><label for="all">全选</label>合计:{{getMoney}}
      </div>
        <div class="right">
            去结算({{cartLength}})
        </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name:'buttom',
    data() {
        return {
        allmoney:0
        }
    },
    computed:{
      ...mapGetters([`cartList`, `cartLength`]),
     getMoney() {
        let sum = 0
          for (let item of this.cartList) {
             item.price =  item.price.substr(1,5) * 1
              sum = sum + item.price*item.count
              console.log(2);
          }
          return sum
      }
  },
  methods:{
     
  },
//   updated() {
//     this.allmoney = this.getMoney()
//      console.log(1100000000000000);
//   }
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
    height: 100%;
    background-color: red;
}
</style>
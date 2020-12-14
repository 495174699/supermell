<template>
 <div class="cart">
      <nav-bar class="navbar">
        <div slot="center">购物车({{cartLength}})</div>
      </nav-bar>
      <catagoryitem></catagoryitem>
      <buttom></buttom>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import { formatDate } from '../../components/common/utiles'
// 这里需要引入
import {mapGetters} from 'vuex'
import Catagoryitem from './childrencomponents/catagoryitem.vue'
import buttom from './childrencomponents/buttom.vue'
export default {
    name:'category',
    data() {
      return {
        count:22,
      }
    },
    computed: {
      // cartList() {
      //   return this.$store.getters.cartLength
      // }

      // 直接把vuex里面的getters方法转换为这里的计算属性
      ...mapGetters([
        `cartLength`
      ])
    },
    components: { 
      NavBar,
      Catagoryitem,
      buttom 
}
}
</script>

<style scoped>
.navbar {
  background-color: pink;
  color: #fff;
}
.nav-bar  div {
  width: 200px;
}
.cart {
  height: 100vh;
}
</style>
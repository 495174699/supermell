<template>
  <div class="catagory-item">
    <srcoll class="contnet" >
      <ul>
        <li v-for="item in cartList">
           <span>
            <input type="checkbox" name="" id="" :checked='item.isChecked'>
            <img :src="item.image" alt="">
            <p>{{item.title}}</p>
             <p>{{item.desc}}</p>
             <p>{{item.price}}</p>
             <p>×{{item.count}}</p>
           </span>
        </li>
      </ul>
    </srcoll>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import srcoll from '../../../components/common/srcoll/srcoll.vue'
export default {
  data() {
    return {
      // isChecked:true
    }
  },
  components: { srcoll },
  name:'catagoyitem',
  computed:{
      ...mapGetters([`cartList`])
  }
}
</script>

<style scoped>
.catagory-item ul {
  width: 100%;
}
.catagory-item ul>li {
  list-style: none;
  height: 110px;
  line-height: 110px;
}
.catagory-item {
  height: calc(100% - 44px - 45px - 40px);
  /* background-color: red; */
}
.catagory-item ul li img {
  width: 80px;
  height: 100px;
  vertical-align:middle;
}
.catagory-item ul li {
  position: relative;
}
.contnet {
  height:100%;
  overflow: hidden;
}
span p:nth-child(3),
p:nth-child(4){
  color: black;
  position: absolute;
  left: 30%;
  top: 20px;
  width: 60%;
  height: 20px;
  line-height: 20px;
  /* background-color: blue; */
  overflow:hidden;
	text-overflow:ellipsis;
	white-space:nowrap
}
p:nth-child(4) {
  top: 70px;
}
p:nth-child(5) {
  width: 50px;
  line-height: 20px;
   height: 20px;
  position: absolute;
  left: 100px;
  bottom: 0px;
  /* background-color: blue; */
}
p:nth-child(6) {
  width: 40px;
  line-height: 20px;
  height: 20px;
  position: absolute;
  right: 0;
  bottom: 0;
  /* background-color: blue; */
}
</style>
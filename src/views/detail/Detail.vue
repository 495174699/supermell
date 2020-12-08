<template>
  <div id="detail">
   <detail-item>

   </detail-item>
  </div>
</template>

<script>
// import NavBar from '../../components/common/navbar/NavBar'
import DetailItem from './childcomponents/DetailItem'


export default {
    name:'detail',
    data() {
      return {
         iid:null
      }
    },
    components: {
      DetailItem
    },
   created() {
      console.log(11);
      // this.$route.params用于拿我们动态添加的参数
     this.iid =  this.$route.params.iid
    }
}
</script>

<style>

</style>
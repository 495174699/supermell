<template>
  <div class="tab-cnotrol">
      <div v-for="(item,index) in title" class="tab-control-item" :class="{active:index == count}" @click="itemclick(index)">
          <span>
              {{item}}
          </span>
      </div>
  </div>
</template>

<script>
export default {
    name:'tabcontrol',
    props:{
        title: {
            type:Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            count:0
        }
    },
    methods:{
        itemclick(index) {
            this.count = index
        }
    }
}
</script>

<style>
.tab-cnotrol {
    display: flex;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    text-align: center;
}
.tab-control-item {
    flex: 1;
}
.tab-control-item span {
    padding: 5px;
}
.active {
    color: red;
   
}
.active span {
     border-bottom: 2px solid red;
}
</style>
<template>
   <div class="nav-bar">
       <div class="left">
           <slot name='left'></slot>
        </div>
       <div class="center">
           <slot name='center'></slot>
        </div>
       <div class="right">
           <slot name='right'></slot>
        </div>
   </div>
</template>

<script>
export default {
    name:'navbar'
}
</script>

<style scoped>
    .nav-bar{
        display: flex;
        height: 44px;
        line-height: 44px;
        text-align: center;
    }
    .left,
    .right {
        width: 60px;
        /* height: 60px; */
        /* background: red; */
    }
    .center {
        flex: 1;
        text-align: center;
        /* background:blue; */
    }
</style>
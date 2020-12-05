<template>
   <div id="tab-bar">
     <slot>

     </slot>
    </div>
</template>

<script>
export default {
    name:'tabbar'
}
</script>

<style>

#tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0px;
    box-shadow: 0 -1px 1px #ccc;
}
</style>
<template>
    <div class="goods">
        <goods-list-item v-for='item in goods' :goodsitem="item">
            {{item}}
        </goods-list-item>  
        <!-- {{goods}} -->
    </div>
</template>

<script>
import GoodsListItem from '../goods/GoodListItem'
import GoodListItem from './GoodListItem.vue'
export default {
    name:'goodslist',
    props:{
        goods:{
            type:Array,
            default() {
                return []
            }
        }
    },
    components: {
        GoodsListItem
    }
}
</script>

<style>
 .goods {
     display: flex;
    
     flex-wrap: wrap;
     justify-content: space-around;
 }

</style>
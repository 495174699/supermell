<template>
    <div class="recommond">
        <div v-for='item in recommond' class="recommond-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:'recommond',
    props :{
        recommond:{
            type:Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style>
    .recommond {
        width: 320px;
        display: flex;
        padding: 10px 0 20px;
        border-bottom: 10px solid #ccc;
    }
    .recommond-item {
        flex: 1;
        text-align: center;
        font-size: 12px;
    }
    .recommond-item img {
        width:60px;
        height: 60px;
        margin-bottom: 5px;
        
    }
</style>
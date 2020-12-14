<template>
    <div id="detial-nav-bar">
        <div class="box">
            <div>
                <i class="serve icon"> </i>
                <span>客服</span>
            </div>
            <div>
                 <i class="shop icon"></i>
                <span>店铺</span>
            </div>
            <div >
                <i class="star icon" @click='starclick'></i>
                <span>收藏</span>
            </div>
            <div>
               
                <span @click="addToCart">加入购物车</span>
            </div>
             <div>
              
                <span>购买</span>
            </div>
        </div>  
    </div>
</template>

<script>
export default {
    name:'datialnavbar',
    data() {
        return {
            flag:false
        }
    },
    methods: {
        // 节流阀 两种效果互换效果
        starclick() {
            if(!this.flag) {
                document.querySelector('.star').style.backgroundPositionY =123 +'px'
                this.flag = true
            }
            else
            {
                  document.querySelector('.star').style.backgroundPositionY =0 +'px'
                  this.flag = false
            }
        },
        addToCart () {
           this.$emit('addcart')
        }
    }
}
</script>

<style scoped>
div {
    margin: 0;padding: 0;
}
    .box {
        position: fixed;
        text-align: center;
        /* line-height: 45px; */
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 50px;
        /* background-color:red; */
        border: 1px solid #ccc;
        background-color: #fff;
        z-index: 20;
        display: flex;
    }
    .box div:nth-child(1),
    .box div:nth-child(2),
    .box div:nth-child(3) {
        width: 16%;
    }
     .box div:nth-child(4) {
        background-color: yellow;
        width: 30%;
        line-height: 45px;

    }
    .box div:nth-child(5) {
        background-color: pink;
        width: 22%; line-height: 45px;
    }
    .icon {
        display: block;
        width: 22px;
        height: 22px;
        margin: 0 auto 10px;
        background: url("../../../assets/img/detail/detail_bottom.png") 0 0/100%;
    }
    .serve {
        background-position: 0 98px;
    }
    .shop {
        background-position: 0 52px;
    }
    .star {
        background-position: 0 0;
    }
</style>
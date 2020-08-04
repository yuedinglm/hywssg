<template>
    <van-notice-bar  :scrollable="false">
    <van-swipe
        vertical
        class="notice-swipe"
        :autoplay="3000"
        :show-indicators="false"
    >
        <van-swipe-item>
            <div class="box">
                <img src="../../assets/img/b_laba_03.png" alt="">
                <span>爆款</span>
                <span>开局一级豺狼人，一路狂飙杀遍全服 !</span>
            </div>
        </van-swipe-item>
        <van-swipe-item>
            <div class="box">
                <img src="../../assets/img/b_laba_03.png" alt="">
                <span>重磅</span>
                <span>荣耀归来，手刃仇敌，夺回失去的一切!</span>
            </div>
        </van-swipe-item>
        <van-swipe-item>
            <div class="box">
                <img src="../../assets/img/b_laba_03.png" alt="">
                <span>爆款</span>
                <span> 他身抗铜棺，立于九山之巅!</span>
            </div>
        </van-swipe-item>
    </van-swipe>
    </van-notice-bar>
</template>

<script>
import Vue from 'vue';
import { NoticeBar } from 'vant';
Vue.use(NoticeBar);
export default {
    name:"BookStoreSxd1"
}
</script>

<style scoped>
    .notice-swipe {
        height: 65px;
        line-height: 65px;
    }
    .van-notice-bar{
        border-top: 3px solid #f8f8f8;
        border-bottom: .16rem solid #f8f8f8;
        height: 65px;
        background-color: #fff;
    }
    .box{
        width: 100%;
        height: 65px;
        display: flex;
        align-items: center;
    }
    .box img{
        width: 45px;
        height: 65px;
    }
    .box span:nth-of-type(1){
        width: 53px;
        height: 24px;
        line-height: 24px;
        font-size: 12px;
        text-align: center;
        border-radius: 5px;
        color: #fff;
        background-color: #f87839;
        margin-right: 20px;
    }
    .box span:nth-of-type(2){
        color: #000;
    }
</style>
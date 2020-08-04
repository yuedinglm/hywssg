<template>
  <div class="box">
    <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(img,index) in imgs" :key="index">
            <img :src="'/static/'+ img" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
export default {
    name:"BookStoreBanner",
    data:function(){
        return {
            imgs:["img/listenBanner1.png","img/listenBanner2.png","img/listenBanner.png","img/listenBanner4.png"],
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination',

                },
                // direction: 'vertical',
                loop:true,
                autoplay: {
                    delay: 2000,//1秒切换一次
                },
                initialSlide: 0,
                effect: "fade",
            }
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper
        }
        },
        mounted() {
        // console.log('Current Swiper instance object', this.swiper)
        this.swiper.slideTo(1, 1000, false)
    },
    components: {
        Swiper,
        SwiperSlide
    },
    directives: {
        swiper: directive
    }
}
</script>

<style scoped>
.box{
    /* margin-top: 0.9rem; */
    padding: 0 .2rem;
    width: 100%;
    height: 2.42rem;
    margin-bottom: 0.2rem;
}
.box img{
    width: 100%;
    height: 100%;
}
.swiper-pagination{
    text-align: right;
}
/* :root {
  --swiper-theme-color: #fff;
} */
</style>
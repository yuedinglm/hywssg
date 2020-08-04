<template>
  <div id="topBox">
      <span class="topBox_back">
     <router-link to="/" tag="span">
       <img src="../assets/img/b-d-back_03.png" class="b-d">
     </router-link>

        </i>
        </span>
    <p>
        <span><i class="el-icon-star-off" style="font-size: 0.44rem;" v-show="show" @click="changeShow"></i></span>
        <span><i class="el-icon-star-on" v-show="isShow" @click="changeShow"></i></span>
        <span>
            <i class="el-icon-share" @click="showShare = true"></i>
            <van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" @select="onSelect"/>
        </span>
    </p>
  </div>
</template>

<script>
import { Toast } from 'vant';

export default {

name:"DetailsTop",
data(){     //记住data是一个函数！！！！
   return {
       isShow:false,
       show:true,

       showShare: false,
        options: [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
      ],

   }
},
methods:{
    changeShow(){
        this.isShow=!this.isShow,
        this.show=!this.show
    },
    // 分享按钮：
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },

    // 返回上一页
    backpro(){
    }
}

}
</script>

<style scoped>
#topBox{
    width:100%;
    height: 1rem;
    background-color: #fff;
    box-sizing: border-box;
    padding:0.38rem  0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 10;

}
#topBox .topBox_back{
    display: block;
    width: 0.36rem;
    height: 0.48rem;
    /* background-color: blue; */
    float: left;

}
#topBox p{
    width: 1.5rem;
    height: 0.48rem;
    /* background-color: rgb(204, 141, 58); */
    display: flex;
    justify-content: space-between;
    align-items: center;
    float: right;
}
i{
    font-weight: bold;
    font-size: 0.52rem;
}
.el-icon-star-on{
    position: absolute;
    top: 0.22rem;
    right: 1.2rem;
}
.el-icon-star-off{
    position: absolute;
    top: 0.26rem;
    right: 1.22rem;
}
.b-d{
  width: .2rem;
  height: .4rem;
}

</style>

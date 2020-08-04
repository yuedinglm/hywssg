<template>
  <div class="bgc">
    <div class="search">
      <div class="search-background"></div>
      <div class="search-content">
        <img src="../assets/img/Vip-search.png">
        <p>书名/作者/关键字</p>
      </div>
    </div>
    <div class="banner">
      <VipBanner />
    </div>
    <router-link to="/MyMembers" tag="span">
      <div class="member">
        <div class="member-top">
          <div class="member-top-left">
            <img src="../assets/img/Vip-viphead.png" class="img">
            <div class="MTL-text">
              <span class="phone">书友***********</span>
              <span>开通会员万本小说免费读</span>
            </div>
          </div>
          <div class="member-top-right">
            <p>10元开通</p>
          </div>
        </div>
        <div class="member-bottom">
          <div>
            <img src="../assets/img/Vip-free.png">
            <p>万本免费</p>
          </div>
          <div>
            <img src="../assets/img/Vip-sale.png">
            <p>8折购买</p>
          </div>
          <div>
            <img src="../assets/img/Vip-gift.png">
            <p>定制礼包</p>
          </div>
          <div>
            <img src="../assets/img/Vip-more.png">
            <p>更多特权</p>
          </div>
        </div>
      </div>
    </router-link>
    <StackRoom title="会员书库" style="background-color: #fff;" />
    <div class="exclusive">
      <div class="Ex-tit">
        <img src="../assets/img/Vip-V.png">
        <p>会员专属活动</p>
      </div>
      <div class="Ex-img">
        <img src="../assets/img/Vip-V1.png">
        <img src="../assets/img/Vip-V2.png">
      </div>
    </div>
    <GirlRecommend title="女频·主编力推" url="http://123.56.54.23:8000/main/vip/1/" style="background-color: #fff;" />
    <BoyRecommend title="男频·主编推荐" url="http://123.56.54.23:8000/main/vip/2/" style="background-color: #fff;" />
    <CountDown title="会员专享限免" url="http://123.56.54.23:8000/main/vip/3/" style="background-color: #fff;" />
    <Recommend title="畅销出版" url="http://123.56.54.23:8000/main/vip/4/" style="background-color: #fff;" />
    <Recommend title="优选轻小说" url="http://123.56.54.23:8000/main/vip/5/" style="background-color: #fff;" />
    <Recommend title="爆款漫画" url="http://123.56.54.23:8000/main/vip/6/" style="background-color: #fff;" />
    <BoyRecommend title="完结精品" url="http://123.56.54.23:8000/main/vip/7/" style="background-color: #fff;" />
    <BoyRecommends title="猜你喜欢" url="http://123.56.54.23:8000/main/selects/8/" style="background-color: #fff;" />
    <BottomNav/>
  </div>
</template>

<script>
  import VipBanner from "../components/vip/VipBanner";
  import StackRoom from "../components/vip/StackRoom";
  import GirlRecommend from "../components/vip/GirlRecommend";
  import BoyRecommend from "../components/vip/BoyRecommend";
  import BoyRecommends from "../components/vip/BoyRecommends";
  import Recommend from "../components/vip/Recommend";
  import CountDown from "../components/vip/CountDown";
  import BottomNav from "../components/BottomNav";


  export default {
    name: "Vip",
    components: {
      VipBanner,
      StackRoom,
      GirlRecommend,
      BoyRecommend,
      Recommend,
      BoyRecommends,
      CountDown,
      BottomNav
    },
    methods: {

    },
    mounted: function() {
      window.onscroll = function() {
        let scrollT = document.documentElement.scrollTop;
        // console.log(scrollT);
        // top-distance
        let td = scrollT / 100;
        let oSearch = document.getElementsByClassName("search")[0];
        if (oSearch) {
          oSearch.style.height = '1rem';
          oSearch.style.backgroundColor = 'rgba(255, 255, 255,' + td + ')';
        }
      }
    },
    created: function() {
      this.$nextTick(function() {
        let Img = document.querySelector(".img");
        let phone = document.querySelector(".phone");
        if (sessionStorage.getItem("phonenum")) {
          for (var i = 0; i < sessionStorage.getItem("phonenum").length; i++) {
            var Newstr = sessionStorage.getItem("phonenum").replace(sessionStorage.getItem("phonenum").substring(
              3, 7), "****")
          }
          // console.log(Newstr);
          phone.innerHTML = Newstr;
          Img.src = "/static/img/Vip-viphead.png"
        }else {
          Img.src = "/static/img/My-head-portrait.png"
        }
      })
    }
  }
</script>

<style scoped>
  .bgc {
    width: 100%;
    height: 100%;
    background-color: #F8F8F8;
    padding-bottom: 1.16rem;
  }

  .search {
    width: 100%;
    height: .81rem;
    position: relative;
    z-index: 2;
    background-color: rgba(255, 255, 255, 0);
    position: fixed;
    top: 0;

  }

  .search-background {
    width: 6.63rem;
    height: .62rem;
    border-radius: .4rem;
    background-color: gray;
    opacity: .3;
    display: inline-block;
    margin: .19rem .43rem 0;
  }

  .search-content {
    position: absolute;
    top: .32rem;
    left: 2.5rem;
    display: flex;
    opacity: .8;
  }

  .search-content img {
    width: .22rem;
    height: .22rem;
    margin-top: .05rem;
    margin-right: .26rem;
  }

  .search-content p {
    font-size: .26rem;
    color: #fff;
  }

  .banner {
    width: 7.5rem;
    height: 3.66rem;
    background-color: peru;
    position: relative;
    top: -.81rem;
  }

  .member {
    width: 7rem;
    height: 2.92rem;
    background-color: #fff;
    position: relative;
    top: -1.2rem;
    z-index: 1;
    margin: 0 auto;
    border-radius: 16px;
    padding: .25rem;
    box-shadow: 0 5px 20px 0 #F6F6F6;
  }

  .member-top {
    width: 100%;
    height: 1.17rem;
    display: flex;
  }

  .member-top-left {
    width: 4.8rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  .member-top-left img {
    width: .84rem;
    height: .84rem;
    border-radius: 50%;
    display: inline-block;
  }

  .MTL-text {
    width: 3.76rem;
    display: flex;
    flex-wrap: wrap;
  }

  .MTL-text span:nth-child(1) {
    font-size: .32rem;
    line-height: .32rem;
    color: #000;
    margin-top: .07rem;
  }

  .MTL-text span:nth-child(2) {
    font-size: .24rem;
    color: #ACABBB;
    margin-top: -.3rem;
  }

  .member-top-right {
    width: 1.7rem;
    height: 100%;
  }

  .member-top-right p {
    width: 100%;
    height: .84rem;
    background-color: #DBB594;
    border-radius: 30px;
    text-align: center;
    line-height: .84rem;
    font-size: .26rem;
    color: #fff;
    margin-top: .08rem;
  }

  .member-bottom {
    width: 6.5rem;
    height: 1.25rem;
    display: flex;
    justify-content: space-around;
  }

  .member-bottom img {
    width: .84rem;
    height: .84rem;
    border-radius: 50%;
  }

  .member-bottom p {
    font-size: .24rem;
    color: #000;
    text-align: center;
  }

  .exclusive {
    width: 100%;
    height: 2.96rem;
    background-color: #fff;
    margin-top: .17rem;
  }

  .Ex-tit {
    width: 6.7rem;
    margin: 0 .4rem;
  }

  .Ex-tit img {
    width: .3rem;
    height: .3rem;
    display: inline-block;
  }

  .Ex-tit p {
    font-size: .32rem;
    color: #000;
    padding-left: .16rem;
    padding-top: .28rem;
    padding-bottom: .47rem;
    display: inline-block;
  }

  .Ex-img {
    width: 6.7rem;
    margin: 0 .4rem;
    display: flex;
    justify-content: space-between;
  }

  .Ex-img img {
    width: 3.29rem;
    height: 1.57rem;
    border-radius: .2rem;
  }

  .RankingList {
    width: 100%;
    height: 9.98rem;
    background-color: aqua;
    margin-top: .2rem;
  }
</style>

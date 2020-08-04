<template>
  <div class="My-background">
    <div class="My-top-Set">
      <img src="../assets/img/My-moon.png" />
      <router-link to="/LoginOut" tag="span">
      <img src="../assets/img/My-set.png" />
      </router-link>
    </div>
    <div class="LogReg">
      <img src="" class="img" />
      <router-link to="Login" tag="span">
        <h2 class="phone">登录/注册</h2>
      </router-link>
    </div>
    <div class="assets">
      <div>
        <span>0</span>
        <p>书豆</p>
      </div>
      <div>
        <span>0</span>
        <p>豆卷</p>
      </div>
      <div>
        <span>0</span>
        <p>章节卷</p>
      </div>
      <div>
        <span>0</span>
        <p>月票</p>
      </div>
    </div>
    <div class="Vip">
      <img src="../assets/img/My-Vip-img.png" />
    </div>
    <div class="Recharge">
      <div class="Recharge-top">
        <div class="Recharge-top-l">
          <p>今日充值赠返</p>
          <p>充值赠好礼</p>
        </div>
        <div class="Recharge-top-r">
          <p>充值</p>
        </div>
      </div>
      <div class="Recharge-bottom">
        <span>消费记录</span>|
        <span>充值记录</span>|
        <span>打赏记录</span>
      </div>
    </div>
    <div class="notice">
      <div>
        <img src="../assets/img/My-notice-news.png" />
        <span>消息</span>
      </div>
      <div>
        <img src="../assets/img/My-notice-collection.png" />
        <span>收藏</span>
      </div>
      <div>
        <img src="../assets/img/My-notice-collection.png" />
        <span>书评</span>
      </div>
      <div>
        <img src="../assets/img/My-notice-experience.png" />
        <span>阅历</span>
      </div>
    </div>
    <div class="activity">
      <ul>
        <li>
          <span>我要写作</span>
          <img src="../assets/img/My-Right-arrow.png" />
        </li>
        <li>
          <span>书旗小游戏,干款游戏即点即玩</span>
          <img src="../assets/img/My-Right-arrow.png" />
        </li>
        <li>
          <span>绑兑换码</span>
          <img src="../assets/img/My-Right-arrow.png" />
        </li>
        <li>
          <span>阅读喜好</span>
          <img src="../assets/img/My-Right-arrow.png" />
        </li>
        <li>
          <span>意见反馈</span>
          <img src="../assets/img/My-Right-arrow.png" />
        </li>
        <li>
          <span>礼品中心</span>
          <img src="../assets/img/My-Right-arrow.png" />
        </li>
        <li>
          <span>公益3小时</span>
          <img src="../assets/img/My-Right-arrow.png" />
        </li>
      </ul>
    </div>
    <BottomNav />
  </div>
</template>

<script>
  import BottomNav from "../components/BottomNav";
  export default {
    name: "My",
    components: {
      BottomNav
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
        } else {
          Img.src = "/static/img/My-head-portrait.png"
        }
      })
    }
  }
</script>

<style scoped>
  .My-background {
    background-color: #f8f8f8;
    padding-bottom: 1.16rem;
  }

  .My-top-Set {
    width: 100%;
    height: 0.9rem;
    display: flex;
    justify-content: flex-end;
  }

  .My-top-Set img {
    width: 0.38rem;
    height: 0.38rem;
    padding: 0.26rem;
    box-sizing: content-box;
  }

  .LogReg {
    display: flex;
    width: 100%;
    height: 1.16rem;
  }

  .LogReg img {
    width: 1.16rem;
    height: 1.16rem;
    box-sizing: border-box;
    border: 0.04rem solid #fff;
    border-radius: 50%;
    margin: 0 0.2rem;
  }

  .LogReg h2 {
    font-size: 0.4rem;
    line-height: 1.16rem;
    margin-left: 0.1rem;
  }

  .assets {
    width: 100%;
    height: 1.44rem;
    display: flex;
    justify-content: space-around;
  }

  .assets div {
    text-align: center;
  }

  .assets div span {
    font-size: 0.3rem;
    color: #5e5d62;
    padding: 0.4rem 0 0.14rem;
    display: block;
  }

  .assets div p {
    font-size: 0.18rem;
    color: #b2b6b9;
  }

  .Vip {
    width: 100%;
    height: 0.94rem;
    text-align: center;
  }

  .Vip img {
    width: 7.06rem;
    height: 0.94rem;
    border-radius: 16px;
    display: inline;
  }

  .Recharge {
    width: 7.06rem;
    height: 2.18rem;
    margin: 0.22rem auto 0;
    border-radius: 16px;
    background-color: #fff;
  }

  .Recharge-top {
    width: 100%;
    display: flex;
  }

  .Recharge-top-l {
    width: 5.25rem;
    height: 1.48rem;
  }

  .Recharge-top-l p:nth-child(1) {
    font-size: 0.3rem;
    font-weight: 500;
    color: #000;
    padding-top: 0.4rem;
    padding-left: 0.32rem;
  }

  .Recharge-top-l p:nth-child(2) {
    font-size: 0.24rem;
    color: #e0b590;
    padding-top: 0.12rem;
    padding-left: 0.32rem;
  }

  .Recharge-top-r {
    width: 1.81rem;
    height: 1.48rem;
  }

  .Recharge-top-r p {
    width: 1.36rem;
    height: 0.6rem;
    background-color: #29b88d;
    font-size: 0.24rem;
    line-height: 0.6rem;
    color: #fff;
    text-align: center;
    border-radius: 50px;
    margin: 0.44rem 0.22rem;
  }

  .Recharge-bottom {
    width: 100%;
    height: 0.28rem;
    display: flex;
    justify-content: space-around;
  }

  .notice {
    width: 7.06rem;
    height: 1.64rem;
    margin: 0.22rem auto 0;
    border-radius: 16px;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
  }

  .notice div {
    width: 0.5rem;
    text-align: center;
  }

  .notice img {
    width: 100%;
    margin: 0.36rem 0 0.16rem;
  }

  .notice span {
    font-size: 0.22rem;
    color: #aeb2b5;
  }

  .activity {
    width: 7.06rem;
    height: 6.9rem;
    margin: 0.22rem auto 0.3rem;
    border-radius: 16px;
    background-color: #fff;
    padding: 0.2rem 0 0.2rem 0.31rem;
    box-sizing: border-box;
  }

  .activity li {
    height: 0.92rem;
    list-style: none;
    display: flex;
    justify-content: space-between;
  }

  .activity li span {
    font-size: 0.28rem;
    line-height: 0.92rem;
  }

  .activity li img {
    width: 0.3rem;
    height: 0.3rem;
    margin: 0.31rem;
  }
</style>

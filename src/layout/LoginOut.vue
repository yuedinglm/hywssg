<template>
  <div class="login-out">
    <h3>
      <router-link to="/My" tag="li">
      <img src="../assets/img/b-d-back_03.png" class="back" />
      </router-link>
      <span>我的账号</span>
      <span>保存</span>
    </h3>
    <div class="center">
      <div class="list">
        <span class="left">头像</span>
        <span class="bookmen">
          <img src alt class="img"/><img src="../assets/img/b-loginout_03.png" alt class="img2" />
        </span>
      </div>
      <div class="list">
        <span class="left">昵称</span>
        <span class="right1 bookmen">
          <span>书友</span> 
          <span class="right1 hm phone">1781476162</span>
          <img src="../assets/img/b-loginout_03.png" alt />
        </span>
      </div>
      <div class="list">
        <span class="left">性别</span>
        <span class="bookmen">
          <input type="text" v-model="sex" class="right1 hm sex" disabled/>
          <img src="../assets/img/b-loginout_03.png" alt />
        </span>
      </div>
      <div class="list">
        <span class="left">ID</span>
        <input type="text" placeholder="反馈时可提供，点击复制" disabled/>
        <span class="right1 hm">1781476162</span>
      </div>
      <p class="log">
        <!-- <span class="next next2">登录</span> -->
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginOut",
  data() {
    return {
      sex:"女"
    };
  },
  created: function() {
    this.$nextTick(function() {
      let that = this;
      let Img = document.querySelector(".img");
      let phone = document.querySelector(".phone");
      let log = document.querySelector(".log");
      if (sessionStorage.getItem("phonenum")) {
        for (var i = 0; i < sessionStorage.getItem("phonenum").length; i++) {
          var Newstr = sessionStorage.getItem("phonenum").replace(sessionStorage.getItem("phonenum").substring(
            3, 7), "****")
        }
        // console.log(Newstr);
        phone.innerHTML = Newstr;
        log.innerHTML = "退出登录";
        log.onclick = function(){
          sessionStorage.removeItem("phonenum");
          that.$router.push({name:"Login"});
        }
        Img.src = "/static/img/Vip-viphead.png"
      } else {
        Img.src = "/static/img/My-head-portrait.png"
            log.innerHTML = `<span class="next next2" style="display: block;
                              width: 100%;
                              height: 0.8rem;
                              background-color: #22b281;
                              border: 2px solid #c6e2d8;
                              border-radius: 8px;
                              text-align: center;
                              line-height: 0.8rem;
                              color: #fff;">登录</span>`;
          log.onclick = function(){
          // sessionStorage.removeItem("phonenum");
          that.$router.push({name:"Login"});
        }
      }
    })
  },
  methods: {
  },
};
</script>

<style scoped>
.login-out {
  background-color: #c1c1c1;
}
h3 {
  background-color: #fff;
  padding: 0.28rem 0 0.91rem 0.35rem;
  display: flex;
  justify-content: start;
}
h3 img {
  width: 0.2rem;
  height: 0.4rem;
  margin-right: 2.86rem;
}
h3 span:nth-of-type(1) {
  font-size: 0.32rem;
  margin-right: 1.8rem;
}
h3 span:nth-of-type(2) {
  font-size: 0.32rem;
  color: #c9c9c9;
}
.center {
  background-color: #fff;
  /* padding: 0 0.53rem; */
}
.center .list {
  width: 100%;
  height: 0.92rem;
  border-bottom: 1px solid #f0f0f2;
  /* padding-top: 0.4rem; */
  padding: 0 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.log {
  padding: 0.2rem 0.3rem 0.2rem;
  text-align: center;
  line-height: .8rem;
}
.next {
  display: block;
  width: 100%;
  height: 0.8rem;
  background-color: #22b281;
  border: 2px solid #c6e2d8;
  border-radius: 8px;
  text-align: center;
  line-height: 0.8rem;
  color: #fff;
}
.left {
  font-size: 0.28rem;
  color: #9496a4;
}
.right1 {
  font-size: 0.28rem;
  color: #9496a4;
}
.bookmen{
  color: #000;
  display: flex;
  align-items: center;
}
.hm{
  font-size: .28rem;
  color: #000;
  margin-right: .3rem;
}
.sex{
  width: 0.3rem;
}
input {
  border: none;
  background-color: #fff;
}
img {
  width: 0.2rem;
  height: 0.4rem;
}
.img{
  width: .62rem;
  height: .62rem;
  margin-right: .2rem;
}
</style>
<template>
  <div>
    <h3>
      <router-link to="/Login" tag="span">
        <img src="../assets/img/b-d-back_03.png" @click="back" />
      </router-link>
      <span>手机号注册</span>
    </h3>
    <div class="center">
      <div class="list">
        <span class="left">手机号</span>
        <input type="text" placeholder="手机号" maxlength="11" class="txt first phoneNum" v-model="phoneNum" />
      </div>
      <div class="list">
        <span class="left">验证码</span>
        <input type="text" placeholder="输入验证码" class="txt" v-model="yanzhengma" />
        <div class="inputsec">
          <div class="right pass" @click="catchTime" v-show="timimg">获取验证码</div>
          <div class="right Time" v-show="timimg==false">{{times}}s后重发</div>
        </div>
      </div>
      <span class="waring"></span>
      <!-- <router-link to="/PasswordSet" tag="span"> -->
      <p class="next" @click="phone">下一步</p>
      <!-- </router-link> -->
      <div class="protocol">
        <div class="checked">
          <img src="../assets/img/b-d-checked_03.png" v-show="!show" @click="changeImg" />
          <img src="../assets/img/b-d-checked2_03.png" v-show="show" @click="changeImg" />
        </div>
        <p>
          同意
          <b>《用户协议》</b>
          及
          <b>《隐私协议》</b>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "Register",
    data() {
      return {
        show: false,
        phoneNum: "",
        yanzhengma: "",
        timimg: true,
        times: 60,
      };
    },
    methods: {
      changeImg() {
        this.show = !this.show;
        let next = document.querySelector(".next");
        if (this.show) {
          next.style.opacity = 1;
        } else {
          next.style.opacity = 0.5;
        }
      },
      phone() {
        let waring1 = document.querySelector(".waring");
        let phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;

        if (this.yanzhengma == "") {
          waring1.innerHTML = "请输入验证码";
        } else if (!this.show) {
          waring1.innerHTML = "请勾选用户协议和隐私协议";
        } else {
          waring1.innerHTML = "";

          let data = new URLSearchParams();
          data.append("phone", this.phoneNum);
          data.append("code", this.yanzhengma);
          axios({
            url: "http://123.56.54.23:8000/user/usr/registercode/",
            method: "post",
            // data:'username=jzm&userpass=123'
            data: data,
          }).then((res) => {
            // console.log(res.data.code)
            if (res.data.code == "1") {
          // 注册成功跳转后把手机号存在sessionStaroge里边
          sessionStorage.phonenum = this.phoneNum;
          this.$router.push({ name: "PasswordSet" });

            } else if(res.data.code == "2"){
              waring1.innerHTML = "您已经注册过，请登录";
            }else{
              waring1.innerHTML = "验证码不正确";
            }
          });

        }
      },
      catchTime() {
        this.timimg = false;
        this.time();
        let waring1 = document.querySelector(".waring");
        let phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (this.phoneNum == "") {
          waring1.innerHTML = "请正确填入手机号码";
        } else if (!phoneReg.test(this.phoneNum)) {
          waring1.innerHTML = "手机号输入错误";
        } else {
          let data = new URLSearchParams();
            data.append("phone", this.phoneNum);
            axios({
              url: "http://123.56.54.23:8000/user/usr/",
              method: "post",
              // data:'username=jzm&userpass=123'
              data: data,
            }).then((res) => {
                console.log(res)
          });
        }
      },
      back() {
        this.times = 60;
        this.timimg = true;
        let waring1 = document.querySelector(".waring");
        waring1.innerHTML = "";
      },
      time() {
        let timer = setInterval(() => {
          this.times--;
          if (this.times < 0) {
            clearInterval(timer);
            this.times = 60;
            this.timimg = true;
          }
        }, 1000);
      },
    },
    created: function() {
      this.$nextTick(function() {
        this.back();
        let passBtn = document.querySelector(".pass");
            passBtn.onlick = function(){
            this.catchTime();
        }
        let next = document.querySelector(".next");
        next.onlick = function(){
             this.phone();
        }
      });
    },
  };
</script>

<style scoped>
  h3 {
    padding: 0.28rem 0 0.67rem 0.35rem;
    display: flex;
    justify-content: start;
  }

  h3 img {
    width: 0.2rem;
    height: 0.4rem;
    margin-right: 2.27rem;
  }

  h3 span {
    font-size: 0.32rem;
  }

  .center {
    padding: 0 0.53rem;
  }

  .center .list {
    width: 100%;
    height: 0.9rem;
    border-bottom: 1px solid #c9c9c9;
    padding-top: 0.4rem;
    display: flex;
    align-items: center;
  }

  .center div:nth-child(2) {
    position: relative;
    /* margin-bottom: .84rem; */
  }

  .center .list .left {
    font-size: 0.28rem;
    margin-right: 0.28rem;
  }

  ::-webkit-input-placeholder {
    /* WebKit browsers */
    color: #c1c1c1;
    font-size: 0.28rem;
  }

  .waring {
    display: block;
    color: red;
    width: 100%;
    height: 0.84rem;
  }

  .Time {
    margin-left: 0.65rem;
  }

  .txt {
    border: none;
  }

  .right {
    position: absolute;
    right: 0;
    bottom: 0.06rem;
    width: 1.56rem;
    height: 0.56rem;
    background-color: #22b281;
    color: #fff;
    text-align: center;
    line-height: 0.56rem;
    border-radius: 5px;
  }

  .next {
    width: 100%;
    height: 0.8rem;
    background-color: #22b281;
    border: 2px solid #c6e2d8;
    border-radius: 8px;
    text-align: center;
    line-height: 0.8rem;
    /* color: #22b281; */
    color: #fff;
    position: relative;
    opacity: 0.5;
    margin-bottom: 0.43rem;
  }

  .protocol {
    width: 100%;
    height: 0.34rem;
    display: flex;
  }

  .checked {
    width: 0.34rem;
    height: 0.34rem;
    margin-right: 0.25rem;
  }

  .checked img {
    width: 0.34rem;
    height: 0.34rem;
  }

  .protocol p {
    padding-top: 0.08rem;
    font-size: 0.2rem;
    color: #c1c1c1;
  }

  .protocol p b {
    color: #22b281;
  }
</style>

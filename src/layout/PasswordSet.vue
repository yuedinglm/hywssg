<template>
  <div>
    <h3>
      <router-link to="/Login" tag="span">
        <img src="../assets/img/b-d-back_03.png" @click="back">
      </router-link>
      <span>设置密码</span>
    </h3>
    <div class="center">
      <div class="list">
        <span class="left">密码</span>
        <input type="text" placeholder="设置登录密码" maxlength="16" minlength="8" class="txt first phoneNum" v-model="password">
      </div>
      <span>请输入8-16位字母与数字</span>
      <span class="waring"></span>
      <p class="next" @click="phone">完成注册</p>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "PasswordSet",
    data() {
      return {
        password: ""
      };
    },
    methods: {
      back() {
        this.times = 60;
        this.timimg = true;
        let waring1 = document.querySelector(".waring");
        waring1.innerHTML = "";
      },
      phone() {
        let waring1 = document.querySelector(".waring");
        let phoneReg = /^[a-zA-Z0-9]{8,16}$/;
        if (this.password == "") {
          waring1.innerHTML = "请正确填入密码";
        } else if (!phoneReg.test(this.password)) {
          waring1.innerHTML = "请正确填入密码";
        } else {
          waring1.innerHTML = "";
          let data = new URLSearchParams();
          data.append("phone", sessionStorage.getItem("phonenum"));
          data.append("password", this.password);
          // 验证码：code,手机号：phonenum,密码：password
          axios({
              url: "http://123.56.54.23:8000/user/usr/registerpasswd/",
              method: "post",
              // data:'username=jzm&userpass=123'
              data: data
            })
            .then(res => {
              if (res.data.code == "1") {
                this.$router.push({
                  name: 'My'
                });
              } else {}
            })

        }

      },
    }
  }
</script>

<style scoped>
  h3 {
    padding: .28rem 0 0.67rem 0.35rem;
    display: flex;
    justify-content: start;
  }

  h3 img {
    width: .2rem;
    height: .4rem;
    margin-right: 2.27rem;
  }

  h3 span {
    font-size: .32rem;
  }

  .center {
    padding: 0 0.53rem;
  }

  .center .list {
    width: 100%;
    height: .9rem;
    border-bottom: 1px solid #c9c9c9;
    padding-top: .4rem;
    display: flex;
    align-items: center;
  }

  .center div:nth-child(2) {
    position: relative;
    /* margin-bottom: .84rem; */
  }

  .center .list .left {
    font-size: .28rem;
    margin-right: 0.28rem;
  }

  ::-webkit-input-placeholder {
    /* WebKit browsers */
    color: #c1c1c1;
    font-size: .28rem;
  }

  .waring {
    display: block;
    color: red;
    width: 100%;
    height: 0.84rem;
  }

  .Time {
    margin-left: .65rem;
  }

  .txt {
    border: none;
  }

  .right {
    position: absolute;
    right: 0;
    bottom: 0.06rem;
    width: 1.56rem;
    height: .56rem;
    background-color: #22b281;
    color: #fff;
    text-align: center;
    line-height: .56rem;
    border-radius: 5px;
  }

  .next {
    width: 100%;
    height: .8rem;
    background-color: #22b281;
    border: 2px solid #c6e2d8;
    border-radius: 8px;
    text-align: center;
    line-height: .8rem;
    /* color: #22b281; */
    color: #fff;
    position: relative;
    margin-bottom: .43rem;
  }
</style>

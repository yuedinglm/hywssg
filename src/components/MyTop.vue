<template>

  <div>
      <div class="top">
    <router-link to="/Vip" tag="span">
      <div><i class="el-icon-arrow-left"></i></div>
    </router-link>
        <h2>我的会员</h2>
      </div>

      <div class="top-1">
        <div class="top-1-1">
            <div class="top-1-1-1">
              <img src="" alt="" class="img">
            </div>
        </div>

        <div class="top-1-2">
           <div class="top-1-2-1 phone">
              书友***********
           </div>
           <div class="top-1-2-2">
             开通包月,万本图书免费读
           </div>
        </div>

        <div class="top-1-3">
            开通
        </div>
      </div>

      <HuiTiao/>

      <div class="content">
        <div class="center-img">
            <img src="../assets/img/huang.png" alt="">
        </div>

        <div class="center-txt">
            使用兑换码&nbsp;<span>(凭兑换码兑换)</span>
        </div>

        <div class="center-right">
            <i class="el-icon-arrow-right"></i>
        </div>
      </div>

      <HuiTiao/>

      <div class="nav">
         <ul>
         	<li>
              <img src="../assets/img/hui1.png" alt="">
              <p>包月书库</p>
          </li>
          <li>
              <img src="../assets/img/hui2.png" alt="">
              <p>尊享特权</p>
          </li>
          <li>
              <img src="../assets/img/hui3.png" alt="">
               <p>包月完结</p>
          </li>
         </ul>
      </div>

      <HuiTiao/>

      <Exclusive title="属于你的口味的包月书" url="http://123.56.54.23:8000/main/myvip/1/"/>

      <HuiTiao/>

      <VipMonthlyPackage/>

      <HuiTiao/>

      <MonthlyPackage title="包月推荐" url="http://123.56.54.23:8000/main/myvip/2/"/>

      <HuiTiao/>

      <Works title="大神限免作品" url="http://123.56.54.23:8000/main/myvip/3/"/>

      <HuiTiao/>

      <MaleMonthlyPackage title="男生包月" url="http://123.56.54.23:8000/main/myvip/4/"/>

      <HuiTiao/>

      <FemaleMonthlyPackage title="女生包月" url="http://123.56.54.23:8000/main/myvip/5/"/>

      <HuiTiao/>

      <PublishMonthlyPackage title="出版包月" url="http://123.56.54.23:8000/main/myvip/6/"/>

      <HuiTiao/>

      <Lightfiction title="轻小说包月" url="http://123.56.54.23:8000/main/myvip/7/"/>

      <HuiTiao/>

      <Cartoon title="漫画包月" url="http://123.56.54.23:8000/main/myvip/8/"/>
  </div>
</template>

<script>

 import HuiTiao from "../components/HuiTiao"
 import Exclusive from "../components/Exclusive"
 import VipMonthlyPackage from "../components/VipMonthlyPackage"
 import MonthlyPackage from "../components/MonthlyPackage"
 import Works from "../components/Works"
 import MaleMonthlyPackage from "../components/MaleMonthlyPackage"
 import FemaleMonthlyPackage from "../components/FemaleMonthlyPackage"
 import PublishMonthlyPackage from "../components/PublishMonthlyPackage"
 import Lightfiction from "../components/Lightfiction"
 import Cartoon from "../components/Cartoon"

  export default {
    name:"MyTop",
    components:{
      HuiTiao,
      Exclusive,
      VipMonthlyPackage,
      MonthlyPackage,
      Works,
      MaleMonthlyPackage,
      FemaleMonthlyPackage,
      PublishMonthlyPackage,
      Lightfiction,
      Cartoon
    },
    created:function(){
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
  .top{
      width: 100%;
      height: 1.09rem;
      display: flex;
      position: fixed;
      top: 0;
      background-color: white;
  }
  .top div i{
      font-size: .6rem;
      line-height: 1.09rem;
     margin-left: 0.2rem;
  }
  .top h2{
    width: 100%;
    font-size: 0.4rem;
    font-weight: 100;
    text-align: center;
    line-height: 1.09rem;
    box-sizing: border-box;
    padding-right: 0.8rem;

  }
  .top-1{
    width: 100%;
    height: 1.68rem;
    /* border: 1px solid red; */
    display: flex;
    justify-content:center;
    padding-top: .2rem;
    box-sizing: border-box;
    margin-top: 1.09rem;
  }
  .top-1-1{
    width: 1.26rem;
    height: 1.7rem;


  }
  .top-1-1-1{
    width: 1.26rem;
    height: 1.26rem;
    border-radius: 50%;
    background-color: #dddddd;
  }
  .top-1-2{
    width: 4.22rem;
    height: 1.25rem;
  /*  border: 1px solid red; */
    text-align: center;
  }
  .top-1-2-1{
    font-size: .4rem;
    /* margin-top: .2rem; */
  }
  .top-1-2-2{
    font-size: .3rem;
    margin-top: .2rem;
    color: #dddddd;
  }
  .top-1-3{
    width: 1.37rem;
    height: 0.62rem;
    color: white;
    line-height: .62rem;
    text-align: center;
    margin-top: .5rem;
    background-color: #d7ae90;
  }
  .content{
    width: 100%;
    height: .96rem;
    display: flex;
    justify-content: space-around;
  }

  .center-img{
    width: 0.45rem;
    height: .40rem;
    margin-top: .2rem;
  }
  .center-img img{
    width: 100%;
    height: 100%;
  }
  .center-txt{
    width: 3.7rem;
    height: .96rem;
    /* border: 1px solid  red; */
    line-height: .96rem;
    font-size: .3rem;
  }
  .center-txt span{
    color: #dddddd;
  }
  .center-right{
    width: .50rem;
   /* border: 1px solid red; */
    font-size: .3rem;
    line-height: .96rem;
    margin-left: .2rem;
  }
  .nav{
    width: 100%;
    height: 2.22rem;
  }
  .nav ul{
    display: flex;
    justify-content: space-around;
  }
  .nav ul li{
    width: 1.05rem;
    height: 1.54rem;
    /* border: 1px solid red; */
    margin-top: .3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-size: .25rem;
  }
  .nav ul li img{
    width: 0.87rem;
    height: .87rem;
  }
  .nav ul li p{
    margin-top: .2rem;
  }

</style>

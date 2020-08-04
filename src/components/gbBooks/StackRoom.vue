<template>
  <div class="bgBox">
    <div class="tit">
      <span class="left">
        <img src="../../assets/img/b-girl_list_03.png">
        <p>{{title}}</p>
        <img src="../../assets/img/Vip-newly-added.png">
      </span>
      <span class="right">
        <img src="../../assets/img/Vip-Right-arrow.png">
      </span>
    </div>
    <van-tabs v-model="activeName" animated swipeable color="#CBA984" line-width=".6rem" line-height=".08rem"
      title-active-color="#CBA984" title-inactive-color="#928FA4">
      <van-tab title="言情" name="a">
        <div class="con-more">
          <ul class="Cb-book">
            <li>
              <img src="../../assets/img/Vip-book01.jpg">
              <p>夜少的二婚...</p>
              <span>4万人再看</span>
            </li>
            <li>
              <img src="../../assets/img/Vip-book04.jpg">
              <p>暖婚100分...</p>
              <span>1万人再看</span>
            </li>
            <li>
              <img src="../../assets/img/Vip-book02.jpg">
              <p>一夜索情,...</p>
              <span>3万人再看</span>
            </li>
            <li>
              <img src="../../assets/img/Vip-book03.jpg">
              <p>总统先生,...</p>
              <span>3万人再看</span>
            </li>
          </ul>
          <div class="Cb-more">
            <p>全部言情</p>
          </div>
        </div>
      </van-tab>
      <van-tab title="幻想" name="b">
        <div class="con-more">
          <ul class="Cb-book">
            <li>
              <img src="../../assets/img/Vip-book05.jpg">
              <p>夜少的二婚...</p>
              <span>4万人再看</span>
            </li>
            <li>
              <img src="../../assets/img/Vip-book06.jpg">
              <p>一夜索情,...</p>
              <span>1万人再看</span>
            </li>
            <li>
              <img src="../../assets/img/Vip-book07.jpg">
              <p>暖婚100分...</p>
              <span>2万人再看</span>
            </li>
            <li>
              <img src="../../assets/img/Vip-book08.jpg">
              <p>总统先生,...</p>
              <span>2万人再看</span>
            </li>
          </ul>
          <div class="Cb-more">
            <p>全部幻想</p>
          </div>
        </div>
      </van-tab>
      <van-tab title="穿越" name="c">
        <div class="con-more">
          <ul class="Cb-book">
            <li>
              <img src="../../assets/img/Vip-book09.jpg">
              <p>白夜追凶</p>
              <span>1万人再看</span>
            </li>
            <li>
              <img src="../../assets/img/Vip-book10.jpg">
              <p>愿风载尘</p>
              <span>1万人再看</span>
            </li>
            <li>
              <img src="../../assets/img/Vip-book11.jpg">
              <p>一路繁花相送</p>
              <span>1万人再看</span>
            </li>
            <li>
              <img src="../../assets/img/Vip-book12.jpg">
              <p>可口可乐传</p>
              <span>2万人再看</span>
            </li>
          </ul>
          <div class="Cb-more">
            <p>全部穿越</p>
          </div>
        </div>
      </van-tab>
      <van-tab title="总裁" name="d">
        <div class="con-more">
          <ul class="Cb-book">
            <li>
              <img src="../../assets/img/Vip-book13.jpg">
              <p>活人禁忌</p>
              <span>1万人再看</span>
            </li>
            <li>
              <img src="../../assets/img/Vip-book14.jpg">
              <p>阳间巡逻人</p>
              <span>2万人再看</span>
            </li>
            <li>
              <img src="../../assets/img/Vip-book15.jpg">
              <p>鬼抬棺</p>
              <span>1万人再看</span>
            </li>
            <li>
              <img src="../../assets/img/Vip-book16.jpg">
              <p>阴阳代理人</p>
              <span>2万人再看</span>
            </li>
          </ul>
          <div class="Cb-more">
            <p>全部总裁</p>
          </div>
        </div>
      </van-tab>
      <van-tab title="宫斗" name="d">
        <div class="con-more">
          <ul class="Cb-book">
            <li>
              <img src="../../assets/img/Vip-book13.jpg">
              <p>王的女人谁...</p>
              <span>3万人再看</span>
            </li>
            <li>
              <img src="../../assets/img/Vip-book14.jpg">
              <p>这个王妃路...</p>
              <span>4412人再看</span>
            </li>
            <li>
              <img src="../../assets/img/Vip-book15.jpg">
              <p>天命为凰:...</p>
              <span>4512人再看</span>
            </li>
            <li>
              <img src="../../assets/img/Vip-book16.jpg">
              <p>首辅家的小...</p>
              <span>9万人再看</span>
            </li>
          </ul>
          <div class="Cb-more">
            <p>全部宫斗</p>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <div class="line"></div>
  </div>
</template>

<script>
  import axios from "axios";
  import Vue from 'vue';
  import {Tab,Tabs } from 'vant';

  Vue.use(Tab);
  Vue.use(Tabs);

  export default {
    name: "StackRoom",
    props: ["title"],
    data: function() {
      return {
        books: [],
        activeName: 'a',
        // swipeable: false,
      }
    },
  }
</script>

<style scoped>
  .bgBox {
    width: 100%;
    height: 6.26rem;
  }

  .tit {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    margin-top: .2rem;
    margin-bottom: .25rem;
    padding-top: .2rem;
  }
  .line{
    margin-top: 0.2rem;
    width: 100%;
    height: 0.16rem;
    background-color: #f8f8f8;
  }
  .tit span {
    min-width: 1.62rem;
    height: .33rem;
    line-height: 0.33rem;
    display: flex;
    justify-content: start;
  }

  .tit span p {
    font-size: .32rem;
    color: #28292d;
  }

  .left img:nth-of-type(1) {
    width: 0.08rem;
    height: 0.3rem;
    margin: 0 .22rem 0 .4rem;
  }

  .left img:nth-of-type(2) {
    width: 2.4rem;
    height: 0.44rem;
    margin-top: -.1rem;
  }

  .right img {
    width: .22rem;
    height: 0.28rem;
    margin: 0 .3rem 0 .92rem;
  }

  .right p {
    font-size: .28rem;

  }

  .con-more {
    width: 7rem;
    height: 4rem;
    background-color: #F9F5F2;
    border-radius: 10px;
    margin: 0 auto;
  }

  .Cb-book {
    padding: .24rem;
    padding-bottom: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #efedee;
  }

  .Cb-book li {
    width: 1.38rem;
    height: 2.68rem;
    text-align: center;
    font-size: .24rem;
  }

  .Cb-book li img {
    width: 100%;
    border-radius: 8px;
  }

  .Cb-book li p {
    color: #000;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .Cb-book li span {
    color: #BF9D78;
  }

  .Cb-more p {
    font-size: .28rem;
    text-align: center;
    line-height: .98rem;
  }
</style>

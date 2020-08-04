<template>
  <div class="bgBox">
    <div class="tit">
      <span class="left">
        <img src="../../assets/img/Vip-V.png">
        <p>{{title}}</p>
        <img src="../../assets/img/Vip-newly-added.png">
      </span>
      <span class="right">
        <p>10万本免费</p>
        <img src="../../assets/img/Vip-Right-arrow.png">
      </span>
    </div>
    <van-tabs v-model="activeName" animated swipeable color="#CBA984" line-width=".6rem" line-height=".08rem"
      title-active-color="#CBA984" title-inactive-color="#928FA4">
      <van-tab title="男生" name="a">
        <div class="con-more">
          <ul class="Cb-book">
            <li>
              <img src="../../assets/img/Vip-book01.jpg">
              <p>绝世剑神</p>
              <span>1万人再看</span>
            </li>
            <li>
              <img src="../../assets/img/Vip-book04.jpg">
              <p>修罗武神</p>
              <span>2万人再看</span>
            </li>
            <li>
              <img src="../../assets/img/Vip-book02.jpg">
              <p>绝世武神</p>
              <span>1万人再看</span>
            </li>
            <li>
              <img src="../../assets/img/Vip-book03.jpg">
              <p>逆天邪神</p>
              <span>2万人再看</span>
            </li>
          </ul>
          <div class="Cb-more">
            <p>全部男生</p>
          </div>
        </div>
      </van-tab>
      <van-tab title="女生" name="b">
        <div class="con-more">
          <ul class="Cb-book">
            <li>
              <img src="../../assets/img/Vip-book05.jpg">
              <p>甜蜜热恋-校草的专属丫头</p>
              <span>2万人再看</span>
            </li>
            <li>
              <img src="../../assets/img/Vip-book06.jpg">
              <p>萌萌王子-我的校草大人</p>
              <span>2万人再看</span>
            </li>
            <li>
              <img src="../../assets/img/Vip-book07.jpg">
              <p>误惹校草殿下</p>
              <span>2万人再看</span>
            </li>
            <li>
              <img src="../../assets/img/Vip-book08.jpg">
              <p>国民校草宠上瘾</p>
              <span>2万人再看</span>
            </li>
          </ul>
          <div class="Cb-more">
            <p>全部女生</p>
          </div>
        </div>
      </van-tab>
      <van-tab title="出版" name="c">
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
            <p>全部出版</p>
          </div>
        </div>
      </van-tab>
      <van-tab title="漫画" name="d">
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
            <p>全部漫画</p>
          </div>
        </div>
      </van-tab>
    </van-tabs>
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
    props: ["title", "url"],
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
    margin-top: -1rem;
  }

  .tit {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    margin-top: .2rem;
    margin-bottom: .25rem;
    padding-top: .2rem;
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
    width: 0.3rem;
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
    margin: 0 .3rem 0 .22rem;
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

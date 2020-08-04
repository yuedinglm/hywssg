<template>
  <div id="ListBox">
    <p class="ListBox_top">
      <span class="span1">
        <img src="../assets/img/listen0.png">
        <em>猜你喜欢</em>
      </span>
    </p>
    <!-- 循环 -->
    <div>
      <ul class="ListBox_con">
        <li v-for="(book,index) in books" :key="index" v-if="index<4" @click="getBookId(book.book_id)">
          <img :src="book.image">
          <h5>{{book.bookname}}</h5>
          <h6>{{book.author}}</h6>
        </li>
        <!-- <li>
              <img src="../../static/img/ListenBookNav2pic2.png" alt="">
              <h5>最佳女婿：老婆放过我 | 都市爽文</h5>
              <h6>司南时代</h6>
          </li> -->
      </ul>

      <div class="hotCon" v-for="(book,index) in books" :key="index" v-if="4<=index && index<=8" @click="getBookId(book.id)">
        <p><img :src="book.image"></p>
        <div class="hotCon_right">
          <h5>{{book.bookname}}</h5>
          <span>{{book.intro}}</span>
          <h4>
            <i>{{book.author}}</i>
            <b>{{book.status}}</b>
          </h4>
        </div>
      </div>
      <!-- <div class="hotCon">
            <p><img src="../../static/img/listenhotpic.png" alt=""></p>
            <div class="hotCon_right">
                <h5>陈蜗牛的最爱日记</h5>
                <span>【强烈推荐】《武神至尊》人气网络小说，已更新461万字，点击量已高达1279万</span>
                <h4>
                    <i>阅米文化</i>
                    <b>完结</b>
                </h4>
            </div>
        </div>-->
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "ListenBookSuspect",
    props: ["url"],
    data: function() {
      return {
        books: []
      }
    },

    created: function() {
      axios({
          url: this.url
        })
        .then(res => this.books = res.data.data);
    },
    methods: {
      getBookId(bookid) {
        this.$router.push({
          name: "BookDetails",
          params: {
            bookid: bookid
          }
        })
      },
    }
  }
</script>

<style scoped>
  #ListBox {
    border-top: 0.16rem solid #F8F8F8;
    background-color: #fff;
    width: 100%;
    min-height: 14.6rem;
    /* min-height: auto; */
    box-sizing: border-box;
    padding: 0 0.3rem;
  }

  #ListBox .ListBox_top {
    width: 100%;
    height: 0.36rem;
    margin-bottom: 0.3rem;
    margin-top: 0.3rem;
    background-color: #fff;
  }

  #ListBox .ListBox_top .span1,
  .span2 {
    float: left;
  }

  /* 换一换 */
  #ListBox .ListBox_top .span2 {
    float: right;
  }

  #ListBox .ListBox_top .span2 b {
    position: absolute;
    right: 0.3rem;
    width: 0.36rem;
    height: 0.36rem;
  }

  #ListBox .ListBox_top .span2 b img {
    width: 100%;
    height: 100%;
  }

  #ListBox .ListBox_top .span2 i {
    position: absolute;
    right: 0.9rem;
    font-size: 0.3rem;
  }


  #ListBox .ListBox_top img {
    width: 0.42rem;
    height: 0.34rem;
    float: left;
  }

  #ListBox .ListBox_top em {
    float: left;
    font-size: 0.3rem;
    margin-left: 0.2rem;
    line-height: 0.36rem;
  }

  .ListBox_con {
    width: 100%;
    height: 2.8rem;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
  }

  #ListBox .ListBox_con li {
    width: 1.6rem;
    height: 3rem;
    background-color: #fff;
  }

  #ListBox .ListBox_con li img {
    width: 1.6rem;
    height: 1.6rem;
  }

  #ListBox .ListBox_con li h5 {
    width: 100%;
    /* height:0.68rem; */
    color: #000;
    font-size: 0.24rem;
    margin-top: 0.12rem;
    /* 多行文本溢出换行 */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  #ListBox .ListBox_con li h6 {
    color: #ccc;
    font-size: 0.26rem;
    line-height: 0.44rem;
  }

  #ListBox .hotCon {
    width: 100%;
    height: 2rem;
    /* background-color: darksalmon; */
    margin: 0.3rem 0;
    padding: 0.3rem 0;
    box-sizing: border-box;
    border-top: 1px solid #ccc;
  }

  #ListBox .hotCon p {
    width: 1.68rem;
    height: 1.68rem;
    float: left;
  }

  #ListBox .hotCon .hotCon_right {
    width: 4.68rem;
    height: 1.68rem;
    float: left;
    /* background-color: deepskyblue; */
    margin-left: 0.3rem;
  }

  #ListBox .hotCon .hotCon_right h5 {
    font-size: 0.24rem;
    color: #000;
  }

  #ListBox .hotCon .hotCon_right span {
    width: 4.68rem;
    height: 0.7rem;
    /* background-color: fuchsia; */
    color: #ccc;
    display: block;
    /* 多行本文溢出省略号显示 */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 0.24rem;
    margin-top: 0.1rem;
  }

  #ListBox .hotCon .hotCon_right h4 {
    width: 4.68rem;
    height: 0.38rem;
    margin-top: 0.1rem;
    /* background-color: rgb(116, 146, 241); */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #ListBox .hotCon .hotCon_right h4 i {
    color: #ccc;
    font-size: 0.24rem;
  }

  #ListBox .hotCon .hotCon_right h4 b {
    width: 0.8rem;
    height: 0.38rem;
    border: 1px solid #86bbf7;
    color: #86bbf7;
    font-size: 0.24rem;
    text-align: center;
    line-height: 0.38rem;
  }
</style>

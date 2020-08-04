<template>
  <!-- 精品课及相声评书 -->
  <div id="ListBox">
    <p class="ListBox_top">
      <span class="span1">
        <img src="../assets/img/listen0.png" alt="">
        <em>{{title}}</em>
      </span>
      <span class="span2">
        <i>查看更多 </i>
        <b><img src="../assets/img/more.png" alt="" class="changePic"></b>
      </span>

    </p>
    <ul class="ListBox_con">
      <li v-for="(book,index) in books" :key="index" v-if="index<6" @click="getBookId(book.book_id)">
        <img :src="book.image">
        <h5>{{book.bookname}}</h5>
        <h6>{{book.author}}</h6>
      </li>
      <!-- <li>
              <img src="../../static/img/ListenBookNav2pic3.png" alt="">
              <h5>重生在上：逆徒别乱来|穿书重生</h5>
              <h6>若看有声</h6>
          </li> -->

    </ul>

  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "ListenBookBoutique",
    props: ["title", "url"],
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
    min-height: 8.3rem;
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
    display: flex;
  }

  #ListBox .ListBox_top .span2 b {
    display: block;
    right: 0.36rem;
    width: 0.24rem;
    height: 0.24rem;
    margin-top: 0.06rem;
    margin-left: 0.2rem;
  }

  #ListBox .ListBox_top .span2 b img {
    width: 100%;
    height: 100%;
  }

  #ListBox .ListBox_top .span2 i {
    right: 0.9rem;
    font-size: 0.24rem;
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
    height: 3.2rem;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    /* margin-bottom: 0.3rem; */
    flex-wrap: wrap;
  }

  #ListBox .ListBox_con li {
    width: 2.16rem;
    height: 3.4rem;
    /* background-color: darkorange; */
  }

  #ListBox .ListBox_con li img {
    width: 2.1rem;
    height: 2rem;
  }

  #ListBox .ListBox_con li h5 {
    width: 100%;
    /* height:0.72rem; */
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
    font-size: 0.24rem;
    line-height: 0.38rem;
  }
</style>

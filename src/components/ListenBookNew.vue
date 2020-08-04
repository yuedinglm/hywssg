<template>
  <div id="ListBox">
    <p class="ListBox_top">
      <img src="../assets/img/listen0.png" alt="">
      <em>{{title}}</em>
    </p>
    <ul class="ListBox_con">

      <li v-for="(book,index) in books" :key="index" v-if="index<6" @click="getBookId(book.book_id)">
        <img :src="book.image">
        <h5>{{book.bookname}}</h5>
        <h6>{{book.author}}</h6>
      </li>

      <!-- <li>
              <img src="../../static/img/ListenBookNav2pic1.png">
              <h5>豪门战神/一拳战神 江宁林雨真</h5>
              <h6>牧云文化</h6>
          </li>-->
    </ul>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "ListenBookNew",
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
    width: 100%;
    min-height: 8.1rem;
    /* min-height: auto; */
    box-sizing: border-box;
    background-color: #fff;
    padding: 0.3rem;
    border-top: 0.16rem solid #F8F8F8;
  }

  #ListBox .ListBox_top {
    width: 100%;
    height: 0.36rem;
    margin-bottom: 0.3rem;
    /* background-color: powderblue; */
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
    /* font-weight: bold; */
  }

  .ListBox_con {
    width: 100%;
    height: 3.2rem;
    /* background-color: darkkhaki; */
    display: flex;
    justify-content: space-around;
    margin-bottom: 0.3rem;
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
    margin-top: 0.14rem;
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
    /* margin-top: 0.1rem; */
    /* line-height: 0.38rem; */
  }
</style>

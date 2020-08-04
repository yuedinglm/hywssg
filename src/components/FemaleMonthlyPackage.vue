<template>
  <div>
    <div class="box">

      <div class="box-1">
        <span>{{title}}</span>
      </div>

      <div class="list">
        <div class="list-b" v-for="(book,index) in books" :key="index" v-if="index<4" @click="getBookId(book.book_id)">
          <img :src="book.image" />
          <p>{{book.bookname}}</p>
          <p>{{book.author}}</p>
        </div>

        <div class="bottom">
          换一换<span><i class="el-icon-refresh"></i></span>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "FemaleMonthlyPackage",
    props: ["title", "url"],
    data: function() {
      return {
        books: []
      }
    },
    created: function() {
      // console.log(this.url)
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
  .box {
    width: 100%;
    /* height: 7.74rem; */
  }

  .box-1 {
    width: 100%;
    /*  height: .3rem; */
    /* border: 1px solid red; */
    margin-top: .3rem;
    border-left: .08rem solid #07ca98;
    box-sizing: border-box;
  }

  .box-1 span:nth-child(1) {
    font-size: .3rem;
    margin-left: .2rem;
  }

  .box-1 span:nth-child(2) {
    font-size: .25rem;
    color: #ddd;
    margin-left: .2rem;
  }

  .left img {
    width: 0.08rem;
    height: 0.3rem;
  }

  .right img {
    width: .13rem;
    height: 0.33rem;
  }

  .list {
    width: 100%;
    min-height: 3rem;
    margin-top: .4rem;
    padding: 0 0.34rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    box-sizing: border-box;


  }

  .list-b {
    width: 1.55rem;
    /* margin-bottom: .4rem; */
  }

  .list-b img {
    width: 1.55rem;
    height: 2.08rem;
  }

  .list-b p {
    font-size: .24rem;
    margin: .16rem 0;
    color: #323234;
    height: 0.3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .list-b p:last-child {
    color: #8a898f;
  }

  .bottom {
    width: 100%;
    height: .6rem;
    text-align: center;
    font-size: .3rem;
    line-height: .6rem;
  }
</style>

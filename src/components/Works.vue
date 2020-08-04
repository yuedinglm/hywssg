<template>
  <div>
    <div class="box">

      <div class="box-1">
        <div class="box-1-1">
          <span>{{title}}</span><span>包月会员专享</span>
        </div>

        <div class="box-2">
          <Time1 />
        </div>
      </div>

      <div class="list">
        <div class="list-b" v-for="(book,index) in books" :key="index" v-if="index<8" @click="getBookId(book.book_id)">
          <img :src="book.image" />
          <p>{{book.bookname}}</p>
          <div class="list-c">
            <span>18元</span>
            <span>限免</span>
          </div>

        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import axios from "axios";

  import Time1 from "../components/Time1"

  export default {
    name: "Works",
    components: {
      Time1
    },
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
    display: flex;

    justify-content: space-between;
  }

  .box-1-1 {
    margin-top: .3rem;
    border-left: .08rem solid #07ca98;
    box-sizing: border-box;

  }

  .box-1-1 span:nth-child(1) {
    font-size: .3rem;
    margin-left: .2rem;
  }

  .box-1-1 span:nth-child(2) {
    font-size: .25rem;
    color: #ddd;
    margin-left: .2rem;
  }

  .box-2 {
    /* width: 2.63rem; */
    width: 3rem;
    height: .42rem;
    /* border: 1px solid red; */
    margin-top: .3rem;
    /* text-align: center; */
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
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
    margin-bottom: .4rem;
    /* border: 1px solid red; */
  }

  .list-b img {
    width: 1.55rem;
    height: 2.08rem;
  }

  .list-b p {
    font-size: .24rem;
    margin: .16rem 0;
    color: #323234;
    /* border: 1px solid red; */
    height: 0.3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .list-b p:last-child {
    color: #8a898f;
  }

  .list-c {
    width: 100%;
    height: .25rem;
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    font-size: .25rem;
  }

  .list-c span:nth-child(1) {
    color: #ddd;
    text-decoration: line-through;
  }

  .list-c span:nth-child(2) {
    color: red;

  }
</style>

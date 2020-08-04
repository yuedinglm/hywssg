<template>
  <div>
    <div class="center">
      <h3>
        <router-link to="/All" tag="span">
          <img src="../assets/img/b-d-back_03.png">
        </router-link>
        <span>{{$route.params.typename}}</span>
      </h3>

      <div class="list_center">
        <div class="list_m">
          <b>全部</b>
          <span>生活</span>
          <span>异能</span>
          <span>重生</span>
          <span>热血</span>
          <span>都市人生</span>
          <span>极道江湖</span>
          <span>社会</span>
          <span>商战</span>
          <span>娱乐</span>
          <span>职场</span>
          <span>其他都市</span>
          <span>美女如云</span>
          <span>兵王</span>
          <span>保镖</span>
          <span>医生</span>
        </div>
        <div class="list_m list_mc">
          <b>全部</b>
          <span>20万字以下</span>
          <span>20-100万字</span>
          <span>100万字以上</span>
        </div>
        <div class="list_m">
          <b>全部</b>
          <span>最热</span>
          <span>完结</span>
        </div>
      </div>
      <div class="list_aa">
        <div class="list-a" v-for="(book,index) in books" :key="index" @click="getBookId(book.book_id)">
          <div class="list_l">
            <img :src="book.image" />
          </div>
          <div class="list_r">
            <h3>{{book.bookname}}</h3>
            <p class="list_intro">{{book.intro}}</p>
            <p class="list_az">
              <span>{{book.author}}</span>
              <span>
                <i>完结</i>
                <i>轻松</i>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "AllCategoriesSon",
    props: ["url"],
    data: function() {
      return {
        books: [],
      };
    },
    created: function() {
      this.$nextTick(function() {
        // console.log(this.url);
        axios({
          url: this.url,
        }).then((res) => {
          // console.log(res.data.data)

          (this.books = res.data.data)
        });
      })
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
  };
</script>

<style scoped>
  h3 {
    padding: 0.28rem 0 0.31rem 0.35rem;
    display: flex;
    justify-content: start;
  }

  h3 img {
    width: 0.2rem;
    height: 0.4rem;
    margin-right: 2.86rem;
  }

  h3 span {
    font-size: 0.32rem;
  }

  .center {
    padding-bottom: 1.16rem;
  }

  .list-a {
    padding: .4rem 0.34rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #f8f8f8;
  }

  .list_l {
    width: 1.45rem;
    height: 1.92rem;
    border: 1px solid #8a898f;
    border-radius: 5px;
    margin-right: .32rem;
    overflow: hidden;
  }

  .list_l img {
    width: 100%;
    height: 100%;
  }

  .list_r h3 {
    font-size: .3rem;
    padding: .1rem 0 .18rem;
  }

  .list_r .list_intro {
    width: 5rem;
    height: .84rem;
    color: #8a898f;
    line-height: .42rem;
    font-size: .24rem;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .list_az {
    display: flex;
    justify-content: space-between;
  }

  .list_az span {
    font-size: .24rem;
    padding-top: .12rem;
    color: #8a898f;
  }

  .list_az span i:first-child {
    font-size: .18rem;
    padding: 0.08rem 0.12rem;
    color: #3e8972;
    border: 0.01rem solid #3e8972;
  }

  .list_az span i:last-child {
    font-size: .18rem;
    padding: 0.08rem 0.12rem;
    color: #8a898f;
    border: 0.01rem solid #8a898f;
  }

  .list_center {
    width: 100%;
    min-height: 4.09rem;
    /* background-color: pink; */
  }

  .list_center .list_mc {
    border-top: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;
  }

  .list_center .list_m {
    padding: .23rem .31rem;
  }

  .list_m b {
    display: inline-block;
    width: .97rem;
    height: .55rem;
    line-height: .55rem;
    text-align: center;
    color: #5fc7a4;
    font-size: .24rem;
    border: 1.5px solid #5fc7a4;
    border-radius: 10px;
    margin-right: .24rem;
  }

  .list_m span {
    font-size: .24rem;
    line-height: .55rem;
    margin-right: .43rem;
  }
</style>

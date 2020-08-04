<template>
  <div>
    <BookstoreHeader />
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" loosing-text="正在获取好文好书...">
      <div class="center">
        <BookStoreBanner />
        <BookStoreNav />
        <BookStoreBoutique1 title="精品汇聚" url="http://123.56.54.23:8000/main/selects/1/" />
        <BookStoreBoutique2 title="金牌主播推荐" url="http://123.56.54.23:8000/main/selects/2/" />
        <BookStoreBoutique3 title="热播听书" url="http://123.56.54.23:8000/main/selects/3/" />
        <BookStoreBoutique1 title="经典红书" url="http://123.56.54.23:8000/main/selects/4/" />
        <BookStoreBoutique1 title="一周热搜推荐" url="http://123.56.54.23:8000/main/selects/5/" />
        <BookStoreNav2 />
        <BookStoreNewBooksRecomend title="新书最热" url="http://123.56.54.23:8000/main/selects/6/" />
        <BookStoreBoutique1 title="会员免费专区" url="http://123.56.54.23:8000/main/selects/7/" />
        <NewBookList title="最热书单" />
        <BookStoreBanner2 />
        <BookStoreGuessYouLike title="根据您的兴趣匹配" />
        <BookStoreGuessList url="http://123.56.54.23:8000/main/selects/8/" />
        <BookStoreGuessList url="http://123.56.54.23:8000/main/selects/6/" />
        <BookStoreGuessList url="http://123.56.54.23:8000/main/selects/4/" />
        <BookStoreGuessList url="http://123.56.54.23:8000/main/selects/2/" />
        <BookStoreGuessList url="http://123.56.54.23:8000/main/selects/1/" />
        <BookStoreGuessList url="http://123.56.54.23:8000/main/selects/3/" />
        <BookStoreGuessList url="http://123.56.54.23:8000/main/selects/5/" />
        <BottomNav />

      </div>
    </van-pull-refresh>
  </div>
</template>
<script>
  import Vue from 'vue';
  import {
    PullRefresh
  } from 'vant';

  import {
    Toast
  } from 'vant';

  Vue.use(PullRefresh);
  import BookStoreBanner from "../components/BookStoreBanner";
  import BookStoreNav from "../components/BookStoreNav";
  import BookstoreHeader from "../components/BookstoreHeader";
  import BookStoreBoutique1 from "../components/BookStoreBoutique1";
  import BookStoreBoutique2 from "../components/BookStoreBoutique2";
  import BookStoreBoutique3 from "../components/BookStoreBoutique3";
  import BookStoreNav2 from "../components/BookStoreNav2";
  import BookStoreNewBooksRecomend from "../components/BookStoreNewBooksRecomend";
  import NewBookList from "../components/NewBookList";
  import BookStoreBanner2 from "../components/BookStoreBanner2";
  import BookStoreGuessYouLike from "../components/BookStoreGuessYouLike";
  import BookStoreGuessList from "../components/BookStoreGuessList";
  import BottomNav from "../components/BottomNav";
  export default {
    name: "Feartured",
    components: {
      BookStoreBanner,
      BookStoreGuessYouLike,
      BookStoreGuessList,
      BookStoreBanner2,
      BookStoreNav,
      BookstoreHeader,
      BookStoreBoutique1,
      BookStoreBoutique2,
      BookStoreBoutique3,
      BookStoreNav2,
      BookStoreNewBooksRecomend,
      NewBookList,
      BottomNav
    },
    data() {
      return {
        count: 0,
        isLoading: false,
      };
    },
    methods: {
      onRefresh() {
        setTimeout(() => {
          // Toast('刷新成功');
          this.isLoading = false;
          this.count++;
        }, 1000);
      },
    },
  }
</script>

<style scoped>
  .center {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    margin-top: 0.9rem;
    margin-bottom: 1.16rem;
    /* background-color: #f8f8f8; */
    /* padding: 0 .34rem; */
  }
</style>

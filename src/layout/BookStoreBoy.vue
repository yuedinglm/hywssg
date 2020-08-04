<template>
  <div>
    <BookstoreHeader />
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" loosing-text="正在获取好文好书...">
      <div class="center">
        <BookStoreBanner1 />
        <BookStoreNav />
        <BookStoreSxd1 />
        <BookStoreMore title="今日必读" img="b-boy_list_0004.png" />
        <BookStoreTodayRead url="http://123.56.54.23:8000/main/boys/1/" />
        <BookStoreMore title="主编推荐" img="b-boy_list_0004.png" />
        <BookStoreThreeLine url="http://123.56.54.23:8000/main/boys/2/" />
        <BookStoreMore title="热门畅销" img="b-boy_list_0004.png" />
        <BookStoreThreeLine url="http://123.56.54.23:8000/main/boys/3/" />
        <BookStoreExcelent title="优质榜单" img="b-boy_list_0004.png" />
        <BookStoreNewFinish title="男生完结好文" url="http://123.56.54.23:8000/main/boys/4/" img="b-boy_list_0004.png" />
        <BookStoreMore title="有声小说" img="b-boy_list_0004.png" />
        <BookStoreThreeLine2 url="http://123.56.54.23:8000/main/boys/7/" />
        <StackRoom1 title="分类" />
        <NewBookList title="你的书单" img="b-boy_list_0004.png" />
        <BookStoreGuessYouLike title="猜你喜欢" img="b-boy_list_0004.png" />
        <BookStoreGuessList url="http://123.56.54.23:8000/main/selects/8/" />
        <BookStoreGuessList url="http://123.56.54.23:8000/main/selects/8/" />
        <BookStoreGuessList url="http://123.56.54.23:8000/main/selects/8/" />
        <BookStoreGuessList url="http://123.56.54.23:8000/main/selects/8/" />
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
  import BookstoreHeader from "../components/BookstoreHeader";
  import BookStoreNewFinish from "../components/gbBooks/BookStoreNewFinish";
  import BookStoreBanner1 from "../components/gbBooks/BookStoreBanner1";
  import NewBookList from "../components/gbBooks/NewBookList";
  import BookStoreGuessYouLike from "../components/gbBooks/BookStoreGuessYouLike";
  import BookStoreGuessList from "../components/BookStoreGuessList";
  import BookStoreMore from "../components/gbBooks/BookStoreMore";
  import BookStoreTodayRead from "../components/gbBooks/BookStoreTodayRead";
  import BookStoreThreeLine from "../components/gbBooks/BookStoreThreeLine";
  import BookStoreThreeLine2 from "../components/gbBooks/BookStoreThreeLine2";
  import BookStoreExcelent from "../components/gbBooks/BookStoreExcelent";
  import StackRoom1 from "../components/gbBooks/StackRoom1";
  import BookStoreSxd1 from "../components/gbBooks/BookStoreSxd1";
  import BookStoreNav from "../components/BookStoreNav";
  import BottomNav from "../components/BottomNav";

  export default {
    name: "BookStoreGirl",
    components: {
      BookstoreHeader,
      BookStoreNewFinish,
      BookStoreBanner1,
      NewBookList,
      BookStoreGuessYouLike,
      BookStoreGuessList,
      BookStoreMore,
      BookStoreTodayRead,
      BookStoreThreeLine,
      BookStoreThreeLine2,
      BookStoreExcelent,
      StackRoom1,
      BookStoreSxd1,
      BookStoreNav,
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

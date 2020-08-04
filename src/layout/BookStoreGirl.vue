<template>
  <div>
    <BookstoreHeader />
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" loosing-text="正在获取好文好书...">
      <div class="center">
        <BookStoreBanner />
        <BookStoreNav />
        <BookStoreSxd />
        <BookStoreMore title="今日必读" img="b-girl_list_03.png" />
        <BookStoreTodayRead url="http://123.56.54.23:8000/main/girls/1/" />
        <BookStoreMore title="主编推荐" img="b-girl_list_03.png" />
        <BookStoreThreeLine url="http://123.56.54.23:8000/main/girls/2/" />
        <BookStoreMore title="热门畅销" img="b-girl_list_03.png" />
        <BookStoreThreeLine url="http://123.56.54.23:8000/main/girls/3/" />
        <BookStoreExcelent title="优质榜单" img="b-girl_list_03.png" />
        <BookStoreNewFinish title="女生完结好文" url="http://123.56.54.23:8000/main/girls/6/" img="b-girl_list_03.png" />
        <BookStoreMore title="有声小说" img="b-girl_list_03.png" />
        <BookStoreThreeLine2 url="http://123.56.54.23:8000/main/girls/7/" />
        <StackRoom title="分类" />
        <NewBookList title="你的书单" img="b-girl_list_03.png" />
        <BookStoreGuessYouLike title="猜你喜欢" img="b-girl_list_03.png" />
        <BookStoreGuessList url="http://123.56.54.23:8000/main/girls/3/" />
        <BookStoreGuessList url="http://123.56.54.23:8000/main/girls/4/" />
        <BookStoreGuessList url="http://123.56.54.23:8000/main/girls/5/" />
        <BookStoreGuessList url="http://123.56.54.23:8000/main/girls/1/" />
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
  import BookStoreBanner from "../components/gbBooks/BookStoreBanner";
  import NewBookList from "../components/gbBooks/NewBookList";
  import BookStoreGuessYouLike from "../components/gbBooks/BookStoreGuessYouLike";
  import BookStoreGuessList from "../components/BookStoreGuessList";
  import BookStoreMore from "../components/gbBooks/BookStoreMore";
  import BookStoreTodayRead from "../components/gbBooks/BookStoreTodayRead";
  import BookStoreThreeLine from "../components/gbBooks/BookStoreThreeLine";
  import BookStoreThreeLine2 from "../components/gbBooks/BookStoreThreeLine2";
  import BookStoreExcelent from "../components/gbBooks/BookStoreExcelent";
  import StackRoom from "../components/gbBooks/StackRoom";
  import BookStoreSxd from "../components/gbBooks/BookStoreSxd";
  import BookStoreNav from "../components/BookStoreNav";
  import BottomNav from "../components/BottomNav";
  export default {
    name: "BookStoreGirl",
    components: {
      BookstoreHeader,
      BookStoreNewFinish,
      BookStoreBanner,
      NewBookList,
      BookStoreGuessYouLike,
      BookStoreGuessList,
      BookStoreMore,
      BookStoreTodayRead,
      BookStoreThreeLine,
      BookStoreThreeLine2,
      BookStoreExcelent,
      StackRoom,
      BookStoreSxd,
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

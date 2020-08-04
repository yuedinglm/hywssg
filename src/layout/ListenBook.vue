<template>
  <div>
    <BookstoreHeader />
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" loosing-text="正在获取好文好书...">
      <div class="center">
        <BookstoreListenBanner />
        <BookstoreListenNav />
        <ListenBookHot />
        <ListenBookNav2 />
        <ListenBookNew title="最新上架" url="http://123.56.54.23:8000/main/listenbook/2/" />
        <ListenBookAll title="大家都在听" url="http://123.56.54.23:8000/main/listenbook/3/" />
        <ListenBookNew title="免费专区" url="http://123.56.54.23:8000/main/listenbook/4/" />
        <ListenBookAll title="万人追更榜" url="http://123.56.54.23:8000/main/listenbook/5/" />
        <ListenBookColumns />
        <ListenBookWealthy title="豪门·现言" url="http://123.56.54.23:8000/main/listenbook/6/  " />
        <ListenBookWealthy title="都市·修真" url="http://123.56.54.23:8000/main/listenbook/7/" />
        <ListenBookWealthy title="穿越·古言" url="http://123.56.54.23:8000/main/listenbook/8/" />
        <ListenBookWealthy title="悬疑·玄幻" url="http://123.56.54.23:8000/main/listenbook/9/" />
        <ListenBookColumns2 />
        <ListenBookAll title="热门完结" url="http://123.56.54.23:8000/main/listenbook/10/" />
        <ListenBookBoutique title="精品课" url="http://123.56.54.23:8000/main/listenbook/11/" />
        <ListenBookBoutique title="相声评书" url="http://123.56.54.23:8000/main/listenbook/12/" />

        <ListenBookSuspect url="http://123.56.54.23:8000/main/listenbook/12/" />
      </div>

    </van-pull-refresh>
    <BottomNav />

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
  import BookstoreListenBanner from "../components/BookstoreListenBanner";
  import BookstoreListenNav from "../components/BookstoreListenNav";
  import ListenBookHot from "../components/ListenBookHot";
  import ListenBookNav2 from "../components/ListenBookNav2";
  import ListenBookNew from "../components/ListenBookNew";
  import ListenBookAll from "../components/ListenBookAll";

  import ListenBookColumns from "../components/ListenBookColumns";
  import ListenBookWealthy from "../components/ListenBookWealthy";

  import ListenBookColumns2 from "../components/ListenBookColumns2";
  import ListenBookBoutique from "../components/ListenBookBoutique";

  import ListenBookSuspect from "../components/ListenBookSuspect";

  import BottomNav from "../components/BottomNav";

  export default {
    name: "ListenBook",
    components: {
      BookstoreHeader,
      BookstoreListenBanner,
      BookstoreListenNav,
      ListenBookHot,
      ListenBookNav2,
      ListenBookNew,
      ListenBookAll,
      ListenBookColumns,
      ListenBookWealthy,
      ListenBookColumns2,
      ListenBookBoutique,
      ListenBookSuspect,
      BottomNav,
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
  };
</script>

<style scoped>
  .center {
    width: 100%;
    height: 100%;
    margin-bottom: 1.16rem;
    margin-top: 0.9rem;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>

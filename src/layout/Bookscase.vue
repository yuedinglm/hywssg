<template>
  <div id="box">
    <div class="top">
      <h2>让阅读成为习惯</h2>
      <div class="top-1">
        <span><i class="el-icon-search"></i></span>
        <span><i class="el-icon-more"></i></span>
      </div>
    </div>
    <div class="top-2">
      <div class="top-2-1">
        <img src="../../static/img/baiti.jpg" alt="">
      </div>
      <div class="top-2-2">
        <img src="../../static/img/biaoti2.png" alt="">
      </div>

    </div>

    <div class="top-3">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="center" style="display: flex; flex-wrap: wrap;">
          <div class="center-1" v-for="(book,index) in books" :key="index" @click="goBooks">
            <img :src=" book.image" />
            <h2>{{book.bookname}}</h2>
            <span>{{book.status}}</span>
            <span>未读</span>
          </div>
          <router-link to="/" tag="li">
            <div class="center-1 center-2">
            <i class="el-icon-plus"></i>
            </div>
          </router-link>
        </div>
        
        <!-- <div style="clear: both;">

        </div> -->
       
      </van-pull-refresh>

    </div>
    <BottomNav />
  </div>

</template>

<script>
  import axios from "axios";
  import Vue from 'vue';
  import {
    PullRefresh
  } from 'vant';

  import {
    Toast
  } from 'vant';

  Vue.use(PullRefresh);

  import BottomNav from "../components/BottomNav"

  export default {
    name: "Bookscase",
    props: ["id"],
    components: {
      BottomNav
    },
    data() {
      return {
        count: 0,
        isLoading: false,
        books: []
      };
    },
    methods: {
      goBooks(){
        this.$router.push({name:"ReadBook"})
      },
      onRefresh() {
        setTimeout(() => {
          // Toast('刷新成功');
          this.isLoading = false;
          this.count++;
        }, 1000);
      },
    },
    created: function() {
      this.$nextTick(function() {
        // console.log(this.id);
        if(this.id){
           axios({
            url: "http://123.56.54.23:8000/user/addbook/?bookid=" + this.id,
          })
          .then((res) => {
            this.books = res.data.data;
            // console.log(this.books)
          });
        }else{
          axios({
            url: "http://123.56.54.23:8000/user/bookrack/",
          })
          .then((res) => {
            this.books = res.data.data;
            // console.log(this.books)
        // console.log(this.id);
          });
        }

      })
    },


  }
</script>

<style scoped>
  #box {
    background-color: #f7f7f7;
    margin-bottom: 1.16rem;
  }

  .top {
    width: 100%;
    height: 1.13rem;

    background-color: #f7f7f7;
    display: flex;
    justify-content: center;
  }

  .top h2 {
    width: 60%;
    font-size: 0.4rem;
    line-height: 1.13rem;
    color: #3e3e3e;
    padding: 0px 0.12rem;
    box-sizing: border-box;


  }

  .top-1 {
    width: 40%;
    height: 1.13rem;
    display: flex;
    justify-content: space-between;
    line-height: 1.13rem;
    /* border: 1px solid red; */

  }

  .top-1 span {
    font-size: 0.5rem;
    margin-right: .2rem;
  }

  .top-2 {
    width: 100%;
    height: 1.37rem;
    display: flex;
    justify-content: space-around;
    margin-top: 0.2rem;
    background-color: #f7f7f7;
  }

  .top-2-1 {
    width: 4.14rem;
    height: 1.37rem;
    /* border: 1px solid red; */
  }

  .top-2-1 img {
    width: 100%;
    height: 100%;
  }

  .top-2-2 {
    width: 2.79rem;
    height: 1.37rem;
    /* border: 1px solid red; */
  }

  .top-2-2 img {
    width: 100%;
    height: 100%;
  }

  .top-3 {
    width: 100%;
    background-color: white;
    margin-top: 0.2rem;
    /* display: flex; */
  }



  .center {
    width: 100%;

    /* margin: auto; */
    box-sizing: border-box;
    padding: .2rem .2rem;
    /* float: left; */
    display: flex;
    /* justify-content: space-around; */
    margin-left: .2rem;
    flex-wrap: wrap;
  }


  .center-1 {
    width: 2rem;
    height: 3.10rem;
    /* border: 1px solid red; */
    margin-right: .3rem;
    margin-bottom: .5rem;
  }

  .center-1 img {
    height: 2.4rem;
    width: 100%;
    /* border: 1px solid red; */
  }

  .center-1 h2 {
    font-size: 0.28rem;
    font-weight: 600;
  }

  .center-1 span {
    color: #a7a7a7;
  }

  .center-2 {
    width: 2rem;
    height: 3.10rem;
    background-color: #f7f7f7;
    /* margin-left: .2rem; */
  }

  .center-2 i {
    width: 2rem;
    height: 3.10rem;
    font-size: 1.5rem;
    color: #dddddd;
    display: flex;
    justify-content: center;
    line-height: 3.10rem;
  }
</style>

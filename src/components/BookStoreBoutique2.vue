<template>
  <div>
      <div class="tit">
          <span class="left">
            <img src="../assets/img/b-list_03.png">
            <!-- <p>精品汇聚</p> -->
            <p>{{title}}</p>
          </span>
          <span class="right">
            <p>查看更多</p>
            <img src="../assets/img/b-more_03.png">
          </span>
      </div>
      <div class="list">
          <div class="list-b" v-for="(book,index) in books" :key="index" v-if="index<8" @click="getBookId(book.book_id)">
            <img :src="book.image"/>
            <p>{{book.bookname}}</p>
            <p>{{book.author}}</p>
          </div>
      </div>
      <div class="line"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name:"BookStoreBoutique",
  props:["title","url"],
  data:function(){
    return {
      books:[]
    }
  },
  created:function(){
    // console.log(this.url)
    axios({
      url:this.url
    })
    .then(res=>this.books=res.data.data);
  },
  methods:{
    getBookId(bookid){
      this.$router.push({name:"BookDetails",params:{bookid:bookid}})
    },
  }
}
</script>

<style scoped>
  .tit{
    background-color: #fff;
    padding: 0 0.34rem;
    display: flex;
    justify-content: space-between;
    margin-top:.46rem;
    margin-bottom: .25rem;
  }
  span{
    min-width: 1.62rem;
    height: .33rem;
    padding-left: 0.2rem;
    line-height: 0.33rem;
    display: flex;
    justify-content: start;
  }
  span p{
    margin:0 0.2rem;
    font-size: .3rem;
    color: #28292d;
  }
  .left img{
    width: 0.08rem;
    height: 0.3rem;
  }
  .right img{
    width: .13rem;
    height: 0.33rem;
  }
  .list{
    width: 100%;
    min-height: 3rem;
    margin-top: .4rem;
    margin-bottom:.21rem;
    padding: 0 0.34rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .list-b{
    width: 1.55rem;
    margin-bottom: .4rem;
  }
  .list-b img{
    width: 1.55rem;
    height: 2.08rem;
  }
  .list-b p{
    font-size:.24rem;
    margin:.16rem 0;
    color:#323234;
  }
  .list-b p:last-child{
    color:#8a898f;
  }
  .line{
    width: 100%;
    height: 0.16rem;
    background-color: #f8f8f8;
  }
</style>

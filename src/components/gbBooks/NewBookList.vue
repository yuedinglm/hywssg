<template>
  <div>
      <div class="tit">
          <span class="left">
            <img :src="'/static/img/' + img">
            <!-- <p>精品汇聚</p> -->
            <p>{{title}}</p>
          </span>
      </div>
      <div class="list">
          <div class="list-b"  v-for="(img,index) in imgs" :key="index" @click="getBookId(book.id)">
            <img :src="'/static/img/'+ img">
          </div>
      </div>
      <div class="line"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name:"NewBookList",
  props:["title","url","img"],
  data:function(){
    return {
      imgs:["b_girl_list_03.png","b_girl_list_04.png"],
    }
  },
  methods:{
    getBookId(bookid){
      this.$router.push({name:"BookDetails",params:{bookid:bookid}})
    }
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
    margin-bottom: .40rem;
  }
  .tit span{
    min-width: 1.62rem;
    height: .33rem;
    padding-left: 0.2rem;
    line-height: 0.33rem;
    display: flex;
    justify-content: start;
  }
  .tit span p{
    margin:0 0.2rem;
    font-size: .3rem;
    color: #28292d;
  }
  /* .right{
    padding-left: 0.2rem;
  } */
  .left img{
    width: 0.08rem;
    height: 0.3rem;
  }
  .list{
    padding:0 .12rem .2rem .4rem;
    display:flex;
    justify-content: space-between;
  }
  .list-b{
    padding:0 .15rem 0 .15rem;
  }
  .list-b img{
    width:100%;
    height:100%;
  }
  .line{
    width: 100%;
    height: 0.16rem;
    background-color: #f8f8f8;
  }
</style>
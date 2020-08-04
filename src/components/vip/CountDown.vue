<template>
  <div>
      <div class="tit">
          <span class="left">
            <img src="../../assets/img/Vip-V.png">
            <p>{{title}}</p>
          </span>
          <span class="right">
            <Time/>
          </span>
      </div>
      <div class="list">
          <div class="list-b" v-for="(book,index) in books" :key="index" v-if = "index<8" @click="getBookId(book.id)">
            <img :src="book.image"/>
            <p>{{book.bookname}}</p>
            <p>{{book.author}}</p>
          </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";
  import Time from "./Time";
export default {
  name:"CountDown",
  components:{
    Time
  },
  props:["title","url"],
  data:function(){
    return {
      books:[]
    }
  },
  methods:{
    getBookId(bookid){
      this.$router.push({name:"BookDetails",params:{bookid:bookid}})
    },
  },
  created:function(){
    // console.log(this.url)
    axios({
      url:this.url,
    })
    .then(res=>this.books=res.data.data);
  },
}
</script>

<style scoped>
  .tit{
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    margin-top:.2rem;
    margin-bottom: .25rem;
    padding-top: .2rem;
  }
  span{
    min-width: 1.62rem;
    height: .33rem;
    line-height: 0.33rem;
    display: flex;
    justify-content: start;
  }
  span p{
    font-size: .32rem;
    color: #28292d;
  }

  .left img{
    width: 0.3rem;
    height: 0.3rem;
    margin: 0 .22rem 0 .4rem;
  }
  .right img{
    width: .33rem;
    height: 0.33rem;
    margin: 0 .4rem 0 .22rem;
  }
  .list{
    width: 100%;
    min-height: 3rem;
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
</style>

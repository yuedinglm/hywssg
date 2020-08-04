<template>
  <div>
      <div class="list">
          <div class="list-b" v-for="(book,index) in books" :key="index" v-if="index<4" @click="getBookId(book.book_id)">
            <img :src="book.image"/>
            <p>{{book.bookname}}</p>
            <p>{{book.author}}</p>
          </div>
      </div>
      <div class="list_aa">
        <div class="list-a" v-for="(book,index) in books" :key="index" v-if="index>=4&&index<8" @click="getBookId(book.book_id)">
            <div class="list_l">
              <img :src="book.image"/>
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

      <div class="line"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name:"BookStoreGuessList",
  props:["url"],
  data:function(){
    return {
      books:[],
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
  .right img{
    width: .33rem;
    height: 0.33rem;
  }
  .list{
    width: 100%;
    min-height: 3rem;
    margin-top: .4rem;
    /* margin-bottom:.21rem; */
    padding: 0 0.34rem;
    display: flex;
    justify-content: space-around;
    /* background-color: pink; */
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
  .list-a{
    border-top:2px solid #f8f8f8;
    padding: .4rem 0.34rem;
    display: flex;
    justify-content: space-between;
  }
  .list_l{
    width: 1.45rem;
    height: 1.92rem;
    border: 1px solid #8a898f;
    border-radius: 5px;
    margin-right:.32rem;
    overflow: hidden;
  }
  .list_l img{
    width: 100%;
    height: 100%;
  }
  .list_r h3{
    font-size: .3rem;
    padding: .1rem 0 .18rem;
  }
  .list_r .list_intro{
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
  .list_az{
    display: flex;
    justify-content: space-between;
  }
  .list_az span{
    font-size: .24rem;
    padding-top: .12rem;
    color: #8a898f;
  }
  .list_az span i:first-child{
    font-size: .18rem;
    padding: 0.08rem 0.12rem;
    color: #3e8972;
    border: 0.01rem solid #3e8972;
  }
  .list_az span i:last-child{
    font-size: .18rem;
    padding: 0.08rem 0.12rem;
    color: #8a898f;
    border: 0.01rem solid #8a898f;
  }
</style>

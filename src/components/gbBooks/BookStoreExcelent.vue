<template>
  <div>
    <div class="tit">
      <span class="left">
        <img :src="'/static/img/' + img" />
        <!-- <p>精品汇聚</p> -->
        <p>{{title}}</p>
      </span>
    </div>
    <div class="wrap">
      <h3>
        <span class="phone" @click = "changeBox">畅销榜</span>
        <span class="pwd" @click = "changeBox">免费榜</span>
      </h3>
      <div class="wrap_box"  v-show="isShow">
        <div class="box_con" v-for="(book,index1) in books" :key="index1" v-if="index1<10" @click="getBookId(book.id)">
          <div class="img">
            <img :src="book.image" />
            <div class="num">
              <span>{{index1+1}}</span>
            </div>
          </div>
          <div class="box_l">
            <h4>{{book.bookname}}</h4>
            <span>1.0万 人在读</span>
          </div>
        </div>
      </div>
      <div class="wrap_box"  v-show="show">
        <div class="box_con" v-for="(book,index) in books" :key="index" v-if="index<10" @click="getBookId(book.id)">
          <div class="img">
            <img :src=" book.image" />
            <div class="num">
              <span>{{index+1}}</span>
            </div>
          </div>
          <div class="box_l">
            <h4>{{book.bookname}}</h4>
            <span>1.0万 人在读</span>
          </div>
        </div>
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "BookStoreExcelent",
  props: ["title", "img"],
  data: function () {
    return {
      books: [],
      isShow: true,
      show:false,
      url:"http://123.56.54.23:8000/main/girls/4/",
    };
  },
  methods: {
    getBookId(bookid){
      this.$router.push({name:"BookDetails",params:{bookid:bookid}})
    },
    changeBox() {
      this.$nextTick(function(){
        let phone = document.querySelector(".phone");
        // console.log(phone);
        let pwd = document.querySelector(".pwd");
        // console.log(pwd)
        this.isShow = !this.isShow;
        this.show = !this.show;
        this.url="http://123.56.54.23:8000/main/girls/4/";
        if (!this.isShow) {
          pwd.style.color = "#000";
          phone.style.color = "#fff";
          pwd.style.backgroundColor = "#f5f5f7";
          phone.style.backgroundColor = "#2fc699";
          this.url="http://123.56.54.23:8000/main/girls/4/";
          axios({
          url: this.url,
          }).then((res) => (this.books = res.data.data));
        } else {
          pwd.style.color = "#fff";
          phone.style.color = "#000";
          pwd.style.backgroundColor = "#2fc699";
          phone.style.backgroundColor = "#f5f5f7";
          this.url="http://123.56.54.23:8000/main/girls/5/";
          axios({
          url: this.url,
          }).then((res) => (this.books = res.data.data));
        }
      })
    },
  },
  created: function () {
    // console.log(this.isShow)
    axios({
      url: this.url,
    }).then((res) => (this.books = res.data.data));
    this.changeBox();
  },
};
</script>

<style scoped>
.tit {
  background-color: #fff;
  padding: 0 0.34rem;
  display: flex;
  justify-content: space-between;
  margin-top: 0.46rem;
  margin-bottom: 0.25rem;
}
.tit span {
  min-width: 1.62rem;
  height: 0.33rem;
  padding-left: 0.2rem;
  line-height: 0.33rem;
  display: flex;
  justify-content: start;
}
span p {
  margin: 0 0.2rem;
  font-size: 0.3rem;
  color: #28292d;
}
.left img {
  width: 0.08rem;
  height: 0.3rem;
}
.line {
  width: 100%;
  height: 0.16rem;
  background-color: #f8f8f8;
}
.wrap {
  padding: 0 0.32rem;
}
.wrap h3 {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.38rem;
}
.wrap h3 span {
  width: 3.33rem;
  height: 0.55rem;
  background-color: #2fc699;
  color: #fff;
  line-height: 0.55rem;
  text-align: center;
  font-size: 0.22rem;
}
.wrap h3 span:last-child{
  background-color: #f5f5f7;
  color: #000;
}
.wrap_box {
  height: 7.4rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow: hidden;
}
.box_con {
  width: 3.46rem;
  height: 1.14rem;
  /* height: 5rem; */
  margin-bottom: 0.32rem;
  display: flex;
}
.box_con .img {
  position: relative;
  width: 0.84rem;
  height: 1.14rem;
  border: 1px solid #ebebeb;
  margin-right: 0.24rem;
}
.box_con .img img {
  width: 100%;
  height: 100%;
}
.box_con .img .num {
  width: 0.42rem;
  height: 0.2rem;
  background-color: #27afaf;
  position: absolute;
  left: 0;
  bottom: 0;
}
.box_con .img .num span {
  position: absolute;
  left: 0.15rem;
  bottom: 0;
  color: #fff;
  font-weight: bolder;
}
.box_l {
  padding: 0.14rem 0;
}
.box_l h4 {
  width:2.1rem;
  font-size: 0.28rem;
  margin-bottom: 0.1rem;
}
.box_l span {
  color: #ccc;
}
</style>

<template>
  <div>
    <div id="DetailsCon">
      <div class="DetailsCon_book">
        <span>
          <img :src="books.image"/>
        </span>
        <p>
          <b>{{books.bookname}}</b>
          <br />
          <em>{{books.author}} ></em>
          <br />
          <span>
            <strong>{{books.type}} </strong>|
            <i>{{books.status}}</i>
          </span>
        </p>
      </div>
      <ul class="bookPopularity">
        <li>
          <span>
            <!-- 评分和星级 -->
            <b class="score">{{books.scoure}}</b>
            <i class="Star" id="Star">
              <van-rate v-model="books.scoure" :size="12" allow-half void-icon="star" void-color="#eee" color="#ffd21e"  readonly/>
            </i>
          </span>
          <span>88人评论></span>
        </li>
        <li>
          <span>
            <b class="score">{{books.people}}</b>
          </span>
          <span>阅读过</span>
        </li>
        <li>
          <span>
            <b class="score">{{books.popularity}}</b>
          </span>
          <span>人气值</span>
        </li>
        <li>
          <span>
            <b class="score">{{books.number}}</b>
          </span>
          <span>字数</span>
        </li>
      </ul>
      <div class="recommend">
        <div class="zan">
          <img src="../assets/img/zan.png"/>
          <em>小编推荐</em>
        </div>
        <div class="recommendTxt">
          <i>
            <img src="../assets/img/txt0.png"/>
          </i>
          <i>
            <img src="../assets/img/txt1.png"/>
          </i>
          <p>爆款好文，熬夜追读</p>
        </div>
      </div>
      <p class="summary">{{books.intro}}</p>
      <div class="Contents">
        <p>目录</p>
        <p>{{books.catalog}}</p>
        <p>
          <!-- 今日更新 -->
          {{$store.state.showStatus?"今日更新":"查看目录"}}
          <i class="el-icon-arrow-right"></i>
        </p>
      </div>
    </div>

    <div class="WriteComment">
      <p class="WriteComment_top">
        <span>书籍评论</span>
        <span>
          <i class="el-icon-edit-outline"></i> 写评论
        </span>
      </p>
      <div class="WriteComment_con">
        <div class="WriteComment_conTop">
          <span>免费全本推广</span>
          <b>
            评分
            <i class="Star">
              <img src="../../static/img/star.png" />
            </i>
          </b>
        </div>
        <div class="WriteComment_conTxt">世界读书日，免费读好书活动，读得越多，免费越多，本期推荐，武战苍穹。</div>
        <div class="WriteComment_conBottom">
          <span>4月30日</span>
          <p>
            <i class="el-icon-chat-dot-square"></i><span>1</span>
            <span>
              <van-icon name="good-job-o" size="0.34rem" @click="num3++" />{{num3}}
            </span>
          </p>
        </div>
      </div>
      <div class="WriteComment_bottom">
          全部评论 1605条
      </div>
    </div>

    <!-- 粉丝榜 -->
    <div class="Fans">
        <b>粉丝榜</b>
        <i><img src="../assets/img/Fans.png"></i>
        <span><em @click="num1++">{{num1}}</em><a>打赏TA</a></span>
        <span><em @click="num2++">{{num2}}</em><a>投给TA</a></span>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name:"DetailsCon",
  props:["id"],

  data:function(){
    return {
      num1:7,
      num2:2,
      num3:156,
      showStatus:"",
      books:[],
      // value: 3.7
    }
  },
created:function () {
  this.$nextTick(function(){
    axios({
      url:"http://123.56.54.23:8000/main/book/?bookid=" + this.id,
    })
    .then((res)=>{

       this.books=res.data.data;
        // console.log(this.books);
        this.$store.dispatch({
            type:"isEnd",
            status:this.books.status

          })
          // break;//节省性能？
    // }
    });
  })

},
};
</script>

<style scoped>
#DetailsCon {
  width: 100%;
  height: 10.2rem;
  background-color: #fff;
  padding: 1.1rem 0.35rem 0;
  box-sizing: border-box;
}
#DetailsCon .DetailsCon_book {
  width: 100%;
  height: 2.5rem;
  background-color: #fff;
}
#DetailsCon .DetailsCon_book span {
  width: 1.94rem;
  /* height: 2.5rem; */
  display: block;
  float: left;
  /* background-color: red; */
}
#DetailsCon .DetailsCon_book span img {
  width: 100%;
  height: 100%;
}
#DetailsCon .DetailsCon_book p {
  float: left;
  margin: 0.2rem 0.4rem;
  line-height: 0.4rem;
}
#DetailsCon .DetailsCon_book p b {
  font-size: 0.36rem;
  font-weight: bold;
}
#DetailsCon .DetailsCon_book p em {
  font-size: 0.28rem;
}
#DetailsCon .DetailsCon_book p span {
  font-size: 0.28rem;
  color: #ccc;
}
/* 书人气值 */
#DetailsCon .bookPopularity {
  width: 100%;
  height: 1.7rem;
  padding: 0.56rem 0 0.4rem;
  /* background-color: yellowgreen; */
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#DetailsCon .bookPopularity li {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
}
#DetailsCon .bookPopularity li span .score {
  float: left;
  font-size: 0.32rem;
  display: block;
  font-weight: bold;
}
#DetailsCon .bookPopularity li span .Star {
  float: left;
  /* font-size: 200%; */
  margin-top: 0.1rem;
  width: 1.4rem;
  height: 0.38rem;
  display: block;
  /* background-color: violet; */
}


#DetailsCon .bookPopularity li span .Star img {
  width: 100%;
  height: 100%;
}
#DetailsCon .bookPopularity li span:nth-child(2) {
  line-height: 0.6rem;
  font-size: 0.26rem;
}
#DetailsCon .recommend {
  width: 100%;
  height: 1.7rem;
  background-color: #fffaf6;
  border: 1px solid #ccc;
  border-radius: 0.1rem;
  padding: 0.4rem;
  box-sizing: border-box;
}
#DetailsCon .recommend .zan {
  width: 0.92rem;
  height: 0.76rem;
  font-size: 0.22rem;
  color: wheat;
  font-style: italic;
  line-height: 0.5rem;
  margin-left: 0.3rem;
  float: left;
}
#DetailsCon .recommend .recommendTxt {
  width: 4.6rem;
  height: 1rem;
  /* background-color: tomato; */
  float: right;
  font-size: 0.28rem;
  position: relative;
  text-indent: 0.26rem;
  box-sizing: border-box;
  padding: 0.2rem;
  /* background-image: url(../assets/img/txt0.png) no-repeat top left; */
}
#DetailsCon .recommend .recommendTxt i:nth-child(1) {
  position: absolute;
  top: 0;
  left: 0;
}
#DetailsCon .recommend .recommendTxt i:nth-child(2) {
  position: absolute;
  bottom: 0;
  right: 0;
}
#DetailsCon .summary {
  width: 100%;
  height: 1.4rem;
  /* background-color: blueviolet; */
  font-size: 0.3rem;
  line-height: 0.46rem;
  text-indent: 0.32rem;
  margin-top: 0.2rem;
  /* 多行文本溢出换行 */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
#DetailsCon .Contents {
  width: 100%;
  height: 1.1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
}
#DetailsCon .Contents p:nth-child(1) {
  font-weight: bold;
  font-size: 0.3rem;
}
#DetailsCon .Contents p:nth-child(2) {
  color: #ccc;
  font-size: 0.28rem;
}
#DetailsCon .Contents p:nth-child(3) {
  color: #ccc;
  font-size: 0.28rem;
}
/* 书籍评论区 */
.WriteComment {
  width: 100%;
  height: 5.05rem;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0.18rem 0.48rem;

 border-top: 0.16rem solid #F8F8F8;
}
.WriteComment .WriteComment_top {
  width: 100%;
  height: 0.88rem;
  /* background-color: pink; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.WriteComment .WriteComment_top span {
  font-size: 0.32rem;
  font-weight: bold;
}
.WriteComment .WriteComment_con {
  width: 100%;
  height: 2.4rem;
  background-color: #efeff0;
  border-radius: 0.1rem;
  padding: 0.2rem;
  box-sizing: border-box;
}
.WriteComment .WriteComment_con .WriteComment_conTop {
  width: 4.7rem;
  height: 0.7rem;
  /* background-color: pink; */
  background-image: url(../assets/img/recommentlogin.png);
  background-repeat: no-repeat;
  background-position: center left;
  background-size: 0.7rem 0.7rem;
  box-sizing: border-box;
  padding: 0.1rem 0.9rem;
  font-size: 0.26rem;
  color: rgb(150, 148, 148);
  position: relative;
}
.WriteComment .WriteComment_con .WriteComment_conTop b {
  margin-left: 0.2rem;
}
.WriteComment .WriteComment_con .WriteComment_conTop i {
  position: absolute;
  top: 0.2rem;
  margin-left: 2.4rem;
  width: 1rem;
  height: 0.22rem;
  display: block;
}
.WriteComment .WriteComment_con .WriteComment_conTop i img {
  width: 100%;
  height: 100%;
}
.WriteComment .WriteComment_con .WriteComment_conTxt {
  width: 5.2rem;
  height: 0.9rem;
  /* background-color: cornflowerblue; */
  margin-left: 0.9rem;
  font-size: 0.26rem;
}
.WriteComment .WriteComment_con .WriteComment_conBottom {
  width: 5.4rem;
  height: 0.4rem;
  /* background-color: cyan; */
  margin-left: 0.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.28rem;
  color: rgb(116, 113, 113);
}
.WriteComment .WriteComment_con .WriteComment_conBottom p{
    width: 1.7rem;
    height: 100%;
    /* background-color: red; */
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 0.3rem;
}
.WriteComment .WriteComment_bottom{
    width: 4rem;
    height: 0.64rem;
    /* background-color: pink; */
    font-size: 0.3rem;
    margin: 0.2rem auto;
    text-align: center;
    line-height: 0.64rem;
}
.Fans{
    width: 100%;
    height:2.1rem ;
    /* background-color: pink; */
    border-top: 0.16rem solid #F8F8F8;
    box-sizing: border-box;
    padding:0.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.Fans b{
    font-size: 0.3rem;
    font-weight: bold;
}
.Fans i{
    width: 2rem;
    height: 1rem;
    display: block;
    margin-right: 0.6rem;
}
.Fans i img{
    width: 100%;
    height: 100%;
}
.Fans span{
    width:1.1rem ;
    height: 1.1rem;
    background-color: #eeeff1;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    font-size: 0.3rem;
    border-radius: 0.1rem;
}
.Fans span em{
    font-weight:bold;
    font-size: 0.34rem;
}
.Fans span a{
    font-size: 0.3rem;
    color: #31bd90;
    font-weight: 900;
}
</style>

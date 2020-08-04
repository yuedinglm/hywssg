<template>
<div>
  <div id="ListBox">
      <p class="ListBox_top">
          <span class="span1">
            <em>你可能感兴趣的书</em>
          </span>
      </p>
      <ul class="ListBox_con">
          <!-- <li>
              <img src="../../static/img/ListenBookNav2pic1.png" alt="">
              <h5>重生之末世为王</h5>
              <h6>牧云文化</h6>
          </li> -->
          <li v-for="(book,index) in newList" :key="index">
              <img :src="book.image">
              <h5>{{book.bookname}}</h5>
              <h6>{{book.author}}</h6>
          </li>
      </ul>
    <div class="DetailsChange" @click="change">
        换一换
    </div>


  </div>
  <!-- 图书更多信息 -->
    <div class="BookMore">
        <p>图书更多信息</p>
        <h6>书旗小说</h6>
        <h5>本书数字版权由作客文化提供，授权本软件使用，制作，发行，若包括不良信息，请及时告知客服</h5>
    </div>
</div>
</template>

<script>
import axios from "axios";

export default {
    name:"DetailsSuspect",
    props:["title","url"],
    data:function () {
        return {
            // books:[],
        qList: [],
        //处理后的list
        newList: [],
        //截取第几组的开始参数
        timeStart: 0,
        //截取第几组的结束参数
        timeEnd: 1,
        //默认为0组
        group: 0,
        //一页展示list数量
        num: 4,
        //点击的次数
        clickNum: 0
        }
    },
    created:function () {
       axios({
          url: this.url,
        }).then((res) => {

          var data = res.data;
          this.qList = data.data;
          // console.log(this.qList)
          this.renderR();
        })
        .catch((err) => {});
    },
    methods: {
      // 换一批
      change() {
        if (this.qList.length > 1 && this.qList.length > this.num) {
          //点击的时候获取分为几组
          this.listlen();
          //每点击一次记录点击次数
          this.autoIncre();
          this.clear();
          this.renderR();
        }
      },
      // 计算数据的长度，共分为几组，如果不能整除则加1
      listlen() {
        var len = this.qList.length;
        this.group = len / this.num;
        if (len % this.num != 0) {
          this.group = parseInt(this.group) + 1;
        }
      },
      //计算将点击次数和开始截取的参数清空, 如果点击此时大于当前数据的组数，则重新开始计数。
      clear() {
        if (this.clickNum > this.group - 1) {
          this.timeStart = 0;
          this.timeEnd = 1;
          this.clickNum = 0;
        }
      },
      //每点击一次，记录次数
      autoIncre() {
        this.clickNum++;
        this.timeStart++;
        this.timeEnd++;
      },
      //截取当前每组的数据
      renderR() {
        this.newList = this.qList.slice(
          this.num * this.timeStart,
          this.num * this.timeEnd
        );
        // console.log(this.newList);
      },
    },

    //获取总数据
  };
</script>

<style scoped>
#ListBox{
   border-top: 0.16rem solid #F8F8F8;
    background-color: #fff;
    width: 100%;
    min-height:3.6rem;
    /* min-height: auto; */
    box-sizing: border-box;
    padding:0 0.3rem;
}
#ListBox .ListBox_top{
    width: 100%;
    height:0.36rem;
    margin-bottom: 0.3rem;
    margin-top: 0.3rem;
    background-color: #fff;
}
#ListBox .ListBox_top .span1,.span2{
    float: left;
}
/* 换一换 */
#ListBox .ListBox_top .span2{
    float: right;
}
#ListBox .ListBox_top .span2 b{
    position: absolute;
    right: 0.3rem;
    width: 0.36rem;
    height: 0.36rem;
}
#ListBox .ListBox_top .span2 b img{
    width: 100%;
    height: 100%;
}
#ListBox .ListBox_top .span2 i{
    position: absolute;
    right: 0.9rem;
    font-size: 0.3rem;
}
#ListBox .ListBox_top img{
    width: 0.42rem;
    height: 0.34rem;
    float: left;
}
#ListBox .ListBox_top em{
    float: left;
    font-size: 0.3rem;
    line-height: 0.36rem;
    font-weight: bold;
}
.ListBox_con{
    width: 100%;
    height: 3.2rem;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.4rem;
    border-bottom: 1px solid #ccc;
}
 .ListBox_con li{
    width: 1.6rem;
    height: 3rem;
    background-color: #fff;

}
#ListBox .ListBox_con li img{
    width:1.6rem;
    height: 2.1rem;
}
#ListBox .ListBox_con li h5{
    width: 100%;
    height:0.58rem;
    color: #000;
    font-size: 0.26rem;
    font-weight: bold;
    margin-top: 0.12rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /* background-color: cyan; */
}
#ListBox .ListBox_con li h6{
    width: 100%;
    height:0.4rem;
    color: #ccc;
    font-size: 0.26rem;
    /* background-color: red; */
    /* 单行文本溢出换行 */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

}
#ListBox .hotCon{
    width: 100%;
    height: 1.7rem;
    /* background-color: darksalmon; */
    margin-top: 0.3rem;
}
.DetailsChange{
    width: 100%;
    height:0.8rem ;
    text-align: center;
    font-size: 0.3rem;
}
.BookMore{
    width: 100%;
    height: 3.3rem;
    box-sizing: border-box;
    padding:0.5rem 0.3rem 3.8rem;
    background-color: #fff;
    border-top: 0.16rem solid #F8F8F8;

}
.BookMore p{
    width: 2.3rem;
    height: 0.5rem;
    /* background-color: pink; */
    font-size: 0.32rem;
    font-weight: 700;
    color: rgb(59, 58, 58);
}
.BookMore h5{
    font-size: 0.26rem;
    line-height: 0.4rem;
}
.BookMore h6{
    font-size: 0.26rem;
    line-height: 0.6rem;
}
</style>

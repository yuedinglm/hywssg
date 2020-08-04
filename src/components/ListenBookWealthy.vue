<template>
  <div id="ListBox">
    <p class="ListBox_top">
      <span class="span1">
        <img src="../assets/img/listen0.png" alt="">
        <em>{{title}}</em>
      </span>
      <span class="span2" @click="change">
        <i>换一换</i>
        <b><img src="../assets/img/b-change_03.png" /></b>
      </span>


    </p>
    <ul class="ListBox_con">
      <li v-for="(book,index) in newList" :key="index" @click="getBookId(book.book_id)">
        <img :src="book.image">
        <h5>{{book.bookname}}</h5>
        <h6>{{book.author}}</h6>
      </li>
      <!-- <li>
              <img src="../../static/img/ListenBookNav2pic2.png" alt="">
              <h5>最佳女婿：老婆放过我 | 都是爽文</h5>
              <h6>看书网精品有声书</h6>
          </li> -->
    </ul>

  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "ListenBookWealthy",
    props: ["title", "url"],
    data: function() {
      return {
        // books: [],
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
        num: 3,
        //点击的次数
        clickNum: 0
      };
    },
    created: function() {
      // console.log(this.url);
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
      getBookId(bookid) {
        this.$router.push({
          name: "BookDetails",
          params: {
            bookid: bookid
          }
        })
      },
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
  #ListBox {
    border-top: 0.16rem solid #F8F8F8;
    background-color: #fff;
    width: 100%;
    min-height: 4.6rem;
    /* min-height: auto; */
    box-sizing: border-box;
    padding: 0 0.3rem;
  }

  #ListBox .ListBox_top {
    width: 100%;
    height: 0.36rem;
    margin-bottom: 0.3rem;
    margin-top: 0.3rem;
    display: flex;
    justify-content: space-between;
    /* background-color: #fff; */
  }

  #ListBox .ListBox_top .span1,
  .span2 {
    /* float: left; */
  }

  /* 换一换 */
  #ListBox .ListBox_top .span2 {
    display: flex;
    justify-content: space-between;
    width: 1.6rem;
    padding-right: 0.2rem;

  }

  #ListBox .ListBox_top .span2 b {
    display: block;
    width: 0.36rem;
    height: 0.36rem;
  }

  #ListBox .ListBox_top .span2 b img {
    width: 100%;
    height: 100%;
  }

  #ListBox .ListBox_top .span2 i {
    font-size: 0.3rem;
  }


  #ListBox .ListBox_top img {
    width: 0.42rem;
    height: 0.34rem;
    float: left;
  }

  #ListBox .ListBox_top em {
    float: left;
    font-size: 0.3rem;
    margin-left: 0.2rem;
    line-height: 0.36rem;
  }

  .ListBox_con {
    width: 100%;
    height: 3.2rem;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    margin-bottom: 0.3rem;
  }

  #ListBox .ListBox_con li {
    width: 2.16rem;
    height: 3.2rem;
    /* background-color: darkorange; */
  }

  #ListBox .ListBox_con li img {
    width: 2.1rem;
    height: 2rem;
  }

  #ListBox .ListBox_con li h5 {
    width: 100%;
    /* height:0.72rem; */
    color: #000;
    font-size: 0.24rem;
    margin-top: 0.12rem;
    /* background-color:pink; */
    /* 多行文本溢出换行 */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  #ListBox .ListBox_con li h6 {
    color: #ccc;
    font-size: 0.24rem;
    /* background-color:red; */
    /* line-height: 0.38rem; */
  }
</style>

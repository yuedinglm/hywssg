<template>
  <div>
    <div class="tit">
      <span class="left">
        <img src="../../assets/img/Vip-V.png">
        <p>{{title}}</p>
      </span>
      <span class="right" @click="change">
        <p>换一换</p>
        <img src="../../assets/img/b-change_03.png" />
      </span>
    </div>
    <div class="list">
      <div class="list-b" v-for="(book,index) in newList" :key="index" @click="getBookId(book.id)">
        <img :src="book.image" />
        <p>{{book.bookname}}</p>
        <p>{{book.author}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "GirlRecommend",
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
        num: 8,
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
      getBookId(bookid){
        this.$router.push({name:"BookDetails",params:{bookid:bookid}})
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
  .tit {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    margin-top: .2rem;
    margin-bottom: .25rem;
    padding-top: .2rem;
  }

  span {
    min-width: 1.62rem;
    height: .33rem;
    line-height: 0.33rem;
    display: flex;
    justify-content: start;
  }

  span p {
    font-size: .32rem;
    color: #28292d;
  }

  .left img {
    width: 0.3rem;
    height: 0.3rem;
    margin: 0 .22rem 0 .4rem;
  }

  .right img {
    width: .33rem;
    height: 0.33rem;
    margin: 0 .4rem 0 .22rem;
  }

  .list {
    width: 100%;
    min-height: 3rem;
    padding: 0 0.34rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .list-b {
    width: 1.55rem;
    margin-bottom: .4rem;
  }

  .list-b img {
    width: 1.55rem;
    height: 2.08rem;
  }

  .list-b p {
    font-size: .24rem;
    margin: .16rem 0;
    color: #323234;
  }

  .list-b p:last-child {
    color: #8a898f;
  }
</style>

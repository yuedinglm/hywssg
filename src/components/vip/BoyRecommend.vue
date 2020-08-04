<template>
  <div>
    <div class="tit">
      <span class="left">
        <img src="../../assets/img/Vip-V.png">
        <p>{{title}}</p>
      </span>
      <span class="right" @click="change">
        <p>换一换</p>
        <img src="../../assets/img/b-change_03.png">
      </span>
    </div>
    <!--    <div class="list">
      <div class="list-b" v-for="(book,index) in books" :key="index" v-if="index<4">
        <img :src="'/static/img/' + book.img" />
        <p>{{book.name}}</p>
        <p>{{book.author}}</p>
      </div>
    </div> -->
    <div class="list_aa">
      <div class="list-a" v-for="(book,index) in newList" :key="index" @click="getBookId(book.id)">
        <div class="list_l">
          <img :src="book.image" />
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
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "BoyRecommends",
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
        num: 4,
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

  .tit span {
    min-width: 1.62rem;
    height: .33rem;
    line-height: 0.33rem;
    display: flex;
    justify-content: start;
  }

  .tit span p {
    font-size: .3rem;
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

  .line {
    width: 100%;
    height: 0.16rem;
    background-color: #f8f8f8;
  }

  .list-a {
    border-top: 2px solid #f8f8f8;
    padding: .4rem 0.34rem;
    display: flex;
    justify-content: space-between;
  }

  .list-a:first-child {
    border-top: none;
  }

  .list_l {
    width: 1.45rem;
    height: 1.92rem;
    border: 1px solid #8a898f;
    border-radius: 5px;
    margin-right: .32rem;
    overflow: hidden;
  }

  .list_r h3 {
    font-size: .3rem;
    padding: .1rem 0 .18rem;
  }

  .list_r .list_intro {
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

  .list_az {
    display: flex;
    justify-content: space-between;
  }

  .list_az span {
    font-size: .24rem;
    padding-top: .12rem;
    color: #8a898f;
  }

  .list_az span i:first-child {
    font-size: .18rem;
    padding: 0.08rem 0.12rem;
    color: #3e8972;
    border: 0.01rem solid #3e8972;
  }

  .list_az span i:last-child {
    font-size: .18rem;
    padding: 0.08rem 0.12rem;
    color: #8a898f;
    border: 0.01rem solid #8a898f;
  }
</style>

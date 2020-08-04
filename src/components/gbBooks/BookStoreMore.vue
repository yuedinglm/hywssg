<template>
    <div class="tit">
          <span class="left">
            <img :src="'/static/img/' + img">
            <!-- <p>精品汇聚</p> -->
            <p>{{title}}</p>
          </span>
          <span class="right">
            <p>查看更多</p>
            <img src="../../assets/img/b-more_03.png">
          </span>
      </div>

</template>
<script>
export default {
  name:"BookStoreMore",
  props:["title","img"]
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
</style>
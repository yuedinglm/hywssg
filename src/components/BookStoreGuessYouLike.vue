<template>
    <div class="tit">
        <span class="left">
          <img src="../assets/img/b-list_03.png">
            <!-- <p>精品汇聚</p> -->
          <p>{{title}}</p>
        </span>
    </div>

</template>
<script>
export default {
  name:"BookStoreGuessYouLike",
  props:["title"]
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
  /* .right{
    padding-left: 0.2rem;
  } */
  .left img{
    width: 0.08rem;
    height: 0.3rem;
  }
</style>
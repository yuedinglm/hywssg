<template>
  <div>
    <div class="footer">
      <span>
        <img src="../assets/img/foot-bookshelf01.png">
        <p>书架</p>
      </span>
      <span>
        <img src="../assets/img/foot-BookCity01.png">
        <p>书城</p>
      </span>
      <span>
        <img src="../assets/img/foot-Vip01.png">
        <p>会员</p>
      </span>
      <span>
        <img src="../assets/img/foot-my01.png">
        <p>我的</p>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BottomNav",

  }
</script>

<style scoped>
  .footer {
    width: 100%;
    height: 1.16rem;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #F2F2F2;
  }
  .footer span{
    text-align: center;
    padding-top: .16rem;
  }
  span img{
    width: .48rem;
    height: .43rem;
  }
  span p{
    padding-top: .1rem;
    font-size: .2rem;
    color: #CCCCCE;
  }
</style>

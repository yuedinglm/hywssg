<template>
  <div>
    <div class="footer">
      <router-link to="/Bookscase" tag="span">
      <span>
        <img :src="this.$route.path=='/Bookscase'?'../../static/img/foot-bookshelf02.png':'../../static/img/foot-bookshelf01.png'">
        <p> 书架</p>
      </span>
      </router-link>
      <router-link to="/" tag="span">
      <span>
        <img :src="this.$route.path=='/'?'../../static/img/foot-BookCity02.png':'../../static/img/foot-BookCity01.png'">
        <p>书城</p>
      </span>
      </router-link>
      <router-link to="/Vip" tag="span">
      <span>
         <img :src="this.$route.path=='/Vip'?'../../static/img/foot-Vip02.png':'../../static/img/foot-Vip01.png'"> 
        <p>会员</p>
      </span>
      </router-link>
      <router-link to="/My" tag="span">
      <span>
        <img :src="this.$route.path=='/My'?'../../static/img/foot-my02.png':'../../static/img/foot-my01.png'">
        <p>我的</p>
      </span>
      </router-link>
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
    z-index: 2;
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

<template>
  <div>
    <div class="nav">
      <router-link to="/All" tag="span">
        <span>
          <img src="../assets/img/b-nav1_03.png">
          <p>分类</p>
        </span>
      </router-link>
      <span>
        <img src="../assets/img/b-nav-5_03.png">
        <p>榜单</p>
      </span>
      <span>
        <img src="../assets/img/b-nav2_03.png">
        <p>听书</p>
      </span>
      <span>
        <img src="../assets/img/b-nav3_03.png">
        <p>免费</p>
      </span>
      <span>
        <img src="../assets/img/b-nav4_03.png">
        <p>完结</p>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BookStoreNav",
  }
</script>

<style scoped>
  .nav {
    padding-top: .16rem;
    width: 100%;
    height: 1.86rem;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-around;
    /* position: fixed;
    bottom: 0; */
    /* border-top: 1px solid #F2F2F2; */
  }

  .footer span {
    text-align: center;
    display: block;
    height: 5rem;
    /* padding-top: 0.26rem; */
  }

  span img {
    width: .65rem;
    height: .72rem;
  }

  span p {
    padding-top: .26rem;
    font-size: .26rem;
    color: #82818c;
    text-align: center;
  }
</style>

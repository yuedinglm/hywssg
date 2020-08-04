<template>
  <div>
      <div class="box">

         <div class="box-1">
          <span>VIP包月俱乐部</span>
         </div>

         <div class="center">
            <div><img src="../assets/img/vip1.png" alt=""></div>
            <div><img src="../assets/img/vip2.png" alt=""></div>
         </div>
      </div>
  </div>
</template>

<script>
  export default {
    name:"VipMonthlyPackage"
  }
</script>

<style scoped>

  .box{
    width: 100%;
    height: 3.16rem;

  }
  .box-1 {
    width: 100%;
    /*  height: .3rem; */
    /* border: 1px solid red; */
    margin-top: .3rem;
    border-left: .08rem solid #07ca98;
    box-sizing: border-box;
  }
  .box-1 span:nth-child(1) {
    font-size: .3rem;
    margin-left: .2rem;
  }
  .center{
    width: 100%;
    height: 2.50rem;
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-around;
    padding-top: .2rem;
    box-sizing: border-box;
  }
  .center img{
    widows: 3.3rem;
    height: 1.95rem;
  }
</style>

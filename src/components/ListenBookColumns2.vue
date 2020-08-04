<template>
<!-- 分栏/两栏 -->
  <div id="ColumnsBox">
      <p><img src="../assets/img/Columns3.png" alt=""></p>
      <p><img src="../assets/img/Columns4.png" alt=""></p>
  </div>

</template>

<script>
export default {
    neme:"ListenBookColumns2"
}
</script>

<style scoped>
    #ColumnsBox{
        width: 100%;
        height:2.3rem;
        background-color: #fff;
       border-top: 0.16rem solid #F8F8F8;
        box-sizing: border-box;
        padding: 0.3rem;
        /* margin-bottom: 2.1rem; */
        display: flex;
        justify-content: space-between;
    }
    #ColumnsBox p{
        width: 3.4rem;
        height: 1.62rem;
    }
</style>
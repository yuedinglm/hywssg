<template>
  <div>

      <div class="box">
         <div class="box1">
          <router-link to="/Bookscase" tag="span">
            <i class="el-icon-arrow-left"></i>
            </router-link>
         </div>
         <div class="box2">
             <h2>气破星河</h2>
             <p>*****</p>
         </div>
      </div>
  </div>
</template>

<script>
  export default {
     name:"BooksPage"
  }
</script>

<style scoped>
  .box{
      background-color: #fff9eb;
      width: 100%;
      height: 13.3rem;
      box-sizing: border-box;
      /* padding-top: .2rem; */
  }
  .box1 {
    width: 100%;
    font-size: .4rem;
    box-sizing: border-box;
    height: .75rem;
    /* border: 1px solid  red; */
    padding-top: .2rem;
  }
  .box2{
    position: absolute;
    top: 4rem;
    width: 100%;
    height: 1rem;
    /* border: 1px solid  red; */
    text-align: center;

  }
    .box2 h2{
      font-size: .4rem;
    }
      .box2 p{
        font-size: .35rem;
      }
</style>

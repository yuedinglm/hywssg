<template>
  <div id="header">
    <ul class="head_con">

    <router-link to="/" tag="span">
      <li><b>精选</b></li>
    </router-link>

    <router-link to="/BookStoreBoy" tag="span">
      <li><b>男生</b></li>
      </router-link>

    <router-link to="/BookStoreGirl" tag="span">
      <li><b>女生</b></li>
     </router-link>
      <router-link to="/ListenBook" tag="span">
          <li><b>听书</b></li>
      </router-link>

      <li><b>出版</b></li>
      <li><b>发现好书</b></li>
      <li><b>漫画</b></li>
      <li><b>全民原创</b></li>
      <i>
        <img src="../../static/img/fdj.png" alt />
      </i>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BookstoreHeader",


};
</script>

<style scoped>
#header {
  z-index: 2;
  width: 100%;
  height: 0.9rem;
  /* background-color: rgb(205, 220, 247); */
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 0 0.9rem 0 0;
  background-color: #fff;
}
#header b {
  width: 1.4rem;
  height: 0.9rem;
  display: block;
  text-align: center;
  font-size: 16px;
  line-height: 0.9rem;
  color: rgb(126, 122, 122);
}
#header .head_con {
  width: 100%;
  height: 100%;
  /* background-color: pink; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 0.1rem;
  overflow-x: auto;
}
#header .head_con li {
  /* background-color: crimson; */
  /* width: 1.4rem;
  height: 0.9rem; */
  transition: all .5s ;
}
#header .head_con li:hover{
  transform:scale(1.5);

}
#header .head_con li:hover b{
   color: black;
}

#header .head_con::-webkit-scrollbar {
  display: none;
}

#header .head_con i {
  width: 0.4rem;
  height: 0.4rem;
  display: block;
  text-align: center;
  font-size: 16px;
  line-height: 0.9rem;
  /* background-color: rgb(15, 14, 14); */
  margin: 0  0.2rem 0 .6rem;
  position: absolute;
  top: 30%;
  right: 0;
}
img {
  width: 100%;
  height: 100%;
}
/* #header::-webkit-scrollbar{
   display: none;
} */
</style>

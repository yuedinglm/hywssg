<template>
  <div>
  <div class=" top">
    <router-link to="/" tag="span">
      <div ><i class="el-icon-arrow-left"></i></div>
     </router-link>
     
      <h2>分类</h2>
    </div>

    <div class="top-1" >
        <ul>
          <router-link to="/All/Mian" tag="li">  
            <li>男生<span></span></li>
          </router-link>  

          <router-link to="/All/Mian1" tag="li">  
            <li>女生<span></span></li>
          </router-link>  

          <router-link to="/All/Mian2" tag="li">  
            <li>出版<span></span></li>
          </router-link> 

          <router-link to="/All/Mian3" tag="li">  
            <li>漫画<span></span></li>
          </router-link> 

        </ul>
    </div>

    <div class="top-2">
      <div class="top-2-1">
        根据阅读兴趣推荐
      </div>
      <div class="top-2-2">
        <span>换一换</span>
        <span><i class="el-icon-refresh"></i></span>
      </div>
    </div>

    <div class="top-3">
         <ul>
         	<li>时空穿梭</li>
          <li>诗歌</li>
          <li>异界大陆</li>
          <li>虚拟网络</li>
         </ul>
    </div>

   <router-view></router-view>

  </div>
</template>

<script>
  export default {
    name:"All",
  }
</script>

<style scoped>
.top{
    width: 100%;
    height: 1.09rem;
    display: flex;
    position: fixed;
    top: 0;
    background-color: white;
}
.top div i{
  font-size: .6rem;
  line-height: 1.09rem;
  margin-left: 0.2rem;
  
}
.top h2{
  width: 100%;
  font-size: 0.4rem;
  font-weight: 100;
  text-align: center;
  line-height: 1.09rem;
  box-sizing: border-box;
  padding-right: 0.8rem;
}
.top-1{
  width: 100%;
  height: .9rem;
  
  font-size: .3rem;
  /* margin-top: 1.09rem; */
  position: fixed;
  top: 1.09rem;
  background-color: white;
}
.top-1 ul{
  widows: 100%;
  display: flex;
  justify-content: space-around;
  /* s */
}

.top-1 li span{
  border-bottom: 8px solid #00c98d;
 /* display: block; */
  display: none;
  margin-top: .4rem;

}
.top-1 li:hover span{
  display: block;
}
.top-1 li:hover{
  color: #00c98d;
}
.top-2{
  width: 100%;
  height: 0.75rem;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}
.top-2-1{
  width: 3rem;
  font-size: 0.25rem;
  line-height: 0.75rem;
  color: #dddddd;
  /* border: 1px solid blue; */
  text-align: center;
}
.top-2-2{
  width: 1.62rem;
  height: 0.75rem;
  /* border: 1px solid blue; */
  display: flex;
  justify-content: space-between;
}
.top-2-2 span{
  line-height: 0.75rem;
  color: #dddddd;
  box-sizing: border-box;
  padding: 0 .15rem;
  font-size: .25rem;
}
.top-3 ul{
  width: 100%;
 /* height: .rem; */
  /* background-color: blue; */
  display: flex;
}
.top-3 ul li{
  /* line-height: 0.2rem; */
  border: 1px solid #dddddd;
  box-sizing: border-box;
  padding: 0.05rem .22rem;
 /* font-size: .25rem; */
  margin-left: .1rem;
  border-radius: .2rem;

}

</style>

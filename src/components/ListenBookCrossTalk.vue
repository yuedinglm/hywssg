<template>
<!-- 精品课及相声评书 -->
  <div id="ListBox">
      
      <p class="ListBox_top">
          <span class="span1">
            <img src="../assets/img/listen0.png" alt="">
            <em>相声评书</em>
          </span>
          <span class="span2">
            <i>查看更多</i>
            <b><img src="../assets/img/more.png" alt="" class="changePic"></b>
          </span>
      </p>
      <ul class="ListBox_con">
          <li>
              <img src="../../static/img/ListenBookNav2pic1.png" alt="">
              <h5>斗罗大陆/一拳战神 江宁林雨真</h5>
              <h6>牧云文化</h6>
          </li>
           <li>
              <img src="../../static/img/ListenBookNav2pic2.png" alt="">
              <h5>最佳女婿：老婆放过我 | 都是爽文</h5>
              <h6>看书网精品有声书</h6>
          </li>
         <li>
              <img src="../../static/img/ListenBookNav2pic3.png" alt="">
              <h5>重生在上：逆徒别乱来|穿书重生</h5>
              <h6>若看有声</h6>
          </li>
          <!-- <li v-for="(book,index) in books" :key="index">
              <img :src="'/static/'+book.img" alt="">
              <h5>{{book.name}}</h5>
              <h6>{{book.firm}}</h6>
          </li> -->
      </ul>
       <ul class="ListBox_con">
          <li>
              <img src="../../static/img/ListenBookNav2pic1.png" alt="">
              <h5>豪门战神/一拳战神 江宁林雨真</h5>
              <h6>牧云文化</h6>
          </li>
           <li>
              <img src="../../static/img/ListenBookNav2pic2.png" alt="">
              <h5>豪门女婿：老婆放过我 | 都是爽文</h5>
              <h6>看书网精品有声书</h6>
          </li>
         <li>
              <img src="../../static/img/ListenBookNav2pic3.png" alt="">
              <h5>萌师在上：逆徒别乱来|穿书重生</h5>
              <h6>若看有声</h6>
          </li>
          <!-- <li v-for="(book,index) in books" :key="index">
              <img :src="'/static/'+book.img" alt="">
              <h5>{{book.name}}</h5>
              <h6>{{book.firm}}</h6>
          </li> -->
      </ul>
  </div>
</template>

<script>
export default {
    name:"ListenBookCrossTalk",
}
</script>

<style scoped>
#ListBox{
    border-top: 0.16rem solid #F8F8F8;
    width: 100%;
    min-height:8.6rem;
    /* min-height: auto; */
    box-sizing: border-box;
    padding:0 0.3rem;
}
#ListBox .ListBox_top{
    width: 100%;
    height:0.36rem;
    margin-bottom: 0.3rem;
    margin-top: 0.3rem;
    background-color: #fff;
}
#ListBox .ListBox_top .span1,.span2{
    float: left;
}
/* 换一换 */
#ListBox .ListBox_top .span2{
    float: right;
}
#ListBox .ListBox_top .span2 b{
    position: absolute;
    right: 0.3rem;
    width: 0.3rem;
    height: 0.3rem;
    margin-top: 0.06rem;
}
#ListBox .ListBox_top .span2 b img{
    width: 100%;
    height: 100%;
}
#ListBox .ListBox_top .span2 i{
    position: absolute;
    right: 0.9rem;
    font-size: 0.24rem;
}


#ListBox .ListBox_top img{
    width: 0.42rem;
    height: 0.34rem;
    float: left;
}
#ListBox .ListBox_top em{
    float: left;
    font-size: 0.3rem;
    margin-left: 0.3rem;
    line-height: 0.36rem;
}

.ListBox_con{
    width: 100%;
    height: 3.2rem;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    margin-bottom: 0.3rem;
}
#ListBox .ListBox_con li{
    width: 2.16rem;
    height: 3.2rem;
    /* background-color: darkorange; */
}
#ListBox .ListBox_con li img{
    width:2.1rem;
    height: 2rem;
}
#ListBox .ListBox_con li h5{
    width: 100%;
    height:0.72rem;
    color: #000;
    font-size: 0.24rem;
    margin-top: 0.12rem;
}
#ListBox .ListBox_con li h6{
    color: #ccc;
    font-size: 0.24rem;
    line-height: 0.38rem;
}
</style>
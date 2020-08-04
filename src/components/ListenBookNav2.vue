<template>
  <div id="box1">
      <ul class="box_con">
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
    name:"ListenBookNav2",
}
</script>

<style scoped>
#box1{
    width: 100%;
    height: 4.4rem;
    /* background-color: cornflowerblue; */
    box-sizing: border-box;
    padding:0.6rem  0.34rem;
}
#box1 .box_con{
    width: 100%;
    height: 3.2rem;
    /* background-color: darkkhaki; */
    display: flex;
    justify-content: space-around;

}
#box1 .box_con li{
    width: 2.16rem;
    height: 3.2rem;
    /* background-color: darkorange; */
}
#box1 .box_con li img{
    width:2.1rem;
    height: 2rem;
}
#box1 .box_con li h5{
    width: 100%;
    height:0.72rem;
    color: #000;
    font-size: 0.24rem;
    margin-top: 0.12rem;
}
#box1 .box_con li h6{
    color: #ccc;
    font-size: 0.24rem;
    line-height: 0.34rem;
}
</style>
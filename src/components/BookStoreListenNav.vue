<template>
  <div>
    <div class="nav">
      <span v-for="(type,index) in types" :key="index">
        <img :src="'/static/img/'+ type.img">
        <p>{{type.name}}</p>
      </span>
    </div>  
  </div>
</template>

<script>
  export default {
    name: "BookStoreNav",
    data:function(){
      return {
        types:[{
          "img":"listenNav1.png",
          "name":"热播榜"
        } ,
        {
          "img":"listenNav2.png",
          "name":"免费小说"
        } ,
        {
          "img":"listenNav3.png",
          "name":"相声评书"
        } ,
        {
          "img":"listenNav4.png",
          "name":"亲子宝贝"
        } 
        ]
      }
    },

  }
</script>

<style scoped>
  .nav {
    border-top: 0.16rem solid #F8F8F8;
    padding-top: 0.36rem;
    width: 100%;
    height: 2.16rem;
    background-color: #fff;
    display: flex;
    box-sizing: border-box;
    justify-content: space-around;
    /* border-top: 1px solid #F2F2F2; */
  }
  .footer span{
    text-align: center;
    
  }
  span img{
    width: 0.86rem;
    height: 0.86rem;
  }
  span p{
    padding-top: .26rem;
    font-size: .26rem;
    color: #82818c;
    text-align: center;
  }
</style>

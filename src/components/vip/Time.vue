<template>
  <div class="Date">
    <p class="data">{{d}}</p>
    <span>天</span>
    <p class="date">{{h}}</p>
    <span>时</span>
    <p class="date">{{m}}</p>
    <span>分</span>
    <p class="date">{{s}}</p>
    <span>秒</span>
  </div>
</template>
<script>
  export default {
    name: 'Time',
    data() {
      return {
        d: '',
        h: '',
        m: '',
        s: '',
      }
    },
    created() {
      this.countTime()
    },
    methods: {
      countTime: function() {
        //获取当前时间
        var date = new Date()
        var now = date.getTime()
        //设置截止时间
        var endDate = new Date('2020-08-08 23:59:59')
        var end = endDate.getTime()
        //时间差
        var leftTime = end - now
        //定义变量 d,h,m,s保存倒计时的时间
        if (leftTime >= 0) {
          this.d = Math.floor(leftTime / 1000 / 60 / 60 / 24) //天数我没用到，暂且写上
          this.h = Math.floor((leftTime / 1000 / 60 / 60) % 24)
          this.m = Math.floor((leftTime / 1000 / 60) % 60)
          this.s = Math.floor((leftTime / 1000) % 60)
        }
        // console.log(this.s)
        //递归每秒调用countTime方法，显示动态时间效果
        setTimeout(this.countTime, 1000)
      },
    },
  }
</script>
<style scoped>
  .Date{
    width: 3.63rem;
    height: .45rem;
    display: flex;
    justify-content: flex-end;
    margin-right: .36rem;
  }
  p{
    display: inline;
    font-size: .24rem;
    color: #000000;
    width: .42rem;
    height: .45rem;
    border: 1px solid #F0F0F0;
    border-radius: 2px;
    box-sizing: border-box;
    text-align: center;
    line-height: .38rem;
    margin: 0 .08rem;
  }
  p:last-of-type{
    color: #CCA884;
  }
  span{
    display: inline;
    font-size: .24rem;
    color: #000000;
    font-weight: bold;
    margin-top: .04rem;
  }
  span:last-of-type{
    color: #CCA884;
  }
</style>

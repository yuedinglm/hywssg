<template>
  <div id="box">
        <div class="hotTxt">
            <b><img src="../assets/img/listen0.png" alt=""></b>
            <h6>本周热点</h6>
        </div>
        <div class="hotCon">
            <p><img src="../assets/img/listenhotpic.png" alt=""></p>
            <div class="hotCon_right">
                <h5>武神至尊</h5>
                <span>【强烈推荐】《武神至尊》人气网络小说，已更新461万字，点击量已高达1279万</span>
                <h4>
                    <i>畅读书城</i>
                    <b>连载</b>
                </h4>
            </div>
        </div>
  </div>

</template>

<script>
export default {
    name:"ListenBookHot",
}
</script>

<style scoped>
#box{
    width: 100%;
    height: 2.86rem;
    /* background-color: rgb(252, 244, 135); */
    padding:0.4rem 0.34rem;
    box-sizing: border-box;
    border-top: 0.16rem solid #F8F8F8;
}
#box .hotTxt{
    width: 100%;
    height: 0.4rem;
    /* background-color: pink; */
     box-sizing: border-box;
}
#box .hotTxt b{
    width: 0.42rem;
    height: 0.34rem;
    display: block;
    float: left;
    margin:0rem 0.2rem 0 0;
    
}
#box .hotTxt b img{
    display: block;
}
#box .hotTxt h6{
    float: left;
    font-size: 0.3rem;
}
#box .hotCon{
    width: 100%;
    height: 1.7rem;
    /* background-color: darksalmon; */
    margin-top: 0.3rem;
}
#box .hotCon p{
    width: 1.68rem;
    height: 1.68rem;
    float: left;
}
#box .hotCon .hotCon_right{
    width: 4.68rem;
    height: 1.68rem;
    float: left;
    /* background-color: deepskyblue; */
    margin-left: 0.3rem;
}
#box .hotCon .hotCon_right h5{
    font-size: 0.3rem;
    color: #000;
}
#box .hotCon .hotCon_right span{
    width: 4.68rem;
    height: 0.7rem;
    margin-top: 0.1rem;
    /* background-color: fuchsia; */
    color: #ccc;
    display: block;
    /* 多行本文溢出省略号显示 */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 0.26rem;
}
#box .hotCon .hotCon_right h4{
    width: 4.68rem;
    height: 0.38rem;
    margin-top: 0.1rem;
    /* background-color: rgb(116, 146, 241); */
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#box .hotCon .hotCon_right h4 i{
    color: #ccc;
    font-size: 0.24rem;
}
#box .hotCon .hotCon_right h4 b{
    width: 0.8rem;
    height: 0.38rem;
    border: 1px solid #86bbf7;
    color: #86bbf7;
    font-size: 0.24rem;
    text-align: center;
    line-height: 0.38rem;
}
</style>
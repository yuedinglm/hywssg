<template>
  <div>
    <div class="center">
      <ul>
        <li @click="jump">
          <h2>都市</h2>
          <img src="../assets/img/all4.png">
          <span>生活</span><span>/</span><span>异能</span>
        </li>
        <li @click="jump">
          <h2>玄幻</h2>
          <img src="../assets/img/all5.png">
          <span>东方玄幻</span><span>/</span><span>异界大陆</span>
        </li>
        <li @click="jump">
          <h2>仙侠</h2>
          <img src="../assets/img/all6.png">
          <span>现代修真</span><span>/</span><span>奇幻修真</span>
        </li>
        <li @click="jump">
          <h2>灵异</h2>
          <img src="../assets/img/all7.png">
          <span>灵异鬼怪</span><span>/</span><span>恐怖惊悚</span>
        </li>
        <li @click="jump">
          <h2>历史</h2>
          <img src="../assets/img/all8.png">
          <span>架空历史</span><span>/</span><span>两宋元明</span>
        </li>
        <li @click="jump">
          <h2>游戏</h2>
          <img src="../assets/img/all9.png">
          <span>虚拟网游</span><span>/</span><span>游戏异界</span>
        </li>
        <li @click="jump">
          <h2>科幻</h2>
          <img src="../assets/img/all10.png">
          <span>未来世界</span><span>/</span><span>进化变异</span>
        </li>
        <li @click="jump">
          <h2>武侠</h2>
          <img src="../assets/img/all4.png">
          <span>传统武侠</span><span>/</span><span>新派武侠</span>
        </li>
        <li @click="jump">
          <h2>奇幻</h2>
          <img src="../assets/img/all1.png">
          <span>四方奇幻</span><span>/</span><span>领土贵族</span>
        </li>
        <li @click="jump">
          <h2>竞技</h2>
          <img src="../assets/img/all2.png">
          <span>电子竞技</span><span>/</span><span>体坛风云</span>
        </li>
        <li @click="jump">
          <h2>其他</h2>
          <img src="../assets/img/all4.png">
          <span>动漫</span><span>/</span><span>影视</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Mian",
    methods: {
      //男生
      jump() {
        let that = this;
        let oH2 = document.getElementsByTagName("h2");
        for (let i = 0; i < oH2.length; i++) {
          oH2[i].onclick = function() {
            if (oH2[i].innerHTML == "都市") {
              that.$router.push({
                name: 'AllCategoriesSon',
                params: {
                  url: "http://123.56.54.23:8000/main/selboys/1/",
                  typename: oH2[i].innerHTML
                }
              });
            } else if (oH2[i].innerHTML == "玄幻") {
              that.$router.push({
                name: 'AllCategoriesSon',
                params: {
                  url: "http://123.56.54.23:8000/main/selboys/2/",
                  typename: oH2[i].innerHTML
                }
              });
            } else if (oH2[i].innerHTML == "仙侠") {
              that.$router.push({
                name: 'AllCategoriesSon',
                params: {
                  url: "http://123.56.54.23:8000/main/selboys/3/",
                  typename: oH2[i].innerHTML
                }
              });
            } else if (oH2[i].innerHTML == "灵异") {
              that.$router.push({
                name: 'AllCategoriesSon',
                params: {
                  url: "http://123.56.54.23:8000/main/selboys/4/",
                  typename: oH2[i].innerHTML
                }
              });
            } else if (oH2[i].innerHTML == "历史") {
              that.$router.push({
                name: 'AllCategoriesSon',
                params: {
                  url: "http://123.56.54.23:8000/main/selboys/5/",
                  typename: oH2[i].innerHTML
                }
              });
            } else if (oH2[i].innerHTML == "游戏") {
              that.$router.push({
                name: 'AllCategoriesSon',
                params: {
                  url: "http://123.56.54.23:8000/main/selboys/6/",
                  typename: oH2[i].innerHTML
                }
              });
            } else if (oH2[i].innerHTML == "科幻") {
              that.$router.push({
                name: 'AllCategoriesSon',
                params: {
                  url: "http://123.56.54.23:8000/main/selboys/7/",
                  typename: oH2[i].innerHTML
                }
              });
            } else if (oH2[i].innerHTML == "武侠") {
              that.$router.push({
                name: 'AllCategoriesSon',
                params: {
                  url: "http://123.56.54.23:8000/main/selboys/8/",
                  typename: oH2[i].innerHTML
                }
              });
            } else if (oH2[i].innerHTML == "奇幻") {
              that.$router.push({
                name: 'AllCategoriesSon',
                params: {
                  url: "http://123.56.54.23:8000/main/selboys/9/",
                  typename: oH2[i].innerHTML
                }
              });
            } else if (oH2[i].innerHTML == "竞技") {
              that.$router.push({
                name: 'AllCategoriesSon',
                params: {
                  url: "http://123.56.54.23:8000/main/selboys/10/",
                  typename: oH2[i].innerHTML
                }
              });
            } else if (oH2[i].innerHTML == "其他") {
              that.$router.push({
                name: 'AllCategoriesSon',
                params: {
                  url: "http://123.56.54.23:8000/main/selboys/11/",
                  typename: oH2[i].innerHTML
                }
              });
            }
          }
        }
      }
    }
  }
</script>

<style scoped>
  .center {
    width: 100%;
    margin-top: .4rem;
    background-color: #ebecf1;

  }

  .center ul {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: .4rem;
    box-sizing: border-box;
  }

  .center ul li {
    width: 3.28rem;
    height: 1.80rem;
    background-color: white;
    margin-left: 0.3rem;
    margin-top: 0.4rem;
    display: flex;
    flex-wrap: wrap;
  }

  .center ul li h2 {
    font-size: 0.4rem;
    font-weight: 300;
    text-align: center;
    margin-top: .2rem;
    width: 1.60rem;
    height: .8rem;
    /* border: 1px solid red; */
    line-height: .8rem;
  }

  .center ul li img {
    width: 1.28rem;
    height: 0.85rem;
    margin-top: 0.4rem;
    /* border: 1px solid red; */
    margin-left: 0.1rem;
  }

  .center ul li span {
    margin-left: 0.2rem;
    color: #dddddd;
    font-size: 0.25rem;
  }
</style>

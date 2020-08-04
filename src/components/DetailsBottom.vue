<template>
  <div id="BookBottom">
    <ul class="BookBottom_con">
      <li class="jump">加书架</li>
      <router-link to="/ReadBook" tag="li">
        <li>开始阅读</li>
      </router-link>
        <li>购买</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "DetailsBottom",
    props: ["id"],
    created: function() {
      // console.log(this.id)
      let that = this;
      this.$nextTick(function() {
        let oLi = document.querySelector(".jump");
        // console.log(oLi);
        oLi.onclick = function() {
          that.$router.push({
            name: "Bookscase",
            params: {
              id: that.id
            }
          })
        }
      })
    }
  }
</script>

<style scoped>
  #BookBottom {
    width: 100%;
    height: 1.75rem;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    padding: 0.32rem 0;
  }

  #BookBottom .BookBottom_con {
    display: flex;
    justify-content: space-between;
    /* background-color: pink; */

  }

  #BookBottom .BookBottom_con li {
    width: 3.6rem;
    height: 1.1rem;
    /* background-color: rgb(243, 194, 129); */
    font-size: 0.36rem;
    text-align: center;
    line-height: 1.2rem;
  }

  #BookBottom .BookBottom_con li:nth-child(2) {
    background-color: #24b282;
    border-radius: 0.15rem;
    color: #fff;
  }
</style>

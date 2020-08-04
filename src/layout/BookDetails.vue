<template>
  <div>
    <DetailsTop />
    <DetailsCon :id="id" />
    <DetailsSuspect url="http://123.56.54.23:8000/main/selects/1/" />
    <DetailsBottom :id="id" />

  </div>
</template>

<script>
  import DetailsTop from "../components/DetailsTop"
  import DetailsCon from "../components/DetailsCon"
  import DetailsSuspect from "../components/DetailsSuspect"
  import DetailsBottom from "../components/DetailsBottom"
  export default {
    name: "BookDetails",
    data: function() {
      return {
        id: ""
      }
    },
    created: function() {
      let id = this.$route.params.bookid;
      this.id = id;
    },
    components: {
      DetailsTop,
      DetailsCon,
      DetailsSuspect,
      DetailsBottom
    }
  }
</script>

<style scoped>

</style>

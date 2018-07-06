<template>
  <div class="rank-list-container">
    <m-head :backbtn="true" :title="title"></m-head>
    <listItem :Lists="ranklist"></listItem>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './headandfoot/header'
  import listItem from './listitem/listitem'
  import util from "../api/util";


  export default {
    components: {
      'm-header': header,
      listItem
    },
    data() {
      return {
        ranklist: {},
        title: ''
      }
    },
    mounted() {
      this.getRanklists()
    },
    methods: {
      getRanklists() {
        Indicator.open()
        getRank(this.$router.params.rankid).then(res => {
          res.data.ranking.books.forEach(list => {
            list.cover = util.staticPath + list.cover;
          })
          this.ranklist = res.data.ranking.books;
          this.title = this.$store.state.RankList.title;
          Indicator.close()
        })
      }
    }
  }
</script>

<style scoped>
  .rank-list-container{
    height: 91vh;
    overflow: hidden;
    padding-bottom: 25px;
  }
</style>

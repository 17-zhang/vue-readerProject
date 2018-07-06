<template>
  <div class="index-male">
    <div class="index-male-title">
      <h3>女生推荐</h3>
    </div>
    <!--推荐内容列表-->
    <ul class="index-male-rank">
      <li class="fix" v-for="(book,key) in femalelist">
        <router-link :to="'/bookinfo/'+books._id">
          <!--列表左侧图片和名次-->
          <div class="book-cover-box">
            <img class="book-cover" v-lazy="book.cover" :title="books.title">
            <div class="book-number">{{key+1}}}</div>
          </div>
          <!--列表右侧书详情-->
          <div class="book-info">
            <p class="book-title">{{books.title}}</p>
            <p class="book-content">{{books.shortIntro}}</p>
            <ul class="book-tags fix">
              <li>{{books.author}}</li>
              <li style="float: right">{{books.majorCate}}</li>
            </ul>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import {lazyload, Indicator} from 'mint-ui'

  export default {
    data() {
      return {}
    },
    props: ['femalelist']
  }
</script>

<style scoped>

</style>

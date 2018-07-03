<template>
  <div class="myfollow-book-container">
    <m-head :tilte=" '我的书架' " :center="true"></m-head>
    <div class="myfollow-book-view">
      <div @clink="$router.push({path:'/myBooks'})" v-show="nobook" class="myfollow-noitem"></div>
    </div>
    <p class="myfollow-book-msg" v-show="nobook">书架空空如也，点击发现</p>
    <ul class="myfollow-book-list">
      <li class="myfollow-book-item" v-for="(book,key) in followbook">
        <a @click="readbook(key)" @touchstart="ontouchstart(key)" @touchmove="ontouchmove" @touchhead="ontouchend">
          <img v-lazy="book.cover">
          <p>{{book.title}}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './headandfooter/header'
  import {MessageBox} from 'mint-ui'
  import util from '../api/util'
  import _ from 'lodash'

  export default {
    data() {
      return {
        nobook: true,
        timer: null,
        followbook: {}
      }
    },
    components: {
      'm-header': header
    },
    created(){
      document.getElementById("foot").style.display="block";
      this.getfollowbook()
    },
    methods: {
      ontouchstart(id) {
        this.timer = setTimeout(() => {
          MessageBox.confirm('确定要这么做？', '取消收藏').then(action => {
            let localShelf = util.getLocalData('myfollowbook') ? util.getLocalData('myfollowbook') : {};
            delete localShelf[id];
            util.setLocalData('myfollowbook', localShelf);
            this.getfollowbook();
          }).catch((err) => {
            return
          })
        }, 1000)
      },
      ontouchmove(){
        clearTimeout(this.timer);
      },
      ontouchend(){
        clearTimeout(this.timer);
      },
      getfollowbook(){
        let localShelf = util.getLocalData('myfollowbook') ? util.getLocalData('myfollowbook'):{};
        if (!_.isEmpty(localShelf)){
          for (let id in localShelf){
            localShelf[id].cover = util.staticPath + localShelf[id].cover;
          }
        }
      }


    },

  }

</script>

<style scoped>

</style>

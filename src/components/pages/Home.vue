<template>
  <div class="home">
      <app-header :headerTitle="'app首页'"></app-header>
      <div class="contents">
        <div class="banners">
            <mt-swipe :auto="4000" v-show="!isLoading">
                <mt-swipe-item v-for="item in banners" :key="item.id"><img :src="item.url" alt=""></mt-swipe-item>
            </mt-swipe>
            <mt-spinner type="snake" class="loading" color="#26a2ff" v-show="isLoading"></mt-spinner>
        </div>
        <div class="article-section">
            <div class="article-bar">推荐阅读</div>
            <div class="load-wrapper">
                <Scroller 
                  @scrolling="scrolling" 
                  @touchEnded="touchEnded" 
                  :pullDownMsg="pullDownMsg"
                  :pullUpMsg="pullUpMsg"
                  :isPullUpLoading="isPullUpLoading"
                  :isPullDownLoading="isPullDownLoading"
                  :isFresh="isFresh"
                >
                  <ul class="article-list" >
                    <li v-for="item in articles " :key="item.id" @click="goInfo(item.id)">
                        <h3>{{item.title}}</h3>
                        <p>{{item.authro}}</p>
                        <p class="artcile-datas">
                          <span class="amount">阅读量：{{item.amount}}</span>
                          <span class="date">创建日期：{{moment(item.createTime).format('YYYY-MM-DD')}}</span>
                        </p>
                    </li>
                  </ul>
                </Scroller>
            </div>
        </div>
      </div>
      <tab-bar :path="$route.path"></tab-bar>
  </div>
</template>

<script>
import { Swipe, SwipeItem,Spinner} from 'mint-ui';
import TabBar from '@/components/common/TabBar.vue'
import AppHeader from '@/components/common/AppHeader.vue';
import Scroller from '@/components/common/Scroller.vue';
import { mapActions,mapState } from 'vuex';
export default {
  name:'home',
  data(){
    return {
      isLoading:true,
      offset:0,
      limited:10,
      page:0,
      pullDownMsg:"下拉刷新",
      pullUpMsg:"上拉加载",
      isPullDownLoading:false,
      isPullUpLoading:false,
      isFresh:false
    }
  },
  components:{
    TabBar,
    AppHeader,
    Scroller
  },
  computed:{
    ...mapState(['banners','articles'])
  },
  methods:{
    ...mapActions(['req_banners','req_articles']),
    getArticle(isRefresh){
      return new Promise((resolve,reject)=>{
          this.req_articles([{offset:this.offset,limited:this.limited},isRefresh]);
          resolve()
      })
    },
    scrolling(pos){
      if(pos.y>60){
          this.isPullDownLoading=true;
      }
    },
    refreshData(){
      setTimeout(()=>{
          this.isPullDownLoading=false;
          this.isFresh=true;
          this.page=0;
          this.offset=this.page*this.limited;
          this.getArticle(true).then(()=>{
              setTimeout(()=>{
                this.isFresh=false;
              },1000)
          })     
      },1000)
    },
    loadMore(){
      this.isPullUpLoading=true;
      this.page++;
      this.offset=this.page*this.limited;
      setTimeout(()=>{
        this.getArticle().then(()=>{
            setTimeout(()=>{
              this.isPullUpLoading=false;
            },1000)
        }) 
      },1000)
    },
    touchEnded(pos,scroll){
      if(pos.y>60){
          this.refreshData();
      }else if(pos.y<scroll.maxScrollY-30){
          this.loadMore();
      }
    },
    goInfo(id){
      this.$router.push(`/home/articleInfo/${id}`)
    }
  },
  created(){
    this.getArticle();
    this.req_banners([()=>{
      setTimeout(()=>{
          this.isLoading=false;
      },1500)
      
    }]);
  }
}
</script>
<style lang="scss" scoped>
.home{
  height: 100%;
  .banners{
    height: 10rem;
  }
  .loading{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .article-section{
    height:calc(100% - 10rem);
    .article-bar{
      padding:0 .5rem;
      box-sizing: border-box;
      background: #26a2ff;
      font-size: .8rem;
      color: #fff;
      height: 2rem;
      line-height: 2rem;
    }
    .load-wrapper{
      position: relative;
      height: calc(100% - 2rem);
      .article-list{
        padding: .5rem;
        box-sizing: border-box;
        margin-top: .8rem;
        li{
          margin-bottom: .5rem;
          padding-bottom: .3rem;
          border-bottom: 1px dashed #e0e0e0;
          h3{
            font-weight: normal;
            color: #000;
            font-size: .8rem;
            line-height: 1rem;
            margin-bottom: .3rem;
          }
          .artcile-datas{
            line-height: 1.25rem;
            display: flex;
            .amount{
              flex: 2;
            }
          }
        }
      }
    }
  }
}
</style>
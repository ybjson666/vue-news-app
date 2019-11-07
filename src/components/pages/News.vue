<template>
  <div class="news">
      <app-header :headerTitle="'新闻公告'"></app-header>
      <div class="contents">
        <div class="news-wrapper">
            <Scroller
              @scrolling="scrolling" 
              @touchEnded="touchEnded" 
              :pullDownMsg="pullDownMsg"
              :pullUpMsg="pullUpMsg"
              :isPullUpLoading="isPullUpLoading"
              :isPullDownLoading="isPullDownLoading"
              :isFresh="isFresh"
            >
              <ul class="news-list">
                  <li v-for="item in news" :key="item.id" @click="seekInfo(item.id)">
                    <div class="news-pic">
                      <img :src="item.pic" alt="">
                    </div>
                    <div class="news-content">
                        <h2>{{item.title}}</h2>
                        <p class="news-brief">{{item.brief}}</p>
                        <p class="news-datas">
                          <span class="amount">游览量：{{item.amount}}</span>
                          <span class="addTime">日期：{{moment(item.addTime).format('YYYY-MM-DD')}}</span>
                        </p>
                    </div>
                  </li>
              </ul>
            </Scroller>
        </div>
      </div>
      <tab-bar :path="$route.path"></tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/common/TabBar.vue'
import AppHeader from '@/components/common/AppHeader.vue'
import Scroller from '@/components/common/Scroller.vue'
import { mapState,mapActions} from 'vuex'

export default {
  name:'news',
  data(){
    return {
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
    ...mapState(['news'])
  },
  methods:{
    ...mapActions(['req_news']),
    getNews(isRefresh){
      return new Promise((resolve,reject)=>{
          this.req_news([{offset:this.offset,limited:this.limited},isRefresh]);
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
          this.getNews(true).then(()=>{
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
        this.getNews().then(()=>{
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
    seekInfo(id){
      this.$router.push(`/news/newsInfo/${id}`)
    }
  },
  created(){
    this.getNews();
  }
}
</script>
<style lang="scss" scoped>
.news{
  height: 100%;
  .loading{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .news-wrapper{
    height: 100%;
    position: relative;
    .news-list{
      padding: .5rem;
      box-sizing: border-box;
      li{
        margin-bottom: .5rem;
        box-shadow:  0 4px 4px #e0e0e0;
        border-radius: 4px;
        padding: .3rem;
        box-sizing: border-box;
        display: flex;
        .news-pic{
          width: 80px;
          height: 60px;
          margin-right: .5rem;
          border-radius: 4px;
          overflow: hidden;
          img{
            display: block;
            margin: 0;
            height: 100%;
          }
        }
        .news-content{
          flex: 1;
          h2{
            font-size: .75rem;
            font-weight: normal;
            color: #333;
            margin-bottom: .1rem;
          }
           p{
              color: #999;
            }
            .news-datas{
              margin-top: .1rem;
              display: flex;
              .addTime{
                flex: 1.5;
                text-align: right;
              }
              .amount{
                flex: 1;
              }
            }
        }
      }
    }
  }
}
</style>
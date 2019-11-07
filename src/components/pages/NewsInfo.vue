<template>
  <div class="news-info">
      <app-header :headerTitle="'新闻详情'">
          <span class="return-btn" @click="goBack">返回</span>
      </app-header>
      <div class="contents">
          <Detail :detailInfo="newsInfo"/>
      </div>
      <tab-bar :path="$route.path"></tab-bar>
  </div>
</template>

<script>
import Detail from '@/components/common/Detail.vue'
import TabBar from '@/components/common/TabBar.vue'
import AppHeader from '@/components/common/AppHeader.vue';
import { mapState,mapActions } from 'vuex'
export default {
  name:'newsInfo',
  data(){
    return {
        newsId:""
    }
  },
  computed:{
      ...mapState(['newsInfo'])
  },
  methods:{
      ...mapActions(['req_newsInfo']),
      goBack(){
          this.$router.history.go(-1);
      }
  },
  created(){
      this.newsId=this.$router.history.current.params.newsId;
      this.req_newsInfo(this.newsId);
  },
  components:{
      Detail,
      TabBar,
      AppHeader
  }
}
</script>
<style lang="scss" scoped>
.news-info{
    height: 100%;
    .return-btn{
        position: fixed;
        left: .5rem;
        top:0;
        display: block;
        line-height: 2rem;
        z-index: 50;
        color: #fff;
    }
}
</style>
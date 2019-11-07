<template>
  <div class="article-info">
      <app-header :headerTitle="'文章详情'">
          <span class="return-btn" @click="goBack">返回</span>
      </app-header>
      <div class="contents">
          <Detail :detailInfo="artiInfo"/>
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
  name:'articleInfo',
  data(){
    return {
        artiId:""
    }
  },
  computed:{
      ...mapState(['artiInfo'])
  },
  methods:{
      ...mapActions(['req_artiInfo']),
      goBack(){
          this.$router.history.go(-1);
      }
  },
  created(){
      this.artiId=this.$router.history.current.params.articleId;
      this.req_artiInfo(this.artiId);
  },
  components:{
      Detail,
      TabBar,
      AppHeader
  }
}
</script>
<style lang="scss" scoped>
.article-info{
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
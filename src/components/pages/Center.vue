<template>
  <div class="center">
      <div class="contents">
        <div class="center-header">
            <div class="header-pic"><img :src="userInfo.avatar" alt=""></div>
            <div class="info-wrapper">{{userInfo.nickname}}</div>
        </div>
        <div class="center-content">
          <div class="rows">
            <span class="label-icon"><img src="../../assets/images/zuji.png" alt=""></span>
            <span class="rows-text">足迹</span>
          </div>
          <div class="rows">
            <span class="label-icon"><img src="../../assets/images/project.png" alt=""></span>
            <span class="rows-text">项目</span>
          </div>
          <div class="rows">
            <span class="label-icon"><img src="../../assets/images/tiezi.png" alt=""></span>
            <span class="rows-text">帖子</span>
          </div>
          <div class="rows">
            <span class="label-icon"><img src="../../assets/images/notice.png" alt=""></span>
            <span class="rows-text">通知</span>
          </div>
          <div class="rows">
            <span class="label-icon"><img src="../../assets/images/account.png" alt=""></span>
            <span class="rows-text">账号</span>
          </div>
          <div class="rows" @click="loginOut">
            <span class="label-icon"><img src="../../assets/images/exit.png" alt=""></span>
            <span class="rows-text">注销</span>
          </div>
        </div>
      </div>
      <tab-bar :path="$route.path"></tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/common/TabBar.vue'
import AppHeader from '@/components/common/AppHeader.vue'
import { mapState } from 'vuex';
export default {
  name:'center',
  components:{
    TabBar,
    AppHeader
  },
  computed:{
    ...mapState(['userInfo'])
  },
  methods:{
    loginOut(){
        localStorage.removeItem('token');
        localStorage.removeItem('userInfo');
        this.$router.replace('/login');
    }
  }
}
</script>
<style lang="scss" scoped>
.center{
  height: 100%;
  .center-header{
    height: 10rem;
    background: #ee534f;
    padding: .5rem;
    box-sizing: border-box;
    position: relative;
    .header-pic{
      position: absolute;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      overflow: hidden;
      top:2rem;
      left: 50%;
      margin-left: -2rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .info-wrapper{
      width:100%;
      left: 0;
      text-align: center;
      top:7rem;
      color: #fff;
      font-size: .8rem;
      position: absolute;
    }
  }
  .center-content{
    padding: 1rem;
    box-sizing: border-box;
    .rows{
      margin-bottom: .8rem;
      display: flex;
      padding-bottom: .5rem;
      border-bottom: 2px solid #e0e0e0;
      .label-icon{
        width: 1.2rem;
        height: 2rem;
        line-height: 2rem;
        margin-right: .8rem;
        img{
          width: 100%;
          vertical-align: middle;
        }
      }
      .rows-text{
          line-height: 2rem;
          font-size: .8rem;
      }
      &:last-child{
        border: none;
      }
    }
  }
}
</style>
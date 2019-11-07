<template>
  <div class="tab-bar">
    <mt-navbar v-model="selected">
        <mt-tab-item id="1">
            <router-link to="/home">首页</router-link>
        </mt-tab-item>
        <mt-tab-item id="2">
            <router-link to="/news">新闻</router-link>
        </mt-tab-item>
        <mt-tab-item id="3">
            <router-link to="/center">个人中心</router-link>
        </mt-tab-item>
    </mt-navbar>
  </div>
</template>

<script>
import { Navbar, TabItem } from 'mint-ui';
export default {
  name:'tabBar',
  data(){
      return{
          selected:""
      }
  },
  props:['path']
}
</script>
<style lang="scss" scoped>
.tab-bar{
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    height: 50px;
    .router-link-active{
        color: #fff !important;
    }
}

</style>
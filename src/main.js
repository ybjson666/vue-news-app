
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import store from './store'
import rem from './utils/rem';
import moment from 'moment'//导入文件 

Vue.prototype.moment = moment;//赋值使用

Vue.use(Mint);
Vue.config.productionTip = false;

/**
 * 使用rem
 */
rem(document,window);

/*
  登录拦截
*/
router.beforeEach((from, to, next) => {

   if (from.meta.requireAuth) { // 判断跳转的路由是否需要登录
    
       if (store.state.token) { // vuex.state判断token是否存在
           next() // 已登录
       } else {
           next({
               path: '/login',
               query: {redirect: from.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
           })
       }
   } else {
      next()
   }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

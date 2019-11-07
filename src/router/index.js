import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


export default new Router({
  mode:'hash',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: ()=>import("@/components/pages/Home.vue"),
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/news',
      name: 'News',
      component: ()=>import("@/components/pages/News.vue"),
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/news/newsInfo/:newsId',
      name: 'NewsInfo',
      component: ()=>import("@/components/pages/NewsInfo.vue"),
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/home/articleInfo/:articleId',
      name: 'NewsInfo',
      component: ()=>import("@/components/pages/ArticleInfo.vue"),
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/center',
      name: 'Center',
      component: ()=>import("@/components/pages/Center.vue"),
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: ()=>import("@/components/pages/Login.vue"),
    },
    {
      path:'/*',
      redirect:'/home',
      component:()=>import("@/components/pages/Home.vue"),
      meta:{
        requireAuth:true
      }
    }
  ]
})



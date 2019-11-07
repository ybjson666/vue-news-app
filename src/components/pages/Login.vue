<template>
  <div class="login">
        <mt-header fixed title="用户登录"></mt-header>
        <div class="container">
            <form>
              <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
              <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
              <div class="login-row">
                  <mt-button type="primary" class="login-btn" @click="login">登录</mt-button>
              </div>
            </form>
        </div> 
  </div>
</template>

<script>
import { Header,Button,Toast  } from 'mint-ui';
import {mapActions} from 'vuex';
export default {
  name:'login',
  data(){
    return {
      username:"",
      password:""
    }
  },
  methods:{
    ...mapActions(['req_login']),
    login(){
      this.req_login([{username:this.username,password:this.password},()=>{
        let path=this.$router.history.current.query.redirect;
        Toast({
            message: '登录成功',
            iconClass: 'mintui mintui-field-warning'
        })
        setTimeout(()=>{
            if(path){
                this.$router.replace(path)
            }else{
            
                this.$router.push('/home')
            }
        },1500)
        
      }]);
    }
  },
  created(){},
  mounted(){
    console.log()
  }
}
</script>
<style lang="scss" scoped>
.login{
  
  .container{
    padding-top: 2rem;
    .login-row{
      padding: 0 .5rem;
      box-sizing: border-box;
      margin-top: 1rem;
      .login-btn{
      width: 100%;
      }
    }
    
  }
}
</style>
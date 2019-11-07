<template>
  <div class="app-header">
      <mt-header fixed :title="headerTitle" class="headers"></mt-header>
      <slot></slot>
  </div>
</template>

<script>
import { Header } from 'mint-ui';
export default {
  name:'appHeader',
  data(){
    return {
    }
  },
  props:['headerTitle'],
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.app-header{
    height: 40px;
    .headers{
        font-size: .8rem;
    }
}
</style>
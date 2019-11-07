<template>
  <div id="app">
      <transition name="skews">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </transition>
  </div>
</template>

<script>
import '@/assets/css/reset.css'
export default {
  name: 'App',
  created(){
    // document.body.removeChild(document.getElementById('Loading'))
  }
}
</script>



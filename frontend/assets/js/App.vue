<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  components:{
      appHeader : require("./components/Header.vue"),
      appFooter : require("./components/Footer.vue"),
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>

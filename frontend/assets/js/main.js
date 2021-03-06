import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from "./routes"

Vue.use(VueRouter)

Vue.config.devtools = true

const router = new VueRouter({
    mode: "history",
    routes // routes: routes の短縮表記
})

router.beforeEach((to,from,next)=>{
    window.scroll(0,0)
    next();
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

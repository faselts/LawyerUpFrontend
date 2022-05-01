import 'mutationobserver-shim'
import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueRouter from'vue-router'
// import PageNotFound from './pages/PageNotFound.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Works from './pages/Works.vue'
import Contactus from './pages/Contactus.vue'
import store from './store'



Vue.use(VueRouter)

const routes=[
  {path:'/',component:Home},
  {path:'/about',component:About},
  {path:'/works',component:Works},
  {path:'/contactus',component:Contactus},
  // {path:'*', component:PageNotFound}
]
const router = new VueRouter({
  routes
})
Vue.config.productionTip = false

new Vue({
  store,
  router:router,
  render: h => h(App),
}).$mount('#app')

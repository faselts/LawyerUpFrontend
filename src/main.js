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
import Lawyer from './pages/Lawyer.vue'
import store from './store'



Vue.use(VueRouter)

const routes=[
  {path:'/',
  name:'Home',
  component:Home},
  {path:'/about',
  name:'About',
  component:About,
  props: (route) => route.params},
  {path:'/works',
  name:'Works',
  component:Works,
  props: (route) => route.params},
  {path:'/lawyer',
  name:'Lawyer',
  component:Lawyer},
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

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App'
// import router from './router'
import { scrollThere, throttledOnScroll, stopEverything } from './helpers/scrolling'
import { throttledOnSwipe } from './helpers/swiping'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import Hammer from 'hammerjs'

Vue.use(BootstrapVue)
Vue.config.productionTip = false


Vue.prototype.scrollThere = scrollThere

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})





window.document.addEventListener("scroll", stopEverything)
window.document.addEventListener("DOMMouseScroll", stopEverything)
throttledOnScroll()
throttledOnSwipe()
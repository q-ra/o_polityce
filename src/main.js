// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App'
// import router from './router'
import { scrollThere, throttledOnScroll } from './helpers/scrolling'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false


Vue.prototype.scrollThere = scrollThere

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  template: '<App/>',
  components: { App }
})

function stopEverything(e) {
  e.preventDefault()
  e.stopPropagation()
  console.log("WOB")
}
window.document.addEventListener("scroll", stopEverything)
window.document.addEventListener("DOMMouseScroll", stopEverything)
throttledOnScroll()
// window.document.addEventListener("mousewheel", stopEverything)
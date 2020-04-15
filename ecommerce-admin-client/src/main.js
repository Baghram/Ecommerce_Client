import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { Slide } from 'vue-burger-menu'
import Toasted from 'vue-toasted'
import VueProgressBar from 'vue-progressbar'

Vue.use(Toasted, {
  position: 'top-right',
  duration: 3000,
  type: 'info',
  theme: 'outline'
})
Vue.use(VueProgressBar, {
  color: '#0bd2d9',
  failedColor: '#ff3300',
  thickness: '3%',
  transition: {
    speed: '0.001s',
    opacity: '0.2s',
    termination: 800
  },
  autoRevert: true,
  location: 'bottom',
  position: 'absolute',
  inverse: true
})
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Slide)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

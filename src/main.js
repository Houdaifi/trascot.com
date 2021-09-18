import Vue from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'
import VueCarousel from 'vue-carousel'

import './plugins/font-awesome.js'

Vue.config.productionTip = false
Vue.use(VueCarousel)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

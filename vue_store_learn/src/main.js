import Vue from 'vue'
import App from './App.vue'
import VueResource from 'VueResource'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
Vue.use(VueResource)

new Vue({
  VueResource,
  render: h => h(App),
}).$mount('#app')

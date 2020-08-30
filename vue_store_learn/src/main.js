import Vue from 'vue'
import App from './App.vue'
// import VueResource from 'vue-resource'

import {store} from "./store/store";

// import Vuex from 'vuex';
// Vue.use(Vuex);

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
// Vue.use(VueResource)


new Vue({
  render: h => h(App),
  store
}).$mount('#app')

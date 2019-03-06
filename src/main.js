import Vue from 'vue'
import App from './App.vue'
import '@leanix/reporting'

/* global leanIX object */

Vue.prototype.$lx = lx

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

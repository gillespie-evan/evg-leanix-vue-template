import Vue from 'vue'
import App from './App.vue'
import '@leanix/reporting'
import VueGoogleCharts from 'vue-google-charts'

/* global lx */
Vue.prototype.$lx = lx

Vue.use(VueGoogleCharts)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

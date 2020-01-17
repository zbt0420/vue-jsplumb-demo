import Vue from 'vue'
import App from './App.vue'
import router from './router'
import jsPlumb from 'jsplumb'

Vue.config.productionTip = false

Vue.prototype.$jsPlumb = jsPlumb.jsPlumb

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

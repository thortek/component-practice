import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.directive('pop', {
  bind: function (el, binding, vnode) {
    el.style.position = 'fixed'
    el.style.right = binding.value + 'px'
  }
})

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

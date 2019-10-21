import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.directive('box-shadow', {
  bind(el, binding) {
    let blur = 0
    if (binding.modifiers['blur']) {
      blur = 5
    }
    if (binding.arg === 'offset') {
      el.style.boxShadow = `3px ${binding.value}px ${blur}px #222`
    } else {
      el.style.boxShadow = `6px 6px 12px #666`
    }
  }
})

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

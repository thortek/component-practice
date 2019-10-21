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
      el.style.boxShadow = `0px ${binding.value}px ${blur}px #222`
    } else {
      el.style.boxShadow = `5px 5px 5px #666`
    }
  }
})


// Register a global custom directive called `v-focus`
Vue.directive('focus', {
  // When the bound element is inserted into the DOM...
  inserted: function (el) {
    // Focus the element
    el.focus()
  }
})


new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
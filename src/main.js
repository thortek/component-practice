import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.directive('background',{
  bind(el, binding){
    if(binding.arg === 'dark'){
      el.style.background = `#333`
    } else(el.style.background = `#999`

    )
  }
})

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

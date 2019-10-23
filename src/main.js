import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.directive('highlight', {
  bind(el, binding) {
    var colors = ['blue', 'yellow', 'green', 'red']
    var currentColor = 0

    function changeColor() {
      --currentColor
      if(currentColor < 0) {
        currentColor = colors.length - 1
      }
      el.style.color = colors[(currentColor + 1) % colors.length]
    }
    setInterval(changeColor, 1000)
  }
})

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

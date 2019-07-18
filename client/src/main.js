import Vue from 'vue'

import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'

//bootstrapcss
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//leaflet css
import 'leaflet/dist/leaflet.css'

Vue.use(BootstrapVue);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

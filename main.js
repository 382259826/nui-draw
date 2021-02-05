import Vue from 'vue'
import App from './App'
import Hwtdraw from './components/hwt-draw/hwt-draw.vue'
Vue.component('hwt-draw',Hwtdraw)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

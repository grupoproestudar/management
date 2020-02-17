import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'

import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'

import { auth } from './data/firebase'
import { store } from './store'

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'font-awesome/css/font-awesome.css'

Vue.use(VueChartkick, {adapter: Chart})

Vue.config.productionTip = false

Vue.filter('resume', function (value) {
  if (!value) return "";
  value = value.toString();
  return value.length > 30 ? value.substring(0, 30) + "..." : value;
})


let app
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      store,
      render: h => h(App)
    })
  }
})
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

function formatterDateTime () {
  var date = new Date()
  var month = date.getMonth() + 1
  var datetime = date.getFullYear() + '' + (month >= 10 ? month : '0' + month) + '' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + '' + (date.getHours() < 10 ? ('0' + date.getHours()) : date.getHours()) + '' + (date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes()) + '' + (date.getSeconds() < 10 ? ('0' + date.getSeconds()) : date.getSeconds())
  return datetime
}
let instance = axios.create({
  timeout: 5000,
  params: {
    showapi_timestamp: formatterDateTime(),
    showapi_appid: '32426',
    showapi_sign: '57262c9253cf4d15bb62e9e4729148b9'
  }
})

Vue.config.productionTip = false

Vue.prototype.$http = instance

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})

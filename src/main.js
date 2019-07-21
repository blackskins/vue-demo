// 这是入口文件
console.log('ok')

import Vue from 'vue'

// 按需导入mint-ui 
import { Header } from 'mint-ui'
Vue.component(Header.name,Header)

// 导入MUI的底部切换
import './lib/mui/css/mui.min.css'


// 导入 App 根组件
import app from './App.vue'

var vm = new Vue({
  el:'#app',
  render: c=>c(app)
})
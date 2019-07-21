// 这是入口文件
console.log('ok')

import Vue from 'vue'

//1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)
// 1.3导入自己的router.js路由模块
import router from './router.js'


// 2.1导入 vue-resource 
import VueSource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueSource)

// 按需导入mint-ui 
import { Header,Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 导入MUI的底部切换
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


// 导入 App 根组件
import app from './App.vue'

var vm = new Vue({
  el:'#app',
  render: c=>c(app),
  router //挂载路由对象在vm实例上
})
import VueRouter from 'vue-router'

// 导入路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'


// 创建路由对象
var router = new VueRouter({
  routes:[//配置路由规则
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:HomeContainer
    },
    {
      path:'/member',
      component:MemberContainer
    },
    {
      path:'/shopcar',
      component:ShopcarContainer
    },
    {
      path:'/search',
      component:SearchContainer
    }
  ],
  linkActiveClass:'mui-active',//覆盖默认的路由高亮的类，默认的类叫做router-link-active
})

export default router
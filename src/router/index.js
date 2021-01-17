import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//声明vue路径
const template = () => import('@blog/common/Template.vue')



// 配置路由和组件的映射关系
const routes = [{
  path: '/blog',
  component: template
}]

export default new Router({
  routes,
  mode: 'history'
})

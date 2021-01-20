import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//声明vue路径
const template = () => import('@blog/common/Template.vue')
const bolgChildred = [
  {
    path: '/ArrayList/:title',
    component: () => import('@blog/JDK/collection/ArrayList.vue')
  }
]


// 配置路由和组件的映射关系
const routes = [{
  path: '/blog',
  component: template,
  children: bolgChildred
}]

export default new Router({
  routes,
  mode: 'history'
})

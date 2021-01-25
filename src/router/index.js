import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//声明vue路径
const template = () => import('@blog/common/Template.vue')
const bolgChildred = [
  {
    path: '/ArrayList',
    component: () => import('@blog/JDK/collection/ArrayList.vue')
  },
  {
    path: '/LinkedList',
    component: () => import('@blog/JDK/collection/LinkedList.vue')
  },
  {
    path: '/Vector',
    component: () => import('@blog/JDK/collection/Vector.vue')
  },
  {
    path: '/explain',
    component: () => import('@blog/common/Explain.vue')
  },
  {
    path: '/cowList',
    component: () => import('@blog/JDK/collection/CopyOnWriteArrayList.vue')
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

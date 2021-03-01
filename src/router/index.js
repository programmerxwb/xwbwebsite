import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import ArrayList from '@blog/JDK/collection/ArrayList.vue'
import LinkedList from '@blog/JDK/collection/LinkedList.vue'
import Vector from '@blog/JDK/collection/Vector.vue'
import Explain from '@blog/common/Explain.vue'
import CopyOnWriteArrayList from '@blog/JDK/collection/CopyOnWriteArrayList.vue'
//声明vue路径
const template = () => import('@blog/common/Template.vue')
const bolgChildred = [
  {
    path: '/ArrayList',
    component: ArrayList
  },
  {
    path: '/LinkedList',
    component: LinkedList
  },
  {
    path: '/Vector',
    component: Vector
  },
  {
    path: '/explain',
    component: Explain
  },
  {
    path: '/cowList',
    component: CopyOnWriteArrayList
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

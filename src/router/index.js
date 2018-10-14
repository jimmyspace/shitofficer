import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('../views/Home.vue')
const Adoption = () => import('../views/adoption/Index.vue')
const Mate = () => import('../views/mate/Index.vue')

//线下课程结束
export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', component: Home},
      { path: '/adoption', component: Adoption },
      { path: '/date', component: Mate}
    ]
  })
}

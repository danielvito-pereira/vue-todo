import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Tarefas',
    component: () => import( '../views/Tarefas.vue')
  },
  {
    path: '/about',
    name: '/sobre',

    component: () => import( '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

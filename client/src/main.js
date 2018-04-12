import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Homepage from './views/Homepage.vue'
import Users from './views/Users.vue'
import Notes from './views/Notes.vue'
import Login from './views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Homepage',
    component: Homepage
  },
  {
    path:'/Admin',
    name:'Users',
    component: Users
  },
  {
    path:'/notes',
    name:'Notes',
    component: Notes
  },
  {
    path:'/login',
    name:'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

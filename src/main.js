
import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import Listing from './views/Listing'
import BookView from './views/BookView'

import './assets/css/global.css';

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'Listing', component: Listing },
    { path: '/books/:id', name: 'BookView', component: BookView, props: true }
]

const router = new VueRouter({
    routes
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})

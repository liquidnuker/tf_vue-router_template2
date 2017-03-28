import Vue from 'vue'
import VueRouter from 'vue-router'

import routerLinks from './links.vue'

import Home from './Home.vue'
import About from './About.vue'
import Contact from './Contact.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/about',
  component: About
},
{
  path: '/contact',
  component: Contact
}];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(routerLinks)
});




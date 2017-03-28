import Vue from 'vue'
import VueRouter from 'vue-router'

import routerLinks from './vue-components/links.vue'

import Home from './vue-components/Home.vue'
import About from './vue-components/About.vue'
import Contact from './vue-components/Contact.vue'

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




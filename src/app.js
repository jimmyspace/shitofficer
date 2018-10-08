import Vue from 'vue'
import App from './App.vue'
import { createStore } from './store'
import { createRouter } from './router'
import { sync } from 'vuex-router-sync'
import titleMixin from './util/title'
import keywordsMixin from './util/keywords'
import descriptionMixin from './util/description'
import * as filters from './util/filters'

import axios from 'axios'

import GLOBAL_PATCH from './util/GLOBAL.js'

//只能在浏览器环境使用
if (process.env.VUE_ENV == 'client') {
  const particlesJS = require('particles.js') 
  Vue.use(particlesJS)
}

Vue.prototype.$http = axios
// mixin for handling title
Vue.mixin(titleMixin)
Vue.mixin(keywordsMixin)
Vue.mixin(descriptionMixin)

Vue.prototype.GLOBAL_PATCH = GLOBAL_PATCH

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
export function createApp () {
  // create store and router instances
  const store = createStore()
  const router = createRouter()

  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router)

  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return { app, router, store }
}

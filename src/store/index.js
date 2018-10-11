import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import BASE_URL from '~src/api/index.js'

import ADOPTION from './adoption/index.js'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
  	modules: {
  	  ADOPTION: ADOPTION
  	},
    state: {

    },
    mutations: {
      
    },
    actions: {
      
    }
  })
}

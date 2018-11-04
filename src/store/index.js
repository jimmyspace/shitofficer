import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import BASE_URL from '~src/api/index.js'

import HOME from './home/index.js'
import ADOPTION from './adoption/index.js'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
  	modules: {
  	  ADOPTION: ADOPTION,
      HOME: HOME
  	},
    state: {
      background_color: '',//背景主题色
    },
    mutations: {
      change_background_color(state, proload){
        state.background_color = proload
      }
    },
    actions: {
      
    }
  })
}

import home_list from '~src/api/home.js'
const HOME_DATA = {
  state: {
  	home_list: home_list//⌚️列表
  },
  mutations: {
  	change_home_list(state, proload){
  	  state.home_list = proload
  	}
  }
}

export default HOME_DATA
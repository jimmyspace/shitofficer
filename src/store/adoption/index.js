import list from '~src/api/adoption.js'
const ADOPTION = {
  state: {
  	list: list//宠物列表
  },
  mutations: {
  	change_list(state, proload){
  	  state.list = proload
  	}
  }
}

export default ADOPTION
/**
 * Created by Chris on 17/5/8.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import broadbandailure from './modules/broadbandailure'
import getters from './getters'


Vue.use(Vuex)
const store = new Vuex.Store({
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
  modules: {
    broadbandailure: broadbandailure
  }
})

export default store

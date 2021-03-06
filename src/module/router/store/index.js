import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  title: 'Router',
  activeTab: "tab1"
}

export default new Vuex.Store({
  state
})
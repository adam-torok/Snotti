import Vue from 'vue'
import Vuex from 'vuex'
//import notes from './modules/notes'
import user from './modules/user'
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    //notes,
    user
  },
})
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    resultp: {
      first: "",
      second: "",
      third: "",
    },
  },
  getters: {
    getresultdata:state=>{
      return state.resultp
    }
  },
  mutations: {
    
  },
  actions:{
    
  }
});

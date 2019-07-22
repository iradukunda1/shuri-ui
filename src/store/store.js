import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    screenValues: {
      sidebarState:"",
      sidebar: "",
      sidebarHeader: "",    
      navbar: "",
      dashboardContent: "",
      mobile:""
    }
  },

  mutations: {
    screenMoved(state) {
      state.screenValues.sidebarState = ""
      state.screenValues.mobile = ""
      state.screenValues.sidebar = ""       
    },

    initialToggler(state) {
        state.screenValues.sidebarState = "hide"
        state.screenValues.sidebar = "margin-left: -195px;"
        state.screenValues.mobile = "display:grid"

    },
    finalToggler(state) {
      state.screenValues.sidebarState = "show"
      state.screenValues.sidebar = "margin-left:0"     
      state.screenValues.mobile = "display:none"
    }

  },
  actions: {
    screenCycle({ commit }) {
      window.onresize = () => {
          commit("screenMoved");
      }
    },
    finalToggler({ commit }) {
        commit("finalToggler");
      },
    initialToggler({ commit }) {
      commit("initialToggler");
    }
  
  },
  getters: {
    screenVal: state => state.screenValues
  }
});
export default store;

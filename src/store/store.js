import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    screenValues: {
     
      sidebarDisplay: "",
      sidebar: "",
      sidebarHeader: "",
      routerName: "",
      routeLink: "",
      schoolItems: "",
      companyItems: "",
      sidebarToggler: "",
      navbar: "",
      dashboardContent: "",
    }
  },
  
  mutations: {
    screenMoved(state) {
        state.screenValues.sidebarDisplay = "",
        state.screenValues.sidebar = "transition:all 1s !important",
        state.screenValues.sidebarHeader = "",
        state.screenValues.routerName = "",
        state.screenValues.routeLink = "",
        state.screenValues.schoolItems = "",
        state.screenValues.companyItems = "",
        state.screenValues.sidebarToggler = "",
        state.screenValues.navbar = "",
        state.screenValues.dashboardContent = ""
    },
    screenOver600(state) {

    },
    initialToggler(state) {
      state.screenValues.sidebarDisplay = "",
        state.screenValues.sidebar = "transition:all 1s !important",
        state.screenValues.sidebarHeader = "",
        state.screenValues.routerName = "",
        state.screenValues.routeLink = "",
        state.screenValues.schoolItems = "",
        state.screenValues.companyItems = "",
        state.screenValues.sidebarToggler = "",
        state.screenValues.navbar = "",
        state.screenValues.dashboardContent = ""
    },
    screenLess600(state) {

      state.screenValues.sidebarToggler = "display: initial;position:absolute;top:10px;right:20px; font-size: 25px;color: #ececec63;cursor: pointer;margin-bottom: 17px;"
      state.screenValues.sidebar = "width:100vw;text-align:inherit;padding-top: 15px;height:auto;transition:none !important"
      state.screenValues.sidebarHeader = "display: inherit;padding-top:5px"
      state.screenValues.routerName = "display:inline;"
      state.screenValues.routeLink = "margin-bottom: 70px;padding:0 0 0 20px"
      state.screenValues.schoolItems = "display:inherit;"
      state.screenValues.companyItems = "display: inherit;"
      state.screenValues.navbar = "display:none !important;"
      state.screenValues.dashboardContent = "display:none;"
    }

  },
  actions: {
    sidebarCycle({ commit }) {
      window.onresize = () => {
        if (window.innerWidth > 600) {
          commit("screenMoved");
        }
      };
    },
    SideToggler({ commit }) {
      if (window.innerWidth > 600) {
        commit("screenOver600");
      } else {
        commit("screenLess600");
      }
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

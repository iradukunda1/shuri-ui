import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    screenValues: {
      mainContentHeight: "",
      hideToggler: "none",
      routeNameStyles: "",
      sidebarStyle: "showSidebarNav"
    }
  },
  mutations: {
    screenIsOver800(state) {
      state.screenValues.hideToggler = "none";
      state.screenValues.sidebarStyle = "showSidebar";
      state.screenValues.routeNameStyles = "";
    },
    screenIsLess800(state) {
      state.screenValues.routeNameStyles = "";
      state.hideToggler = "none";
    },
    rightOver800(state) {
      state.screenValues.mainContentHeight = "height:50vh";
      state.screenValues.routeNameStyles = "";
      state.screenValues.sidebarStyle = "showSidebar";
      state.screenValues.hideToggler = "none";
    },
    rightLess800(state) {
      state.screenValues.mainContentHeight = "height:50vh";
      state.screenValues.hideToggler = "none !important";
      state.screenValues.routeNameStyles =
        "position: absolute;top: 24px;left:16px;";
      state.screenValues.sidebarStyle = "showSidebarForce";
    },
    leftOver800(state) {
      state.screenValues.mainContentHeight = "";
      state.screenValues.hideToggler = "inherit";
      state.screenValues.routeNameStyles =
        "position: absolute;top: 24px;left: 70px;";
      state.screenValues.sidebarStyle = "hideSidebar";
    },
    leftLess800(state) {
      state.screenValues.mainContentHeight = "";
      state.screenValues.hideToggler = "inherit";
      state.screenValues.routeNameStyles =
        "position: absolute;top: 24px;left: 70px;";
      state.screenValues.sidebarStyle = "hideSidebar";
    }
  },
  actions: {
    sidebarCycle({ commit }) {
      window.onresize = () => {
        if (window.innerWidth > 800) {
          commit("screenIsOver800");
        } else {
          commit("screenIsLess800");
        }
      };
    },
    rightSideToggler({ commit }) {
      if (window.innerWidth > 800) {
        commit("rightOver800");
      } else {
        commit("rightLess800");
      }
    },
    leftSideToggler({ commit }) {
      if (window.innerWidth < 800) {
        commit("leftLess800");
      } else {
        commit("leftOver800");
      }
    }
  },
  getters: {
    screenVal: state => state.screenValues
  }
});
export default store;

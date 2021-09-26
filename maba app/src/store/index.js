import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    count: 0,
  },
  mutations: {
    setIsLogin(state, token) {
      // state for all components
      state.isLogin = true;
      // save token inisde local Storage
      localStorage.setItem("token", token);
      // set token globle for axios
      axios.defaults.headers["Authorization"] = "Bearer " + token;
    },
    setCount(state, count) {
      state.count = count;
    },
    incrementCount(state) {
      state.count++;
    },
  },
  actions: {
    register({ commit }, user) {
      return axios.post("register", user).then((res) => {
        commit("setIsLogin", res.data);
      });
    },
    logout() {
      // localStorage.clear();
      localStorage.removeItem("token");
      // state.isLogin = false;
      location.reload();
    },
  },
  modules: {},
});

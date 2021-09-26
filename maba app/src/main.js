import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//step1 import plugin
import VueToastr from "vue-toastr";
import Vuelidate from "vuelidate";
import axios from "axios";
//step2 use plugin
Vue.use(VueToastr);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

//Common URL
axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

new Vue({
  router,
  store,
  render: (h) => h(App),
  created() {
    // //Auth
    let token = localStorage.getItem("token");
    if (token) {
      this.$store.commit('setIsLogin' , token);
    }
  },
}).$mount("#app");


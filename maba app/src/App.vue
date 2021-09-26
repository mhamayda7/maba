<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
      <router-link to="/" class="navbar-brand">Maba</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/" class="nav-link">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
        </ul>
        <div class="form-inline my-2 my-lg-0" v-if="!$store.state.isLogin">
          <router-link
            to="/register"
            class="btn btn-secondary my-2 my-sm-0 ml-4"
            >Sign up</router-link
          >
          <router-link to="/login" class="btn btn-secondary my-2 my-sm-0 ml-2"
            >Login</router-link
          >
        </div>
        <div class="form-inline my-2 my-lg-0" v-else>
          <input
            class="form-control mr-sm-2 ml-15"
            type="text"
            placeholder="Search"
          />
          <router-link to="/checkout" class="p-cart text-dark">
            <span class="material-icons md-48">shopping_cart</span>
            <span class="badge badge-light bg-secondary">{{
              $store.state.count
            }}</span>
          </router-link>
          <router-link to="/profile" class="btn btn-secondary my-2 my-sm-0 ml-2"
            >Profile</router-link
          >
          <button class="btn btn-secondary my-2 my-sm-0 ml-2" @click="logout">
            Logout
          </button>
        </div>
      </div>
    </nav>

    <div class="container" style="margin-top: 100px">
      <router-view />
      <footer class="my-5 pt-5 text-muted text-center text-small">
        <p class="mb-1">© 2017-2019 Maba</p>
        <ul class="list-inline">
          <li class="list-inline-item"><a href="#">Privacy</a></li>
          <li class="list-inline-item"><a href="#">Terms</a></li>
          <li class="list-inline-item"><a href="#">Support</a></li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import axios from "axios";
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    logout() {
      // this.$store.commit('logout');
      this.$store.dispatch("logout");
    },
  },
  created() {
    axios.get("count").then(({ data }) => {
      this.$store.commit("setCount", data);
    });
  },
};
</script>
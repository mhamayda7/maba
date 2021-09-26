import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Profile from "../views/Profile.vue";
import Product from "../views/Product.vue";
import Checkout from "../views/Checkout.vue";
import AdminUsers from "../views/admin/AdminUsers.vue";
// import AdminProducts from "@/views/admin/AdminProducts";
import AdminProducts from "../views/admin/AdminProducts.vue";
import AddProduct from "../views/admin/AddProduct.vue";
import EditProduct from "../views/admin/EditProduct.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
    name: "Register",
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/product/:id",
    name: "Product",
    component: Product,
  },
  {
    path: "/checkout",
    component: Checkout,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/admin/users",
    component: AdminUsers,
  },
  {
    path: "/admin/products",
    component: AdminProducts,
  },
  {
    path: "/admin/addProduct",
    component: AddProduct,
  },
  {
    path: "/admin/editProduct/:id",
    component: EditProduct,
    name: "EditProduct",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, form, next) => {
  let token = localStorage.getItem("token");
  if (
    to.name == "Login" ||
    to.name == "Register" ||
    to.name == "Home" ||
    to.name == "About" ||
    token
  ) {
    next();
  } else {
    return next("/login");
  }
});

export default router;

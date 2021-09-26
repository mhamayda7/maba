<template>
  <div class="row">
    <div class="col-3" v-for="product of products" :key="product.id">
      <ProductCard :product="product" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ProductCard from "../components/ProductCard.vue";
export default {
  name: "Home",
  components: {
    ProductCard,
  },
  data: function () {
    return {
      products: [],
      counter: 10,
    };
  },
  mounted: function () {
    //  axios
    //   .get("http://127.0.0.1:8000/api/products", {
    //     headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    //   })
    axios
      .get("products")
      .then((result) => {
        this.products = result.data;
      })
      .catch((error) => {
        // console.log(res);
        this.$toastr.e(error, "Error");
      });
  },
};
</script>

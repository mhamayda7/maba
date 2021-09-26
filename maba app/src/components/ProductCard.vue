<template>
  <div class="card mb-3">
    <h3 class="card-header">{{ product.name }}</h3>
    <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <h6 class="card-subtitle text-muted">Support card subtitle</h6>
    </div>
    <img
      style="height: 200px; width: 100%; display: block"
      :src="product.image"
      alt="Card image"
    />
    <ul class="list-group list-group-flush">
      <li class="list-group-item">{{ product.price }}</li>
    </ul>
    <div class="card-body">
      <button
        type="button"
        class="btn btn-primary"
        @click="addToCart(product.id)"
      >
        Add to cart
      </button>
      <button
        type="button"
        @click="viewProduct(product.id)"
        class="btn btn-outline-primary float-right"
      >
        View
      </button>
      <!-- <router-link
            :to="{ name: 'Product', params: { id: product.id } }"
            class="btn btn-outline-primary float-right"
            >View</router-link
          > -->
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: {
    product: {},
  },
  methods: {
    viewProduct(id) {
      this.$router.push({ name: "Product", params: { id: id } });
    },
    addToCart(id) {
      axios.post("carts", { product_id: id }).then(() => {
        this.$store.commit("incrementCount");
      });
    },
  },
};
</script>
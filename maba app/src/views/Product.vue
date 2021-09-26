<template>
  <div class="card mb-3">
    <h3 class="card-header">{{ product.name }}</h3>
    <div class="card-body">
      <h5 class="card-title">title</h5>
      <h6 class="card-subtitle text-muted">subTitle</h6>
    </div>
    <img
      style="display: block"
      :src="product.image"
      width="200"
      height="200px"
      alt="Card image"
    />
    <div class="card-body">
      <p class="card-text">description</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">category</li>
      <li class="list-group-item">price</li>
    </ul>
    <div class="card-body">
      <button type="button" class="btn btn-primary">Add to cart</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: () => {
    return {
      product: {},
    };
  },
  mounted: function () {
    var id = this.$route.params.id;
    axios
      .get(`products/${id}`)
      .then((result) => {
        this.product = result.data;
         this.$toastr.s("Get product", "Succesfully!");
      })
      .catch(() => {
        //step 3
        this.$toastr.e("I'm so sorry", "Error");
      });
  },
};
</script>

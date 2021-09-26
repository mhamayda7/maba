<template>
  <div>
    <hr />
    <h1 style="display: inline-block">Products</h1>
    <button
      type="button"
      @click="$router.push('/admin/addProduct')"
      class="btn btn-success float-right"
    >
      Add Product
    </button>

    <hr />
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Title</th>
          <th scope="col">SubTitle</th>
          <th scope="col">Price</th>
          <th scope="col" style="width: 350px">Description</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product of products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>title</td>
          <td>subTitle</td>
          <td>{{ product.price }}</td>
          <td>{{ product.description }}</td>
          <td>
            <button
              class="btn btn-outline-primary"
              @click="$router.push({name : 'EditProduct' , params :{id : product.id}})"
            >
              Edit
            </button>
            |
            <button class="btn btn-danger" @click="deleteProduct(product.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    axios.get("products").then((res) => {
      this.products = res.data;
    });
  },
  methods: {
    deleteProduct(id) {
      axios.delete("products/" + id).then(() => {
        this.products = this.products.filter((product) => {
          return product.id != id;
        });
        this.$toastr.s("Delete Sccessfull!");
      });
    },
  },
};
</script>
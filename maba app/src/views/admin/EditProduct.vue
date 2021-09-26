<template>
  <div>
    <br />
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-12">
            <h4>Edit Product</h4>
            <hr />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <form>
              <div class="form-group row">
                <label for="name" class="col-4 col-form-label">Name</label>
                <div class="col-8">
                  <input
                    id="name"
                    name="name"
                    placeholder="name"
                    class="form-control here"
                    type="text"
                    v-model="product.name"
                  />
                  <div class="valid-feedback">Looks good!</div>

                  <div class="invalid-feedback">Please name is required.</div>
                </div>
              </div>
              <div class="form-group row">
                <label for="title" class="col-4 col-form-label">Title</label>
                <div class="col-8">
                  <input
                    id="title"
                    name="title"
                    placeholder="title"
                    class="form-control here"
                    type="text"
                    v-model="product.title"
                  />
                  <div class="valid-feedback">Looks good!</div>

                  <div class="invalid-feedback">Please title is required.</div>
                </div>
              </div>
              <div class="form-group row">
                <label for="name" class="col-4 col-form-label">SubTitle</label>
                <div class="col-8">
                  <input
                    id="subTitle"
                    name="subTitle"
                    placeholder="subTitle"
                    class="form-control here"
                    type="text"
                    v-model="product.subTitle"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">
                    Please SubTitle is required.
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label for="time" class="col-4 col-form-label">Price</label>
                <div class="col-8">
                  <input
                    id="price"
                    name="price"
                    placeholder="price"
                    class="form-control here"
                    type="text"
                    v-model="product.price"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please Price is required.</div>
                </div>
              </div>

              <div class="form-group row">
                <label for="price" class="col-4 col-form-label"
                  >Description</label
                >
                <div class="col-8">
                  <textarea
                    id="description"
                    name="description"
                    placeholder="description"
                    class="form-control here"
                    v-model="product.description"
                  >
                  </textarea>
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please Price is required.</div>
                </div>
              </div>

              <div class="form-group row">
                <label for="time" class="col-4 col-form-label">Image</label>
                <div class="col-8">
                  <input
                    id="image"
                    name="image"
                    placeholder="Image Online URL"
                    class="form-control here"
                    type="file"
                    ref="image"
                    accept="image/*"
                  />
                  <img :src="product.image" width="100" height="100" />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please Image is required.</div>
                </div>
              </div>
              <div class="form-group row">
                <div class="offset-4 col-8">
                  <button
                    name="submit"
                    type="button"
                    class="btn btn-primary"
                    @click="update"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      product: {},
    };
  },
  created() {
    let id = this.$route.params.id;
    axios.get("products/" + id).then((res) => {
      console.log(res.data);
      this.product = res.data;
    });
  },
  methods: {
    update() {
      var formData = new FormData();
      formData.set("image", this.$refs.image.files[0]);
      formData.set("name" , this.product.name);
      formData.set("title" , this.product.title);
      formData.set("subTitle" , this.product.subTitle);
      formData.set("price" , this.product.price.replace('$' , ''));
      formData.set("description" , this.product.description);
      formData.set("_method", "put");
      axios.post(`products/${this.product.id}`, formData).then(() => {
        this.$router.push("/admin/products");
      });
    },
  },
};
</script>
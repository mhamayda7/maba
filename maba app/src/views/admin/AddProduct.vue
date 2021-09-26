<template>
  <div>
    <br />
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-12">
            <h4>Add Product</h4>
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
                    v-model="name"
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
                    v-model="title"
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
                    v-model="subTitle"
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
                    type="number"
                    v-model="price"
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
                    v-model="description"
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
                    placeholder="Image"
                    class="form-control here"
                    type="file"
                    ref="image"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please Image is required.</div>
                </div>
              </div>
              <div class="form-group row">
                <div class="offset-4 col-8">
                  <button
                    name="submit"
                    type="button"
                    @click="addProduct"
                    class="btn btn-primary"
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
      name: "",
      title: "",
      subTitle: "",
      price: "",
      description: "",
    };
  },
  methods: {
    addProduct() {
      console.log(this.$refs.image.files[0]);
      var formData = new FormData();
      formData.set("image", this.$refs.image.files[0]);
      formData.set("name" , this.name);
      formData.set("title" , this.title);
      formData.set("subTitle" , this.subTitle);
      formData.set("price" , this.price);
      formData.set("description" , this.description);
      // for (const [key, value] of Object.entries(this.$data)) {
      //   formData.set(key , value)
      // }
      axios
        .post("products", formData)
        .then(() => {
          this.$router.push("/admin/products");
        })
        .catch((error) => {
          // console.log(error.response);
          this.$toastr.e(error);
          // this.$toastr.e(error.response.data.message)
        });
    },
  },
};
</script>
<template>
  <div>
    <div class="py-5 text-center">
      <i class="material-icons"> add_shopping_cart </i>
      <h2>Checkout</h2>
    </div>

    <div class="row">
      <div class="col-md-4 order-md-2 mb-4">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-muted">Your cart</span>
          <span class="badge badge-secondary badge-pill">{{
            $store.state.count
          }}</span>
        </h4>
        <ul class="list-group mb-3">
          <li
            class="list-group-item d-flex justify-content-between lh-condensed"
            v-for="item of cart"
            :key="item.id"
          >
            <div>
              <h6 class="my-0">{{ item.name }}</h6>
              <small class="text-muted">{{ item.title }}</small>
            </div>
            <span class="text-muted"> Count({{ item.pivot.count }})</span>
            <span class="text-muted"> ${{ item.price }} </span>
          </li>
          <li class="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span> <strong>${{ total }}</strong>
          </li>
        </ul>
      </div>
      <div class="col-md-8 order-md-1">
        <h4 class="mb-3">Billing address</h4>
        <form class="needs-validation" novalidate="">
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="firstName">First name</label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                placeholder=""
                value=""
                required=""
                v-model="firstName"
              />
              <div class="invalid-feedback">Valid first name is required.</div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="lastName">Last name</label>
              <input
                type="text"
                class="form-control"
                id="lastName"
                placeholder=""
                value=""
                required=""
                v-model="lastName"
              />
              <div class="invalid-feedback">Valid last name is required.</div>
            </div>
          </div>

          <div class="mb-3">
            <label for="email"
              >Email<span class="text-muted">(Optional)</span></label
            >
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="you@example.com"
              v-model="email"
            />
            <div class="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <div class="mb-3">
            <label for="address">Address</label>
            <input
              type="text"
              class="form-control"
              id="address"
              placeholder="1234 Main St"
              required=""
              v-model="add1"
            />
            <div class="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>

          <div class="mb-3">
            <label for="address2"
              >Address 2<span class="text-muted">(Optional)</span></label
            >
            <input
              type="text"
              class="form-control"
              id="address2"
              placeholder="Apartment or suite"
              v-model="add2"
            />
          </div>

          <div class="row">
            <div class="col-md-5 mb-3">
              <label for="country">Country</label>
              <select
                class="custom-select d-block w-100"
                id="country"
                required=""
                v-model="country"
              >
                <option value="">Choose...</option>
                <option>Palestine</option>
              </select>
              <div class="invalid-feedback">Please select a valid country.</div>
            </div>
            <div class="col-md-4 mb-3">
              <label for="state">State</label>
              <select
                class="custom-select d-block w-100"
                id="state"
                required=""
                v-model="state"
              >
                <option value="">Choose...</option>
                <option>Gaza</option>
              </select>
              <div class="invalid-feedback">Please provide a valid state.</div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="zip">Zip</label>
              <input
                type="text"
                class="form-control"
                id="zip"
                placeholder=""
                required=""
                v-model="zip"
              />
              <div class="invalid-feedback">Zip code required.</div>
            </div>
          </div>
          <hr class="mb-4" />

          <h4 class="mb-3">Payment</h4>

          <div class="d-block my-3">
            <!-- Stripe Elements Placeholder -->
            <div id="card-element"></div>
          </div>
          <hr class="mb-4" />
          <button class="btn btn-primary btn-lg btn-block" type="button" @click="order()">
            Continue to checkout
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
let cardElement = "";
let stripe = "";
export default {
  data() {
    return {
      cart: [],
      total: 0,
      firstName: "",
      lastName: "",
      email: "",
      add1: "",
      add2: "",
      country: "",
      state: "",
      zip: ""
    };
  },
  created() {
    axios.get("carts").then(({ data }) => {
      this.cart = data;
      data.forEach((item) => {
        this.total += item.pivot.count * item.price;
      });
    });
  },
  mounted() {
     stripe = window.Stripe("pk_test_51JYbzlA6KkNfl0pkZxNpeWQlDD2bjtA6zkyNNLBK9T29i3RhLYhFJttkwNdZaSIDsLBe8SvXPJsHtMT9Hv1k0o2Y00FUfWOYEQ");

    const elements = stripe.elements();
    cardElement = elements.create("card");
    cardElement.mount("#card-element");
  },
  methods: {
   async order(){
        const { paymentMethod} = await stripe.createPaymentMethod('card', cardElement);
        console.log("paymentMethod" , paymentMethod);
        axios.post("/orders" , {paymentMethodId : paymentMethod.id ,
         firstName : this.firstName ,
         lastName : this.lastName,
         email : this.email,
         add1 : this.add1,
         add2 : this.add2,
         country : this.country,
         state : this.state,
         zip : this.zip
         }).then(()=>{
           this.$router.push("/");
        });
    }
  }
};
</script>
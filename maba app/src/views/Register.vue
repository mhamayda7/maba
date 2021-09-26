<template>
  <!-- <form @submit.prevent="register"> -->
  <form>
    <fieldset>
      <legend>Sign up</legend>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="Enter email"
          v-model="email"
          @blur="$v.email.$touch()"
        />
        <div v-if="$v.email.$dirty">
          <span v-if="!$v.email.required" class="text-danger"
            >This email is required!</span
          >
          <span v-if="!$v.email.email" class="text-danger"
            >Please enter email!</span
          >
        </div>
      </div>
      <div class="form-group">
        <label for="exampleInputFirstName1">First Name</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputFirstName1"
          placeholder="Enter First Name"
          v-model="firstName"
          @blur="$v.firstName.$touch()"
        />
        <div v-if="$v.firstName.$dirty">
          <span v-if="!$v.firstName.required" class="text-danger"
            >This is First Name required!</span
          >
        </div>
      </div>
      <div class="form-group">
        <label for="exampleInputLastName1">Last Name</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputLastName1"
          placeholder="Enter Last Name"
          v-model="lastName"
          @blur="$v.lastName.$touch()"
        />
        <div v-if="$v.lastName.$dirty">
          <span v-if="!$v.lastName.required" class="text-danger"
            >The First Name is Required!</span
          >
        </div>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          v-model="password"
          @blur="$v.password.$touch()"
        />
        <div v-if="$v.password.$dirty">
          <span v-if="!$v.password.required" class="text-danger"
            >The Password is Required!</span
          >
        </div>
      </div>
      <div class="form-group">
        <label for="exampleInputConfirmPassword1">Confirm Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputConfirmassword1"
          placeholder="Password"
          v-model="confirmPassword"
          @blur="$v.confirmPassword.$touch()"
        />

        <div v-if="$v.confirmPassword.$dirty">
          <span v-if="!$v.confirmPassword.required" class="text-danger"
            >The Cinfirm Password is Required!</span
          >
          <span v-if="!$v.confirmPassword.sameAsPassword" class="text-danger"
            >Please enter the same password!</span
          >
        </div>
      </div>
      <button type="button" @click="register" class="btn btn-primary">
        Sign Up
      </button>
    </fieldset>
  </form>
</template>
<script>
import { required, email, sameAs } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    register() {
        this.$store.dispatch("register" , this.$data).then(() => {
        this.$router.push("/");
      });
    },
  },
  validations: {
    email: {
      required,
      email,
    },
    firstName: {
      required,
    },
    lastName: {
      required,
    },
    password: {
      required,
    },
    confirmPassword: {
      required,
      sameAsPassword: sameAs("password"),
    },
  },
};
</script>
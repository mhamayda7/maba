<template>
  <div>
    <hr />
    <h1 style="display: inline-block">Users</h1>
    <hr />
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Mobile</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user of users" :key="user.id">
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.email }}</td>
          <td>phone</td>
          <td>mobile</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { getUsers } from "../../services/users.js";
export default {
  data() {
    return {
      users: [],
    };
  },
  created(){
      getUsers().then((res) => {
      this.users = res.data;
    });
  },
  mounted() {
      console.log("mounted");
  },
};
</script>
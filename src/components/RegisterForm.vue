<template>
  <form @submit.prevent="register">
    <input type="text" v-model="username" placeholder="Enter username" required /><br/>
    <input type="email" v-model="email" placeholder="Enter email" required /><br/>
    <input type="password" v-model="password" placeholder="Enter password" required /><br/>
    <button type="submit">Signup</button>
  </form>
</template>

<script>
export default {
  name: "RegisterForm",
  data() {
    return { username: "", email: "", password: "" };
  },
  methods: {
    register() {
      if (!this.username || !this.email || !this.password) {
        alert("Please fill all fields");
      } else {
        alert(`Account created for ${this.username}!`);
        this.$router.push("/login");
      }
    }
  }
}
</script>

<style>
form {
  text-align: center;
}
button {
  margin-top: 10px;
  padding: 8px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
}
</style>

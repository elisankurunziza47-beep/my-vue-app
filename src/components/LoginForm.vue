<template>
  <form @submit.prevent="login">
    <input type="text" v-model="username" placeholder="Enter username" required /><br/>
    <input type="password" v-model="password" placeholder="Enter password" required /><br/>
    <button type="submit">Signin</button>
  </form>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return { username: "", password: "" };
  },
  methods: {
    login() {
      if (!this.username || !this.password) {
        alert("Please fill all fields");
      } else {
        alert(`Welcome ${this.username}, you are logged in!`);
        this.$router.push("/");
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

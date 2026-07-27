<template>
  <div class="register">
    <h2>Create an Account</h2>
    <form @submit.prevent="registerUser">
      <input type="text" v-model="username" placeholder="Username" required /><br/>
      <input type="email" v-model="email" placeholder="Email Address" required /><br/>
      <input type="password" v-model="password" placeholder="Password" required /><br/>
      <input type="password" v-model="confirmPassword" placeholder="Confirm Password" required /><br/>

      <button type="submit">Register</button>
    </form>

    <p>Already have an account? <router-link to="/login">Login here></router-link></p>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    registerUser() {
      if (!this.username || !this.email || !this.password || !this.confirmPassword) {
        alert("Please fill all fields");
        return;
      }
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      // Simulate registration success
      alert(`Account created successfully for ${this.username}!`);
      this.$router.push("/login"); // redirect to login page
    }
  }
};
</script>

<style>
.register {
  width: 350px;
  margin: 50px auto;
  padding: 20px;
  border: 2px solid #007bff;
  border-radius: 8px;
  text-align: center;
  background: #f8f9fa;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}
.register h2 {
  margin-bottom: 20px;
  color: #007bff;
}
.register input {
  width: 90%;
  padding: 10px;
  margin: 8px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.register button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
}
.register button:hover {
  background-color: #0056b3;
}
.register p {
  margin-top: 15px;
}
</style>

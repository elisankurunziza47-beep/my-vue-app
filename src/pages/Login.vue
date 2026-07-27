<template>
  <div class="login-page">
    <h2>Login</h2>
    <!-- Twifashisha LoginForm component -->
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";

export default {
  name: "Login",
  components: { LoginForm }
};
</script>

<style>
.login-page {
  width: 350px;
  margin: 190px auto;
  text-align: center;
}
</style>

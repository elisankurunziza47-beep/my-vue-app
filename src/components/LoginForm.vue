<template>
  <form class="login-form">

    <h2>Login</h2>

    <input
      type="email"
      placeholder="Email"
    />

    <input
      type="password"
      placeholder="Password"
    />

    <button type="submit">
      Login
    </button>

  </form>
</template>

<script>
export default {
  name: "LoginForm"
}
</script>

<style scoped>

.login-form{
  max-width:400px;
  margin:120px auto;
  background:white;
  padding:30px;
  border-radius:10px;
  box-shadow:0 5px 20px rgba(0,0,0,.1);
}

.login-form h2{
  text-align:center;
  margin-bottom:20px;
}

.login-form input{
  width:100%;
  padding:12px;
  margin-bottom:15px;
  border:1px solid #ddd;
  border-radius:8px;
}

.login-form button{
  width:100%;
  padding:12px;
  border:none;
  background:#2563eb;
  color:white;
  border-radius:8px;
  cursor:pointer;
  font-size:16px;
}

.login-form button:hover{
  background:#1d4ed8;
}

</style>
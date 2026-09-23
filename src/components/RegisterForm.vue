<template>
  <div class="register-container">

    <form class="register-form" @submit.prevent="register">

      <h2>Create Account</h2>

      <div class="form-group">
        <label>Full Name</label>
        <input
          type="text"
          v-model="user.name"
          placeholder="Enter your full name"
          required
        />
      </div>

      <div class="form-group">
        <label>Email</label>
        <input
          type="email"
          v-model="user.email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div class="form-group">
        <label>Phone Number</label>
        <input
          type="tel"
          v-model="user.phone"
          placeholder="Enter phone number"
          required
        />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          v-model="user.password"
          placeholder="Create password"
          required
        />
      </div>

      <div class="form-group">
        <label>Confirm Password</label>
        <input
          type="password"
          v-model="confirmPassword"
          placeholder="Confirm password"
          required
        />
      </div>

      <button type="submit">
        Register
      </button>

      <p class="login-link">
        Already have an account?

        <router-link to="/login">
          Login
        </router-link>

      </p>

    </form>

  </div>
</template>

<script>

export default{

name:"RegisterForm",

data(){

return{

user:{

name:"",
email:"",
phone:"",
password:""

},

confirmPassword:""

}

},

methods:{

register(){

if(this.user.password!==this.confirmPassword){

alert("Passwords do not match!");

return;

}

alert("Registration Successful!");

this.$router.push("/login");

}

}

}

</script>

<style scoped>

.register-container{

display:flex;
justify-content:center;
padding:50px;

}

.register-form{

width:100%;
max-width:500px;
background:white;
padding:30px;
border-radius:15px;
box-shadow:0 5px 20px rgba(0,0,0,.1);

}

.register-form h2{

text-align:center;
margin-bottom:25px;

}

.form-group{

margin-bottom:18px;

}

.form-group label{

display:block;
margin-bottom:6px;
font-weight:bold;

}

.form-group input{

width:100%;
padding:12px;
border:1px solid #ccc;
border-radius:8px;
font-size:15px;

}

button{

width:100%;
padding:14px;
background:#2563eb;
color:white;
border:none;
border-radius:8px;
font-size:16px;
cursor:pointer;

}

button:hover{

background:#1d4ed8;

}

.login-link{

margin-top:20px;
text-align:center;

}

.login-link a{

color:#2563eb;
text-decoration:none;
font-weight:bold;

}

</style>
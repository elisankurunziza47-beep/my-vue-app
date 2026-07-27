<template>
  <div>

    <!-- TOP BAR -->
    <div class="top-bar">
      <span>📞 +250 788 888 888</span>
      <span>📧 support@elisashop.com</span>
      <span>🚚 Free Delivery on Orders Over $100</span>
    </div>

    <!-- MAIN HEADER -->
    <header class="header">

      <!-- LOGO -->
      <div class="logo">
        <h2>🛒 Elisa Shop</h2>
        <small>Best Quality, Best Price</small>
      </div>

      <!-- SEARCH -->
      <div class="search-box">

        <select>
          <option>All Categories</option>
          <option>Phones</option>
          <option>Laptops</option>
          <option>Accessories</option>
        </select>

        <input
          type="text"
          placeholder="Search products..."
        >

        <button>
          🔍
        </button>

      </div>

      <!-- USER MENU -->

      <div class="user-menu">

        <router-link to="/login">👤 Login</router-link>

        <router-link to="/cart">🛒 Cart</router-link>

      </div>

    </header>

    <!-- NAVIGATION -->

    <nav class="navbar">

      <router-link to="/">Home</router-link>

      <router-link to="/products">Products</router-link>

      <router-link to="/services">Services</router-link>

      <router-link to="/about">About</router-link>

      <router-link to="/contact">Contact</router-link>

    </nav>

  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

.top-bar{

background:#0f172a;

color:white;

display:flex;

justify-content:space-around;

padding:10px;

font-size:14px;

}

/* HEADER */

.header{

display:flex;

justify-content:space-between;

align-items:center;

padding:20px 40px;

background:white;

box-shadow:0 2px 8px rgba(0,0,0,.08);

}

.logo h2{

color:#2563eb;

}

.logo small{

color:#666;

}

/* SEARCH */

.search-box{

display:flex;

width:45%;

}

.search-box select{

padding:12px;

border:1px solid #ddd;

border-right:none;

}

.search-box input{

flex:1;

padding:12px;

border:1px solid #ddd;

outline:none;

}

.search-box button{

padding:12px 20px;

background:#facc15;

border:none;

cursor:pointer;

}

/* USER */

.user-menu{

display:flex;

gap:20px;

}

.user-menu a{

text-decoration:none;

font-weight:bold;

color:#111;

}

/* NAVIGATION */

.navbar{

display:flex;

justify-content:center;

gap:40px;

background:#111827;

padding:15px;

}

.navbar a{

color:white;

text-decoration:none;

font-weight:bold;

}

.navbar a:hover{

color:#facc15;

}

</style>
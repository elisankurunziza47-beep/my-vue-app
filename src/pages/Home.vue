<template>
  <div class="home">

    <!-- Hero Section -->
    <div class="hero">
      <h1> WELCOME TO ELISA ONLINE SHOPING WEBSITE </h1>
      <p>Find the best products at affordable prices.</p>

      <!-- Search Bar -->
      <div class="search-bar">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search products..."
        />
        <button @click="searchProducts">Search</button>
      </div>

      <router-link to="/products" class="btn">
        Shop Now
      </router-link>
    </div>

    <!-- Services Title -->
    <h2 class="title">OUR SERVICES</h2>

    <!-- FEATURES GROUPED (CARDS) -->
    <div class="features">

      <div class="feature-card">
        <img :src="selectionImage" alt="Wide Selection">
        <h3>🛒 Wide Selection</h3>
        <p>Choose from a variety of products tailored to your needs.</p>
      </div>

      <div class="feature-card">
        <img :src="secureImage" alt="Secure Payments">
        <h3>💳 Secure Payments</h3>
        <p>Pay safely with multiple payment options available.</p>
      </div>

      <div class="feature-card">
        <img :src="deliveryImage" alt="Fast Delivery">
        <h3>🚚 Fast Delivery</h3>
        <p>Get your orders delivered quickly to your doorstep.</p>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import selectionImage from "../assets/selection.jfif";
import secureImage from "../assets/secure.jfif";
import deliveryImage from "../assets/delively.jfif";

const router = useRouter();
const searchQuery = ref("");

const searchProducts = () => {
  if (searchQuery.value.trim() === "") return;
  router.push({ path: "/products", query: { q: searchQuery.value } });
};
</script>

<style scoped>
.home {
  text-align: center;
  font-family: Arial;
}

/* HERO */
.hero {
  background: #f5f5f5;
  padding: 40px;
  color: black;
}

.search-bar {
  margin-top: 15px;
}

.search-bar input {
  padding: 8px;
  width: 250px;
}

.search-bar button {
  padding: 8px 15px;
  margin-left: 10px;
  cursor: pointer;
  background: green;
  color: white;
  border: none;
  border-radius: 5px;
}

/* BUTTON */
.btn {
  display: inline-block;
  margin-top: 15px;
  padding: 10px 20px;
  background: green;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
}

/* TITLE */
.title {
  margin-top: 30px;
  color: green;
}

.features {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  margin-top: 25px;
}

/* SMALL CARD (FIXED SIZE) */
.feature-card {
  width: 180px;
  padding: 12px;
  border: 1px solid whitesmoke;
  border-radius: 10px;
  background: seashell;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  transition: 0.2s ease;
  color: green;
}

/* hover */
.feature-card:hover {
  transform: translateY(-3px);
  border-color: #007bff;
}

/* image SMALL */
.feature-card img {
  width: 70px;
  height: 70px;
  object-fit: cover;
  margin-bottom: 8px;
}

/* text smaller */
.feature-card h3 {
  font-size: 14px;
  color: green;
}

.feature-card p {
  font-size: 12px;
}

h1 {
  color: green;
}

p { 
  color: black;
}
</style>

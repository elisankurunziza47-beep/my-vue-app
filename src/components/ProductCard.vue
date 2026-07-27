<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.name" width="150" />
    <h3>{{ product.name }}</h3>
    <p>${{ product.price }}</p>
    <button @click="$emit('add-to-cart', product)">Add to Cart</button>
    <router-link :to="`/products/${product.id}`">View Details</router-link>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: { type: Object, required: true }
  }
}
</script>

<style>
.product-card {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
}
button {
  margin-top: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
}
</style>

<template>
  <div class="cart-item">
    <h4>{{ item.name }}</h4>
    <p>Quantity: {{ item.quantity }}</p>
    <p>Price: ${{ item.price * item.quantity }}</p>
    <button @click="$emit('remove', item.id)">Remove</button>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    item: { type: Object, required: true }
  }
}
</script>

<style>
.cart-item {
  border-bottom: 1px solid #ccc;
  padding: 10px;
}
.button {
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
}
</style>

<template>
  <div class="cart">
    <h2>Your Shopping Cart</h2>

    <div v-if="cartItems.length > 0">
      <CartItem
        v-for="item in cartItems"
        :key="item.id"
        :item="item"
        @remove="removeItem"
      />
      <h3>Total: ${{ totalPrice }}</h3>
      <button @click="checkout">Checkout</button>
    </div>

    <div v-else>
      <p>Your cart is empty.</p>
    </div>
  </div>  
</template>

<script>
import CartItem from "../components/CartItem.vue";

export default {
  name: "Cart",
  components: { CartItem },
  data() {
    return {
      cartItems: [
        { id: 1, name: "Laptop", price: 800, quantity: 1 },
        { id: 2, name: "Phone", price: 500, quantity: 2 },
      ]
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    }
  },
  methods: {
    removeItem(id) {
      this.cartItems = this.cartItems.filter(item => item.id !== id);
    },
    checkout() {
      alert("Proceeding to checkout...");
      // Aha ushobora kongeramo redirect kuri payment page cyangwa order confirmation
    }
  }
};
</script>

<style>
.cart {
  width: 400px;
  margin: 150px auto;
  text-align: center;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
}
button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-top: 30px;
}
button:hover {
  background-color: #0056b3;
}
</style>

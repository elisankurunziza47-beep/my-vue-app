<template>
  <div class="checkout">
    <h2>Checkout</h2>
    <p v-if="selectedProduct">You are buying: <strong>{{ selectedProduct }}</strong></p>

    <form @submit.prevent="submitOrder">
      <input type="text" v-model="name" placeholder="Full Name" required /><br/>
      <input type="email" v-model="email" placeholder="Email Address" required /><br/>
      <input type="text" v-model="address" placeholder="Shipping Address" required /><br/>

      <label>Payment Method:</label><br/>
      <select v-model="paymentMethod" required>
        <option disabled value="">Select payment method</option>
        <option value="credit">Credit Card</option>
        <option value="paypal">PayPal</option>
        <option value="cash">Cash on Delivery</option>
        <option value="momo">Momo cash</option>
        <option value="visa card">Visa card</option>
      </select><br/>

      <button type="submit">Place Order</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Checkout",
  data() {
    return {
      name: "",
      email: "",
      address: "",
      paymentMethod: "",
      selectedProduct: null
    };
  },
  created() {
    // Fata product iri muri query string
    this.selectedProduct = this.$route.query.product || null;
  },
  methods: {
    submitOrder() {
      if (!this.name || !this.email || !this.address || !this.paymentMethod) {
        alert("Please fill all fields");
      } else {
        alert(`Order placed successfully for ${this.name}!`);
        this.$router.push("/");
      }
    }
  }
};
</script>
<style>
body{
  margin-top: 100px;
}
</style>

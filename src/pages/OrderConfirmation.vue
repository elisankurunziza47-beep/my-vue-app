<template>
  <div class="order-confirmation">
    <h2>Thank You for Your Order!</h2>
    <p>Your order has been placed successfully.</p>
    <p v-if="product">You purchased: <strong>{{ product }}</strong></p>
    <router-link to="/">Go back to Home</router-link>
  </div>
</template>

<script>
export default {
  name: "OrderConfirmation",
  data() {
    return {
      product: null
    };
  },
  created() {
    // Fata product iri muri query string niba Checkout yayohereje
    this.product = this.$route.query.product || null;
  }
};
</script>

<style>
.order-confirmation {
  text-align: center;
  margin-top: 50px;
}
h2 {
  color: #28a745;
}
a {
  display: inline-block;
  margin-top: 20px;
  color: #007bff;
  text-decoration: none;
}
</style>

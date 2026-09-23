<template>
  <div class="checkout-page">

    <h1 class="title">💳 Checkout</h1>

    <div class="checkout-container">

      <!-- Customer Information -->
      <div class="checkout-form">

        <h2>Customer Information</h2>

        <form @submit.prevent="placeOrder">

          <div class="form-group">
            <label>Full Name</label>
            <input
              type="text"
              v-model="customer.name"
              required
            >
          </div>

          <div class="form-group">
            <label>Email</label>
            <input
              type="email"
              v-model="customer.email"
              required
            >
          </div>

          <div class="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              v-model="customer.phone"
              required
            >
          </div>

          <div class="form-group">
            <label>Country</label>
            <input
              type="text"
              v-model="customer.country"
              required
            >
          </div>

          <div class="form-group">
            <label>City</label>
            <input
              type="text"
              v-model="customer.city"
              required
            >
          </div>

          <div class="form-group">
            <label>Street Address</label>
            <textarea
              rows="4"
              v-model="customer.address"
              required
            ></textarea>
          </div>

          <h2>Payment Method</h2>

          <div class="payment-method">

            <label>
              <input
                type="radio"
                value="Cash On Delivery"
                v-model="customer.payment"
              >
              Cash On Delivery
            </label>

            <label>
              <input
                type="radio"
                value="Credit Card"
                v-model="customer.payment"
              >
              Credit Card
            </label>

            <label>
              <input
                type="radio"
                value="PayPal"
                v-model="customer.payment"
              >
              PayPal
            </label>
            <label>
              <input
              type="radio"
              value="momopay"
              v-model="customer.payment"
              >
              Momo pay
            </label>

          </div>

          <button class="order-btn">

            ✅ Place Order

          </button>

        </form>

      </div>

      <!-- Order Summary -->
      <div class="summary">

        <h2>Order Summary</h2>

        <div
          class="summary-item"
          v-for="item in cart.items"
          :key="item.id"
        >

          <img
            :src="item.image"
            :alt="item.name"
          >

          <div>

            <h4>{{ item.name }}</h4>

            <p>

              {{ item.quantity }} × ${{ item.price }}

            </p>

          </div>

        </div>

        <hr>

        <div class="row">

          <span>Subtotal</span>

          <span>${{ subtotal }}</span>

        </div>

        <div class="row">

          <span>Shipping</span>

          <span>{{ shipping===0 ? "FREE" : "$"+shipping }}</span>

        </div>

        <div class="row">

          <span>Tax</span>

          <span>${{ tax }}</span>

        </div>

        <hr>

        <div class="row total">

          <span>Total</span>

          <span>${{ total }}</span>

        </div>

      </div>

    </div>

  </div>
</template>

<script>

import { cart } from "../store/cart";

export default{

name:"Checkout",

data(){

return{

cart,

customer:{

name:"",
email:"",
phone:"",
country:"",
city:"",
address:"",
payment:"Cash On Delivery"

}

}

},

computed:{

subtotal(){

return this.cart.total();

},

shipping(){

return this.subtotal>=1000 ? 0 : 25;

},

tax(){

return Math.round(this.subtotal*0.05);

},

total(){

return this.subtotal+this.shipping+this.tax;

}

},

methods:{

placeOrder(){

alert("🎉 Order Placed Successfully!");

this.cart.clear();

this.$router.push("/confirmation");

}

}

}

</script>
<style scoped>

/* Page */

.checkout-page{
    background:#f5f7fb;
    min-height:100vh;
    padding:40px;
}

/* Title */

.title{
    text-align:center;
    font-size:38px;
    margin-bottom:40px;
    color:#1e293b;
}

/* Layout */

.checkout-container{
    display:grid;
    grid-template-columns:2fr 1fr;
    gap:35px;
}

/* Form */

.checkout-form{
    background:white;
    padding:30px;
    border-radius:15px;
    box-shadow:0 5px 20px rgba(0,0,0,.08);
}

.checkout-form h2{
    margin-bottom:20px;
    color:#1e293b;
}

.form-group{
    margin-bottom:20px;
}

.form-group label{
    display:block;
    margin-bottom:8px;
    font-weight:bold;
}

.form-group input,
.form-group textarea{

    width:100%;
    padding:14px;
    border:1px solid #d1d5db;
    border-radius:10px;
    font-size:15px;
    outline:none;
    transition:.3s;

}

.form-group input:focus,
.form-group textarea:focus{

    border-color:#2563eb;

}

/* Payment */

.payment-method{

    display:flex;
    flex-direction:column;
    gap:15px;
    margin:25px 0;

}

.payment-method label{

    display:flex;
    align-items:center;
    gap:10px;
    font-weight:bold;

}

/* Button */

.order-btn{

    width:100%;
    padding:16px;
    border:none;
    border-radius:10px;
    background:#10b981;
    color:white;
    font-size:18px;
    font-weight:bold;
    cursor:pointer;
    transition:.3s;

}

.order-btn:hover{

    background:#059669;

}

/* Summary */

.summary{

    background:white;
    padding:25px;
    border-radius:15px;
    box-shadow:0 5px 20px rgba(0,0,0,.08);
    height:fit-content;
    position:sticky;
    top:90px;

}

.summary h2{

    text-align:center;
    margin-bottom:25px;

}

.summary-item{

    display:flex;
    gap:15px;
    align-items:center;
    margin-bottom:20px;

}

.summary-item img{

    width:70px;
    height:70px;
    object-fit:cover;
    border-radius:10px;

}

.summary-item h4{

    margin-bottom:5px;

}

.row{

    display:flex;
    justify-content:space-between;
    margin:15px 0;
    font-size:17px;

}

.total{

    font-size:22px;
    font-weight:bold;
    color:#2563eb;

}

hr{

    margin:20px 0;
    border:none;
    border-top:1px solid #ddd;

}

/* Responsive */

@media(max-width:992px){

.checkout-container{

    grid-template-columns:1fr;

}

.summary{

    position:static;

}

}

@media(max-width:768px){

.checkout-page{

    padding:20px;

}

.title{

    font-size:30px;

}

.checkout-form{

    padding:20px;

}

.summary{

    padding:20px;

}

}

</style>
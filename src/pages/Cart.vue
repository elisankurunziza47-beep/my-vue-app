<template>
  <div class="cart-page">

    <h1 class="title">🛒 Shopping Cart</h1>

    <!-- Empty Cart -->
    <div v-if="cart.items.length === 0" class="empty-cart">

      <h2>Your Cart is Empty</h2>

      <router-link to="/products" class="shop-btn">
        Continue Shopping
      </router-link>

    </div>

    <!-- Cart Items -->
    <div v-else class="cart-container">

      <!-- Left Side -->
      <div class="cart-items">

        <div
          class="cart-item"
          v-for="item in cart.items"
          :key="item.id"
        >

          <!-- Product Image -->
          <img
            :src="item.image"
            :alt="item.name"
          />

          <!-- Product Information -->
          <div class="info">

            <h2>{{ item.name }}</h2>

            <p><strong>Brand:</strong> {{ item.brand }}</p>

            <p class="price">
              ${{ item.price }}
            </p>

            <!-- Quantity -->
            <div class="quantity">

              <button
                @click="cart.decrease(item.id)"
              >
                -
              </button>

              <span>
                {{ item.quantity }}
              </span>

              <button
                @click="cart.increase(item.id)"
              >
                +
              </button>

            </div>

            <p class="subtotal">

              Subtotal:

              <strong>

                ${{ item.price * item.quantity }}

              </strong>

            </p>

          </div>

          <!-- Remove -->
          <button
            class="remove-btn"
            @click="cart.remove(item.id)"
          >

            🗑 Remove

          </button>

        </div>

      </div>

      <!-- Cart Summary -->
      <div class="summary">

        <h2>Order Summary</h2>

        <div class="summary-row">

          <span>Items</span>

          <span>{{ cart.items.length }}</span>

        </div>

        <div class="summary-row">

          <span>Subtotal</span>

          <span>${{ subtotal }}</span>

        </div>

        <div class="summary-row">

          <span>Shipping</span>

          <span>{{ shipping === 0 ? "FREE" : "$" + shipping }}</span>

        </div>

        <div class="summary-row">

          <span>Tax</span>

          <span>${{ tax }}</span>

        </div>

        <hr>

        <div class="summary-row total">

          <span>Total</span>

          <span>${{ total }}</span>

        </div>

        <!-- Coupon -->
        <input
          type="text"
          placeholder="Coupon Code"
        />

        <button class="coupon-btn">

          Apply Coupon

        </button>

        <router-link
          to="/products"
          class="continue-btn"
        >

          Continue Shopping

        </router-link>

        <router-link
          to="/checkout"
          class="checkout-btn"
        >

          Proceed To Checkout

        </router-link>

      </div>

    </div>

  </div>
</template>

<script>

import { cart } from "../store/cart";

export default {

name:"Cart",

data(){

return{

cart

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

return this.subtotal + this.shipping + this.tax;

}

}

}

</script>
<style scoped>

.cart-page{
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

/* Empty Cart */

.empty-cart{
    background:white;
    padding:60px;
    text-align:center;
    border-radius:15px;
    box-shadow:0 5px 20px rgba(0,0,0,.08);
}

.shop-btn{
    display:inline-block;
    margin-top:25px;
    padding:14px 25px;
    background:#2563eb;
    color:white;
    text-decoration:none;
    border-radius:10px;
    font-weight:bold;
    transition:.3s;
}

.shop-btn:hover{
    background:#1d4ed8;
}

/* Main Layout */

.cart-container{
    display:grid;
    grid-template-columns:2fr 1fr;
    gap:35px;
}

/* Cart Items */

.cart-items{
    display:flex;
    flex-direction:column;
    gap:25px;
}

/* Single Item */

.cart-item{
    display:flex;
    align-items:center;
    gap:25px;
    background:white;
    padding:20px;
    border-radius:15px;
    box-shadow:0 5px 20px rgba(0,0,0,.08);
}

.cart-item img{
    width:160px;
    height:160px;
    object-fit:cover;
    border-radius:12px;
}

.info{
    flex:1;
}

.info h2{
    margin-bottom:10px;
    color:#111827;
}

.price{
    font-size:25px;
    font-weight:bold;
    color:#10b981;
    margin:10px 0;
}

.subtotal{
    margin-top:15px;
    font-size:18px;
}

/* Quantity */

.quantity{
    display:flex;
    align-items:center;
    gap:15px;
    margin-top:15px;
}

.quantity button{
    width:40px;
    height:40px;
    border:none;
    background:#2563eb;
    color:white;
    font-size:20px;
    border-radius:8px;
    cursor:pointer;
    transition:.3s;
}

.quantity button:hover{
    background:#1d4ed8;
}

.quantity span{
    font-size:20px;
    font-weight:bold;
}

/* Remove */

.remove-btn{
    background:#ef4444;
    color:white;
    border:none;
    padding:12px 20px;
    border-radius:10px;
    cursor:pointer;
    font-weight:bold;
    transition:.3s;
}

.remove-btn:hover{
    background:#dc2626;
}

/* Summary */

.summary{
    background:white;
    padding:25px;
    border-radius:15px;
    height:fit-content;
    position:sticky;
    top:90px;
    box-shadow:0 5px 20px rgba(0,0,0,.08);
}

.summary h2{
    margin-bottom:25px;
    text-align:center;
}

.summary-row{
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

/* Coupon */

.summary input{
    width:100%;
    padding:12px;
    margin:20px 0;
    border:1px solid #d1d5db;
    border-radius:8px;
    outline:none;
}

.coupon-btn{
    width:100%;
    padding:14px;
    background:#f59e0b;
    color:white;
    border:none;
    border-radius:8px;
    cursor:pointer;
    font-weight:bold;
    margin-bottom:20px;
}

.coupon-btn:hover{
    background:#d97706;
}

/* Continue */

.continue-btn{
    display:block;
    text-align:center;
    background:#6b7280;
    color:white;
    padding:14px;
    border-radius:8px;
    text-decoration:none;
    margin-bottom:15px;
    font-weight:bold;
}

.continue-btn:hover{
    background:#4b5563;
}

/* Checkout */

.checkout-btn{
    display:block;
    text-align:center;
    background:#10b981;
    color:white;
    padding:15px;
    border-radius:8px;
    text-decoration:none;
    font-size:18px;
    font-weight:bold;
}

.checkout-btn:hover{
    background:#059669;
}

/* Responsive */

@media(max-width:992px){

.cart-container{
    grid-template-columns:1fr;
}

.summary{
    position:static;
}

}

@media(max-width:768px){

.cart-page{
    padding:20px;
}

.cart-item{
    flex-direction:column;
    text-align:center;
}

.cart-item img{
    width:220px;
    height:220px;
}

.remove-btn{
    width:100%;
}

.quantity{
    justify-content:center;
}

.title{
    font-size:30px;
}

}

</style>
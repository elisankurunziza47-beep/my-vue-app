<template>

<div class="actions">

<button
class="cart-btn"
@click="addToCart"
>

🛒 Add To Cart

</button>

<button
class="wish-btn"
@click="addToWishlist"
>

❤️ Wishlist

</button>

<button
class="buy-btn"
@click="buyNow"
>

💳 Buy Now

</button>

</div>

</template>

<script>

import { cart } from "../store/cart";
import { wishlist } from "../store/wishlist";

export default{

name:"ProductAction",

props:{

product:Object

},

methods:{

addToCart(){

cart.add(this.product);

alert(this.product.name+" added to cart.");

},

addToWishlist(){

wishlist.add(this.product);

alert(this.product.name+" added to wishlist.");

},

buyNow(){

this.$router.push({

path:"/checkout",

query:{

product:this.product.name,

price:this.product.price

}

});

}

}

}

</script>

<style scoped>

.actions{

display:flex;
gap:15px;
flex-wrap:wrap;
margin-top:30px;

}

.actions button{

padding:14px 20px;
border:none;
border-radius:10px;
cursor:pointer;
font-size:16px;
font-weight:bold;
transition:.3s;

}

.cart-btn{

background:#2563eb;
color:white;

}

.cart-btn:hover{

background:#1d4ed8;

}

.wish-btn{

background:#ec4899;
color:white;

}

.wish-btn:hover{

background:#db2777;

}

.buy-btn{

background:#10b981;
color:white;

}

.buy-btn:hover{

background:#059669;

}

</style>
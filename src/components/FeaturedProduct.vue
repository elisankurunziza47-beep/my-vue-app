<template>
  <section class="featured-products">

    <!-- Section Title -->
    <div class="section-title">
      <h2>Featured Products</h2>
      <p>Best Selling Products</p>
    </div>

    <!-- Products -->
    <div class="products-grid">

      <div
        class="product-card"
        v-for="item in products"
        :key="item.id"
      >

        <!-- Discount -->
        <span class="discount">
          -{{ item.discount }}%
        </span>

        <!-- Product Image -->
        <router-link
          :to="`/products/${item.id}`"
          class="product-link"
        >

          <img
            :src="item.image"
            :alt="item.name"
          />

          <h3>{{ item.name }}</h3>

        </router-link>

        <!-- Brand -->
        <p class="brand">
          {{ item.brand }}
        </p>

        <!-- Category -->
        <p class="category">
          {{ item.category }}
        </p>

        <!-- Rating -->
        <div class="rating">
          ⭐ {{ item.rating }}
          <span>
            ({{ item.reviews }} Reviews)
          </span>
        </div>

        <!-- Price -->
        <p class="price">
          ${{ item.price }}
        </p>

        <!-- Stock -->
        <p
          class="stock"
          :class="{ out: item.stock === 0 }"
        >
          {{ item.stock > 0 ? "✅ In Stock" : "❌ Out of Stock" }}
        </p>

        <!-- Buttons -->
        <div class="buttons">

          <router-link
            :to="`/products/${item.id}`"
            class="details-btn"
          >
            👁 View Details
          </router-link>
          <button
  class="wish-btn"
  @click="addToWishlist(item)"
>
  ❤️ Wishlist
</button>
          


          <button
            class="cart-btn"
            @click="addToCart(item)"
          >
            🛒 Add To Cart
          </button>

          <button
            class="buy-btn"
            @click="goToCheckout(item)"
          >
            ⚡ Buy Now
          </button>

        </div>

      </div>

    </div>

  </section>
</template>

<script>
import products from "../data/products";
import { cart } from "../store/cart";
import { wishlist } from "../store/wishlist";

export default {
  name: "FeaturedProducts",

  data() {
    return {
      products,
      wishlist,
      cart
    };
  },

  methods: {
    addToCart(item) {
      cart.add(item);

      alert(item.name + " added to cart!");
    },

    addToWishlist(item) {
      wishlist.add(item);

      alert(item.name + " added to wishlist!");
    },

    goToCheckout(item) {
      // Clear old cart items
      cart.clear();

      // Add the selected product to cart
      cart.add(item);

      // Go directly to checkout
      this.$router.push("/checkout");
    }
  }
};
</script>
<style scoped>

/* SECTION */

.featured-products{
    padding:80px 60px;
    background:#f8fafc;
}

/* TITLE */

.section-title{
    text-align:center;
    margin-bottom:50px;
}

.section-title h2{
    font-size:40px;
    color:#1e293b;
    margin-bottom:10px;
}

.section-title p{
    color:#64748b;
    font-size:18px;
}

/* GRID */

.products-grid{

    display:grid;

    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));

    gap:30px;

}

/* CARD */

.product-card{

    background:white;

    border-radius:18px;

    overflow:hidden;

    box-shadow:0 10px 25px rgba(0,0,0,.08);

    transition:.3s;

    position:relative;

}

.product-card:hover{

    transform:translateY(-10px);

    box-shadow:0 20px 35px rgba(0,0,0,.15);

}

/* DISCOUNT */

.discount{

    position:absolute;

    top:15px;

    left:15px;

    background:#ef4444;

    color:white;

    padding:6px 12px;

    border-radius:30px;

    font-size:13px;

    font-weight:bold;

    z-index:2;

}

/* IMAGE */

.product-link{

    text-decoration:none;

    color:#111827;

}

.product-card img{

    width:100%;

    height:240px;

    object-fit:cover;

    display:block;

}

/* NAME */

.product-card h3{

    padding:15px 18px 5px;

    font-size:22px;

}

/* BRAND */

.brand{

    padding:0 18px;

    color:#2563eb;

    font-weight:bold;

}

/* CATEGORY */

.category{

    padding:5px 18px;

    color:#6b7280;

    font-size:14px;

}

/* RATING */

.rating{

    padding:10px 18px;

    color:#f59e0b;

    font-weight:bold;

}

.rating span{

    color:#555;

    font-size:14px;

}

/* PRICE */

.price{

    padding:0 18px;

    font-size:28px;

    color:#2563eb;

    font-weight:bold;

}

/* STOCK */

.stock{

    padding:12px 18px;

    color:green;

    font-weight:bold;

}

.out{

    color:red;

}

/* BUTTONS */

.buttons{

    display:flex;

    flex-direction:column;

    gap:10px;

    padding:18px;

}

.details-btn{

    background:#2563eb;

    color:white;

    text-decoration:none;

    text-align:center;

    padding:12px;

    border-radius:8px;

    transition:.3s;

}

.details-btn:hover{

    background:#1d4ed8;

}

.cart-btn{

    background:#facc15;

    border:none;

    padding:12px;

    border-radius:8px;

    cursor:pointer;

    font-weight:bold;

    transition:.3s;

}

.cart-btn:hover{

    background:#eab308;

}

.buy-btn{

    background:#10b981;

    border:none;

    color:white;

    padding:12px;

    border-radius:8px;

    cursor:pointer;

    font-weight:bold;

    transition:.3s;

}

.buy-btn:hover{

    background:#059669;

}

/* RESPONSIVE */

@media(max-width:992px){

.featured-products{

padding:50px 25px;

}

.products-grid{

grid-template-columns:repeat(2,1fr);

}

}

@media(max-width:768px){

.products-grid{

grid-template-columns:1fr;

}

.section-title h2{

font-size:32px;

}

.product-card img{

height:220px;

}

}

</style>

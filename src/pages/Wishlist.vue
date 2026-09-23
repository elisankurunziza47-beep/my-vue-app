<template>
  <section class="wishlist-page">

    <h1 class="title">
      ❤️ My Wishlist
    </h1>

    <!-- Empty Wishlist -->

    <div
      v-if="wishlist.items.length === 0"
      class="empty"
    >

      <h2>Your Wishlist is Empty</h2>

      <router-link
        to="/products"
        class="shop-btn"
      >
        Browse Products
      </router-link>

    </div>

    <!-- Wishlist Items -->

    <div
      v-else
      class="wishlist-grid"
    >

      <div
        class="card"
        v-for="item in wishlist.items"
        :key="item.id"
      >

        <img
          :src="item.image"
          :alt="item.name"
        >

        <h3>
          {{ item.name }}
        </h3>

        <p class="brand">
          {{ item.brand }}
        </p>

        <p class="category">
          {{ item.category }}
        </p>

        <div class="rating">
          ⭐ {{ item.rating }}
          ({{ item.reviews }})
        </div>

        <p class="price">
          ${{ item.price }}
        </p>

        <div class="buttons">

          <router-link
            :to="`/products/${item.id}`"
            class="details-btn"
          >
            View Details
          </router-link>

          <button
            class="cart-btn"
            @click="moveToCart(item)"
          >
            🛒 Add To Cart
          </button>

          <button
            class="remove-btn"
            @click="wishlist.remove(item.id)"
          >
            Remove
          </button>

        </div>

      </div>

    </div>

  </section>
</template>

<script>
import { wishlist } from "../store/wishlist";
import { cart } from "../store/cart";

export default {

  name: "Wishlist",

  data() {

    return {

      wishlist,

      cart

    };

  },

  methods: {

    moveToCart(item) {

      cart.add(item);

      wishlist.remove(item.id);

      this.$router.push("/cart");

    }

  }

};
</script>
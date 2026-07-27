<template>
  <div class="products">

    <h2>Our Products</h2>

    <!-- Show search text -->
    <p v-if="search">
      Search Results for:
      <strong>{{ search }}</strong>
    </p>

    <div class="grid">

      <div
        class="product"
        v-for="item in filteredProducts"
        :key="item.id"
      >

        <!-- Link igana kuri ProductDetail -->
        <router-link :to="`/products/${item.id}`">
          <img :src="item.image" :alt="item.name" width="150" />
          <h3>{{ item.name }}</h3>
        </router-link>

        <p>Price: ${{ item.price }}</p>

        <button @click="goToCheckout(item)">
          Buy Now
        </button>

      </div>

    </div>

  </div>
</template>

<script>
import appleImg from "../assets/apple.jfif";
import air1Img from "../assets/air1.jpg";
import hppcImg from "../assets/hppc.jfif";
import lenovoImg from "../assets/lenovo.jfif";
import air4Img from "../assets/two.jpg";
import dellpcImg from "../assets/dellpc.jfif";
import applephoneImg from "../assets/applephone.jfif";
import B2Img from "../assets/three.jpg";
import iFone17proImg from "../assets/iFone17pro.jfif";
import air2Img from "../assets/air2.jpg";
import pixelImg from "../assets/pixe17pro.jfif";
import airImg from "../assets/one.jpg";

export default {
  name: "Products",
  data() {
    return {
      // 🔍 GET search from URL
      search: this.$route.query.search || "",

      products: [
        { id: 1, name: "Apple Phone", price: 800, image: appleImg },
        { id: 2, name: "AIR1 Ultra+", price: 300, image: air1Img},
        { id: 3, name: "HP PC", price: 500, image: hppcImg },      
        { id: 4, name: "Lenovo Laptop", price: 600, image: lenovoImg },
        { id: 5, name: "Air1S", price: 230, image: air4Img },
        { id: 6, name: "Dell Laptop", price: 700, image: dellpcImg },
        { id: 7, name: "B2 air", price: 290, image: B2Img },
        { id: 8, name: "Apple Phone", price: 400, image: applephoneImg },
        { id: 9, name: "i phone 17 Pro", price: 150, image: iFone17proImg },
        { id: 10, name: "AIR2 Ultra", price: 280, image: air2Img},
        { id: 11, name: "Pixel 17 Pro", price: 900, image: pixelImg },
        { id: 12, name: "Air3S", price: 190, image: airImg },
      ]
    };
  },

  computed: {
    // 🔍 FILTER PRODUCTS BASED ON SEARCH
    filteredProducts() {
      if (!this.search) {
        return this.products;
      }

      return this.products.filter(item =>
        item.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },

  methods: {
    goToCheckout(item) {
      this.$router.push({
        path: "/checkout",
        query: { product: item.name }
      });
    }
  },

  // 🔁 If user searches again without reload
  watch: {
    "$route.query.search"(newSearch) {
      this.search = newSearch || "";
    }
  }
};
</script>

<style>
.products {
  text-align: center;
  margin-top: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  justify-items: center;
  margin: 40px auto;
  max-width: 1000px;
}

.product {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 8px;
  width: 220px;
  text-align: center;
  background: #f8f9fa;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.product:hover {
  transform: translateY(-5px);
}

button {
  background-color: #007bff;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
```vue
<template>
  <div class="products-page">

    <!-- Page Title -->
    <h1>Our Products</h1>

    <!-- Filters -->
    <div class="products-header">

      <!-- Search -->
      <input
        type="text"
        v-model="search"
        placeholder="🔍 Search products..."
        class="search-box"
      />

      <!-- Category -->
      <select v-model="selectedCategory">
        <option value="">All Categories</option>
        <option value="Smartphone">Smartphone</option>
        <option value="Laptop">Laptop</option>
        <option value="Wireless Earbuds">Wireless Earbuds</option>
        <option value="Desktop">Desktop</option>
        <option value="Electronics">Electronics</option>
      </select>

      <!-- Brand -->
      <select v-model="selectedBrand">
        <option value="">All Brands</option>
        <option value="Apple">Apple</option>
        <option value="HP">HP</option>
        <option value="Lenovo">Lenovo</option>
        <option value="Dell">Dell</option>
        <option value="Google">Google</option>
        <option value="AIR">AIR</option>
        <option value="B2">B2</option>
      </select>

      <!-- Sort -->
      <select v-model="sortBy">
        <option value="">Sort Products</option>
        <option value="low">Price Low → High</option>
        <option value="high">Price High → Low</option>
        <option value="rating">Best Rating</option>
      </select>

      <!-- Clear Filters -->
      <button
        v-if="hasFilters"
        class="clear-btn"
        @click="clearFilters"
      >
        ✕ Clear Filters
      </button>

    </div>

    <!-- Products Count -->
    <p class="count">
      {{ filteredProducts.length }} Products Found
    </p>

    <!-- No Products -->
    <div
      v-if="filteredProducts.length === 0"
      class="no-products"
    >
      <div class="no-products-icon">🔍</div>

      <h2>No Products Found</h2>

      <p>
        We couldn't find any products matching your search or filters.
      </p>

      <button
        class="clear-empty-btn"
        @click="clearFilters"
      >
        View All Products
      </button>
    </div>

    <!-- Products Grid -->
    <div
      v-else
      class="grid"
    >

      <div
        class="product"
        v-for="item in filteredProducts"
        :key="item.id"
      >

        <!-- Product Image + Name -->
        <router-link :to="`/products/${item.id}`">

          <div class="image-container">

            <img
              :src="item.image"
              :alt="item.name"
            />

          </div>

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
        </div>

        <!-- Price -->
        <p class="price">
          ${{ item.price }}
        </p>

        <!-- Buttons -->
        <div class="buttons">

          <router-link
            :to="`/products/${item.id}`"
            class="details-btn"
          >
            View Details
          </router-link>

          <button
            class="buy-btn"
            @click="goToCheckout(item)"
          >
            Buy Now
          </button>

        </div>

      </div>

    </div>

  </div>
</template>


<script>
import products from "../data/products.js";

export default {

  name: "Products",

  data() {
    return {

      // Search from URL
      search: this.$route.query.search || "",

      // Category from URL
      selectedCategory: this.$route.query.category || "",

      // Brand
      selectedBrand: this.$route.query.brand || "",

      // Sorting
      sortBy: this.$route.query.sort || "",

      // Product data
      products

    };
  },


  computed: {

    /*
     * Check if any filter is active
     */
    hasFilters() {
      return (
        this.search ||
        this.selectedCategory ||
        this.selectedBrand ||
        this.sortBy
      );
    },


    /*
     * Filter and sort products
     */
    filteredProducts() {

      let result = [...this.products];


      // =========================
      // SEARCH FILTER
      // =========================

      if (this.search) {

        const searchText = this.search
          .toLowerCase()
          .trim();

        result = result.filter(item => {

          return (
            item.name.toLowerCase().includes(searchText) ||

            item.brand.toLowerCase().includes(searchText) ||

            item.category.toLowerCase().includes(searchText)
          );

        });

      }


      // =========================
      // CATEGORY FILTER
      // =========================

      if (this.selectedCategory) {

        result = result.filter(item => {

          return item.category === this.selectedCategory;

        });

      }


      // =========================
      // BRAND FILTER
      // =========================

      if (this.selectedBrand) {

        result = result.filter(item => {

          return item.brand === this.selectedBrand;

        });

      }


      // =========================
      // SORT BY PRICE LOW → HIGH
      // =========================

      if (this.sortBy === "low") {

        result.sort((a, b) => {

          return Number(a.price) - Number(b.price);

        });

      }


      // =========================
      // SORT BY PRICE HIGH → LOW
      // =========================

      if (this.sortBy === "high") {

        result.sort((a, b) => {

          return Number(b.price) - Number(a.price);

        });

      }


      // =========================
      // SORT BY RATING
      // =========================

      if (this.sortBy === "rating") {

        result.sort((a, b) => {

          return Number(b.rating) - Number(a.rating);

        });

      }


      return result;
    }

  },


  methods: {

    /*
     * Buy Now
     */
    goToCheckout(item) {

      this.$router.push({

        path: "/checkout",

        query: {

          product: item.name

        }

      });

    },


    /*
     * Clear all filters
     */
    clearFilters() {

      this.search = "";
      this.selectedCategory = "";
      this.selectedBrand = "";
      this.sortBy = "";

      /*
       * Remove filters from URL
       */
      this.$router.push({
        path: "/products"
      });

    }

  },


  watch: {

    /*
     * Search query from URL
     */
    "$route.query.search"(newSearch) {

      this.search = newSearch || "";

    },


    /*
     * Category query from URL
     */
    "$route.query.category"(newCategory) {

      this.selectedCategory = newCategory || "";

    },


    /*
     * Brand query from URL
     */
    "$route.query.brand"(newBrand) {

      this.selectedBrand = newBrand || "";

    },


    /*
     * Sort query from URL
     */
    "$route.query.sort"(newSort) {

      this.sortBy = newSort || "";

    }

  }

};
</script>


<style scoped>

.products-page {

  padding: 60px;

  background: #f8fafc;

  min-height: 100vh;

}


/* =========================
   TITLE
========================= */

.products-page h1 {

  text-align: center;

  margin-bottom: 35px;

  color: #1e293b;

  font-size: 40px;

}


/* =========================
   FILTER HEADER
========================= */

.products-header {

  display: flex;

  gap: 15px;

  flex-wrap: wrap;

  justify-content: center;

  margin-bottom: 25px;

}


.products-header input,
.products-header select {

  padding: 12px 15px;

  border-radius: 8px;

  border: 1px solid #ccc;

  font-size: 16px;

  background: white;

  outline: none;

}


.products-header input:focus,
.products-header select:focus {

  border-color: #2563eb;

  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);

}


.search-box {

  width: 300px;

}


/* =========================
   CLEAR BUTTON
========================= */

.clear-btn {

  padding: 12px 18px;

  border: none;

  border-radius: 8px;

  background: #ef4444;

  color: white;

  font-weight: bold;

  cursor: pointer;

  transition: 0.3s;

}


.clear-btn:hover {

  background: #dc2626;

  transform: translateY(-2px);

}


/* =========================
   COUNT
========================= */

.count {

  text-align: center;

  font-weight: bold;

  margin-bottom: 30px;

  color: #2563eb;

  font-size: 17px;

}


/* =========================
   PRODUCTS GRID
========================= */

.grid {

  display: grid;

  grid-template-columns:
    repeat(auto-fit, minmax(250px, 1fr));

  gap: 25px;

}


/* =========================
   PRODUCT CARD
========================= */

.product {

  background: white;

  border-radius: 15px;

  padding: 20px;

  text-align: center;

  box-shadow:
    0 10px 25px rgba(0, 0, 0, 0.08);

  transition: 0.3s;

}


.product:hover {

  transform: translateY(-8px);

  box-shadow:
    0 18px 35px rgba(0, 0, 0, 0.12);

}


/* =========================
   IMAGE
========================= */

.image-container {

  width: 100%;

  height: 200px;

  display: flex;

  justify-content: center;

  align-items: center;

  margin-bottom: 15px;

  overflow: hidden;

  border-radius: 10px;

  background: #f8fafc;

}


.product img {

  width: 180px;

  height: 180px;

  object-fit: cover;

  transition: 0.3s;

}


.product:hover img {

  transform: scale(1.05);

}


/* =========================
   PRODUCT NAME
========================= */

.product a {

  text-decoration: none;

  color: #111827;

}


.product h3 {

  font-size: 19px;

  margin: 10px 0;

}


/* =========================
   BRAND
========================= */

.brand {

  color: #2563eb;

  font-weight: bold;

  margin: 10px 0;

}


/* =========================
   CATEGORY
========================= */

.category {

  display: inline-block;

  padding: 5px 10px;

  background: #eff6ff;

  color: #2563eb;

  border-radius: 20px;

  font-size: 13px;

  margin: 5px 0;

}


/* =========================
   RATING
========================= */

.rating {

  color: #f59e0b;

  margin: 10px 0;

}


/* =========================
   PRICE
========================= */

.price {

  font-size: 24px;

  font-weight: bold;

  color: #10b981;

  margin: 15px 0;

}


/* =========================
   BUTTONS
========================= */

.buttons {

  display: flex;

  justify-content: center;

  gap: 10px;

  margin-top: 20px;

}


.details-btn,
.buy-btn {

  padding: 10px 16px;

  border: none;

  border-radius: 8px;

  cursor: pointer;

  text-decoration: none;

  font-weight: bold;

  font-size: 14px;

}


.details-btn {

  background: #2563eb;

  color: white;

}


.buy-btn {

  background: #10b981;

  color: white;

}


.details-btn:hover {

  background: #1d4ed8;

}


.buy-btn:hover {

  background: #059669;

}


/* =========================
   NO PRODUCTS
========================= */

.no-products {

  text-align: center;

  padding: 70px 20px;

  background: white;

  border-radius: 15px;

  max-width: 600px;

  margin: 40px auto;

  box-shadow:
    0 10px 25px rgba(0, 0, 0, 0.08);

}


.no-products-icon {

  font-size: 50px;

  margin-bottom: 15px;

}


.no-products h2 {

  color: #1e293b;

  margin-bottom: 10px;

}


.no-products p {

  color: #64748b;

  margin-bottom: 25px;

}


.clear-empty-btn {

  padding: 12px 20px;

  border: none;

  border-radius: 8px;

  background: #2563eb;

  color: white;

  font-weight: bold;

  cursor: pointer;

}


.clear-empty-btn:hover {

  background: #1d4ed8;

}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 768px) {

  .products-page {

    padding: 25px;

  }


  .products-page h1 {

    font-size: 30px;

  }


  .products-header {

    flex-direction: column;

  }


  .products-header input,
  .products-header select,
  .search-box {

    width: 100%;

  }


  .buttons {

    flex-direction: column;

  }


  .details-btn,
  .buy-btn {

    width: 100%;

  }

}


@media (max-width: 480px) {

  .products-page {

    padding: 20px 15px;

  }


  .grid {

    grid-template-columns: 1fr;

  }


  .product img {

    width: 160px;

    height: 160px;

  }

}

</style>
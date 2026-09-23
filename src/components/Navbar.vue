<template>
  <header class="site-header">

    <!-- =====================================================
         TOP HEADER
    ====================================================== -->
    <div class="top-header">

      <!-- LOGO -->
      <div class="logo">
        <router-link to="/">
          <span class="logo-icon">🛍️</span>

          <span class="logo-name">
            Elisa<span>Shop</span>
          </span>
        </router-link>
      </div>


      <!-- DELIVERY LOCATION -->
      <div class="delivery">

        <span class="delivery-icon">📍</span>

        <div class="delivery-text">
          <span>Deliver to</span>
          <strong>Rwanda</strong>
        </div>

      </div>


      <!-- ================= SEARCH ================= -->

      <form
        class="search-area"
        @submit.prevent="searchProducts"
      >

        <div class="search-box">

          <input
            type="text"
            v-model="search"
            placeholder="Search products, brands and categories..."
          />

          <button
            type="submit"
            class="search-button"
            aria-label="Search"
          >
            🔍
          </button>

        </div>

      </form>


      <!-- ================= ACCOUNT ================= -->

      <router-link
        to="/login"
        class="header-action account-action"
      >

        <span class="action-icon">
          👤
        </span>

        <div class="action-text">

          <small>Hello, Sign in</small>

          <strong>Account</strong>

        </div>

      </router-link>


      <!-- ================= HELP ================= -->

      <router-link
        to="/contact"
        class="header-action help-action"
      >

        <span class="action-icon">
          ❓
        </span>

        <div class="action-text">

          <small>Need help?</small>

          <strong>Help</strong>

        </div>

      </router-link>


      <!-- ================= WISHLIST ================= -->

      <router-link
        to="/wishlist"
        class="simple-action"
      >

        <div class="action-icon-wrapper">

          ❤️

          <span
            v-if="wishlist.count() > 0"
            class="badge wishlist-badge"
          >
            {{ wishlist.count() }}
          </span>

        </div>

        <span class="simple-label">
          Wishlist
        </span>

      </router-link>


      <!-- ================= CART ================= -->

      <router-link
        to="/cart"
        class="simple-action"
      >

        <div class="action-icon-wrapper">

          🛒

          <span
            v-if="cart.items.length > 0"
            class="badge cart-badge"
          >
            {{ cart.items.length }}
          </span>

        </div>

        <span class="simple-label">
          Cart
        </span>

      </router-link>

    </div>


    <!-- =====================================================
         SECOND NAVIGATION
    ====================================================== -->

    <nav class="main-navigation">

      <div class="navigation-container">


        <!-- ================= ALL CATEGORIES ================= -->

        <div class="categories-container">

          <button
            class="categories-button"
            @click="toggleCategories"
          >

            <span class="menu-icon">
              ☰
            </span>

            <span>
              ALL CATEGORIES
            </span>

            <span class="dropdown-arrow">
              {{ showCategories ? "▲" : "▼" }}
            </span>

          </button>


          <!-- CATEGORY DROPDOWN -->

          <div
            v-if="showCategories"
            class="categories-dropdown"
          >

            <router-link
              to="/products?category=Smartphone"
              @click="closeCategories"
            >

              <span class="category-icon">
                📱
              </span>

              <span>
                Phones & Tablets
              </span>

            </router-link>


            <router-link
              to="/products?category=Laptop"
              @click="closeCategories"
            >

              <span class="category-icon">
                💻
              </span>

              <span>
                Laptops
              </span>

            </router-link>


            <router-link
              to="/products?category=Desktop"
              @click="closeCategories"
            >

              <span class="category-icon">
                🖥️
              </span>

              <span>
                Computing
              </span>

            </router-link>


            <router-link
              to="/products?category=Wireless%20Earbuds"
              @click="closeCategories"
            >

              <span class="category-icon">
                🎧
              </span>

              <span>
                Audio & Earbuds
              </span>

            </router-link>


            <router-link
              to="/products?category=Electronics"
              @click="closeCategories"
            >

              <span class="category-icon">
                ⚡
              </span>

              <span>
                Electronics
              </span>

            </router-link>


            <router-link
              to="/products"
              @click="closeCategories"
            >

              <span class="category-icon">
                ⌚
              </span>

              <span>
                Smart Devices
              </span>

            </router-link>


            <router-link
              to="/products"
              @click="closeCategories"
            >

              <span class="category-icon">
                🔌
              </span>

              <span>
                Accessories
              </span>

            </router-link>

          </div>

        </div>


        <!-- ================= MAIN LINKS ================= -->

        <div class="navigation-links">

          <router-link to="/">
            Home
          </router-link>

          <router-link to="/products">
            Products
          </router-link>

          <router-link to="/services">
            Services
          </router-link>

          <router-link to="/about">
            About Us
          </router-link>

          <router-link to="/contact">
            Contact
          </router-link>

        </div>


        <!-- ================= RIGHT LINKS ================= -->

        <div class="navigation-right">

          <router-link to="/register">
            Register
          </router-link>

          <router-link
            to="/login"
            class="login-link"
          >
            Login
          </router-link>

        </div>

      </div>

    </nav>

  </header>
</template>


<script>

import { cart } from "../store/cart";
import { wishlist } from "../store/wishlist";

export default {

  name: "Navbar",

  data() {

    return {

      cart,

      wishlist,

      search: "",

      showCategories: false

    };

  },


  methods: {

    /* =====================================================
       SEARCH PRODUCTS
    ====================================================== */

    searchProducts() {

      const searchText = this.search.trim();

      if (!searchText) {

        this.$router.push("/products");

        return;

      }

      this.$router.push({

        path: "/products",

        query: {
          search: searchText
        }

      });

    },


    /* =====================================================
       CATEGORY MENU
    ====================================================== */

    toggleCategories() {

      this.showCategories =
        !this.showCategories;

    },


    closeCategories() {

      this.showCategories = false;

    }

  }

};

</script>


<style scoped>

/* =====================================================
   MAIN HEADER
===================================================== */

.site-header {

  width: 100%;

  position: sticky;

  top: 0;

  z-index: 9999;

  box-shadow:
    0 2px 10px rgba(0, 0, 0, 0.12);

}


/* =====================================================
   TOP HEADER
===================================================== */

.top-header {

  width: 100%;

  min-height: 72px;

  padding: 8px 35px;

  box-sizing: border-box;

  background: #2563eb;

  color: white;

  display: flex;

  align-items: center;

  gap: 18px;

}


/* =====================================================
   LOGO
===================================================== */

.logo {

  flex-shrink: 0;

}


.logo a {

  display: flex;

  align-items: center;

  gap: 7px;

  text-decoration: none;

  color: white;

}


.logo-icon {

  font-size: 30px;

  line-height: 1;

}


.logo-name {

  font-size: 26px;

  font-weight: 800;

  letter-spacing: -1px;

}


.logo-name span {

  color: #facc15;

}


/* =====================================================
   DELIVERY
===================================================== */

.delivery {

  display: flex;

  align-items: center;

  gap: 7px;

  padding: 7px 8px;

  border: 1px solid transparent;

  flex-shrink: 0;

}


.delivery:hover {

  border-color: rgba(255, 255, 255, 0.8);

}


.delivery-icon {

  font-size: 21px;

}


.delivery-text span {

  display: block;

  font-size: 11px;

  line-height: 13px;

  opacity: 0.9;

}


.delivery-text strong {

  display: block;

  font-size: 13px;

  line-height: 15px;

}


/* =====================================================
   SEARCH AREA
===================================================== */

.search-area {

  flex: 1;

  min-width: 250px;

  max-width: 700px;

  height: 44px;

  display: flex;

  align-items: center;

}


/* =====================================================
   SEARCH BOX
===================================================== */

.search-box {

  width: 100%;

  height: 44px;

  display: flex;

  align-items: stretch;

}


/* =====================================================
   SEARCH INPUT
===================================================== */

.search-box input {

  flex: 1;

  min-width: 0;

  height: 44px;

  box-sizing: border-box;

  border: none;

  outline: none;

  padding: 0 18px;

  background: white;

  color: #1e293b;

  font-size: 15px;

  border-radius: 6px 0 0 6px;

}


.search-box input::placeholder {

  color: #64748b;

}


.search-box input:focus {

  box-shadow:
    inset 0 0 0 2px #facc15;

}


/* =====================================================
   SEARCH BUTTON
===================================================== */

.search-box .search-button {

  flex: 0 0 58px;

  width: 58px;

  height: 44px;

  margin: 1;

  padding: 5;

  border: none;

  outline: none;

  background: #facc15;

  color: #1e293b;

  display: flex;

  align-items: center;

  justify-content: center;

  font-size: 20px;

  cursor: pointer;

  border-radius: 3 9px 9px 3;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

}


.search-box .search-button:hover {

  background: #eab308;

}


.search-box .search-button:active {

  transform: scale(0.96);

}


/* =====================================================
   ACCOUNT / HELP
===================================================== */

.header-action {

  display: flex;

  align-items: center;

  gap: 7px;

  padding: 7px 8px;

  color: white;

  text-decoration: none;

  border: 1px solid transparent;

  flex-shrink: 0;

}


.header-action:hover {

  border-color: white;

}


.action-icon {

  font-size: 22px;

  line-height: 1;

}


.action-text small {

  display: block;

  font-size: 10px;

  line-height: 13px;

  opacity: 0.9;

}


.action-text strong {

  display: block;

  font-size: 13px;

  line-height: 15px;

}


/* =====================================================
   WISHLIST / CART
===================================================== */

.simple-action {

  position: relative;

  min-width: 58px;

  padding: 6px;

  color: white;

  text-decoration: none;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  gap: 3px;

  border: 1px solid transparent;

  flex-shrink: 0;

}


.simple-action:hover {

  border-color: white;

}


.action-icon-wrapper {

  position: relative;

  font-size: 22px;

  line-height: 1;

}


.simple-label {

  font-size: 11px;

  font-weight: 600;

  line-height: 13px;

}


/* =====================================================
   BADGES
===================================================== */

.badge {

  position: absolute;

  top: -9px;

  right: -11px;

  min-width: 18px;

  height: 18px;

  padding: 0 4px;

  box-sizing: border-box;

  border-radius: 50px;

  display: flex;

  align-items: center;

  justify-content: center;

  color: white;

  font-size: 10px;

  font-weight: bold;

}


.wishlist-badge {

  background: #ec4899;

}


.cart-badge {

  background: #ef4444;

}


/* =====================================================
   SECOND NAVIGATION
===================================================== */

.main-navigation {

  width: 100%;

  background: #1e40af;

  color: white;

}


.navigation-container {

  width: 100%;

  min-height: 47px;

  padding: 0 35px;

  box-sizing: border-box;

  display: flex;

  align-items: center;

  gap: 18px;

}


/* =====================================================
   ALL CATEGORIES
===================================================== */

.categories-container {

  position: relative;

  flex-shrink: 0;

}


.categories-button {

  height: 47px;

  padding: 0 16px;

  border: none;

  background: #1d4ed8;

  color: white;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 8px;

  font-size: 13px;

  font-weight: 800;

  cursor: pointer;

  transition: background 0.2s ease;

}


.categories-button:hover {

  background: #1e3a8a;

}


.menu-icon {

  font-size: 18px;

}


.dropdown-arrow {

  font-size: 9px;

}


/* =====================================================
   CATEGORY DROPDOWN
===================================================== */

.categories-dropdown {

  position: absolute;

  top: 47px;

  left: 0;

  width: 260px;

  background: white;

  border: 1px solid #e5e7eb;

  border-top: none;

  border-radius: 0 0 7px 7px;

  overflow: hidden;

  box-shadow:
    0 12px 30px rgba(0, 0, 0, 0.18);

}


.categories-dropdown a {

  min-height: 47px;

  box-sizing: border-box;

  display: flex;

  align-items: center;

  gap: 13px;

  padding: 10px 18px;

  color: #1e293b;

  background: white;

  text-decoration: none;

  font-size: 14px;

  border-bottom: 1px solid #f1f5f9;

  transition:
    background 0.2s ease,
    color 0.2s ease,
    padding-left 0.2s ease;

}


.categories-dropdown a:last-child {

  border-bottom: none;

}


.categories-dropdown a:hover {

  background: #eff6ff;

  color: #2563eb;

  padding-left: 23px;

}


.category-icon {

  width: 25px;

  text-align: center;

  font-size: 18px;

}


/* =====================================================
   MAIN NAVIGATION LINKS
===================================================== */

.navigation-links {

  flex: 1;

  display: flex;

  align-items: center;

  gap: 3px;

}


.navigation-links a,
.navigation-right a {

  padding: 9px 13px;

  color: white;

  text-decoration: none;

  font-size: 14px;

  font-weight: 600;

  border: 1px solid transparent;

  border-radius: 4px;

  transition:
    border-color 0.2s ease,
    color 0.2s ease,
    background 0.2s ease;

}


.navigation-links a:hover,
.navigation-right a:hover {

  border-color: white;

}


.navigation-links a.router-link-active {

  color: #facc15;

}


/* =====================================================
   RIGHT NAVIGATION
===================================================== */

.navigation-right {

  display: flex;

  align-items: center;

  gap: 4px;

  flex-shrink: 0;

}


.navigation-right .login-link {

  background: #facc15;

  color: #1e293b;

  font-weight: 700;

}


.navigation-right .login-link:hover {

  background: #eab308;

  border-color: transparent;

}


/* =====================================================
   TABLET
===================================================== */

@media (max-width: 1200px) {

  .top-header {

    padding-left: 20px;

    padding-right: 20px;

    gap: 11px;

  }


  .navigation-container {

    padding-left: 20px;

    padding-right: 20px;

  }


  .delivery {

    display: none;

  }


  .search-area {

    max-width: none;

  }

}


/* =====================================================
   SMALL TABLET
===================================================== */

@media (max-width: 950px) {

  .top-header {

    flex-wrap: wrap;

    min-height: auto;

    padding-top: 10px;

    padding-bottom: 10px;

  }


  .logo {

    flex: 1;

  }


  .account-action {

    display: none;

  }


  .search-area {

    order: 5;

    flex-basis: 100%;

    max-width: none;

    min-width: 0;

  }


  .navigation-container {

    overflow-x: auto;

    white-space: nowrap;

  }


  .navigation-links {

    flex: none;

  }

}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 600px) {

  .top-header {

    padding: 9px 12px;

    gap: 7px;

  }


  .logo-icon {

    font-size: 25px;

  }


  .logo-name {

    font-size: 21px;

  }


  .help-action {

    display: none;

  }


  .simple-action {

    min-width: 40px;

    padding: 4px;

  }


  .simple-label {

    display: none;

  }


  .action-icon-wrapper {

    font-size: 21px;

  }


  .search-area {

    width: 100%;

    height: 42px;

  }


  .search-box {

    width: 100%;

    height: 42px;

  }


  .search-box input {

    height: 42px;

    padding: 0 12px;

    font-size: 13px;

  }


  .search-box .search-button {

    flex: 0 0 48px;

    width: 48px;

    height: 42px;

    font-size: 18px;

  }


  .main-navigation {

    overflow-x: auto;

  }


  .navigation-container {

    width: max-content;

    min-width: 100%;

    min-height: 45px;

    padding: 0 8px;

    gap: 4px;

  }


  .categories-button {

    height: 45px;

    padding: 0 10px;

    font-size: 11px;

  }


  .navigation-links {

    gap: 0;

  }


  .navigation-links a,
  .navigation-right a {

    padding: 9px 8px;

    font-size: 12px;

    white-space: nowrap;

  }


  .navigation-right {

    display: flex;

  }


  .categories-dropdown {

    position: fixed;

    top: auto;

    left: 8px;

    width: 245px;

    z-index: 10000;

  }

}


/* =====================================================
   VERY SMALL PHONE
===================================================== */

@media (max-width: 380px) {

  .logo-name {

    font-size: 18px;

  }


  .logo-icon {

    font-size: 21px;

  }


  .simple-action {

    min-width: 34px;

  }


  .action-icon-wrapper {

    font-size: 19px;

  }


  .search-box input {

    font-size: 12px;

  }

}

</style>

<template>
  <header class="site-header">
    <div class="top-header">
      <div class="logo">
        <router-link to="/">
          <span class="logo-icon">🛍️</span>
          <span class="logo-name">Elisa<span>Shop</span></span>
        </router-link>
      </div>
      <div class="delivery">
        <span class="delivery-icon">📍</span>
        <div class="delivery-text">
          <span>{{ $t("nav.deliverTo") }}</span>
          <strong>{{ $t("nav.country") }}</strong>
        </div>
      </div>
      <form class="search-area" @submit.prevent="searchProducts">
        <input v-model="search" type="text" class="search-input" :placeholder="$t('nav.searchPlaceholder')" />
        <button type="submit" class="search-button" aria-label="Search">🔍</button>
      </form>
      <div class="lang-selector" ref="langRef">
        <button class="lang-button" type="button" @click="toggleLang">
          <span class="lang-flag">{{ currentFlag }}</span>
          <span class="lang-code">{{ currentLocale.toUpperCase() }}</span>
          <span class="lang-arrow">{{ showLang ? "▲" : "▼" }}</span>
        </button>
        <transition name="fade">
          <div v-if="showLang" class="lang-dropdown">
            <button v-for="lang in languages" :key="lang.code" type="button" class="lang-option" :class="{ active: currentLocale === lang.code }" @click="changeLanguage(lang.code)">
              <span class="lang-flag">{{ lang.flag }}</span>
              <span class="lang-label">{{ lang.label }}</span>
              <span v-if="currentLocale === lang.code" class="lang-check">✓</span>
            </button>
          </div>
        </transition>
      </div>
      <router-link to="/login" class="header-action account-action">
        <span class="action-icon">👤</span>
        <div class="action-text">
          <small>{{ $t("nav.helloSignIn") }}</small>
          <strong>{{ $t("nav.account") }}</strong>
        </div>
      </router-link>
      <router-link to="/contact" class="header-action help-action">
        <span class="action-icon">❓</span>
        <div class="action-text">
          <small>{{ $t("nav.needHelp") }}</small>
          <strong>{{ $t("nav.help") }}</strong>
        </div>
      </router-link>
      <router-link to="/wishlist" class="simple-action">
        <div class="action-icon-wrapper">
          ❤️
          <span v-if="wishlist.count() > 0" class="badge wishlist-badge">{{ wishlist.count() }}</span>
        </div>
        <span class="simple-label">{{ $t("nav.wishlist") }}</span>
      </router-link>
      <router-link to="/cart" class="simple-action">
        <div class="action-icon-wrapper">
          🛒
          <span v-if="cart.items.length > 0" class="badge cart-badge">{{ cart.items.length }}</span>
        </div>
        <span class="simple-label">{{ $t("nav.cart") }}</span>
      </router-link>
    </div>
    <nav class="main-navigation">
      <div class="navigation-container">
        <div class="categories-container">
          <button class="categories-button" type="button" @click="toggleCategories">
            <span class="menu-icon">☰</span>
            <span>{{ $t("nav.allCategories") }}</span>
            <span class="dropdown-arrow">{{ showCategories ? "▲" : "▼" }}</span>
          </button>
          <div v-if="showCategories" class="categories-dropdown">
            <router-link v-for="cat in categories" :key="cat.key" :to="cat.to" @click="closeCategories">
              <span class="category-icon">{{ cat.icon }}</span>
              <span>{{ $t(`categories.${cat.key}`) }}</span>
            </router-link>
          </div>
        </div>
        <div class="navigation-links">
          <router-link to="/">{{ $t("nav.home") }}</router-link>
          <router-link to="/products">{{ $t("nav.products") }}</router-link>
          <router-link to="/services">{{ $t("nav.services") }}</router-link>
          <router-link to="/about">{{ $t("nav.aboutUs") }}</router-link>
          <router-link to="/contact">{{ $t("nav.contact") }}</router-link>
        </div>
        <div class="navigation-right">
          <router-link to="/register">{{ $t("nav.register") }}</router-link>
          <router-link to="/login" class="login-link">{{ $t("nav.login") }}</router-link>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
import { useI18n } from "vue-i18n";
import { cart } from "../store/cart";
import { wishlist } from "../store/wishlist";
export default {
  name: "Navbar",
  data() {
    return {
      cart,
      wishlist,
      search: "",
      showCategories: false,
      showLang: false,
      languages: [
        { code: "en", flag: "🇬🇧", label: "English" },
        { code: "fr", flag: "🇫🇷", label: "Français" },
        { code: "rw", flag: "🇷🇼", label: "Kinyarwanda" }
      ],
      categories: [
        { key: "phones", icon: "📱", to: "/products?category=Smartphone" },
        { key: "laptops", icon: "💻", to: "/products?category=Laptop" },
        { key: "computing", icon: "🖥️", to: "/products?category=Desktop" },
        { key: "audio", icon: "🎧", to: "/products?category=Wireless%20Earbuds" },
        { key: "electronics", icon: "⚡", to: "/products?category=Electronics" },
        { key: "smartDevices", icon: "⌚", to: "/products" },
        { key: "accessories", icon: "🔌", to: "/products" }
      ]
    };
  },
  setup() {
    const { locale } = useI18n({ useScope: "global" });
    return { locale };
  },
  computed: {
    currentLocale() {
      return this.locale;
    },
    currentFlag() {
      const found = this.languages.find((lang) => lang.code === this.currentLocale);
      return found ? found.flag : "🇬🇧";
    }
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    searchProducts() {
      const searchText = this.search.trim();
      this.$router.push({ path: "/products", query: searchText ? { search: searchText } : {} });
    },
    toggleCategories() {
      this.showCategories = !this.showCategories;
      if (this.showCategories) this.showLang = false;
    },
    closeCategories() {
      this.showCategories = false;
    },
    toggleLang() {
      this.showLang = !this.showLang;
      if (this.showLang) this.showCategories = false;
    },
    changeLanguage(code) {
      if (!this.languages.some((lang) => lang.code === code)) return;
      this.locale = code;
      localStorage.setItem("language", code);
      document.documentElement.setAttribute("lang", code);
      this.showLang = false;
    },
    handleClickOutside(event) {
      const langEl = this.$refs.langRef;
      if (langEl && !langEl.contains(event.target)) this.showLang = false;
    }
  }
};
</script>
<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
}
.top-header {
  display: flex;
  align-items: center;
  gap: 14px;
  box-sizing: border-box;
  width: 100%;
  min-height: 72px;
  padding: 8px 30px;
  background: #2563eb;
  color: #ffffff;
}
.logo a {
  display: flex;
  align-items: center;
  gap: 7px;
  color: #ffffff;
  text-decoration: none;
}
.logo-icon {
  font-size: 28px;
  line-height: 1;
}
.logo-name {
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -1px;
}
.logo-name span {
  color: #facc15;
}
.delivery {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 6px 8px;
  border: 1px solid transparent;
}
.delivery:hover {
  border-color: rgba(255, 255, 255, 0.8);
}
.delivery-icon {
  font-size: 20px;
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
.search-area {
  display: flex !important;
  flex-direction: row !important;
  flex-wrap: nowrap !important;
  align-items: stretch !important;
  flex: 1 1 auto;
  min-width: 200px;
  max-width: 620px;
  height: 42px;
  margin: 0 !important;
  padding: 0 !important;
  border: none !important;
  background: transparent;
  position: relative;
  gap: 0 !important;
}
.search-input {
  display: block !important;
  flex: 1 1 auto !important;
  min-width: 0 !important;
  width: auto !important;
  height: 100% !important;
  box-sizing: border-box !important;
  padding: 0 16px;
  margin: 0 !important;
  border: none !important;
  outline: none !important;
  border-radius: 6px 0 0 6px !important;
  background: #ffffff !important;
  color: #1e293b;
  font-size: 14px;
  position: static !important;
}
.search-input::placeholder {
  color: #64748b;
}
.search-input:focus {
  box-shadow: inset 0 0 0 2px #facc15;
}
.search-button {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex: 0 0 52px !important;
  width: 52px !important;
  min-width: 52px !important;
  max-width: 52px !important;
  height: 100% !important;
  position: static !important;
  float: none !important;
  margin: 0 !important;
  padding: 0 !important;
  border: none !important;
  outline: none !important;
  background: #facc15 !important;
  color: #1e293b !important;
  font-size: 18px !important;
  cursor: pointer !important;
  border-radius: 0 6px 6px 0 !important;
  transition: background 0.2s ease, transform 0.15s ease;
}
.search-button:hover {
  background: #eab308 !important;
}
.search-button:active {
  transform: scale(0.96);
}
.lang-selector {
  position: relative;
  flex-shrink: 0;
}
.lang-button {
  display: flex;
  align-items: center;
  gap: 6px;
  height: 38px;
  padding: 0 10px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  transition: background 0.2s ease, border-color 0.2s ease;
}
.lang-button:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
}
.lang-flag {
  font-size: 16px;
  line-height: 1;
}
.lang-code {
  letter-spacing: 0.5px;
}
.lang-arrow {
  font-size: 8px;
  opacity: 0.9;
}
.lang-dropdown {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 180px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.18);
  overflow: hidden;
  z-index: 1002;
}
.lang-option {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px 14px;
  background: #ffffff;
  color: #1e293b;
  border: none;
  border-bottom: 1px solid #f1f5f9;
  font-size: 14px;
  cursor: pointer;
  text-align: left;
  transition: background 0.15s ease, color 0.15s ease;
}
.lang-option:last-child {
  border-bottom: none;
}
.lang-option:hover {
  background: #eff6ff;
  color: #2563eb;
}
.lang-option.active {
  background: #eff6ff;
  color: #2563eb;
  font-weight: 700;
}
.lang-option .lang-flag {
  font-size: 18px;
}
.lang-option .lang-label {
  flex: 1;
}
.lang-option .lang-check {
  color: #2563eb;
  font-weight: 800;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
.header-action {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 6px 8px;
  color: #ffffff;
  text-decoration: none;
  border: 1px solid transparent;
  flex-shrink: 0;
}
.header-action:hover {
  border-color: #ffffff;
}
.action-icon {
  font-size: 20px;
  line-height: 1;
}
.action-text small {
  display: block;
  font-size: 10px;
  line-height: 12px;
  opacity: 0.9;
}
.action-text strong {
  display: block;
  font-size: 13px;
  line-height: 15px;
}
.simple-action {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  min-width: 54px;
  padding: 5px;
  color: #ffffff;
  text-decoration: none;
  border: 1px solid transparent;
  flex-shrink: 0;
}
.simple-action:hover {
  border-color: #ffffff;
}
.action-icon-wrapper {
  position: relative;
  font-size: 21px;
  line-height: 1;
}
.simple-label {
  font-size: 10px;
  font-weight: 600;
  line-height: 12px;
}
.badge {
  position: absolute;
  top: -8px;
  right: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 17px;
  height: 17px;
  padding: 0 4px;
  border-radius: 50px;
  color: #ffffff;
  font-size: 10px;
  font-weight: 700;
}
.wishlist-badge {
  background: #ec4899;
}
.cart-badge {
  background: #ef4444;
}
.main-navigation {
  width: 100%;
  background: #1e40af;
  color: #ffffff;
}
.navigation-container {
  display: flex;
  align-items: center;
  gap: 14px;
  box-sizing: border-box;
  width: 100%;
  min-height: 47px;
  padding: 0 30px;
}
.categories-container {
  position: relative;
}
.categories-button {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 47px;
  padding: 0 14px;
  border: none;
  background: #1d4ed8;
  color: #ffffff;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.3px;
  cursor: pointer;
  transition: background 0.2s ease;
}
.categories-button:hover {
  background: #1e3a8a;
}
.menu-icon {
  font-size: 16px;
}
.dropdown-arrow {
  font-size: 8px;
}
.categories-dropdown {
  position: absolute;
  top: 47px;
  left: 0;
  width: 240px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-top: none;
  border-radius: 0 0 7px 7px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.18);
  z-index: 1001;
}
.categories-dropdown a {
  display: flex;
  align-items: center;
  gap: 12px;
  box-sizing: border-box;
  min-height: 45px;
  padding: 10px 16px;
  border-bottom: 1px solid #f1f5f9;
  background: #ffffff;
  color: #1e293b;
  font-size: 14px;
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease, padding-left 0.2s ease;
}
.categories-dropdown a:last-child {
  border-bottom: none;
}
.categories-dropdown a:hover {
  background: #eff6ff;
  color: #2563eb;
  padding-left: 21px;
}
.category-icon {
  width: 22px;
  font-size: 16px;
  text-align: center;
}
.navigation-links {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 2px;
}
.navigation-links a,
.navigation-right a {
  padding: 8px 12px;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #ffffff;
  font-size: 13.5px;
  font-weight: 600;
  text-decoration: none;
  transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;
}
.navigation-links a:hover,
.navigation-right a:hover {
  border-color: #ffffff;
}
.navigation-links a.router-link-active {
  color: #facc15;
}
.navigation-right {
  display: flex;
  align-items: center;
  gap: 4px;
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
@media (max-width: 1280px) {
  .top-header,
  .navigation-container {
    padding-left: 20px;
    padding-right: 20px;
  }
  .top-header {
    gap: 10px;
  }
  .delivery {
    display: none;
  }
  .search-area {
    max-width: none;
  }
}
@media (max-width: 1050px) {
  .help-action {
    display: none;
  }
}
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
    min-width: 0;
    max-width: none;
  }
  .navigation-container {
    overflow-x: auto;
    white-space: nowrap;
  }
  .navigation-links {
    flex: none;
  }
}
@media (max-width: 600px) {
  .top-header {
    padding: 8px 12px;
    gap: 6px;
  }
  .logo-icon {
    font-size: 24px;
  }
  .logo-name {
    font-size: 20px;
  }
  .simple-action {
    min-width: 38px;
    padding: 3px;
  }
  .simple-label {
    display: none;
  }
  .action-icon-wrapper {
    font-size: 20px;
  }
  .lang-button {
    height: 34px;
    padding: 0 8px;
    font-size: 12px;
  }
  .lang-flag {
    font-size: 15px;
  }
  .lang-code {
    display: none;
  }
  .search-area,
  .search-input,
  .search-button {
    height: 40px;
  }
  .search-input {
    padding: 0 12px;
    font-size: 13px;
  }
  .search-button {
    flex: 0 0 46px !important;
    width: 46px !important;
    font-size: 17px !important;
  }
  .main-navigation {
    overflow-x: auto;
  }
  .navigation-container {
    width: max-content;
    min-width: 100%;
    min-height: 44px;
    padding: 0 8px;
    gap: 4px;
  }
  .categories-button {
    height: 44px;
    padding: 0 10px;
    font-size: 11px;
  }
  .navigation-links {
    gap: 0;
  }
  .navigation-links a,
  .navigation-right a {
    padding: 8px;
    font-size: 12px;
    white-space: nowrap;
  }
  .categories-dropdown {
    position: absolute;
    top: 44px;
    left: 0;
    width: 230px;
  }
}
@media (max-width: 380px) {
  .logo-name {
    font-size: 17px;
  }
  .logo-icon {
    font-size: 20px;
  }
  .simple-action {
    min-width: 32px;
  }
  .action-icon-wrapper {
    font-size: 18px;
  }
  .search-input {
    font-size: 12px;
  }
}
</style>

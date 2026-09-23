import { createRouter, createWebHistory } from "vue-router";

// Pages
import Home from "../pages/Home.vue";
import Products from "../pages/Products.vue";
import ProductDetail from "../pages/ProductDetail.vue";
import Cart from "../pages/Cart.vue";
import Wishlist from "../pages/Wishlist.vue";
import About from "../pages/About.vue";
import Services from "../pages/Services.vue";
import Contact from "../pages/Contact.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import Checkout from "../pages/Checkout.vue";
import OrderConfirmation from "../pages/OrderConfirmation.vue";

const routes = [
  // Home
  {
    path: "/",
    component: Home,
  },

  // Products
  {
    path: "/products",
    component: Products,
  },

  // Product Detail
  {
    path: "/products/:id",
    component: ProductDetail,
  },

  // Cart
  {
    path: "/cart",
    component: Cart,
  },

  // Wishlist
  {
    path: "/wishlist",
    component: Wishlist,
  },

  // About
  {
    path: "/about",
    component: About,
  },

  // Services
  {
    path: "/services",
    component: Services,
  },

  // Contact
  {
    path: "/contact",
    component: Contact,
  },

  // Login
  {
    path: "/login",
    component: Login,
  },

  // Register
  {
    path: "/register",
    component: Register,
  },

  // Checkout
  {
    path: "/checkout",
    component: Checkout,
  },

  // Order Confirmation
  {
    path: "/confirmation",
    component: OrderConfirmation,
  },

  // 404 Page
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
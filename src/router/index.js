import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/Home.vue")
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("../pages/Products.vue")
  },
  {
    path: "/products/:id",
    name: "ProductDetail",
    component: () => import("../pages/ProductDetail.vue")
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../pages/Cart.vue")
  },
  {
    path: "/wishlist",
    name: "Wishlist",
    component: () => import("../pages/Wishlist.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../pages/About.vue")
  },
  {
    path: "/services",
    name: "Services",
    component: () => import("../pages/Services.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../pages/Contact.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../pages/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../pages/Register.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  }
});

export default router;
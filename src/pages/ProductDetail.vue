```vue
<template>
  <main class="product-detail-page">
    <div v-if="product" class="product-detail">
      <div class="left">
        <ProductGallery :product="product" />
      </div>

      <div class="right">
        <ProductInfo :product="product" />
        <QuantitySelector />
        <ProductAction :product="product" />
      </div>
    </div>

    <template v-if="product">
      <ProductSpecification :product="product" />

      <RelatedProducts :currentProduct="product" />

      <CustomerReviews :product="product" />
    </template>

    <div v-else class="not-found">
      <div class="not-found-icon">!</div>
      <h2>Product Not Found</h2>
      <p>The product you are looking for does not exist or is no longer available.</p>
      <router-link to="/products">Back To Products</router-link>
    </div>
  </main>
</template>

<script>
import products from "../data/products";
import ProductGallery from "../components/ProductGallery.vue";
import ProductInfo from "../components/ProductInfo.vue";
import QuantitySelector from "../components/QuantitySelector.vue";
import ProductAction from "../components/ProductAction.vue";
import ProductSpecification from "../components/ProductSpecification.vue";
import RelatedProducts from "../components/RelatedProducts.vue";
import CustomerReviews from "../components/CustomerReviews.vue";

export default {
  name: "ProductDetail",

  components: {
    ProductGallery,
    ProductInfo,
    QuantitySelector,
    ProductAction,
    ProductSpecification,
    RelatedProducts,
    CustomerReviews
  },

  data() {
    return {
      products
    };
  },

  computed: {
    product() {
      const id = Number(this.$route.params.id);
      return this.products.find(item => Number(item.id) === id) || null;
    }
  },

  watch: {
    "$route.params.id"() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style scoped>
.product-detail-page {
  min-height: 60vh;
  background: #f8fafc;
}

.product-detail {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 48px;
  padding: 55px 6%;
  background: #fff;
}

.left {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  min-width: 0;
}

.right {
  display: flex;
  flex-direction: column;
  gap: 22px;
  min-width: 0;
}

.not-found {
  display: flex;
  min-height: 65vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
}

.not-found-icon {
  display: flex;
  width: 64px;
  height: 64px;
  align-items: center;
  justify-content: center;
  color: #2563eb;
  background: #dbeafe;
  border-radius: 50%;
  font-size: 32px;
  font-weight: 800;
}

.not-found h2 {
  margin: 20px 0 8px;
  color: #0f172a;
  font-size: 30px;
}

.not-found p {
  max-width: 450px;
  margin: 0 0 24px;
  color: #64748b;
  line-height: 1.6;
}

.not-found a {
  padding: 13px 22px;
  color: #fff;
  background: #2563eb;
  border-radius: 8px;
  font-weight: 700;
  text-decoration: none;
}

.not-found a:hover {
  background: #1d4ed8;
}

@media (max-width: 900px) {
  .product-detail {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 35px 5%;
  }
}
</style>
```
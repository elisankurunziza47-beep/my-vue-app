
<template>
  <section class="featured-products">
    <div class="section-title">
      <div>
        <span class="section-label">ELISA SHOP</span>
        <h2>Our Products</h2>
        <p>Discover quality products at affordable prices.</p>
      </div>

      <span class="product-count">{{ allProducts.length }} Products</span>
    </div>

    <div v-if="allProducts.length" class="products-grid">
      <router-link
        v-for="item in allProducts"
        :key="item.id"
        :to="`/products/${item.id}`"
        class="product-card"
      >
        <div class="image-container">
          <span v-if="item.discount" class="discount-badge">
            -{{ item.discount }}%
          </span>

          <img
            :src="item.image"
            :alt="item.name"
            loading="lazy"
          />
        </div>

        <div class="product-info">
          <span class="product-category">{{ item.category }}</span>

          <h3>{{ item.name }}</h3>

          <div class="rating">
            <span class="stars">★</span>
            <span>{{ item.rating ?? 0 }}</span>
            <span class="reviews">({{ item.reviews ?? 0 }})</span>
          </div>

          <div class="price-container">
            <span class="price">
              {{ formatPrice(item.price) }}
            </span>

            <span
              v-if="item.oldPrice"
              class="old-price"
            >
              {{ formatPrice(item.oldPrice) }}
            </span>
          </div>

          <span
            class="stock-status"
            :class="item.stock > 0 ? 'in-stock' : 'out-of-stock'"
          >
            {{ item.stock > 0 ? 'In Stock' : 'Out of Stock' }}
          </span>

          <span class="view-product">
            View Product
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </router-link>
    </div>

    <div v-else class="empty-products">
      <h3>No products available</h3>
      <p>Please add products to your product data file.</p>
    </div>
  </section>
</template>

<script>
import products from '../data/products.js'

export default {
  name: 'FeaturedProduct',

  data() {
    return {
      products
    }
  },

  computed: {
    allProducts() {
      return this.products
    }
  },

  methods: {
    formatPrice(price) {
      return new Intl.NumberFormat('en-RW', {
        style: 'currency',
        currency: 'RWF',
        maximumFractionDigits: 0
      }).format(Number(price) || 0)
    }
  }
}
</script>

<style scoped>
.featured-products {
  width: 100%;
  padding: 45px 5%;
  box-sizing: border-box;
  background: #f8fafc;
}

.section-title {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 28px;
}

.section-label {
  display: inline-block;
  margin-bottom: 8px;
  color: #0f766e;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
}

.section-title h2 {
  margin: 0 0 8px;
  color: #172033;
  font-size: 30px;
  font-weight: 800;
}

.section-title p {
  margin: 0;
  color: #64748b;
  font-size: 14px;
  line-height: 1.6;
}

.product-count {
  flex-shrink: 0;
  padding: 9px 14px;
  border: 1px solid #dbe3ec;
  border-radius: 20px;
  background: #ffffff;
  color: #334155;
  font-size: 13px;
  font-weight: 700;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.product-card {
  display: flex;
  min-width: 0;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #e5eaf0;
  border-radius: 12px;
  background: #ffffff;
  color: inherit;
  text-decoration: none;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.09);
}

.image-container {
  position: relative;
  display: flex;
  height: 190px;
  align-items: center;
  justify-content: center;
  padding: 15px;
  overflow: hidden;
  background: #ffffff;
  box-sizing: border-box;
}

.image-container img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.product-card:hover .image-container img {
  transform: scale(1.05);
}

.discount-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 1;
  padding: 5px 8px;
  border-radius: 5px;
  background: #dc2626;
  color: #ffffff;
  font-size: 11px;
  font-weight: 800;
}

.product-info {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  padding: 14px;
}

.product-category {
  margin-bottom: 7px;
  color: #0f766e;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.product-info h3 {
  display: -webkit-box;
  min-height: 40px;
  margin: 0 0 9px;
  overflow: hidden;
  color: #1e293b;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.4;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.rating {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
  color: #475569;
  font-size: 12px;
}

.stars {
  color: #f59e0b;
  font-size: 16px;
}

.reviews {
  color: #94a3b8;
}

.price-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 7px;
  margin-bottom: 9px;
}

.price {
  color: #0f766e;
  font-size: 18px;
  font-weight: 800;
}

.old-price {
  color: #94a3b8;
  font-size: 12px;
  text-decoration: line-through;
}

.stock-status {
  margin-bottom: 13px;
  font-size: 11px;
  font-weight: 700;
}

.in-stock {
  color: #15803d;
}

.out-of-stock {
  color: #dc2626;
}

.view-product {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: auto;
  padding-top: 10px;
  border-top: 1px solid #eef2f7;
  color: #0f766e;
  font-size: 12px;
  font-weight: 800;
}

.view-product span {
  font-size: 18px;
  transition: transform 0.2s ease;
}

.product-card:hover .view-product span {
  transform: translateX(4px);
}

.empty-products {
  padding: 40px 20px;
  border: 1px dashed #cbd5e1;
  border-radius: 12px;
  background: #ffffff;
  text-align: center;
}

.empty-products h3 {
  margin: 0 0 8px;
  color: #1e293b;
}

.empty-products p {
  margin: 0;
  color: #64748b;
  font-size: 14px;
}

@media (max-width: 1100px) {
  .products-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
  }

  .image-container {
    height: 175px;
  }
}

@media (max-width: 700px) {
  .featured-products {
    padding: 35px 4%;
  }

  .products-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }

  .image-container {
    height: 145px;
  }

  .product-info {
    padding: 10px;
  }

  .section-title h2 {
    font-size: 24px;
  }
}

@media (max-width: 420px) {
  .section-title {
    align-items: flex-start;
    flex-direction: column;
  }

  .products-grid {
    gap: 10px;
  }

  .image-container {
    height: 125px;
    padding: 10px;
  }

  .product-info h3 {
    font-size: 13px;
  }

  .price {
    font-size: 17px;
  }

  .product-count {
    font-size: 12px;
  }
}
</style>

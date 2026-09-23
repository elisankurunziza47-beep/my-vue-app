```vue
<template>
  <section class="categories">

    <!-- Section Title -->
    <div class="section-title">
      <h2>Shop By Categories</h2>
      <p>Choose your favourite category</p>
    </div>

    <!-- Category Grid -->
    <div class="category-grid">

      <!-- Phones -->
      <router-link
        to="/products?category=Smartphone"
        class="category-card"
      >
        <div class="category-image">
          <img
            :src="phoneImg"
            alt="Phones"
          />
        </div>

        <h3>Phones</h3>
        <span>Explore Phones →</span>
      </router-link>


      <!-- Laptops -->
      <router-link
        to="/products?category=Laptop"
        class="category-card"
      >
        <div class="category-image">
          <img
            :src="laptopImg"
            alt="Laptops"
          />
        </div>

        <h3>Laptops</h3>
        <span>Explore Laptops →</span>
      </router-link>


      <!-- Headphones -->
      <router-link
        to="/products?category=Wireless Earbuds"
        class="category-card"
      >
        <div class="category-image">
          <img
            :src="headphoneImg"
            alt="Headphones"
          />
        </div>

        <h3>Headphones</h3>
        <span>Explore Headphones →</span>
      </router-link>


      <!-- Smart Watches -->
      <router-link
        to="/products?category=Smart Watch"
        class="category-card"
      >
        <div class="category-image">
          <img
            :src="watchImg"
            alt="Smart Watches"
          />
        </div>

        <h3>Smart Watches</h3>
        <span>Explore Watches →</span>
      </router-link>


      <!-- Televisions -->
      <router-link
        to="/products?category=Television"
        class="category-card"
      >
        <div class="category-image">
          <img
            :src="tvImg"
            alt="Televisions"
          />
        </div>

        <h3>Televisions</h3>
        <span>Explore TVs →</span>
      </router-link>


      <!-- Computers -->
      <router-link
        to="/products?category=Desktop"
        class="category-card"
      >
        <div class="category-image">
          <img
            :src="computerImg"
            alt="Computers"
          />
        </div>

        <h3>Computers</h3>
        <span>Explore Computers →</span>
      </router-link>

    </div>

  </section>
</template>


<script>
import phoneImg from "../assets/iFone17pro.jfif";
import laptopImg from "../assets/hppc.jfif";
import headphoneImg from "../assets/air1.jpg";
import watchImg from "../assets/one.jpg";
import tvImg from "../assets/1.jfif";
import computerImg from "../assets/appledesktop.jfif";

export default {
  name: "CategorySection",

  data() {
    return {
      phoneImg,
      laptopImg,
      headphoneImg,
      watchImg,
      tvImg,
      computerImg
    };
  }
};
</script>


<style scoped>

.categories {
  padding: 80px 60px;
  background: #f8fafc;
}


/* =========================
   SECTION TITLE
========================= */

.section-title {
  text-align: center;
  margin-bottom: 50px;
}

.section-title h2 {
  font-size: 40px;
  color: #1e293b;
  margin-bottom: 10px;
}

.section-title p {
  color: #64748b;
  font-size: 17px;
}


/* =========================
   CATEGORY GRID
========================= */

.category-grid {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 30px;

  max-width: 1200px;

  margin: auto;
}


/* =========================
   CATEGORY CARD
========================= */

.category-card {
  background: white;

  border-radius: 18px;

  overflow: hidden;

  text-align: center;

  text-decoration: none;

  color: #111827;

  box-shadow:
    0 10px 25px rgba(0, 0, 0, 0.08);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}


/* =========================
   IMAGE
========================= */

.category-image {
  width: 100%;

  height: 220px;

  overflow: hidden;

  background: #f1f5f9;

  display: flex;

  align-items: center;

  justify-content: center;
}


.category-image img {
  width: 100%;

  height: 100%;

  object-fit: cover;

  transition:
    transform 0.4s ease;
}


/* =========================
   CARD TEXT
========================= */

.category-card h3 {
  font-size: 22px;

  margin: 20px 0 8px;
}


.category-card span {
  display: block;

  color: #2563eb;

  font-size: 15px;

  font-weight: 600;

  margin-bottom: 22px;
}


/* =========================
   HOVER
========================= */

.category-card:hover {
  transform: translateY(-8px);

  box-shadow:
    0 18px 35px rgba(0, 0, 0, 0.14);
}


.category-card:hover .category-image img {
  transform: scale(1.08);
}


/* =========================
   TABLET
========================= */

@media (max-width: 900px) {

  .categories {
    padding: 60px 30px;
  }

  .category-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }

}


/* =========================
   MOBILE
========================= */

@media (max-width: 600px) {

  .categories {
    padding: 45px 20px;
  }

  .section-title h2 {
    font-size: 30px;
  }

  .category-grid {
    grid-template-columns: 1fr;
  }

  .category-image {
    height: 230px;
  }

}

</style>
```

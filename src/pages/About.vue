<template>
  <div class="about-page">

    <!-- HERO SECTION -->
    <section class="about-hero">
      <h1>About MyShop</h1>
      <p>
        MyShop is your trusted online store for quality products, great deals,
        and fast delivery.
      </p>
    </section>

    <!-- MISSION / VISION -->
    <section class="about-sections">

      <div class="card">
        <h3>🎯 Our Mission</h3>
        <p>
          To provide high-quality products at affordable prices while ensuring
          fast and secure shopping experience.
        </p>
      </div>

      <div class="card">
        <h3>🌍 Our Vision</h3>
        <p>
          To become the leading online shopping platform delivering convenience
          and trust to customers worldwide.
        </p>
      </div>

      <div class="card">
        <h3>⭐ Why Choose Us</h3>
        <p>
          ✔ Quality Products <br />
          ✔ Secure Payments <br />
          ✔ Fast Delivery <br />
          ✔ 24/7 Support
        </p>
      </div>

    </section>

    <!-- CTA -->
    <section class="about-cta">
      <h2>Start Shopping With Us Today</h2>
      <router-link to="/products" class="btn">
        Explore Products
      </router-link>
    </section>

  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style>
/* MAIN PAGE */
.about-page {
  font-family: Arial, sans-serif;
  padding: 20px;
  text-align: center;
}

/* HERO */
.about-hero {
  background: #f5f5f5;
  padding: 50px 20px;
  border-radius: 12px;
  margin-bottom: 30px;
}

.about-hero h1 {
  font-size: 32px;
  margin-bottom: 10px;
}

.about-hero p {
  color: #555;
  font-size: 16px;
}

/* CARDS SECTION */
.about-sections {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.card {
  width: 250px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 12px;
  background: white;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
  transition: 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  border-color: #007bff;
}

/* CTA */
.about-cta {
  margin-top: 40px;
  padding: 30px;
  background: #007bff;
  color: white;
  border-radius: 12px;
}

.about-cta .btn {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background: white;
  color: #007bff;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
}

.about-cta .btn:hover {
  background: #e6e6e6;
}
</style>
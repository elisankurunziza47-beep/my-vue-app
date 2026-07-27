<template>
  <div class="services-page">

    <!-- HERO -->
    <section class="services-hero">
      <h1>Our Services</h1>
      <p>
        We provide fast, secure and reliable services to make your shopping experience better.
      </p>
    </section>

    <!-- SERVICES CARDS -->
    <section class="services-grid">

      <div class="service-card">
        <h3>🚚 Fast Delivery</h3>
        <p>
          We deliver your products quickly and safely right to your doorstep.
        </p>
      </div>

      <div class="service-card">
        <h3>📞 24/7 Customer Support</h3>
        <p>
          Our support team is always available to help you anytime.
        </p>
      </div>

      <div class="service-card">
        <h3>💳 Secure Payment</h3>
        <p>
          All payments are encrypted and safe for all transactions.
        </p>
      </div>

      <div class="service-card">
        <h3>🔄 Easy Returns</h3>
        <p>
          Return products easily if you are not satisfied.
        </p>
      </div>

    </section>

    <!-- CTA -->
    <section class="services-cta">
      <h2>Ready to experience our services?</h2>
      <router-link to="/products" class="btn">
        Start Shopping
      </router-link>
    </section>

  </div>
</template>

<script>
export default {
  name: "Services"
};
</script>

<style>
/* MAIN PAGE */
.services-page {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
}

/* HERO */
.services-hero {
  background: #f5f5f5;
  padding: 40px 20px;
  border-radius: 12px;
  margin-bottom: 30px;
}

.services-hero h1 {
  font-size: 32px;
  margin-bottom: 10px;
}

.services-hero p {
  color: #555;
}

/* GRID */
.services-grid {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

/* CARD */
.service-card {
  width: 230px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 12px;
  background: white;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
  transition: 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  border-color: #007bff;
}

/* CTA */
.services-cta {
  margin-top: 40px;
  padding: 30px;
  background: #007bff;
  color: white;
  border-radius: 12px;
}

.btn {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background: white;
  color: #007bff;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
}

.btn:hover {
  background: #e6e6e6;
}
</style>
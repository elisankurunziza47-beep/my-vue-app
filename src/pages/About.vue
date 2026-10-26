<template>
  <div class="about-page">
    <section class="hero-section">
      <div class="hero-content">
        <span class="badge">About Us</span>
        <h1>Transforming how you<br />shop in Rwanda.</h1>
        <p>
          Elisa Shop is more than just a place to buy things. We are a company built on 
          trust, quality, and the easiest way to shop for everything you need 
          in your daily life.
        </p>
        <div class="hero-buttons">
          <router-link to="/products" class="btn-primary">Explore Products</router-link>
          <router-link to="/contact" class="btn-secondary">Contact Us</router-link>
        </div>
      </div>
      <div class="hero-image">
        <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop" alt="Elisa Shop" />
        <div class="floating-card">
          <span class="icon">🛍️</span>
          <div>
            <strong>10K+</strong>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
    </section>

    <section class="stats-section">
      <div class="stat-card">
        <h2>10K+</h2>
        <p>Customers</p>
      </div>
      <div class="stat-card">
        <h2>5K+</h2>
        <p>Products</p>
      </div>
      <div class="stat-card">
        <h2>99%</h2>
        <p>Satisfaction</p>
      </div>
      <div class="stat-card">
        <h2>24/7</h2>
        <p>Support</p>
      </div>
    </section>

    <section class="mission-section">
      <div class="mission-card">
        <div class="icon-wrapper">🎯</div>
        <h2>Our Mission</h2>
        <p>
          To provide all Rwandans with an easy, affordable, and reliable 
          way to access high-quality products at great prices, 
          no matter where they are in the country.
        </p>
      </div>
      <div class="mission-card">
        <div class="icon-wrapper">👁️</div>
        <h2>Our Vision</h2>
        <p>
          To be the leading e-commerce platform in Rwanda and the Great Lakes region, 
          delivering top-tier services and an unmatched shopping experience.
        </p>
      </div>
    </section>

    <section class="features-section">
      <div class="section-header">
        <span class="badge">Our Advantages</span>
        <h2>Why Choose Us?</h2>
        <p>We provide a shopping experience that makes you feel secure and satisfied.</p>
      </div>

      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">🚚</div>
          <h3>Fast Delivery</h3>
          <p>Products are delivered to you in record time, both in Kigali and across all provinces.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🛡️</div>
          <h3>100% Trusted</h3>
          <p>Your money is protected. Pay only when you receive your products.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">💳</div>
          <h3>Easy Payments</h3>
          <p>Pay using Mobile Money, credit cards, or cash on delivery.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📞</div>
          <h3>24/7 Support</h3>
          <p>Our team is always ready to assist you at any time of the day.</p>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="cta-content">
        <h2>Ready to Start Shopping?</h2>
        <p>Join Elisa Shop today and discover top-quality products at the best prices.</p>
        <router-link to="/products" class="btn-cta">Start Now →</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>
.about-page {
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  background: #f8fafc;
  color: #0f172a;
  overflow: hidden;
}

.badge {
  display: inline-block;
  background: #eff6ff;
  color: #2563eb;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.5px;
  margin-bottom: 16px;
  text-transform: uppercase;
}

.hero-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 100px 8%;
  gap: 60px;
  background: #ffffff;
}

.hero-content {
  flex: 1;
  max-width: 600px;
}

.hero-content h1 {
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -1.5px;
  margin: 0 0 20px 0;
}

.hero-content p {
  font-size: 17px;
  line-height: 1.7;
  color: #475569;
  margin-bottom: 35px;
}

.hero-buttons {
  display: flex;
  gap: 16px;
}

.btn-primary {
  background: #2563eb;
  color: white;
  padding: 14px 28px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s;
}

.btn-primary:hover {
  background: #1d4ed8;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2);
}

.btn-secondary {
  background: #f1f5f9;
  color: #0f172a;
  padding: 14px 28px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s;
}

.btn-secondary:hover {
  background: #e2e8f0;
}

.hero-image {
  flex: 1;
  position: relative;
}

.hero-image img {
  width: 100%;
  max-width: 500px;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.15);
  display: block;
}

.floating-card {
  position: absolute;
  bottom: -20px;
  left: -20px;
  background: white;
  padding: 16px 24px;
  border-radius: 16px;
  box-shadow: 0 15px 30px rgba(15, 23, 42, 0.1);
  display: flex;
  align-items: center;
  gap: 15px;
  animation: float 4s ease-in-out infinite;
}

.floating-card .icon {
  font-size: 28px;
  background: #fef3c7;
  padding: 10px;
  border-radius: 12px;
}

.floating-card strong {
  display: block;
  font-size: 20px;
  font-weight: 800;
  color: #0f172a;
}

.floating-card p {
  margin: 0;
  font-size: 12px;
  color: #64748b;
  font-weight: 600;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.stats-section {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  padding: 60px 8%;
  background: #2563eb;
  color: white;
  text-align: center;
}

.stat-card h2 {
  font-size: 42px;
  font-weight: 900;
  margin: 0 0 8px 0;
  color: #facc15;
}

.stat-card p {
  font-size: 14px;
  font-weight: 600;
  color: #dbeafe;
  margin: 0;
}

.mission-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  padding: 100px 8%;
  background: #ffffff;
}

.mission-card {
  background: #f8fafc;
  padding: 50px 40px;
  border-radius: 24px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s;
}

.mission-card:hover {
  border-color: #2563eb;
  box-shadow: 0 10px 30px rgba(37, 99, 235, 0.08);
  transform: translateY(-5px);
}

.icon-wrapper {
  font-size: 40px;
  margin-bottom: 20px;
}

.mission-card h2 {
  font-size: 26px;
  font-weight: 800;
  margin: 0 0 16px 0;
}

.mission-card p {
  font-size: 15px;
  line-height: 1.7;
  color: #475569;
  margin: 0;
}

.features-section {
  padding: 100px 8%;
  background: #f8fafc;
}

.section-header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 60px auto;
}

.section-header h2 {
  font-size: 36px;
  font-weight: 900;
  margin: 0 0 16px 0;
  letter-spacing: -0.5px;
}

.section-header p {
  font-size: 16px;
  color: #64748b;
  margin: 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.feature-card {
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 20px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s;
}

.feature-card:hover {
  box-shadow: 0 15px 35px rgba(15, 23, 42, 0.08);
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 36px;
  margin-bottom: 20px;
  background: #eff6ff;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
}

.feature-card h3 {
  font-size: 18px;
  font-weight: 800;
  margin: 0 0 12px 0;
}

.feature-card p {
  font-size: 14px;
  line-height: 1.6;
  color: #64748b;
  margin: 0;
}

.cta-section {
  padding: 100px 8%;
  background: linear-gradient(135deg, #1e3a8a, #2563eb);
  text-align: center;
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 38px;
  font-weight: 900;
  color: white;
  margin: 0 0 16px 0;
}

.cta-content p {
  font-size: 16px;
  color: #dbeafe;
  margin-bottom: 35px;
}

.btn-cta {
  display: inline-block;
  background: #facc15;
  color: #1e293b;
  padding: 16px 32px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 800;
  text-decoration: none;
  transition: all 0.2s;
}

.btn-cta:hover {
  background: #eab308;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(250, 204, 21, 0.3);
}

@media (max-width: 950px) {
  .hero-section {
    flex-direction: column;
    padding: 60px 5%;
    text-align: center;
  }

  .hero-buttons {
    justify-content: center;
  }

  .hero-image {
    margin-top: 40px;
  }

  .floating-card {
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    animation: none;
  }

  .stats-section {
    grid-template-columns: 1fr 1fr;
    padding: 40px 5%;
  }

  .mission-section {
    grid-template-columns: 1fr;
    padding: 60px 5%;
  }

  .features-section {
    padding: 60px 5%;
  }

  .cta-section {
    padding: 60px 5%;
  }

  .cta-content h2 {
    font-size: 28px;
  }
}

@media (max-width: 500px) {
  .hero-content h1 {
    font-size: 32px;
  }
  
  .stat-card h2 {
    font-size: 32px;
  }

  .hero-buttons {
    flex-direction: column;
  }
}
</style>
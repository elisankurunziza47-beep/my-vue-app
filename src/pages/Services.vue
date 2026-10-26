<template>
  <div class="services-page">
    
    <section class="hero-section">
      <div class="hero-content">
        <span class="badge">Our Services</span>
        <h1>A Shopping Experience<br>Unlike Any Other.</h1>
        <p>
          At Elisa Shop, we don't just sell products. We provide a complete, 
          world-class service tailored to your daily life. From lightning-fast delivery 
          to secure payments and instant support, we've got you covered.
        </p>
        <div class="hero-buttons">
          <router-link to="/products" class="btn-primary">Start Shopping</router-link>
        </div>
      </div>
    </section>

    <section class="core-services">
      <div class="section-header">
        <h2>What We Do For You</h2>
        <p>Premium services designed to give you an exceptional shopping experience.</p>
      </div>

      <div class="services-grid">
        <div class="service-card">
          <div class="icon-box">🚀</div>
          <h3>Express Delivery</h3>
          <p>
            Our logistics network ensures your items arrive fast. Get same-day delivery 
            within Kigali and within 1-2 days across all provinces in Rwanda.
          </p>
        </div>

        <div class="service-card">
          <div class="icon-box">🛡️</div>
          <h3>Secure Shopping</h3>
          <p>
            Your money and data are 100% protected. Our encrypted payment system ensures 
            a safe transaction from the moment you check out until delivery.
          </p>
        </div>

        <div class="service-card">
          <div class="icon-box">🔄</div>
          <h3>Easy Returns</h3>
          <p>
            Not what you expected? You have a 7-day window to return or exchange 
            your items. No complicated processes, just peace of mind.
          </p>
        </div>

        <div class="service-card">
          <div class="icon-box">💬</div>
          <h3>24/7 Customer Support</h3>
          <p>
            We are always here for you. Reach out to our dedicated team anytime 
            via WhatsApp, email, or phone for instant assistance.
          </p>
        </div>
      </div>
    </section>

    <section class="how-it-works">
      <div class="how-container">
        <div class="how-text">
          <span class="badge badge-light">How It Works</span>
          <h2>Shopping with Elisa Shop is just 3 steps.</h2>
          <p>Simple, fast, and completely secure.</p>
        </div>

        <div class="steps-grid">
          <div class="step-card">
            <div class="step-number">01</div>
            <h4>Choose</h4>
            <p>Browse our extensive catalog and pick exactly what you need.</p>
          </div>
          <div class="step-card">
            <div class="step-number">02</div>
            <h4>Pay</h4>
            <p>Checkout securely using Mobile Money, Cards, or Cash on Delivery.</p>
          </div>
          <div class="step-card">
            <div class="step-number">03</div>
            <h4>Receive</h4>
            <p>We deliver your items right to your doorstep, safely packaged.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="premium-banner">
      <div class="banner-content">
        <h2>Elisa Shop Premium</h2>
        <p>Shop a lot? Want early access to new arrivals and exclusive deals?</p>
        <p class="small-text">Join Premium for exclusive discounts and VIP treatment.</p>
        <router-link to="/contact" class="btn-banner">Learn More</router-link>
      </div>
    </section>

    <section class="faq-section">
      <div class="section-header">
        <h2>Frequently Asked Questions</h2>
      </div>
      <div class="faq-grid">
        <div class="faq-item">
          <h3>What are your delivery timelines?</h3>
          <p>Within Kigali, delivery takes 24 hours or less. For other regions in Rwanda, it takes 1-2 business days.</p>
        </div>
        <div class="faq-item">
          <h3>How can I pay for my order?</h3>
          <p>We accept MTN MoMo, Airtel Money, Visa/Mastercard, or Cash on Delivery.</p>
        </div>
        <div class="faq-item">
          <h3>How do I get help if I have an issue?</h3>
          <p>You can call our customer care line, email us, or use the live chat feature on our Contact page.</p>
        </div>
        <div class="faq-item">
          <h3>Do you offer installment payments?</h3>
          <p>Currently, we require full payment at checkout. However, flexible payment plans are coming soon.</p>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "Services"
}
</script>

<style scoped>
.services-page {
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

.badge-light {
  background: rgba(255, 255, 255, 0.1);
  color: #facc15;
}

.hero-section {
  padding: 120px 8% 80px;
  text-align: center;
  background: #ffffff;
  display: flex;
  justify-content: center;
}

.hero-content {
  max-width: 800px;
}

.hero-content h1 {
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 900;
  line-height: 1.15;
  letter-spacing: -1.5px;
  margin: 0 0 24px 0;
}

.hero-content p {
  font-size: 18px;
  line-height: 1.7;
  color: #475569;
  margin-bottom: 40px;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
}

.btn-primary {
  display: inline-block;
  background: #2563eb;
  color: white;
  padding: 16px 36px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s;
}

.btn-primary:hover {
  background: #1d4ed8;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2);
}

.core-services {
  padding: 80px 8%;
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

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
}

.service-card {
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 24px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s;
}

.service-card:hover {
  box-shadow: 0 15px 35px rgba(15, 23, 42, 0.08);
  transform: translateY(-5px);
  border-color: #2563eb;
}

.icon-box {
  font-size: 32px;
  margin-bottom: 24px;
  background: #eff6ff;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
}

.service-card h3 {
  font-size: 20px;
  font-weight: 800;
  margin: 0 0 14px 0;
}

.service-card p {
  font-size: 15px;
  line-height: 1.7;
  color: #64748b;
  margin: 0;
}

.how-it-works {
  padding: 100px 8%;
  background: #0f172a;
  color: white;
}

.how-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 60px;
}

.how-text {
  flex: 1;
}

.how-text h2 {
  font-size: 40px;
  font-weight: 900;
  line-height: 1.2;
  margin: 0 0 16px 0;
  letter-spacing: -1px;
}

.how-text p {
  font-size: 16px;
  color: #94a3b8;
  margin: 0;
}

.steps-grid {
  flex: 1.2;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

.step-card {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  background: rgba(255, 255, 255, 0.03);
  padding: 24px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s;
}

.step-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: #facc15;
}

.step-number {
  font-size: 24px;
  font-weight: 900;
  color: #facc15;
  opacity: 0.8;
}

.step-card h4 {
  font-size: 18px;
  font-weight: 800;
  margin: 0 0 8px 0;
}

.step-card p {
  font-size: 14px;
  color: #94a3b8;
  margin: 0;
  line-height: 1.6;
}

.premium-banner {
  padding: 100px 8%;
  background: linear-gradient(135deg, #2563eb, #1e40af);
  text-align: center;
}

.banner-content h2 {
  font-size: 36px;
  font-weight: 900;
  color: white;
  margin: 0 0 16px 0;
}

.banner-content p {
  font-size: 18px;
  color: #dbeafe;
  margin: 0 0 8px 0;
}

.small-text {
  font-size: 14px !important;
  color: #93c5fd !important;
  margin-bottom: 32px !important;
}

.btn-banner {
  display: inline-block;
  background: #facc15;
  color: #1e293b;
  padding: 16px 32px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 800;
  text-decoration: none;
  transition: all 0.2s;
}

.btn-banner:hover {
  background: #eab308;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(250, 204, 21, 0.3);
}

.faq-section {
  padding: 100px 8%;
  background: #ffffff;
}

.faq-grid {
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.faq-item h3 {
  font-size: 18px;
  font-weight: 800;
  margin: 0 0 10px 0;
  color: #0f172a;
}

.faq-item p {
  font-size: 15px;
  line-height: 1.7;
  color: #64748b;
  margin: 0;
}

@media (max-width: 950px) {
  .how-container {
    flex-direction: column;
    gap: 40px;
  }

  .how-text {
    text-align: center;
  }

  .faq-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .hero-section {
    padding: 80px 5% 60px;
  }

  .hero-content h1 {
    font-size: 32px;
  }

  .core-services {
    padding: 60px 5%;
  }

  .how-it-works {
    padding: 60px 5%;
  }

  .how-text h2 {
    font-size: 28px;
  }

  .premium-banner {
    padding: 60px 5%;
  }

  .banner-content h2 {
    font-size: 28px;
  }

  .faq-section {
    padding: 60px 5%;
  }
}
</style>
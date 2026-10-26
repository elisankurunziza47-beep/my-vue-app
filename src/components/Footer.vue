```vue
<template>
  <footer class="elisa-footer">
    <div class="footer-promo">
      <div class="promo-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
          <path d="M3 7h18v14H3z"/>
          <path d="M3 7l2-4h14l2 4M9 7a3 3 0 0 0 6 0"/>
        </svg>
      </div>
      <div class="promo-text">
        <span>WELCOME TO ELISA SHOP</span>
        <h2>Your Next Favorite Find Is Here.</h2>
        <p>Discover quality products, great value and a better way to shop.</p>
      </div>
      <router-link to="/products" class="promo-button">
        Explore Products <span>↗</span>
      </router-link>
    </div>

    <div class="footer-main">
      <div class="footer-brand">
        <router-link to="/" class="brand-logo">
          <span class="logo-symbol">E</span>
          <span>ELISA<span class="logo-highlight">SHOP</span></span>
        </router-link>

        <p class="brand-description">
          More than shopping. It's an experience built around quality,
          convenience and trust. Find what you love, all in one place.
        </p>

        <div class="brand-location">
          <span class="location-icon">⌖</span>
          <div>
            <strong>Our Location</strong>
            <span>Kigali, Gikondo, Rwanda</span>
          </div>
        </div>

        <div class="social-links">
          <a href="https://instagram.com/_elisa_developer_1" target="_blank" rel="noopener noreferrer" aria-label="Instagram">ig</a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
          <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">▶</a>
        </div>
      </div>

      <div class="footer-column">
        <h3>Explore</h3>
        <router-link to="/">Home</router-link>
        <router-link to="/products">All Products</router-link>
        <router-link to="/services">Our Services</router-link>
        <router-link to="/about">About Elisa Shop</router-link>
        <router-link to="/contact">Contact Us</router-link>
      </div>

      <div class="footer-column">
        <h3>Customer Care</h3>
        <router-link to="/contact">Get Help</router-link>
        <router-link to="/cart">Shopping Cart</router-link>
        <router-link to="/wishlist">My Wishlist</router-link>
        <router-link to="/login">My Account</router-link>
        <a href="mailto:elisankurunziza47@gmail.com">Email Support</a>
      </div>

      <div class="footer-column contact-column">
        <h3>Get In Touch</h3>
        <a href="mailto:elisankurunziza47@gmail.com" class="contact-item">
          <span class="contact-icon">✉</span>
          <span>
            <small>Email Us</small>
            <strong>elisankurunziza47@gmail.com</strong>
          </span>
        </a>

        <div class="contact-item">
          <span class="contact-icon">⌖</span>
          <span>
            <small>Visit Us</small>
            <strong>Kigali, Rwanda</strong>
          </span>
        </div>

        <div class="contact-item">
          <span class="contact-icon">◷</span>
          <span>
            <small>Our Promise</small>
            <strong>Shopping Made Simple</strong>
          </span>
        </div>
      </div>
    </div>

    <div class="newsletter">
      <div class="newsletter-copy">
        <span class="newsletter-label">THE ELISA SHOP UPDATE</span>
        <h3>Good deals. Great discoveries.</h3>
        <p>Be among the first to discover new arrivals and special offers.</p>
      </div>

      <form class="newsletter-form" @submit.prevent="subscribe">
        <label class="sr-only" for="newsletter-email">Your email address</label>
        <input
          id="newsletter-email"
          v-model.trim="email"
          type="email"
          placeholder="Enter your email address"
          autocomplete="email"
          required
        />
        <button type="submit">Stay Updated <span>→</span></button>
      </form>

      <p v-if="newsletterMessage" class="newsletter-message" role="status">
        {{ newsletterMessage }}
      </p>
    </div>

    <div class="footer-bottom">
      <p>© {{ new Date().getFullYear() }} <strong>Elisa Shop</strong>. All rights reserved.</p>

      <div class="footer-bottom-links">
        <router-link to="/about">About Us</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>

      <div class="footer-made">
        <span>Designed with</span>
        <span class="heart">♥</span>
        <span>in Rwanda</span>
        <span class="rwanda-flag">🇷🇼</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      email: "",
      newsletterMessage: ""
    }
  },
  methods: {
    subscribe() {
      this.newsletterMessage =
        "Thank you for your interest! Email subscriptions will be available soon."
      this.email = ""
    }
  }
}
</script>

<style scoped>
.elisa-footer {
  --footer-bg: #101827;
  --footer-panel: #172235;
  --footer-text: #f4f7fc;
  --footer-muted: #a5b0c2;
  --footer-accent: #ffb629;
  width: 100%;
  margin-top: 90px;
  color: var(--footer-text);
  background: var(--footer-bg);
  font-family: Inter, "Segoe UI", Arial, sans-serif;
  overflow: hidden;
}

.footer-promo {
  position: relative;
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 38px 7%;
  background:
    radial-gradient(ellipse at 80% 20%, rgba(255, 182, 41, 0.15), transparent 45%),
    linear-gradient(120deg, #1a2940, #142034);
  border-bottom: 1px solid rgba(255, 255, 255, 0.09);
}

.promo-icon {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  color: var(--footer-accent);
  background: rgba(255, 182, 41, 0.1);
  border: 1px solid rgba(255, 182, 41, 0.24);
  border-radius: 19px;
}

.promo-icon svg {
  width: 31px;
  height: 31px;
}

.promo-text {
  flex: 1;
}

.promo-text > span,
.newsletter-label {
  color: var(--footer-accent);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
}

.promo-text h2 {
  margin: 8px 0;
  font-size: clamp(20px, 2.3vw, 29px);
  font-weight: 750;
  letter-spacing: -0.8px;
}

.promo-text p {
  margin: 0;
  color: var(--footer-muted);
  font-size: 13px;
  line-height: 1.7;
}

.promo-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 15px 21px;
  color: #172033;
  background: var(--footer-accent);
  border-radius: 9px;
  font-size: 12px;
  font-weight: 800;
  text-decoration: none;
  white-space: nowrap;
  transition: transform 0.25s, background 0.25s;
}

.promo-button:hover {
  background: #ffd071;
  transform: translateY(-3px);
}

.promo-button span {
  font-size: 18px;
}

.footer-main {
  display: grid;
  grid-template-columns: 1.45fr 0.8fr 0.9fr 1.3fr;
  gap: 44px;
  padding: 65px 7% 55px;
}

.brand-logo {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  color: white;
  font-size: 22px;
  font-weight: 900;
  letter-spacing: -0.7px;
  text-decoration: none;
}

.logo-symbol {
  display: grid;
  place-items: center;
  width: 43px;
  height: 43px;
  color: #152035;
  background: var(--footer-accent);
  border-radius: 13px;
  font-size: 26px;
  font-weight: 900;
  box-shadow: 0 7px 20px rgba(255, 182, 41, 0.16);
}

.logo-highlight {
  color: var(--footer-accent);
}

.brand-description {
  max-width: 310px;
  margin: 23px 0;
  color: var(--footer-muted);
  font-size: 13px;
  line-height: 1.9;
}

.brand-location {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 23px;
}

.location-icon {
  display: grid;
  place-items: center;
  width: 37px;
  height: 37px;
  color: var(--footer-accent);
  background: var(--footer-panel);
  border-radius: 10px;
  font-size: 23px;
}

.brand-location div,
.contact-item > span:last-child {
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 0;
}

.brand-location strong {
  font-size: 12px;
}

.brand-location div > span {
  color: var(--footer-muted);
  font-size: 11px;
}

.social-links {
  display: flex;
  gap: 10px;
}

.social-links a {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  color: #e4eaf4;
  background: var(--footer-panel);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  font-size: 15px;
  font-weight: 800;
  text-decoration: none;
  transition: 0.25s;
}

.social-links a:hover {
  color: #172033;
  background: var(--footer-accent);
  transform: translateY(-3px);
}

.footer-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 17px;
}

.footer-column h3 {
  margin: 5px 0 10px;
  color: white;
  font-size: 14px;
  font-weight: 800;
}

.footer-column > a {
  color: var(--footer-muted);
  font-size: 12px;
  text-decoration: none;
  transition: color 0.2s, transform 0.2s;
}

.footer-column > a:hover {
  color: var(--footer-accent);
  transform: translateX(4px);
}

.contact-column {
  gap: 23px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  color: inherit;
  text-decoration: none;
}

.contact-icon {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 39px;
  height: 39px;
  color: var(--footer-accent);
  background: var(--footer-panel);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 11px;
  font-size: 19px;
}

.contact-item small {
  color: var(--footer-muted);
  font-size: 10px;
}

.contact-item strong {
  color: #f4f7fc;
  font-size: 11px;
  font-weight: 650;
  overflow-wrap: anywhere;
}

.newsletter {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 25px;
  margin: 0 7%;
  padding: 29px 31px;
  background: var(--footer-panel);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 17px;
}

.newsletter-copy {
  flex: 1;
  min-width: 230px;
}

.newsletter-copy h3 {
  margin: 9px 0;
  font-size: 19px;
  letter-spacing: -0.4px;
}

.newsletter-copy p {
  margin: 0;
  color: var(--footer-muted);
  font-size: 12px;
  line-height: 1.7;
}

.newsletter-form {
  display: flex;
  flex: 1;
  min-width: 280px;
  max-width: 440px;
  gap: 8px;
  padding: 5px;
  background: #101827;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}

.newsletter-form input {
  flex: 1;
  width: 0;
  min-width: 0;
  padding: 12px;
  color: white;
  background: transparent;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 12px;
}

.newsletter-form input::placeholder {
  color: #8491a5;
}

.newsletter-form button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 12px 15px;
  color: #152035;
  background: var(--footer-accent);
  border: none;
  border-radius: 7px;
  font-family: inherit;
  font-size: 11px;
  font-weight: 800;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s;
}

.newsletter-form button:hover {
  background: #ffd071;
}

.newsletter-form button span {
  font-size: 17px;
}

.newsletter-message {
  flex-basis: 100%;
  margin: -7px 0 0;
  color: var(--footer-accent);
  font-size: 12px;
  line-height: 1.6;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 17px;
  margin-top: 38px;
  padding: 23px 7%;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.footer-bottom p {
  margin: 0;
  color: var(--footer-muted);
  font-size: 11px;
  line-height: 1.7;
}

.footer-bottom p strong {
  color: white;
}

.footer-bottom-links {
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
}

.footer-bottom-links a {
  color: var(--footer-muted);
  font-size: 11px;
  text-decoration: none;
}

.footer-bottom-links a:hover {
  color: var(--footer-accent);
}

.footer-made {
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--footer-muted);
  font-size: 11px;
}

.heart {
  color: #ff6878;
}

.rwanda-flag {
  margin-left: 3px;
}

@media (min-width: 1500px) {
  .footer-promo,
  .footer-main,
  .footer-bottom {
    padding-left: max(7%, calc((100% - 1350px) / 2));
    padding-right: max(7%, calc((100% - 1350px) / 2));
  }

  .newsletter {
    margin-right: max(7%, calc((100% - 1350px) / 2));
    margin-left: max(7%, calc((100% - 1350px) / 2));
  }
}

@media (max-width: 1050px) {
  .footer-main {
    grid-template-columns: 1.2fr 1fr 1fr;
    gap: 42px 30px;
  }

  .contact-column {
    grid-column: 2 / 4;
  }

  .newsletter {
    align-items: flex-start;
    flex-direction: column;
  }

  .newsletter-form {
    width: 100%;
    max-width: 100%;
  }
}

@media (max-width: 650px) {
  .elisa-footer {
    margin-top: 55px;
  }

  .footer-promo {
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 18px;
    padding: 32px 6%;
  }

  .promo-icon {
    width: 49px;
    height: 49px;
    border-radius: 13px;
  }

  .promo-icon svg {
    width: 25px;
    height: 25px;
  }

  .promo-text {
    flex-basis: calc(100% - 70px);
  }

  .promo-text h2 {
    font-size: 22px;
    line-height: 1.35;
  }

  .promo-text p {
    font-size: 12px;
  }

  .promo-button {
    margin-left: 67px;
    padding: 12px 16px;
  }

  .footer-main {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 37px 22px;
    padding: 42px 6%;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }

  .brand-description {
    max-width: 420px;
  }

  .footer-column {
    gap: 16px;
  }

  .footer-column h3 {
    margin-bottom: 5px;
  }

  .contact-column {
    grid-column: 1 / -1;
  }

  .newsletter {
    gap: 20px;
    margin: 0 5%;
    padding: 23px 18px;
    border-radius: 13px;
  }

  .newsletter-copy {
    min-width: 0;
  }

  .newsletter-copy h3 {
    font-size: 18px;
    line-height: 1.5;
  }

  .newsletter-form {
    flex-direction: column;
    min-width: 0;
    padding: 8px;
  }

  .newsletter-form input {
    width: 100%;
    min-height: 42px;
    box-sizing: border-box;
  }

  .newsletter-form button {
    min-height: 43px;
  }

  .footer-bottom {
    align-items: flex-start;
    flex-direction: column;
    gap: 15px;
    margin-top: 28px;
    padding: 22px 6%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .elisa-footer *,
  .elisa-footer *::before,
  .elisa-footer *::after {
    scroll-behavior: auto !important;
    transition: none !important;
  }
}
</style>
```
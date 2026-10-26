<template>
  <div class="register-page">
    <div class="register-wrapper">
      
      <div class="register-left">
        <div class="brand-overlay">
          <router-link to="/" class="brand-logo">
            <span class="logo-icon">🛍️</span>
            <span class="logo-text">Elisa<span>Shop</span></span>
          </router-link>
          <h2>Join the future of shopping in Rwanda.</h2>
          <p>Create an account to track your orders, save your favorite items, and enjoy exclusive member discounts.</p>
          
          <div class="trust-badges">
            <div class="badge-item">
              <span class="badge-icon">🔒</span>
              <span>100% Secure</span>
            </div>
            <div class="badge-item">
              <span class="badge-icon">🚀</span>
              <span>Fast Checkout</span>
            </div>
            <div class="badge-item">
              <span class="badge-icon">💎</span>
              <span>VIP Rewards</span>
            </div>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop" alt="Shopping" class="bg-image" />
      </div>

      <div class="register-right">
        <form class="register-form" @submit.prevent="register">
          <div class="form-header">
            <h2>Create Account</h2>
            <p>Already have an account? <router-link to="/login" class="link">Log in</router-link></p>
          </div>

          <transition name="fade">
            <div v-if="errorMessage" class="error-alert">
              ⚠️ {{ errorMessage }}
            </div>
          </transition>

          <div class="input-grid">
            <div class="form-group">
              <label>Full Name</label>
              <div class="input-wrapper">
                <span class="input-icon">👤</span>
                <input type="text" v-model="user.name" placeholder="John Doe" required />
              </div>
            </div>

            <div class="form-group">
              <label>Phone Number</label>
              <div class="input-wrapper">
                <span class="input-icon">📞</span>
                <input type="tel" v-model="user.phone" placeholder="+250 788 000 000" required />
              </div>
            </div>
          </div>

          <div class="form-group">
            <label>Email Address</label>
            <div class="input-wrapper">
              <span class="input-icon">✉️</span>
              <input type="email" v-model="user.email" placeholder="you@example.com" required />
            </div>
          </div>

          <div class="form-group">
            <label>Password</label>
            <div class="input-wrapper">
              <span class="input-icon">🔒</span>
              <input 
                :type="showPassword ? 'text' : 'password'" 
                v-model="user.password" 
                placeholder="Create a strong password" 
                required 
              />
              <button type="button" class="toggle-password" @click="showPassword = !showPassword">
                {{ showPassword ? '🙈' : '👁️' }}
              </button>
            </div>
            <div class="password-strength" v-if="user.password">
              <div class="strength-bar" :class="passwordStrengthClass"></div>
              <span class="strength-text" :class="passwordStrengthClass">{{ passwordStrengthText }}</span>
            </div>
          </div>

          <div class="form-group">
            <label>Confirm Password</label>
            <div class="input-wrapper">
              <span class="input-icon">🔒</span>
              <input 
                :type="showConfirmPassword ? 'text' : 'password'" 
                v-model="confirmPassword" 
                placeholder="Confirm your password" 
                required 
              />
              <button type="button" class="toggle-password" @click="showConfirmPassword = !showConfirmPassword">
                {{ showConfirmPassword ? '🙈' : '👁️' }}
              </button>
            </div>
          </div>

          <div class="terms-group">
            <input type="checkbox" id="terms" v-model="agreeTerms" required />
            <label for="terms">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</label>
          </div>

          <button type="submit" class="submit-btn" :disabled="isLoading || !agreeTerms">
            <span v-if="!isLoading">Create Account →</span>
            <span v-else>Creating Account...</span>
          </button>
        </form>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      user: {
        name: "",
        email: "",
        phone: "",
        password: ""
      },
      confirmPassword: "",
      agreeTerms: false,
      showPassword: false,
      showConfirmPassword: false,
      isLoading: false,
      errorMessage: ""
    };
  },
  computed: {
    passwordStrength() {
      let score = 0;
      const p = this.user.password;
      if (!p) return 0;
      if (p.length >= 8) score++;
      if (p.match(/[A-Z]/)) score++;
      if (p.match(/[0-9]/)) score++;
      if (p.match(/[^A-Za-z0-9]/)) score++;
      return score;
    },
    passwordStrengthClass() {
      if (this.passwordStrength === 1) return "weak";
      if (this.passwordStrength === 2) return "fair";
      if (this.passwordStrength === 3) return "good";
      if (this.passwordStrength === 4) return "strong";
      return "";
    },
    passwordStrengthText() {
      if (this.passwordStrength === 1) return "Weak";
      if (this.passwordStrength === 2) return "Fair";
      if (this.passwordStrength === 3) return "Good";
      if (this.passwordStrength === 4) return "Strong";
      return "";
    }
  },
  methods: {
    register() {
      this.errorMessage = "";
      
      if (this.user.password !== this.confirmPassword) {
        this.errorMessage = "Passwords do not match!";
        return;
      }

      if (this.user.password.length < 6) {
        this.errorMessage = "Password must be at least 6 characters.";
        return;
      }

      this.isLoading = true;

      setTimeout(() => {
        this.isLoading = false;
        this.$router.push("/login");
      }, 1500);
    }
  }
};
</script>

<style scoped>
.register-page {
  min-height: 100vh;
  background: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 5%;
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
}

.register-wrapper {
  display: flex;
  width: 100%;
  max-width: 1100px;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 25px 50px rgba(15, 23, 42, 0.1);
  overflow: hidden;
}

.register-left {
  position: relative;
  flex: 1;
  background: #1e3a8a;
  display: none;
}

@media (min-width: 900px) {
  .register-left {
    display: block;
  }
}

.bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.4;
  mix-blend-mode: overlay;
}

.brand-overlay {
  position: relative;
  z-index: 2;
  padding: 60px 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  background: linear-gradient(135deg, rgba(30, 58, 138, 0.9), rgba(37, 99, 235, 0.8));
}

.brand-logo {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: white;
  margin-bottom: 40px;
}

.logo-icon {
  font-size: 32px;
}

.logo-text {
  font-size: 28px;
  font-weight: 900;
  letter-spacing: -1px;
}

.logo-text span {
  color: #facc15;
}

.brand-overlay h2 {
  font-size: 36px;
  font-weight: 800;
  line-height: 1.2;
  margin: 0 0 20px 0;
}

.brand-overlay p {
  font-size: 16px;
  line-height: 1.6;
  color: #dbeafe;
  margin-bottom: 40px;
}

.trust-badges {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.badge-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  font-weight: 600;
}

.badge-icon {
  font-size: 20px;
  background: rgba(255, 255, 255, 0.15);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}

.register-right {
  flex: 1.2;
  padding: 60px 50px;
  background: #ffffff;
}

.form-header {
  margin-bottom: 30px;
}

.form-header h2 {
  font-size: 32px;
  font-weight: 900;
  color: #0f172a;
  margin: 0 0 8px 0;
  letter-spacing: -0.5px;
}

.form-header p {
  color: #64748b;
  font-size: 15px;
  margin: 0;
}

.link {
  color: #2563eb;
  font-weight: 700;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

.error-alert {
  background: #fef2f2;
  color: #dc2626;
  padding: 14px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
  border: 1px solid #fecaca;
}

.input-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

@media (max-width: 600px) {
  .input-grid {
    grid-template-columns: 1fr;
  }
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 13px;
  font-weight: 700;
  color: #334155;
  margin-bottom: 8px;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 14px;
  font-size: 16px;
  color: #94a3b8;
}

.form-group input {
  width: 100%;
  box-sizing: border-box;
  padding: 14px 14px 14px 42px;
  border: 1.5px solid #cbd5e1;
  border-radius: 12px;
  font-size: 15px;
  font-family: inherit;
  color: #0f172a;
  background: #f8fafc;
  transition: all 0.2s ease;
}

.form-group input[type="password"],
.form-group input[type="text"][placeholder*="password"],
.form-group input[placeholder*="password"] {
  padding-right: 45px;
}

.form-group input:focus {
  outline: none;
  border-color: #2563eb;
  background: #ffffff;
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
}

.toggle-password {
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  transition: opacity 0.2s;
}

.toggle-password:hover {
  opacity: 1;
}

.password-strength {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
}

.strength-bar {
  height: 4px;
  flex: 1;
  border-radius: 4px;
  background: #e2e8f0;
  position: relative;
  overflow: hidden;
}

.strength-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0%;
  transition: all 0.3s ease;
}

.strength-bar.weak::after { width: 25%; background: #ef4444; }
.strength-bar.fair::after { width: 50%; background: #f59e0b; }
.strength-bar.good::after { width: 75%; background: #3b82f6; }
.strength-bar.strong::after { width: 100%; background: #10b981; }

.strength-text {
  font-size: 11px;
  font-weight: 700;
  min-width: 40px;
}

.strength-text.weak { color: #ef4444; }
.strength-text.fair { color: #f59e0b; }
.strength-text.good { color: #3b82f6; }
.strength-text.strong { color: #10b981; }

.terms-group {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 24px;
}

.terms-group input {
  margin-top: 3px;
  width: 16px;
  height: 16px;
  accent-color: #2563eb;
  cursor: pointer;
}

.terms-group label {
  font-size: 13px;
  color: #64748b;
  line-height: 1.5;
}

.terms-group a {
  color: #2563eb;
  text-decoration: none;
  font-weight: 600;
}

.submit-btn {
  width: 100%;
  padding: 16px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover:not(:disabled) {
  background: #1d4ed8;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2);
}

.submit-btn:disabled {
  background: #cbd5e1;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 600px) {
  .register-page {
    padding: 20px 10px;
  }
  
  .register-right {
    padding: 40px 24px;
  }
  
  .form-header h2 {
    font-size: 26px;
  }
}
</style>
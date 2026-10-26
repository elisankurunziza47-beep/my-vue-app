<template>
  <div class="login-page">
    <div class="login-wrapper">
      
      <div class="login-left">
        <div class="brand-overlay">
          <router-link to="/" class="brand-logo">
            <span class="logo-icon">🛍️</span>
            <span class="logo-text">Elisa<span>Shop</span></span>
          </router-link>
          <h2>Welcome back to Elisa Shop.</h2>
          <p>Log in to access your cart, track your orders, and discover exclusive deals tailored just for you.</p>
          
          <div class="trust-badges">
            <div class="badge-item">
              <span class="badge-icon">🔒</span>
              <span>100% Secure Login</span>
            </div>
            <div class="badge-item">
              <span class="badge-icon">🛒</span>
              <span>Saved Cart & Wishlist</span>
            </div>
            <div class="badge-item">
              <span class="badge-icon">🚀</span>
              <span>Lightning Fast Checkout</span>
            </div>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1000&auto=format&fit=crop" alt="Shopping" class="bg-image" />
      </div>

      <div class="login-right">
        <form class="login-form" @submit.prevent="login">
          <div class="form-header">
            <h2>Sign In</h2>
            <p>Don't have an account? <router-link to="/register" class="link">Create one</router-link></p>
          </div>

          <transition name="fade">
            <div v-if="errorMessage" class="error-alert">
              ⚠️ {{ errorMessage }}
            </div>
          </transition>

          <div class="form-group">
            <label>Email Address</label>
            <div class="input-wrapper">
              <span class="input-icon">✉️</span>
              <input 
                type="email" 
                v-model="email" 
                placeholder="you@example.com" 
                required 
              />
            </div>
          </div>

          <div class="form-group">
            <div class="label-row">
              <label>Password</label>
              <a href="#" class="forgot-link">Forgot password?</a>
            </div>
            <div class="input-wrapper">
              <span class="input-icon">🔒</span>
              <input 
                :type="showPassword ? 'text' : 'password'" 
                v-model="password" 
                placeholder="Enter your password" 
                required 
              />
              <button type="button" class="toggle-password" @click="showPassword = !showPassword">
                {{ showPassword ? '🙈' : '👁️' }}
              </button>
            </div>
          </div>

          <div class="remember-group">
            <input type="checkbox" id="remember" v-model="rememberMe" />
            <label for="remember">Remember me for 30 days</label>
          </div>

          <button type="submit" class="submit-btn" :disabled="isLoading">
            <span v-if="!isLoading">Login to Account →</span>
            <span v-else>Signing in...</span>
          </button>

          <div class="divider">
            <span>OR</span>
          </div>

          <button type="button" class="google-btn">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
            Continue with Google
          </button>
        </form>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      rememberMe: false,
      showPassword: false,
      isLoading: false,
      errorMessage: ""
    };
  },
  methods: {
    login() {
      this.errorMessage = "";
      
      if (!this.email || !this.password) {
        this.errorMessage = "Please fill in all fields.";
        return;
      }

      this.isLoading = true;

      setTimeout(() => {
        this.isLoading = false;
        this.$router.push("/");
      }, 1500);
    }
  }
};
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  background: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 5%;
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
}

.login-wrapper {
  display: flex;
  width: 100%;
  max-width: 1050px;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 25px 50px rgba(15, 23, 42, 0.1);
  overflow: hidden;
  min-height: 600px;
}

.login-left {
  position: relative;
  flex: 1;
  background: #1e3a8a;
  display: none;
}

@media (min-width: 900px) {
  .login-left {
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

.login-right {
  flex: 1.1;
  padding: 60px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

.form-group {
  margin-bottom: 20px;
}

.label-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.form-group label {
  display: block;
  font-size: 13px;
  font-weight: 700;
  color: #334155;
}

.forgot-link {
  font-size: 12px;
  color: #2563eb;
  text-decoration: none;
  font-weight: 600;
}

.forgot-link:hover {
  text-decoration: underline;
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
.form-group input[type="text"][placeholder*="password"] {
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

.remember-group {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
}

.remember-group input {
  width: 16px;
  height: 16px;
  accent-color: #2563eb;
  cursor: pointer;
}

.remember-group label {
  font-size: 13px;
  color: #64748b;
  cursor: pointer;
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

.divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 24px 0;
  color: #94a3b8;
  font-size: 12px;
  font-weight: 600;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #e2e8f0;
}

.divider span {
  padding: 0 10px;
}

.google-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 14px;
  background: #ffffff;
  color: #334155;
  border: 1.5px solid #cbd5e1;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
}

.google-btn:hover {
  background: #f8fafc;
  border-color: #94a3b8;
}

.google-btn img {
  width: 20px;
  height: 20px;
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
  .login-page {
    padding: 20px 10px;
  }
  
  .login-right {
    padding: 40px 24px;
  }
  
  .form-header h2 {
    font-size: 26px;
  }
}
</style>
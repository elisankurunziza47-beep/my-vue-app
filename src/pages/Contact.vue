<template>
  <div class="contact-page">
    <div class="contact-container">
      <div class="contact-info">
        <span class="badge">Contact Us</span>
        <h1>Have a question?<br>We're here for you.</h1>
        <p class="description">
          Whether you need help with our products, payments, or delivery, 
          <strong>Elisa Shop</strong> is ready to assist you 24/7.
        </p>

        <div class="info-cards">
          <div class="info-card">
            <div class="icon">✉</div>
            <div>
              <h3>Email</h3>
              <p>elisankurunziza47@gmail.com</p>
            </div>
          </div>

          <div class="info-card">
            <div class="icon">⌖</div>
            <div>
              <h3>Location</h3>
              <p>Kigali, Gikondo, Rwanda</p>
            </div>
          </div>

          <div class="info-card">
            <div class="icon">◷</div>
            <div>
              <h3>Working Hours</h3>
              <p>Monday - Saturday<br>08:00 AM - 08:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-form-wrapper">
        <div class="form-header">
          <h2>Send a Message</h2>
          <p>Fill out the form below and we'll get back to you shortly.</p>
        </div>

        <transition name="fade">
          <div v-if="isSent" class="success-message">
            ✅ Thank you {{ name }}! Your message has been received. We will reply to {{ email }} soon.
          </div>
        </transition>

        <form @submit.prevent="sendMessage" class="modern-form">
          <div class="input-group">
            <label>Your Name</label>
            <input 
              type="text" 
              v-model="name" 
              placeholder="e.g., Elisa Nkurunziza" 
              required 
            />
          </div>

          <div class="input-group">
            <label>Your Email</label>
            <input 
              type="email" 
              v-model="email" 
              placeholder="e.g., elisa@gmail.com" 
              required 
            />
          </div>

          <div class="input-group">
            <label>Message</label>
            <textarea 
              v-model="message" 
              placeholder="Write your message here..." 
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" class="submit-btn" :disabled="isLoading">
            <span v-if="!isLoading">Send Message →</span>
            <span v-else>Sending...</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return { 
      name: "", 
      email: "", 
      message: "",
      isSent: false,
      isLoading: false
    };
  },
  methods: {
    sendMessage() {
      this.isLoading = true;
      
      setTimeout(() => {
        this.isLoading = false;
        this.isSent = true;
        
        this.name = "";
        this.email = "";
        this.message = "";

        setTimeout(() => {
          this.isSent = false;
        }, 5000);
      }, 1000);
    }
  }
}
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
  background: #f8fafc;
  padding: 80px 5%;
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-container {
  display: flex;
  gap: 50px;
  max-width: 1200px;
  width: 100%;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
  overflow: hidden;
}

.contact-info {
  flex: 1;
  background: #2563eb;
  color: white;
  padding: 60px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 20px;
  width: fit-content;
}

.contact-info h1 {
  font-size: 40px;
  font-weight: 800;
  line-height: 1.2;
  margin: 0 0 20px 0;
}

.description {
  font-size: 15px;
  line-height: 1.6;
  color: #dbeafe;
  margin-bottom: 40px;
}

.info-cards {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.info-card {
  display: flex;
  align-items: center;
  gap: 15px;
}

.icon {
  font-size: 24px;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}

.info-card h3 {
  margin: 0 0 4px 0;
  font-size: 15px;
  font-weight: 700;
}

.info-card p {
  margin: 0;
  font-size: 14px;
  color: #dbeafe;
}

.contact-form-wrapper {
  flex: 1.2;
  padding: 60px 50px;
  background: #ffffff;
}

.form-header {
  margin-bottom: 30px;
}

.form-header h2 {
  font-size: 28px;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 8px 0;
}

.form-header p {
  color: #64748b;
  font-size: 15px;
  margin: 0;
}

.modern-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-group label {
  font-size: 14px;
  font-weight: 700;
  color: #334155;
}

.input-group input,
.input-group textarea {
  width: 100%;
  box-sizing: border-box;
  padding: 14px 16px;
  border: 1.5px solid #cbd5e1;
  border-radius: 12px;
  font-size: 15px;
  font-family: inherit;
  color: #0f172a;
  background: #f8fafc;
  transition: all 0.2s ease;
}

.input-group textarea {
  resize: vertical;
  min-height: 120px;
}

.input-group input:focus,
.input-group textarea:focus {
  outline: none;
  border-color: #2563eb;
  background: #ffffff;
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
}

.input-group input::placeholder,
.input-group textarea::placeholder {
  color: #94a3b8;
}

.submit-btn {
  background: #facc15;
  color: #1e293b;
  font-size: 16px;
  font-weight: 800;
  padding: 16px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 10px;
}

.submit-btn:hover {
  background: #eab308;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(250, 204, 21, 0.3);
}

.submit-btn:active {
  transform: scale(0.98);
}

.submit-btn:disabled {
  background: #e2e8f0;
  color: #94a3b8;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.success-message {
  background: #dcfce7;
  color: #166534;
  padding: 16px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
  border: 1px solid #bbf7d0;
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

@media (max-width: 950px) {
  .contact-container {
    flex-direction: column;
    border-radius: 16px;
  }

  .contact-info {
    padding: 40px 30px;
  }

  .contact-info h1 {
    font-size: 32px;
  }

  .contact-form-wrapper {
    padding: 40px 30px;
  }
}

@media (max-width: 500px) {
  .contact-page {
    padding: 20px 10px;
  }

  .contact-info, 
  .contact-form-wrapper {
    padding: 30px 20px;
  }

  .contact-info h1 {
    font-size: 26px;
  }

  .input-group input,
  .input-group textarea {
    padding: 12px;
  }
}
</style>
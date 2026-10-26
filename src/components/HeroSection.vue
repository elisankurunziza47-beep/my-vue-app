<template>
  <section class="hero">
    <div class="bg-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
    </div>

    <div class="hero-content">
      <div class="tag">
        <span class="tag-icon">🔥</span>
        New Collection 2026
      </div>

      <h1>
        Welcome to <br />
        <span class="highlight">Elisa Shop</span>
      </h1>

      <p>
        Shop the latest Phones, Laptops, Headphones and all Electronics
        materials with affordable prices and lightning-fast delivery.
      </p>

      <form class="search-box" @submit.prevent="goProducts">
        <span class="search-icon">🔍</span>
        <input
          v-model="search"
          type="text"
          placeholder="Search your favourite product..."
        />
        <button type="submit">Search</button>
      </form>

      <div class="buttons">
        <router-link to="/products" class="shop-btn">
          Shop Now <span>→</span>
        </router-link>
        <router-link to="/about" class="learn-btn">
          Learn More
        </router-link>
      </div>
    </div>

    <div class="hero-image">
      <div class="video-wrapper">
        <video
          :src="animationVideo"
          autoplay
          muted
          loop
          playsinline
          preload="auto"
        ></video>
        <div class="glass-overlay"></div>
      </div>
    </div>
  </section>
</template>

<script>
import animationVideo from "../assets/animations.mp4";

export default {
  name: "HeroSection",

  data() {
    return {
      search: "",
      animationVideo,
    };
  },

  methods: {
    goProducts() {
      const text = this.search.trim();
      this.$router.push({
        path: "/products",
        query: text ? { search: text } : {},
      });
    },
  },
};
</script>

<style scoped>
.hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  min-height: 90vh;
  padding: 60px 8%;
  background: #f8fafc;
  overflow: hidden;
}

.bg-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  z-index: -1;
}

.shape-1 {
  top: -10%;
  left: -10%;
  width: 500px;
  height: 500px;
  background: #bfdbfe;
}

.shape-2 {
  bottom: -10%;
  right: -5%;
  width: 400px;
  height: 400px;
  background: #fef08a;
  opacity: 0.3;
}

.hero-content {
  position: relative;
  z-index: 1;
  flex: 1 1 480px;
  max-width: 600px;
}

.tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #eff6ff;
  color: #2563eb;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.5px;
  border-radius: 999px;
  border: 1px solid #dbeafe;
  margin-bottom: 24px;
}

.tag-icon {
  font-size: 16px;
}

.hero h1 {
  margin: 0 0 20px;
  font-size: clamp(36px, 5vw, 64px);
  font-weight: 900;
  line-height: 1.1;
  color: #0f172a;
  letter-spacing: -1.5px;
}

.hero h1 .highlight {
  color: transparent;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  -webkit-background-clip: text;
  background-clip: text;
}

.hero p {
  max-width: 520px;
  margin: 0 0 36px;
  font-size: 17px;
  line-height: 1.7;
  color: #475569;
  font-weight: 500;
}

.search-box {
  display: flex !important;
  flex-direction: row !important;
  flex-wrap: nowrap !important;
  align-items: center !important;
  gap: 0 !important;
  width: 100%;
  max-width: 540px;
  height: 60px;
  margin: 0 0 36px;
  padding: 0 6px 0 0;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
}

.search-box:focus-within {
  border-color: #2563eb;
  box-shadow: 0 10px 40px rgba(37, 99, 235, 0.15);
  transform: translateY(-2px);
}

.search-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 52px;
  height: 100%;
  font-size: 18px;
  color: #94a3b8;
  user-select: none;
}

.search-box input {
  display: block !important;
  flex: 1 1 auto !important;
  min-width: 0 !important;
  width: auto !important;
  height: 100% !important;
  padding: 0 10px 0 0 !important;
  border: none !important;
  outline: none !important;
  background: transparent !important;
  color: #0f172a;
  font-size: 16px;
  font-weight: 500;
  box-sizing: border-box;
}

.search-box input::placeholder {
  color: #94a3b8;
}

.search-box button {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex: 0 0 auto !important;
  position: static !important;
  height: 48px !important;
  padding: 0 28px !important;
  margin: 0 6px 0 0 !important;
  border: none !important;
  outline: none !important;
  background: #2563eb !important;
  color: #ffffff !important;
  font-size: 15px !important;
  font-weight: 700 !important;
  letter-spacing: 0.3px;
  cursor: pointer;
  border-radius: 12px !important;
  transition: all 0.2s ease;
}

.search-box button:hover {
  background: #1d4ed8 !important;
  transform: scale(1.02);
}

.search-box button:active {
  transform: scale(0.96);
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.shop-btn,
.learn-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 36px;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  border-radius: 14px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.shop-btn {
  background: #2563eb;
  color: #ffffff;
  box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
  gap: 10px;
}

.shop-btn span {
  transition: transform 0.3s ease;
}

.shop-btn:hover {
  background: #1d4ed8;
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(37, 99, 235, 0.4);
}

.shop-btn:hover span {
  transform: translateX(4px);
}

.learn-btn {
  background: #ffffff;
  color: #0f172a;
  border: 1.5px solid #cbd5e1;
  box-shadow: 0 4px 15px rgba(15, 23, 42, 0.05);
}

.learn-btn:hover {
  background: #f8fafc;
  border-color: #94a3b8;
  transform: translateY(-3px);
}

.hero-image {
  position: relative;
  z-index: 1;
  flex: 1 1 420px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-wrapper {
  position: relative;
  width: 100%;
  max-width: 580px;
  border-radius: 28px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 30px 60px rgba(15, 23, 42, 0.12);
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

.hero-image video {
  display: block;
  width: 100%;
  height: 420px;
  object-fit: cover;
  border-radius: 20px;
}

@media (max-width: 1024px) {
  .hero {
    padding: 60px 5%;
    gap: 40px;
  }

  .hero h1 {
    font-size: 48px;
  }
}

@media (max-width: 900px) {
  .hero {
    flex-direction: column;
    padding: 60px 24px;
    text-align: center;
    min-height: auto;
  }

  .hero-content {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero p {
    margin-left: auto;
    margin-right: auto;
  }

  .search-box {
    margin-left: auto;
    margin-right: auto;
  }

  .buttons {
    justify-content: center;
  }

  .hero-image {
    width: 100%;
    margin-top: 20px;
  }

  .video-wrapper {
    max-width: 640px;
  }

  .hero-image video {
    height: 380px;
  }
}

@media (max-width: 600px) {
  .hero {
    padding: 40px 18px;
    gap: 30px;
  }

  .hero h1 {
    font-size: 38px;
    letter-spacing: -1px;
  }

  .hero p {
    font-size: 15.5px;
    line-height: 1.6;
    margin-bottom: 28px;
  }

  .search-box {
    max-width: 100%;
    height: 54px;
    margin-bottom: 28px;
    padding-right: 4px;
  }

  .search-icon {
    flex: 0 0 44px;
    font-size: 16px;
  }

  .search-box input {
    font-size: 14px;
    padding: 0 4px 0 0 !important;
  }

  .search-box button {
    height: 44px !important;
    padding: 0 20px !important;
    font-size: 14px !important;
    margin-right: 4px !important;
  }

  .buttons {
    flex-direction: column;
    gap: 12px;
    width: 100%;
  }

  .shop-btn,
  .learn-btn {
    width: 100%;
    box-sizing: border-box;
    padding: 16px 24px;
  }

  .video-wrapper {
    padding: 5px;
    border-radius: 20px;
    animation: none;
  }

  .hero-image video {
    height: 240px;
    border-radius: 16px;
  }
}
</style>
<template>
  <section class="hero">

    <!-- ================= LEFT CONTENT ================= -->
    <div class="hero-content">

      <span class="tag">🔥 New Collection 2026</span>

      <h1>
        Welcome to
        <span>Elisa Shop</span>
      </h1>

      <p>
        Shop the latest Phones, Laptops, Headphones and all Electronics
        materials with affordable prices and fast delivery.
      </p>

      <!-- ================= SEARCH ================= -->
      <div class="search-box">

        <input
          type="text"
          placeholder="Search your favourite product..."
          v-model="search"
          @keyup.enter="goProducts"
        />

        <button @click="goProducts">
          Search
        </button>

      </div>

      <!-- ================= BUTTONS ================= -->
      <div class="buttons">

        <router-link
          to="/products"
          class="shop-btn"
        >
          Shop Now
        </router-link>

        <router-link
          to="/about"
          class="learn-btn"
        >
          Learn More
        </router-link>

      </div>

    </div>


    <!-- ================= RIGHT VIDEO ================= -->
    <div class="hero-image">

      <video
        :src="animationVideo"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
      >
      </video>

    </div>

  </section>
</template>


<script>

import animationVideo from "../assets/animation.mp4";

export default {

  name: "HeroSection",

  data() {

    return {
      search: "",
      animationVideo
    };

  },

  methods: {

    goProducts() {

      this.$router.push({
        path: "/products",
        query: {
          search: this.search
        }
      });

    }

  }

};

</script>


<style scoped>

/* =========================
   HERO SECTION
========================= */

.hero {

  display: flex;

  justify-content: space-between;

  align-items: center;

  padding: 80px;

  background: linear-gradient(
    to right,
    #eff6ff,
    #ffffff
  );

  min-height: 80vh;

  flex-wrap: wrap;

}


/* =========================
   LEFT CONTENT
========================= */

.hero-content {

  width: 50%;

}


.tag {

  display: inline-block;

  background: #2563eb;

  color: white;

  padding: 8px 15px;

  border-radius: 20px;

  font-size: 14px;

  font-weight: bold;

}


.hero h1 {

  font-size: 55px;

  margin: 25px 0;

  line-height: 1.2;

}


.hero h1 span {

  color: #2563eb;

}


.hero p {

  font-size: 18px;

  color: #555;

  margin-bottom: 30px;

  line-height: 30px;

  max-width: 650px;

}


/* =========================
   SEARCH BOX
========================= */

.search-box {

  display: flex;

  width: 100%;

  max-width: 500px;

  height: 48px;

  margin-bottom: 30px;

}


.search-box input {

  flex: 1;

  min-width: 0;

  padding: 0 15px;

  border: 1px solid #d1d5db;

  border-right: none;

  outline: none;

  border-radius: 8px 0 0 8px;

  font-size: 14px;

  height: 100%;

  box-sizing: border-box;

}


.search-box input:focus {

  border-color: #2563eb;

}


.search-box button {

  width: 100px;

  height: 100%;

  padding: 0;

  border: none;

  background: #facc15;

  cursor: pointer;

  font-weight: bold;

  font-size: 14px;

  border-radius: 0 8px 8px 0;

  display: flex;

  align-items: center;

  justify-content: center;

  transition: 0.3s;

}


.search-box button:hover {

  background: #eab308;

}


/* =========================
   BUTTONS
========================= */

.buttons {

  display: flex;

  gap: 20px;

}


.shop-btn {

  background: #2563eb;

  color: white;

  padding: 15px 30px;

  text-decoration: none;

  border-radius: 8px;

  transition: 0.3s;

}


.shop-btn:hover {

  background: #1d4ed8;

}


.learn-btn {

  background: white;

  color: #2563eb;

  padding: 15px 30px;

  text-decoration: none;

  border: 2px solid #2563eb;

  border-radius: 8px;

  transition: 0.3s;

}


.learn-btn:hover {

  background: #2563eb;

  color: white;

}


/* =========================
   HERO VIDEO
========================= */

.hero-image {

  width: 45%;

  text-align: center;

}


.hero-image video {

  width: 100%;

  max-width: 550px;

  height: 420px;

  object-fit: cover;

  border-radius: 20px;

  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);

  display: block;

  margin: 0 auto;

}


/* =========================
   TABLET
========================= */

@media (max-width: 900px) {

  .hero {

    padding: 50px 30px;

    flex-direction: column;

    text-align: center;

  }


  .hero-content {

    width: 100%;

  }


  .hero p {

    margin-left: auto;

    margin-right: auto;

  }


  .search-box {

    margin-left: auto;

    margin-right: auto;

  }


  .hero-image {

    width: 100%;

    margin-top: 40px;

  }


  .hero-image video {

    max-width: 650px;

    height: 400px;

  }


  .buttons {

    justify-content: center;

  }

}


/* =========================
   MOBILE
========================= */

@media (max-width: 600px) {

  .hero {

    padding: 40px 20px;

  }


  .hero h1 {

    font-size: 38px;

  }


  .hero p {

    font-size: 16px;

    line-height: 26px;

  }


  .search-box {

    max-width: 100%;

    height: 46px;

  }


  .search-box input {

    font-size: 13px;

    padding: 0 12px;

  }


  .search-box button {

    width: 85px;

    font-size: 13px;

  }


  .buttons {

    flex-direction: column;

    gap: 12px;

  }


  .shop-btn,

  .learn-btn {

    width: 100%;

    box-sizing: border-box;

  }


  .hero-image {

    margin-top: 30px;

  }


  .hero-image video {

    width: 100%;

    height: 280px;

    border-radius: 15px;

  }

}

</style>
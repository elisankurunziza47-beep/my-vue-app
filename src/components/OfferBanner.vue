<template>
  <section class="offer-banner">
    <div class="content">
      <h2>🔥 Special Offer</h2>
      <p>Get up to 30% OFF on selected products.</p>

      <router-link to="/products" class="shop-btn">
        Shop Now
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "OfferBanner"
}
</script>

<style scoped>
.offer-banner{
  background:linear-gradient(135deg,#2563eb,#1d4ed8);
  color:white;
  text-align:center;
  padding:60px 20px;
  margin:40px 0;
  border-radius:15px;
}

.content h2{
  font-size:36px;
  margin-bottom:15px;
}

.content p{
  font-size:18px;
  margin-bottom:25px;
}

.shop-btn{
  display:inline-block;
  padding:14px 28px;
  background:white;
  color:#2563eb;
  text-decoration:none;
  border-radius:8px;
  font-weight:bold;
}

.shop-btn:hover{
  background:#f3f4f6;
}
</style>
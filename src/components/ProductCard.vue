<template>
  <div class="product-card">

    <span class="discount">-20%</span>

    <router-link :to="`/products/${product.id}`">
      <img :src="product.image" :alt="product.name" />
      <h3>{{ product.name }}</h3>
    </router-link>

    <div class="rating">
      ⭐⭐⭐⭐⭐
    </div>

    <p class="price">
      ${{ product.price }}
    </p>

    <div class="buttons">

      <router-link
        :to="`/products/${product.id}`"
        class="details-btn"
      >
        View Details
      </router-link>

      <button
        class="buy-btn"
        @click="buyNow"
      >
        Buy Now
      </button>

    </div>

  </div>
</template>

<script>
export default {
  name: "ProductCard",

  props: {
    product: {
      type: Object,
      required: true
    }
  },

  methods: {
    buyNow() {
      this.$router.push({
        path: "/checkout",
        query: {
          product: this.product.name
        }
      });
    }
  }
}
</script>

<style scoped>

.product-card{
    background:#fff;
    border-radius:15px;
    padding:20px;
    box-shadow:0 10px 25px rgba(0,0,0,.08);
    transition:.3s;
    position:relative;
}

.product-card:hover{
    transform:translateY(-8px);
}

.product-card img{
    width:100%;
    height:220px;
    object-fit:cover;
    border-radius:10px;
}

.product-card a{
    text-decoration:none;
    color:#111827;
}

.product-card h3{
    margin:15px 0;
}

.discount{
    position:absolute;
    top:15px;
    left:15px;
    background:#ef4444;
    color:#fff;
    padding:5px 10px;
    border-radius:20px;
    font-size:12px;
}

.rating{
    margin:10px 0;
}

.price{
    font-size:22px;
    color:#2563eb;
    font-weight:bold;
}

.buttons{
    display:flex;
    flex-direction:column;
    gap:10px;
    margin-top:15px;
}

.details-btn{
    background:#2563eb;
    color:#fff;
    padding:10px;
    text-align:center;
    border-radius:8px;
}

.buy-btn{
    background:#facc15;
    border:none;
    padding:10px;
    cursor:pointer;
    border-radius:8px;
    font-weight:bold;
}

</style>
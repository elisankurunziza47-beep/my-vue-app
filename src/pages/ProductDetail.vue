<template>
  <div v-if="product" class="product-detail">

    <!-- Left Side -->
    <div class="left">

      <ProductGallery :product="product"/>

    </div>

    <!-- Right Side -->
    <div class="right">

      <ProductInfo :product="product"/>

      <QuantitySelector />

      <ProductAction :product="product"/>

    </div>

  </div>

  <!-- Specifications -->
  <ProductSpecification
      v-if="product"
      :product="product"
  />

  <!-- Related Products -->
  <RelatedProducts
      v-if="product"
      :currentProduct="product"
  />

  <!-- Reviews -->
  <CustomerReviews
      v-if="product"
      :product="product"
  />

  <div
      v-if="!product"
      class="not-found"
  >

      <h2>Product Not Found</h2>

      <router-link to="/products">

          Back To Products

      </router-link>

  </div>

</template>

<script>

import products from "../data/products";

import ProductGallery from "../components/ProductGallery.vue";
import ProductInfo from "../components/ProductInfo.vue";
import QuantitySelector from "../components/QuantitySelector.vue";
import ProductAction from "../components/ProductAction.vue";
import ProductSpecification from "../components/ProductSpecification.vue";
import RelatedProducts from "../components/RelatedProducts.vue";
import CustomerReviews from "../components/CustomerReviews.vue";

export default{

name:"ProductDetail",

components:{

ProductGallery,
ProductInfo,
QuantitySelector,
ProductAction,
ProductSpecification,
RelatedProducts,
CustomerReviews

},

computed:{

product(){

const id=Number(this.$route.params.id);

return products.find(

item=>item.id===id

);

}

}

}

</script>

<style scoped>

.product-detail{

display:grid;

grid-template-columns:1fr 1fr;

gap:50px;

padding:60px;

background:#f8fafc;

}

.left{

display:flex;

justify-content:center;

align-items:flex-start;

}

.right{

display:flex;

flex-direction:column;

justify-content:flex-start;

}

.not-found{

text-align:center;

padding:100px;

}

.not-found h2{

margin-bottom:20px;

font-size:35px;

}

.not-found a{

background:#2563eb;

color:white;

padding:15px 25px;

border-radius:10px;

text-decoration:none;

}

.not-found a:hover{

background:#1d4ed8;

}

@media(max-width:900px){

.product-detail{

grid-template-columns:1fr;

padding:30px;

}

}

</style>
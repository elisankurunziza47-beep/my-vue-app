<template>

<div class="product-info">

<h1>{{ product.name }}</h1>

<div class="rating">

⭐ {{ product.rating }}

<span>

({{ product.reviews }} Reviews)

</span>

</div>

<h2 class="price">

${{ product.price }}

</h2>

<p>

<strong>Brand:</strong>

{{ product.brand }}

</p>

<p>

<strong>Category:</strong>

{{ product.category }}

</p>

<p class="stock">

<span v-if="product.stock>0">

✅ In Stock ({{ product.stock }})

</span>

<span v-else>

❌ Out Of Stock

</span>

</p>

<p class="description">

{{ product.description }}

</p>

<div class="delivery">

🚚 {{ product.delivery }}

</div>

</div>

</template>

<script>

export default{

name:"ProductInfo",

props:{

product:Object

}

}

</script>

<style scoped>

.product-info{

padding:20px;

}

.product-info h1{

font-size:35px;

margin-bottom:15px;

}

.rating{

color:#f59e0b;

font-size:18px;

margin-bottom:15px;

}

.price{

color:#10b981;

font-size:35px;

margin:20px 0;

}

.stock{

margin:20px 0;

font-weight:bold;

color:green;

}

.description{

line-height:1.8;

margin-top:20px;

color:#555;

}

.delivery{

margin-top:25px;

background:#f1f5f9;

padding:15px;

border-radius:10px;

}

</style>
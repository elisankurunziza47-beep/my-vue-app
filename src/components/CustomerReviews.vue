<template>

<div class="reviews">

<h2>Customer Reviews</h2>

<div class="review">

<h3>⭐⭐⭐⭐⭐ John</h3>

<p>
Excellent product. Fast delivery and high quality.
</p>

</div>

<div class="review">

<h3>⭐⭐⭐⭐ Elisa</h3>

<p>
Very good phone. Battery lasts long.
</p>

</div>

<div class="review">

<h3>⭐⭐⭐⭐⭐ Alice</h3>

<p>
I highly recommend this product.
</p>

</div>

</div>

</template>

<script>

export default{

name:"CustomerReviews"

}

</script>

<style scoped>

.reviews{

margin-top:50px;

}

.review{

background:white;
padding:20px;
margin-top:20px;
border-radius:15px;
box-shadow:0 5px 20px rgba(0,0,0,.08);

}

.review h3{

color:#f59e0b;

}

.review p{

margin-top:10px;
line-height:1.6;

}

</style>
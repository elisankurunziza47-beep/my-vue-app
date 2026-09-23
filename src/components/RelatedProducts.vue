
<template>

<div class="related">

<h2>Related Products</h2>

<div class="related-grid">

<div class="card">

<img src="../assets/18.jfif">

<h3>Apple Phone</h3>

<p>$800</p>

</div>

<div class="card">

<img src="../assets/28.jfif">

<h3>Pixel 17 Pro</h3>

<p>$900</p>

</div>

<div class="card">

<img src="../assets/17.jfif">

<h3>Dell Laptop</h3>

<p>$700</p>

</div>

</div>

</div>

</template>

<script>

export default{

name:"RelatedProducts"

}

</script>

<style scoped>

.related{

margin-top:50px;

}

.related-grid{

display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:20px;

}

.card{

background:white;
padding:20px;
border-radius:15px;
text-align:center;
box-shadow:0 5px 20px rgba(0,0,0,.08);

}

.card img{

width:150px;
height:150px;
object-fit:cover;

}

.card p{

color:#10b981;
font-weight:bold;

}

</style>
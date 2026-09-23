<template>

<div class="gallery">

<div class="main-image">

<img

:src="selectedImage"

:alt="product.name"

>

</div>

<div class="thumbs">

<img

v-for="(img,index) in product.gallery"

:key="index"

:src="img"

@click="selectedImage=img"

:class="{active:selectedImage===img}"

>

</div>

</div>

</template>

<script>

export default{

name:"ProductGallery",

props:{

product:Object

},

data(){

return{

selectedImage:this.product.gallery[0]

}

},

watch:{

product(){

this.selectedImage=this.product.gallery[0]

}

}

}

</script>

<style scoped>

.gallery{

display:flex;

flex-direction:column;

align-items:center;

}

.main-image img{

width:420px;

height:420px;

object-fit:cover;

border-radius:15px;

}

.thumbs{

display:flex;

gap:15px;

margin-top:20px;

}

.thumbs img{

width:80px;

height:80px;

cursor:pointer;

border-radius:10px;

object-fit:cover;

border:2px solid transparent;

}

.active{

border-color:#2563eb;

}

</style>
<template>

<div class="quantity">

<button @click="decrease">

-

</button>

<span>

{{ quantity }}

</span>

<button @click="increase">

+

</button>

</div>

</template>

<script>

export default{

name:"QuantitySelector",

data(){

return{

quantity:1

}

},

methods:{


increase(){

this.quantity++;

},

decrease(){

if(this.quantity>1){

this.quantity--;

}

}

}

}

</script>

<style scoped>

.quantity{

display:flex;
align-items:center;
gap:20px;
margin:25px 0;

}

.quantity button{

width:45px;
height:45px;
border:none;
background:#2563eb;
color:white;
font-size:22px;
border-radius:8px;
cursor:pointer;

}

.quantity span{

font-size:22px;
font-weight:bold;

}

</style>
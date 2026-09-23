<template>
  <section class="services">

    <div class="service-card">
      <div class="icon">🚚</div>
      <h3>Free Delivery</h3>
      <p>
        Fast delivery all over Rwanda for eligible orders.
      </p>
    </div>

    <div class="service-card">
      <div class="icon">🔒</div>
      <h3>Secure Payment</h3>
      <p>
        Safe and trusted payment methods for every purchase.
      </p>
    </div>

    <div class="service-card">
      <div class="icon">⭐</div>
      <h3>Best Quality</h3>
      <p>
        We provide original and high-quality products.
      </p>
    </div>

    <div class="service-card">
      <div class="icon">🎧</div>
      <h3>24/7 Support</h3>
      <p>
        Our support team is always ready to help you.
      </p>
    </div>

  </section>
</template>

<script>
export default{
    name:"ServiceSection"
}
</script>

<style scoped>

.services{

display:grid;

grid-template-columns:repeat(4,1fr);

gap:25px;

padding:70px 80px;

background:white;

}

.service-card{

background:#fff;

padding:35px;

border-radius:15px;

text-align:center;

box-shadow:0 8px 20px rgba(0,0,0,.08);

transition:.3s;

}

.service-card:hover{

transform:translateY(-10px);

}

.icon{

font-size:50px;

margin-bottom:20px;

}

.service-card h3{

margin-bottom:15px;

color:#222;

}

.service-card p{

color:#666;

line-height:25px;

}

@media(max-width:900px){

.services{

grid-template-columns:repeat(2,1fr);

padding:40px 20px;

}

}

@media(max-width:600px){

.services{

grid-template-columns:1fr;

}

}

</style>
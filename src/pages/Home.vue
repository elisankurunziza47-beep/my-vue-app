<template>
  <div>

    <HeroSection />

    <CategorySection />

    <FeaturedProduct />

    <OfferBanner />

    <ServiceSection />

    <CustomerReviews />

  </div>
</template>

<script>
import HeroSection from "../components/HeroSection.vue";
import CategorySection from "../components/CategorySection.vue";
import FeaturedProduct from "../components/FeaturedProduct.vue";
import OfferBanner from "../components/OfferBanner.vue";
import ServiceSection from "../components/ServiceSection.vue";
import CustomerReviews from "../components/CustomerReviews.vue";

export default{

name:"Home",

components:{

HeroSection,
CategorySection,
FeaturedProduct,
OfferBanner,
ServiceSection,
CustomerReviews

}

}
</script>
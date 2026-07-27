<template>
  <div class="product-detail" v-if="product">
    <h2>{{ product.name }}</h2>

    <img
      :src="product.image"
      :alt="product.name"
      width="200"
    />

    <p>
      <strong>Price:</strong>
      ${{ product.price }}
    </p>

    <p>
      <strong>Description:</strong>
      {{ product.description }}
    </p>

    <button @click="addToCart(product)">
      Add to Cart
    </button>
  </div>

  <div v-else>
    <p>Product not found.</p>
  </div>
</template>

<script>
import appleImg from "../assets/apple.jfif";
import air1Img from "../assets/air1.jpg";
import hppcImg from "../assets/hppc.jfif";
import lenovoImg from "../assets/lenovo.jfif";
import dellpcImg from "../assets/dellpc.jfif";
import applephoneImg from "../assets/applephone.jfif";
import B2Img from "../assets/three.jpg";
import iFone17proImg from "../assets/iFone17pro.jfif";
import air2Img from "../assets/air2.jpg";
import pixelImg from "../assets/pixe17pro.jfif";
import airImg from "../assets/one.jpg";

export default {
  name: "ProductDetail",

  data() {
    return {
      products: [
        {
          id: 1,
          name: "Apple Phone",
          price: 800,
          image: appleImg,
          description:
            "High performance Apple phone for work and advanced features."
        },
        {
          id: 2,
          name: "AIR1 Ultra+",
          price: 300,
          image: air1Img,
          description:
            "No limit of power and performance."
        },
        {
          id: 3,
          name: "HP PC",
          price: 500,
          image: hppcImg,
          description:
            "Latest HP computer with amazing features."
        },
        {
          id: 4,
          name: "Lenovo Laptop",
          price: 600,
          image: lenovoImg,
          description:
            "Reliable Lenovo laptop for students and professionals."
        },
        {
          id: 5,
          name: "AIR1 PHONE",
          price: 230,
          image: air1Img,
          description:
            "Reliable phone for speed and high power saving model."
        },
        {
          id: 6,
          name: "Dell Laptop",
          price: 700,
          image: dellpcImg,
          description:
            "Powerful Dell laptop for multitasking."
        },
        {
          id: 7,
          name: "Apple Phone",
          price: 400,
          image: applephoneImg,
          description:
            "Latest Apple smartphone with advanced features."
        },
        {
          id: 8,
          name: "B2 PHONE",
          price: 290,
          image: B2Img,
          description:
            "Powerful phone for multiple task performing."
        },
        {
          id: 9,
          name: "iFone 17 Pro",
          price: 150,
          image: iFone17proImg,
          description:
            "Affordable smartphone with good performance."
        },
        {
          id: 10,
          name: "AIR2 Ultra",
          price: 280,
          image: air2Img,
          description:
            "More power so you can still think."
        },
        {
          id: 11,
          name: "Pixel 17 Pro",
          price: 900,
          image: pixelImg,
          description:
            "Premium Google Pixel phone with excellent camera."
        },
        {
          id: 12,
          name: "AIR3S PHONE",
          price: 190,
          image: airImg,
          description:
            "High prioritization of getting everything from the internet."
        }
      ]
    };
  },

  computed: {
    product() {
      const id = parseInt(this.$route.params.id);
      return this.products.find(product => product.id === id);
    }
  },

  methods: {
    addToCart(item) {
      alert(`${item.name} has been added to your cart!`);
    }
  }
};
</script>

<style>
.product-detail {
  text-align: center;
  margin-top: 40px;
}

.product-detail img {
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-top: 15px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}
</style>
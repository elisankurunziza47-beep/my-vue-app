import { reactive } from "vue";

export const cart = reactive({

  items: [],

  // Add product to cart
  add(product) {

    const existing = this.items.find(
      item => item.id === product.id
    );

    if (existing) {

      existing.quantity++;

    } else {

      this.items.push({
        ...product,
        quantity: 1
      });

    }

  },

  // Remove product
  remove(id) {

    const index = this.items.findIndex(
      item => item.id === id
    );

    if (index !== -1) {
      this.items.splice(index, 1);
    }

  },

  // Increase quantity
  increase(id) {

    const item = this.items.find(
      p => p.id === id
    );

    if (item) {
      item.quantity++;
    }

  },
  clear(){

    this.items.splice(0);

},

  // Decrease quantity
  decrease(id) {

    const item = this.items.find(
      p => p.id === id
    );

    if (item && item.quantity > 1) {
      item.quantity--;
    }

  },

  // Calculate total
  total() {

    return this.items.reduce(
      (sum, item) => sum + (item.price * item.quantity),
      0
    );

  }

});
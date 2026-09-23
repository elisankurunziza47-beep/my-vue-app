import { reactive } from "vue";

export const wishlist = reactive({

  // Wishlist Items
  items: [],

  // Add Product
  add(product) {

    const existing = this.items.find(
      item => item.id === product.id
    );

    if (!existing) {

      this.items.push({
        ...product
      });

    }

  },

  // Remove Product
  remove(id) {

    const index = this.items.findIndex(
      item => item.id === id
    );

    if (index !== -1) {

      this.items.splice(index, 1);

    }

  },

  // Clear Wishlist
  clear() {

    this.items.splice(0);

  },

  // Check if Product Exists
  exists(id) {

    return this.items.some(
      item => item.id === id
    );

  },  count() {


  // Wishlist Counter

    return this.items.length;

  }

});
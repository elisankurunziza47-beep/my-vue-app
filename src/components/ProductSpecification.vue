<template>
  <div class="spec" v-if="product && product.specifications">

    <h2>Specifications</h2>

    <table>
      <tbody>
        <tr
          v-for="([key, value]) in Object.entries(product.specifications)"
          :key="key"
        >
          <th>{{ formatKey(key) }}</th>
          <td>{{ value }}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  name: "ProductSpecification",

  props: {
    product: {
      type: Object,
      required: true
    }
  },

  methods: {
    formatKey(key) {
      return key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (char) => char.toUpperCase());
    }
  }
};
</script>

<style scoped>
.spec {
  margin-top: 40px;
  background: #ffffff;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.spec h2 {
  font-size: 28px;
  color: #1e293b;
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

tr {
  border-bottom: 1px solid #e5e7eb;
}

th,
td {
  padding: 15px;
  text-align: left;
}

th {
  width: 35%;
  color: #334155;
  font-weight: 600;
  background: #f8fafc;
}

td {
  color: #475569;
}

tr:last-child {
  border-bottom: none;
}

@media (max-width: 600px) {
  .spec {
    padding: 20px;
  }

  .spec h2 {
    font-size: 23px;
  }

  th,
  td {
    padding: 12px 8px;
    font-size: 14px;
  }

  th {
    width: 40%;
  }
}
</style>
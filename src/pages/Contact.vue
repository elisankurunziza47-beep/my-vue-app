<template>
  <div class="contact">
    <h2>Contact Us</h2>
    <form @submit.prevent="sendMessage">
      <input type="text" v-model="name" placeholder="Your Name" required /><br/>
      <input type="email" v-model="email" placeholder="Your Email" required /><br/>
      <textarea v-model="message" placeholder="Your Message" required></textarea><br/>
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return { name: "", email: "", message: "" };
  },
  methods: {
    sendMessage() {
      alert(`Thank you ${this.name}, we’ll reply to ${this.email} soon!`);
    }
  }
}
</script>

<style>
.contact {
  text-align: center;
  margin-top: 1px;
  min-height: 100vh;
}

form {
  display: flex;
  flex-direction: column; 
  align-items: center; 
}

input,
textarea {
  width: 300px;
  margin: 13px 0;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #007bff;
  color: white;
  padding: 8px 20px;
  border: none;
  border-radius: 5px;
  margin-top: 20px; 
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>

<template>

<div class="confirmation-page">

    <div class="confirmation-card">

        <!-- Success Icon -->
        <div class="success-icon">
            ✅
        </div>

        <h1>Order Placed Successfully!</h1>

        <p class="message">
            Thank you for shopping with
            <strong>Elisa E-Shop</strong>.
            Your order has been received and is being processed.
        </p>

        <hr>

        <div class="order-details">

            <div class="detail">
                <span>Order Number</span>
                <strong>#{{ orderNumber }}</strong>
            </div>

            <div class="detail">
                <span>Order Date</span>
                <strong>{{ currentDate }}</strong>
            </div>

            <div class="detail">
                <span>Total Amount</span>
                <strong>${{ total }}</strong>
            </div>

            <div class="detail">
                <span>Payment Status</span>
                <strong class="paid">
                    Paid
                </strong>
            </div>

            <div class="detail">
                <span>Delivery Status</span>
                <strong class="shipping">
                    Processing
                </strong>
            </div>

        </div>

        <hr>

        <div class="buttons">

            <router-link
                to="/products"
                class="shop-btn"
            >
                🛍 Continue Shopping
            </router-link>

            <button
                class="print-btn"
                @click="printReceipt"
            >
                🖨 Print Receipt
            </button>

            <button
                class="invoice-btn"
                @click="downloadInvoice"
            >
                📄 Download Invoice
            </button>

        </div>

    </div>

</div>

</template>

<script>

export default{

name:"OrderConfirmation",

data(){

return{

orderNumber:
Math.floor(
100000+Math.random()*900000
),

total:
this.$route.query.total || 0

}

},

computed:{

currentDate(){

return new Date().toLocaleDateString();

}

},

methods:{

printReceipt(){

window.print();

},

downloadInvoice(){

alert(
"Invoice download feature will be added later."
);

}

}

}

</script>
<style scoped>

/* Page */

.confirmation-page{
    min-height:100vh;
    background:#f4f7fb;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:40px;
}

/* Card */

.confirmation-card{
    width:100%;
    max-width:750px;
    background:white;
    border-radius:20px;
    padding:40px;
    box-shadow:0 10px 30px rgba(0,0,0,.1);
    text-align:center;
}

/* Success Icon */

.success-icon{
    width:100px;
    height:100px;
    margin:0 auto 20px;
    border-radius:50%;
    background:#22c55e;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:55px;
}

/* Title */

.confirmation-card h1{
    color:#16a34a;
    margin-bottom:15px;
}

/* Message */

.message{
    color:#64748b;
    font-size:17px;
    line-height:1.7;
    margin-bottom:25px;
}

/* Divider */

hr{
    border:none;
    border-top:1px solid #e5e7eb;
    margin:30px 0;
}

/* Order Details */

.order-details{
    display:flex;
    flex-direction:column;
    gap:18px;
}

.detail{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:15px;
    background:#f8fafc;
    border-radius:10px;
}

.detail span{
    color:#475569;
    font-weight:600;
}

.detail strong{
    color:#111827;
}

/* Status Colors */

.paid{
    color:#16a34a;
}

.shipping{
    color:#2563eb;
}

/* Buttons */

.buttons{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:15px;
    margin-top:30px;
}

.buttons a,
.buttons button{

    padding:14px 22px;
    border:none;
    border-radius:10px;
    cursor:pointer;
    text-decoration:none;
    font-size:16px;
    font-weight:bold;
    transition:.3s;

}

/* Continue Shopping */

.shop-btn{
    background:#2563eb;
    color:white;
}

.shop-btn:hover{
    background:#1d4ed8;
}

/* Print */

.print-btn{
    background:#f59e0b;
    color:white;
}

.print-btn:hover{
    background:#d97706;
}

/* Invoice */

.invoice-btn{
    background:#10b981;
    color:white;
}

.invoice-btn:hover{
    background:#059669;
}

/* Responsive */

@media(max-width:768px){

.confirmation-card{
    padding:25px;
}

.detail{
    flex-direction:column;
    gap:8px;
    text-align:center;
}

.buttons{
    flex-direction:column;
}

.buttons a,
.buttons button{
    width:100%;
}

.success-icon{
    width:80px;
    height:80px;
    font-size:45px;
}

.confirmation-card h1{
    font-size:28px;
}

}

</style>
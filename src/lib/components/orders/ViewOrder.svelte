<script>
    export let orderItems = [];
    export let total = 0;
    export let orderNumber = '';

    // Function to generate a simple GUID for the order number
    function generateGUID() {
        return 'xxxx-xxxx-xxxx'.replace(/[x]/g, function () {
            return (Math.random() * 16 | 0).toString(16);
        });
    }

    // Display the thank you message and order number
</script>

<style>
    .order-container {
        background-color: #f8f9fa;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        max-width: 100%;
        margin: 20px auto 0;
        text-align: center;
    }

    .order-header {
        font-weight: bold;
        font-size: 1.2rem;
        margin-bottom: 10px;
    }

    .order-items {
        margin-bottom: 20px;
        text-align: left;
    }

    .order-item {
        margin-bottom: 10px;
    }

    .order-item-name {
        font-weight: bold;
    }

    .order-thankyou {
        color: #28a745;
        font-weight: bold;
        font-size: 1.5rem;
        margin-bottom: 10px;
    }

    .order-number {
        font-size: 1.1rem;
        margin-bottom: 10px;
    }

    .order-total {
        font-size: 1.2rem;
        margin-top: 10px;
        font-weight: bold;
    }
</style>

<div class="order-container">
    
    <div class="order-header">Order Details:</div>
    <div class="order-thankyou">Thank you for shopping with us!</div>
    {#if orderNumber === '' || orderNumber === undefined || orderNumber === null}
        <div class="order-number"><p>Order not placed yet</p></div>        
    {:else}    
        <div class="order-number">Here is your order number: <strong>{orderNumber}</strong></div>        
    {/if}
    

    <div class="order-items">
        {#each orderItems as item}
            <div class="order-item">
                <span class="order-item-name">{item.name}</span> x {item.quantity} - ${item.price.toFixed(2)}
            </div>
        {/each}
    </div>
    
    <div class="order-total">Total: ${total}</div>
</div>

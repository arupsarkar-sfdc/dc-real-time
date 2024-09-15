<script>
    import ViewOrder from "$lib/components/orders/ViewOrder.svelte";
    export let cartItems = [];
    let total = 0;  // Declare a reactive variable for total
    let orderPlaced = false;  // Track whether the order has been placed
    let orderNumber = '';     // Store the order number (GUID)
    let orderItems = [];      // Array to store the items in the order        
    // Function to increase quantity
    function increaseQuantity(item) {
        item.quantity++;
        //updateCartTotal();
        // Trigger reactivity by assigning a new array
        cartItems = [...cartItems]; 
        updateCartTotal();       
    }

    // Function to decrease quantity, with a lower limit of zero
    function decreaseQuantity(item) {
        if (item.quantity > 0) {
            item.quantity--;
            // Trigger reactivity by assigning a new array
            cartItems = [...cartItems];
            updateCartTotal();
        }
    }

    // Function to remove the item
    function removeItem(item) {
        cartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
        // Trigger reactivity by assigning a new array
        cartItems = [...cartItems];
        updateCartTotal();
    }
    $: total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
    // Function to update the total cart value
    function updateCartTotal() {
        console.log("updateCartTotal");
        let total = 0;

        console.log(cartItems);
        cartItems.forEach(item => {
            total += item.price * item.quantity;
        });
        console.log(total);
            // Reactive statement to calculate total
        
        return total.toFixed(2);  // Returns the total price with two decimal places
    }

    // Sample onClick function for the Order button
    // Function to handle the order placement
    function placeOrder() {
        console.log("placeOrder", orderPlaced);
        // Generate a random GUID for the order number
        orderNumber = generateGUID();
        // Ensure reactivity for both orderItems and orderPlaced
        orderItems = [...cartItems];  // Copy current cart items to orderItems (reactivity triggered)
        console.log("Order Items: ", orderItems);
        orderPlaced = true;  // Mark order as placed (ensure reactivity)
        console.log("placeOrder", orderPlaced);
    }
    $: orderPlaced = true;  // Mark order as placed

    // Function to generate a simple GUID for the order number
    function generateGUID() {
        return 'xxxx-xxxx-xxxx'.replace(/[x]/g, function () {
            return (Math.random() * 16 | 0).toString(16);
        });
    }
    // Reactive block to track changes in orderPlaced
    $: if (orderPlaced) {
        console.log("Order placed is reactive:", orderPlaced);
    }    
</script>

<style>
    .cart-container {
        background-color: #f8f9fa;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        max-width: 100%;
        margin: 0 auto;
    }

    .cart-header {
        background-color: #f8f9fa;
        padding: 20px;
        border-radius: 10px;
    }
    .cart-header h2 {
    background-color: #e9ecef;
    padding: 10px;
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
  }
    .cart-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ddd;
        padding: 10px 0;
    }

    .cart-item img {
        width: 80px;
        height: 80px;
        border-radius: 10px;
        object-fit: cover;
    }

    .cart-item-info {
        flex: 1;
        margin-left: 10px;
    }

    .cart-item-name {
        font-weight: bold;
        margin-bottom: 5px;
    }

    .cart-item-price {
        color: #28a745;
    }

    .cart-item-quantity {
        display: flex;
        align-items: center;
    }

    .cart-quantity-btn {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 5px 10px;
        margin: 0 5px;
        border-radius: 5px;
        cursor: pointer;
    }

    .cart-remove-btn {
        background-color: #dc3545;
        color: white;
        border: none;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
    }

    .cart-total {
        text-align: right;
        margin-top: 20px;
        font-size: 1.2rem;
        font-weight: bold;
    }

    .empty-cart {
        text-align: center;
        color: #888;
        margin-top: 20px;
    }
    .order-button {
        background-color: #28a745;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
    }

    .order-button:hover {
        background-color: #218838;
    }

    .total-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    /* Ensure the button is aligned and styled properly */
    .order-button {
        margin-right: auto;
    }    
</style>

<div class="cart-container">
    <div class="cart-header">
        <h2>Cart Information</h2>
    </div>
    
    {#if cartItems.length > 0}
        {#each cartItems as item}
        <div class="cart-item">
            <img src={item.photo_url} alt={item.name} />
            <div class="cart-item-info">
                <div class="cart-item-name">{item.name}</div>
                <div class="cart-item-price">${item.price.toFixed(2)}</div>
            </div>
            <div class="cart-item-quantity">
                <button class="cart-quantity-btn" on:click={() => decreaseQuantity(item)}>-</button>
                <span>{item.quantity}</span>
                <button class="cart-quantity-btn" on:click={() => increaseQuantity(item)}>+</button>
            </div>
            <button id="remove" class="cart-remove-btn" on:click={() => removeItem(item)}>Remove</button>
        </div>
        {/each}
        
        <!-- Total row with Order button -->
        <div class="total-row">
            <button class="order-button" on:click={placeOrder}>Place Order</button>
            <div class="cart-total">Total: ${total}</div>
        </div>
        <!-- Display the ViewOrder component once the order is placed -->
        <ViewOrder {orderItems} {total} {orderNumber} />        
    {:else}
    
        <div class="empty-cart">Your cart is currently empty.</div>
    {/if}
</div>

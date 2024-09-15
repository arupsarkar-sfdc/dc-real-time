<script>
    //import products
    import Products from "$lib/components/products/Products.svelte";
    import Cart from "$lib/components/cart/Cart.svelte";
    export let data;

    let cartItems = [];

    function addToCart(product) {
        let item = cartItems.find(item => item.id === product.id);
        if (item) {
            item.quantity++;
        } else {
            cartItems = [...cartItems, { ...product, quantity: 1 }];
        }
    }
</script>

<div class="main-layout">
    <div class="products-section">
        <!-- Display the products components if products are availeble -->
        {#if data && data.products}
            <Products products={data.products} addToCart={addToCart} />
        {:else}
            <p> Loading products ...</p>
        {/if}
      </div>
        <div class="cart-section">
          <Cart cartItems={cartItems} />
        </div>

</div>
 <!-- Display the products components if products are availeble
  {#if data && data.products}
    <Products products={data.products}/>
  {:else}
    <p>Loading Products...</p>
  {/if} -->
<!-- <div>
    <Products />
</div> -->

<style>
  .main-layout {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  .products-section {
    width: 75%;
  }

  .cart-section {
    width: 25%;
  }

</style>
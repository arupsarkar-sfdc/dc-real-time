<script>
    // import Stencil from "./Stencil.svelte";
    import { onMount } from "svelte";

  
    let isDisney = false;
    let personalizationData = null;

  
    onMount(async () => {
      console.log(window.innerWidth);
      console.log('onMount', 'Loading Products');
      const urlParams = new URLSearchParams(window.location.search);
      isDisney = urlParams.has("disney");

      // products.forEach(product => {
      //       const productElement = document.getElementById(`product-${product.id}`);
      //       if (productElement) {
      //           // Inject your tracking logic for each product
      //           console.log(`Tracking product: ${product.name} with ID: product-${product.id}`);
                
      //           // Salesforce tracking script integration
      //           window.SalesforceInteractions && window.SalesforceInteractions.sendEvent({
      //               user: {
      //                   attributes: {
      //                       eventType: "Product",
      //                       productID: `product-${product.id}`,  // Use dynamic ID
      //                       productName: product.name,
      //                       productCategory: product.category,
      //                       category: "Engagement",
      //                   }
      //               }
      //           });
      //       }
      //   });

      
    })
    export let products = []
    export let addToCart // Function passed from +page.svelte in the products route

    function trackProduct(product) {
        console.log(`Tracking product: ${product.name} with ID: product-${product.id}`);

        // // Salesforce tracking script integration
        // window.SalesforceInteractions && window.SalesforceInteractions.sendEvent({
        //     user: {
        //         attributes: {
        //             eventType: "Product",
        //             productID: `product-${product.id}`,  // Use dynamic ID
        //             productName: product.name,
        //             productCategory: product.category,
        //             eventCategory: "Engagement",
        //         }
        //     }
        // });
    }            
  </script>
  
  <!-- <div class="slds-grid slds-gutters slds-grid_vertical-stretch slds-var-m-bottom_xx-large"> -->
  {#if isDisney}
    <div class="header">
      <div class="product-container"></div>
    </div>
  {:else}
    <div class="banner-container">
      <img
        src="https://www.northerntrailoutfitters.com/dw/image/v2/BDPX_PRD/on/demandware.static/-/Library-Sites-NTO-SFRASharedLibrary/default/dw4cc45dcb/images/stories/stories-category-1680-400.jpg"
        alt="banner-1"
        class="banner-image"
      />
    </div>
  {/if}
  <div class="main-layout">
  
    <!-- Recommendations Section -->
    <aside class="recommendations">
      <h2>Recommendations</h2>
      <ul>
        <li>Recommended Item 1</li>
        <li>Recommended Item 2</li>
        <li>Recommended Item 3</li>
      </ul>
    </aside>
  
    <div class="product-grid">

      {#each products as product}
      <button class="product-container"
        id={product.sku_name}
        on:click={() => trackProduct(product)}
        on:keydown={(e) => e.key === 'Enter' && addToCart(product)}
        aria-label={`Add ${product.name} to cart`}
      >
        <button class="price">${product.price}</button>
        <img
          id={`product-${product.id}`} 
          src={product.photo_url} 
          alt={product.name} class="product-image" />
        <div class="product-label">{product.name}</div>
        <div class="product-details">{product.description}</div>
        <button id="addToCart" class="add-to-cart" on:click={() => addToCart(product)} >Add to Cart</button>
      </button>
    {/each}      
    
      <!-- <div class="image-container">
        <div class="product-row">
          <div class="product-container">
            <button class="price"> $1.09 </button>
            <button class="add-to-cart"> Add to Cart </button>
            <img
              id="yeti"
              src="https://www.northerntrailoutfitters.com/on/demandware.static/-/Sites-nto-alpine-nutrition/default/dw26816003/images/medium/alpine-nutrition-yeti-tartcherrybison.jpg"
              alt="Nutrition"
            />
            <div class="product-label">Nutrition</div>
            <div class="product-details">New Flavors</div>
          </div>
          <div class="product-container">
            <button class="price"> $199.99 </button>
            <button class="add-to-cart"> Add to Cart </button>
            <img
              id="womensJacket"
              src="https://www.northerntrailoutfitters.com/on/demandware.static/-/Sites-nto-apparel/default/dw6f40b1c3/images/medium/2010752AVK-0.jpg"
              alt="Women’s Jacket"
            />
            <div class="product-label">Women’s Jacket</div>
            <div class="product-details">New Arrivals</div>
          </div>
          <div class="product-container">
            <button class="price"> $209.99 </button>
            <button class="add-to-cart"> Add to Cart </button>
            <img
              id="mensJacket"
              src="https://www.northerntrailoutfitters.com/on/demandware.static/-/Sites-nto-apparel/default/dw7fb9b3c8/images/medium/2010699AU3-0.jpg"
              alt="Men’s Jacket"
            />
            <div class="product-label">Men’s Jacket</div>
            <div class="product-details">Now 30% off</div>
          </div>
          <div class="product-container">
            <button class="price"> $399.99 </button>
            <button class="add-to-cart"> Add to Cart </button>
            <img
              id="electronics"
              src="https://www.northerntrailoutfitters.com/on/demandware.static/-/Sites-nto-electronics/default/dwf417e366/images/medium/503800.jpg"
              alt="Electronics"
            />
            <div class="product-label">Electronics</div>
            <div class="product-details">New Models arriving soon</div>
          </div>
        </div>
      </div> -->
      
      <!-- <div class="image-container">
        <div class="product-row">
          <div class="product-container">
            <button class="price"> $89.99 </button>
      
            <button class="add-to-cart"> Add to Cart </button>
            <img
              id="mensShoe"
              src="https://www.northerntrailoutfitters.com/on/demandware.static/-/Sites-nto-apparel/default/dw0ec2779e/images/medium/1050073ATJ-0.jpg"
              alt="Men's Shoe"
            />
            <div class="product-label">Men's Shoe</div>
            <div class="product-details">New Fall Collection</div>
          </div>
          <div class="product-container">
            <button class="price"> $109.99 </button>
            <button class="add-to-cart"> Add to Cart </button>
            <img
              id="womensShoe"
              src="https://www.northerntrailoutfitters.com/on/demandware.static/-/Sites-nto-apparel/default/dwd7e6efbf/images/medium/1050127AIW-0.jpg"
              alt="Women’s Shoe"
            />
            <div class="product-label">Women’s Shoe</div>
            <div class="product-details">New Models arriving soon</div>
          </div>
          <div class="product-container">
            <button class="price"> $34.99 </button>
            <button class="add-to-cart"> Add to Cart </button>
            <img
              id="womensBackpack"
              src="https://www.northerntrailoutfitters.com/on/demandware.static/-/Sites-nto-gear/default/dw8f2bdb3e/images/medium/4060194AV7-0.jpg"
              alt="Women’s Backpack"
            />
            <div class="product-label">Women’s Backpack</div>
            <div class="product-details">Free Shipping till Dec 31st</div>
          </div>
          <div class="product-container">
            <button class="price"> $169.99 </button>
            <button class="add-to-cart"> Add to Cart </button>
            <img
              id="mensBackpack"
              src="https://www.northerntrailoutfitters.com/on/demandware.static/-/Sites-nto-gear/default/dw9a7a9411/images/medium/4060521ACD-0.jpg"
              alt="Men’s Backpack"
            />
            <div class="product-label">Men’s Backpack</div>
            <div class="product-details">Now 20% off</div>
          </div>
        </div>
      </div> -->
  
  
    </div> <!-- product-grid -->
  
    <!-- Cart Information Section -->
    <!-- <aside class="cart-info">
      <h2>Cart Information</h2>
      <p>Your cart is currently empty.</p>
    </aside>   -->
  
  </div> <!-- main-layout -->
  
  
  
  <div class="image-container">
    <div class="promo-row">
      <div class="promo-item">
        <img id="promo1" src="images/promo1.png" alt="Promo 1" />
      </div>
      <div class="promo-item">
        <img id="promo2" src="images/promo2.png" alt="Promo 1" />
      </div>
      <div class="promo-item">
        <img id="promo3" src="images/promo3.png" alt="Promo 1" />
      </div>
    </div>
  </div>
  
  <style>
  
  .main-layout {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
  }
  
  /* Product Grid */
  .product-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-grow: 1;
    gap: 20px;
    max-width: 60%;
  }
    .banner-container {
      width: 100%; /* Make sure the banner container takes up the full width */
      height: auto; /* Let the height adjust based on the content */
      overflow: hidden; /* Hide any overflow */
    }
  
    .banner-image {
      width: 100%; /* Ensure the image takes up the full width of its container */
      height: auto; /* Maintain the aspect ratio */
      object-fit: cover; /* Ensure the image covers the container without distortion */
    }
  
    @media (max-width: 768px) {
      .banner-container {
        height: auto; /* Adjust the height for smaller screens if necessary */
      }
    }
  
    .image-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .image-container img {
      margin-right: 15px;
    }
  
    .image-container img:last-child {
      margin-right: 0;
    }
    .product-label {
      text-align: center; /* Center the text inside the label container */
      margin-top: 2px; /* Add some space between the image and the label if needed */
    }
  
    .promo-row {
      display: flex;
      justify-content: space-between; /* Distribute items with space between them */
      margin-top: 20px; /* Add some margin above the promo row */
    }
  
    .promo-item {
      flex: 1; /* Ensure each promo item takes equal space */
      margin: 0 10px; /* Add horizontal gap between promo items */
    }
  
    .promo-item img {
      max-width: 100%; /* Ensure images resize to fit within their containers */
      height: auto;
    }
  
    .product-row {
      display: flex;
      justify-content: space-between; /* Distribute items evenly */
      align-items: center; /* Center items vertically */
      margin: 20px 0; /* Add margin to separate this row from others */
    }
    /* Container for each product */
    .product-container {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 20px;
      margin: 10px;
      background-color: white; /* very light gray background */
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition:
        transform 0.2s,
        box-shadow 0.2s;
      width: 100%; /* Ensure full width of the container */
      max-width: 300px; /* Set a maximum width for each product container */
    }
    .product-item {
      flex: 1; /* Allow items to grow and shrink to fit in the row */
      text-align: center; /* Center the product labels */
    }
  
    .product-item img {
      max-width: 100%; /* Ensure images resize to fit within their containers */
      height: auto;
    }
    /* Product labels */
    .product-label {
      font-size: 18px;
      font-weight: 700; /* Bold text */
      color: white; /* White text */
      padding: 10px 20px;
      border-radius: 20px; /* Rounded corners */
      background: linear-gradient(135deg, #6a11cb, #2575fc); /* Purple gradient */
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
      transition: background 0.3s ease; /* Smooth transition for hover */
      margin: 0;
    }
    .product-label:hover {
      background: linear-gradient(135deg, #9b59b6, #8e44ad);
    }
    .product-details {
      font-size: 14px;
      font-weight: 700;
      color: white;
      padding: 5px 15px;
      border-radius: 15px;
      background: linear-gradient(135deg, #ff416c, #ff4b2b); /* Red gradient */
      margin-top: 10px;
      transition: background 0.3s ease;
      display: inline-block;
    }
  
    .product-details::after {
      font-size: 12px;
      color: yellow; /* Optional: make discount text stand out */
      font-weight: bold;
      margin-left: 5px;
    }
  
    .product-details:hover {
      background: linear-gradient(
        135deg,
        #ff6a6a,
        #550202
      ); /* Darker red on hover */
    }
  
    /* Hover effect */
    .product-container:hover {
      transform: translateY(-10px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    }
  
    /* Product images */
    .product-container img {
      max-width: 100%;
      height: auto;
      max-height: 200px; /* Set a consistent maximum height for all images */
      object-fit: contain; /* Ensure images fit within the container without being distorted */
      margin-bottom: 15px;
    }
  
    /* Add to Cart button */
    .add-to-cart {
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: #28a745; /* Green color */
      color: white;
      border: none;
      border-radius: 10px; /* Rounded edges */
      padding: 5px 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px; /* Space between icon and text */
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Subtle shadow */
      transition: background-color 0.3s ease;
    }
  
    .add-to-cart:hover {
      background-color: #218838; /* Darker green on hover */
    }
  
    .price {
      position: absolute;
      top: 10px;
      left: 10px;
      background-color: #6a05c8; /* Green color */
      color: white;
      border: none;
      border-radius: 10px; /* Rounded edges */
      padding: 5px 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px; /* Space between icon and text */
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Subtle shadow */
      transition: background-color 0.3s ease;
    }
  
    .price:hover {
      background-color: #0a0210; /* Darker green on hover */
    }
  
  /* Recommendations Section */
  .recommendations {
    width: 20%;
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .recommendations h2 {
    background-color: #e9ecef;
    padding: 10px;
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
  }  
  
  /* Cart Information Section */
  .cart-info {
    width: 20%;
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .cart-info h2 {
    background-color: #e9ecef;
    padding: 10px;
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
  }
  </style>
  
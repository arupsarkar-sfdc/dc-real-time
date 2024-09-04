<script>
  import Stencil from "./Stencil.svelte";
  import { onMount } from "svelte";

  let isDisney = false;

  onMount(() => {
    console.log(window.innerWidth);
    const urlParams = new URLSearchParams(window.location.search);
    isDisney = urlParams.has("disney");
  });
</script>

<div>
  {#if isDisney}
    <div
      class="slds-col slds-var-m-bottom_xx-large slds-grid_vertical-stretch disney-banner"
    >
      <Stencil
        text=""
        helpText="Banner Logo"
        image="https://www.shopdisney.com/on/demandware.static/-/Sites-shopDisney-Library/default/dwc4d33617/images/default-logo.svg"
        style="background:#fff; padding-bottom: 10px; border-bottom: 5px solid #00295A;"
      />
    </div>
  {:else}
    <div class="slds-col slds-var-m-bottom_xx-large slds-grid_vertical-stretch">
      <Stencil
        text=""
        helpText="Promo #1"
        image="https://www.northerntrailoutfitters.com/dw/image/v2/BDPX_PRD/on/demandware.static/-/Library-Sites-NTO-SFRASharedLibrary/default/dw4cc45dcb/images/stories/stories-category-1680-400.jpg"
      />
    </div>
  {/if}
</div>

<!-- <div class="slds-grid slds-gutters slds-grid_vertical-stretch slds-var-m-bottom_xx-large"> -->
<div class="image-container">
  <div class="product-row">
    <div class="product-container">
      <img id="yeti" src="https://www.northerntrailoutfitters.com/on/demandware.static/-/Sites-nto-alpine-nutrition/default/dw26816003/images/medium/alpine-nutrition-yeti-tartcherrybison.jpg" alt="Nutrition" />
      <div class="product-label">Nutrition</div> 
      <div class="product-details">New Flavors</div>     
    </div>
    <div class="product-container">
      <img id="womensJacket" src="https://www.northerntrailoutfitters.com/on/demandware.static/-/Sites-nto-apparel/default/dw6f40b1c3/images/medium/2010752AVK-0.jpg" alt="Women’s Jacket" />
      <div class="product-label">Women’s Jacket</div> 
      <div class="product-details">New Arrivals</div>           
    </div>
    <div class="product-container">
      <img id="mensJacket" src="https://www.northerntrailoutfitters.com/on/demandware.static/-/Sites-nto-apparel/default/dw7fb9b3c8/images/medium/2010699AU3-0.jpg" alt="Men’s Jacket" />
      <div class="product-label">Men’s Jacket</div> 
      <div class="product-details">Now 30% off</div>           
    </div>
    <div class="product-container">
      <img id="electronics" src="https://www.northerntrailoutfitters.com/on/demandware.static/-/Sites-nto-electronics/default/dwf417e366/images/medium/503800.jpg" alt="Electronics" />
      <div class="product-label">Electronics</div>      
      <div class="product-details">New Models arriving soon</div>      
    </div>            
  </div>

</div>

<div class="image-container">

  <div class="product-row">
    <div class="product-container">
      <img id="mensShoe" src="https://www.northerntrailoutfitters.com/on/demandware.static/-/Sites-nto-apparel/default/dw0ec2779e/images/medium/1050073ATJ-0.jpg" alt="Men's Shoe" />
      <div class="product-label">Men's Shoe</div> 
      <div class="product-details">New Fall Collection</div>           
    </div>
    <div class="product-container">
      <img id="womensShoe" src="https://www.northerntrailoutfitters.com/on/demandware.static/-/Sites-nto-apparel/default/dwd7e6efbf/images/medium/1050127AIW-0.jpg" alt="Women’s Shoe" />
      <div class="product-label">Women’s Shoe</div> 
      <div class="product-details">New Models arriving soon</div>           
    </div>
    <div class="product-container">
      <div class="product-item">
        <img id="womensBackpack" src="https://www.northerntrailoutfitters.com/on/demandware.static/-/Sites-nto-gear/default/dw8f2bdb3e/images/medium/4060194AV7-0.jpg" alt="Women’s Backpack"/>
        <div class="product-label">Women’s Backpack</div>
        <div class="product-details">Free Shipping till Dec 31st</div>          
      </div>

    </div>
    <div class="product-container">
      <div class="product-item">
        <img id="mensBackpack" src="https://www.northerntrailoutfitters.com/on/demandware.static/-/Sites-nto-gear/default/dw9a7a9411/images/medium/4060521ACD-0.jpg" alt="Men’s Backpack"/>
        <div class="product-label">Men’s Backpack</div>  
        <div class="product-details">Now 20% off</div>    
      </div>

    </div>            
  </div>
</div>

<div class="image-container">
  <div class="promo-row">
    <div class="promo-item">
      <img src="images/promo1.png" alt="Promo 1" />
    </div>
    <div class="promo-item">
      <img src="images/promo2.png" alt="Promo 1" />
    </div>
    <div class="promo-item">
      <img src="images/promo3.png" alt="Promo 1" />
    </div>        
  </div>

</div>

<style>
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
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
    margin: 10px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
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
    background: linear-gradient(135deg, #ff6a6a, #550202); /* Darker red on hover */
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
</style>

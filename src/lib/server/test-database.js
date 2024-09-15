import { getProducts } from './database.js';  // Adjust path if necessary

// Call the getProducts function and log the result
async function testGetProducts() {
    const products = await getProducts();
    console.log('Products:', products);  // Log the fetched products

    if (products && products.length > 0) {
        console.log('Test Passed: Products were returned successfully.');
    } else {
        console.log('Test Failed: No products returned.');
    }
}

// Run the test
testGetProducts();

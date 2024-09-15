import { fail  } from "@sveltejs/kit";
import * as db from "$lib/server/database.js";


export async function load() {
    console.log('load function() ', 'Start');

    const products = await db.getProducts();
    
    if (!products) {
        return fail('Failed to fetch products');
    }
    console.log('products available - ', products);
    return {
        products
    };
}

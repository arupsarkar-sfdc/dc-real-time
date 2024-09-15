// In a real app, this data would live in a database,
// rather than in memory. But for now, we cheat.
const db = new Map();

export function getTodos(userid) {
	if (!db.get(userid)) {
		db.set(userid, [{
			id: crypto.randomUUID(),
			description: 'Learn SvelteKit',
			done: false
		}]);
	}

	return db.get(userid);
}

export function createTodo(userid, description) {
	if ( description === '' ) {
		throw new Error('Description cannot be empty');
	}

	const todos = db.get(userid);
	console.log('creating todos ', todos);

	if (todos.find((todo) => todo.description === description)) {
		console.log('todos already exists ', todos);
		throw new Error('todos must be unique');
	}
	

	todos.push({
		id: crypto.randomUUID(),
		description,
		done: false
	});
}

export function deleteTodo(userid, todoid) {
	const todos = db.get(userid);
	const index = todos.findIndex((todo) => todo.id === todoid);

	if (index !== -1) {
		todos.splice(index, 1);
	}
}


// Step 1: Products Database
const productsDatabase = [
    { id: 1, name: 'Yeti Bar', sku_name: 'yeti', category: 'Nutrition', price: 1.09, description: 'New Flavors', photo_url: 'https://www.northerntrailoutfitters.com/on/demandware.static/-/Sites-nto-alpine-nutrition/default/dw26816003/images/medium/alpine-nutrition-yeti-tartcherrybison.jpg' },
    { id: 2, name: 'Women\'s Jacket', sku_name: 'womensJacket', category: 'Apparel', price: 199.99, description: 'New Arrivals', photo_url: 'https://www.northerntrailoutfitters.com/on/demandware.static/-/Sites-nto-apparel/default/dw6f40b1c3/images/medium/2010752AVK-0.jpg' },
    { id: 3, name: 'Men\'s Jacket', sku_name: 'mensJacket', category: 'Apparel', price: 209.99, description: 'Now 30% off', photo_url: 'https://www.northerntrailoutfitters.com/on/demandware.static/-/Sites-nto-apparel/default/dw7fb9b3c8/images/medium/2010699AU3-0.jpg' },
    { id: 4, name: 'Electronics', sku_name: 'electronics', category: 'Gadgets', price: 399.99, description: 'New Models arriving soon', photo_url: 'https://www.northerntrailoutfitters.com/on/demandware.static/-/Sites-nto-electronics/default/dwf417e366/images/medium/503800.jpg' },
    { id: 5, name: 'Men\'s Shoe', sku_name: 'mensShoe', category: 'Footwear', price: 89.99, description: 'New Fall Collection',photo_url: 'https://www.northerntrailoutfitters.com/on/demandware.static/-/Sites-nto-apparel/default/dw0ec2779e/images/medium/1050073ATJ-0.jpg' },
    { id: 6, name: 'Women\'s Shoe', sku_name: 'womensShoe', category: 'Footwear', price: 109.99, description: 'New Models arriving soon', photo_url: 'https://www.northerntrailoutfitters.com/on/demandware.static/-/Sites-nto-apparel/default/dwd7e6efbf/images/medium/1050127AIW-0.jpg' },
    { id: 7, name: 'Women\'s Backpack', sku_name: 'womensBackpack', category: 'Accessories', price: 34.99, description: 'Free Shipping till Dec 31st', photo_url: 'https://www.northerntrailoutfitters.com/on/demandware.static/-/Sites-nto-gear/default/dw8f2bdb3e/images/medium/4060194AV7-0.jpg' },
    { id: 8, name: 'Men\'s Backpack', sku_name: 'mensBackpack', category: 'Accessories', price: 169.99, description: 'Now 20% off', photo_url: 'https://www.northerntrailoutfitters.com/on/demandware.static/-/Sites-nto-gear/default/dw9a7a9411/images/medium/4060521ACD-0.jpg' },
];

const cart = [];

export function findProductById(productId) {
	return productsDatabase.find(product => product.id === productId);
}
// get all products
export function getProducts() {
	return productsDatabase;
}

// Add product to cart
export function addToCart(productId, quantity) {
	const product = findProductById(productId);
	if (!product) {
		throw new Error('Product not found');
	}

	const cartItem = cart.find(item => item.product.id === productId);
	if (cartItem) {
		cartItem.quantity += quantity;
	} else {
		cart.push({ productId: product.id, quantity });
	}
	return `Added ${quantity} of ${product.name} to the cart.`

}

// Update product quantity in cart
export function updateCart(productId, quantity) {
	const product = findProductById(productId);
	if (!product) {
		throw new Error('Product not found');
	}

	const cartItem = cart.find(item => item.productId === productId);
	if (cartItem) {
		cartItem.quantity = quantity;
	} else {
		throw new Error(`Product ${product.name} not found in the cart`);
	}

	if(quantity <= 0) {
		return removeFromCart(productId);
	}
	cartItem.quantity = quantity;
	return `Updated ${product.name} quantity to ${quantity} in the cart.`

}

// Remove product from cart
export function removeFromCart(productId) {
	const product = findProductById(productId);
	if (!product) {
		throw new Error('Product not found');
	}

	const cartItem = cart.find(item => item.productId === productId);
	if (cartItem === -1) {
		throw new Error(`Product ${product.name} not found in the cart`);
	}
	const removedItem = cart.splice(cartItem, 1);
	return `Removed ${product.name} from the cart.`;
}

// view cart items
export function viewCart() {
	return cart.map(item => {
		const product = findProductById(item.productId);
		return {
			...product,
			quantity: item.quantity,
			total: product.price * item.quantity
		};
	});
}
import { fail } from '@sveltejs/kit';
import * as db from '$lib/server/database.js';

export function load({ cookies }) {
	let id = cookies.get('userid');
	console.log('page.server.js userid already exists in cookies ', id);
	if (!id) {
		id = crypto.randomUUID();
		cookies.set('userid', id, { path: '/' });
		console.log('page.server.js userid did not exist in cookies ', id);
	}

	return {
		todos: db.getTodos(id)
	};
}

export const actions = {
	create: async ({ cookies, request }) => {
		console.log('create delay start');
		await new Promise((fulfil) => setTimeout(fulfil, 1000));
		console.log('create delay end');
		const data = await request.formData();

		try{
			db.createTodo(cookies.get('userid'), 
			data.get('description'));
		} catch (error) {
			return fail(422,{
				description: data.get('description'),
				error: error.message				
			});
		}

	},
	delete: async ({ cookies, request }) => {
		console.log('delete delay start');
		await new Promise((fulfil) => setTimeout(fulfil, 1000));
		console.log('delete delay end');
		const data = await request.formData();
		db.deleteTodo(cookies.get('userid'), 
		data.get('id'));
	}

};
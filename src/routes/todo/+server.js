import { json } from '@sveltejs/kit';
import * as database from '$lib/server/database.js';

export async function POST({ request, cookies }) {
	const { description } = await request.json();

	const userid = cookies.get('userid');
	if (!userid) {
		throw new Error('userid must be set');
	}else{
		console.log('userid already exists in cookies ', userid);
	}

	const { id } = await database.createTodo({ userid, description });

	return json({ id }, { status: 201 });
}
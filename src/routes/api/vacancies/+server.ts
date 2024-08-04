import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { State } from '@vincjo/datatables/remote';
import { reload } from '$lib/server/db';

export const POST: RequestHandler = async ({ request }) => {
	// TOOD: Zod type validation
	const state: State = (await request.formData()) as unknown as State;
	const data = await reload(state);
	console.log('Incoming state: ', { state, data });

	return json(data);
};

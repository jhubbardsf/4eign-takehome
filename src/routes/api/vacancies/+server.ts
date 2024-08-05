import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { State } from '@vincjo/datatables/remote';
import { stateSchema } from '$lib/manualSchemas';
import { reload } from '$lib/server/db';

export const POST: RequestHandler = async ({ request }) => {
	// TOOD: Zod type validation
	const payload = await request.json();

	try {
		const state = stateSchema.parse(payload);
		const data = await reload(state as State);

		return json(data);
	} catch (e) {
		console.error(e);

		return error(400, { code: 'INVALID_PAYLOAD', message: 'Invalid payload' });
	}
};

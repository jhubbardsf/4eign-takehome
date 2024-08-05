import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { stateSchema } from '$lib/manualSchemas';
import { reload } from '$lib/server/db';

export const POST: RequestHandler = async ({ request }) => {
	// TOOD: Zod type validation
	const payload = await request.json();

	try {
		console.log('Incoming payload: ', { payload });
		const state = stateSchema.parse(payload);
		console.log('Incoming state: ', { state });
		// @ts-expect-error This state schem properly parses the incoming data
		// but there's a slight mismatch with State from the
		// @vincjo/datatables/remote library.
		const data = await reload(state);

		console.log({ data });

		return json(data);
	} catch (e) {
		console.error(e);

		return error(400, { code: 'INVALID_PAYLOAD', message: 'Invalid payload' });
	}
};

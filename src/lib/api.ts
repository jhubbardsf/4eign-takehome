import type { State } from '@vincjo/datatables/remote';
import { browser } from '$app/environment';

export const reload = async (state: State) => {
	if (!browser) return;
	console.log('Attempting to get state: ', { state });

	const response = await fetch('/api/vacancies', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(state)
	});

	if (!response.ok) {
		console.error(response);
		const error = await response.json();
		console.error({ error });
	}
	return response.json();
};

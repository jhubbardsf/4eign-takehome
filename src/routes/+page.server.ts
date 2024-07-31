import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { Actions , PageServerLoad } from './$types';
import { VacancySchema } from '$lib/schemas';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(VacancySchema))
	};
};

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		console.log({ request, data });
	}
} satisfies Actions;

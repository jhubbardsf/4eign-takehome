import { fail } from '@sveltejs/kit';
import { superValidate, message } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { Actions, PageServerLoad } from './$types';
import { VacancySchema } from '$lib/schemas';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(VacancySchema))
	};
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(VacancySchema));
		console.log(form);

		if (!form.valid) {
			// Again, return { form } and things will just work.
			return fail(400, { form });
		}

		return message(form, 'Form posted successfully!');
	}
} satisfies Actions;

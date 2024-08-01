import { fail } from '@sveltejs/kit';
import { superValidate, message } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { Actions, PageServerLoad } from './$types';
import { vacancySchema } from '$lib/schemas';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(vacancySchema))
	};
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(vacancySchema));
		console.log(form);

		if (!form.valid) {
			// Again, return { form } and things will just work.
			return fail(400, { form });
		}

		return message(form, 'Form posted successfully!');
	}
} satisfies Actions;

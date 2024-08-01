import { fail, json } from '@sveltejs/kit';
import { superValidate, message } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { Actions, PageServerLoad } from './$types';
import { vacancySchema } from '$lib/schemas';
import { addVacancy } from '$lib/server/db';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(vacancySchema))
	};
};

export const actions = {
	default: async ({ request }) => {
		// Validate or return errors
		const form = await superValidate(request, zod(vacancySchema));
		console.log(form);

		if (!form.valid) {
			return fail(400, form);
		}

		// Save or return errors
		try {
			console.log('Attempting to save: ', form.data);
			const vacancy = await addVacancy({ data: form.data });

			console.log('Vacancy created: ', vacancy);
			return json({ form }, { status: 201 });
		} catch (error) {
			console.error(error);
			return fail(500, { form, message: `Something went wrong: ${JSON.stringify(error)}` });
		}

		// Return success
		console.log('Success!');
		return message(form, 'Form posted successfully!');
	}
} satisfies Actions;

// import { fail, json } from '@sveltejs/kit';
import { superValidate, message, fail } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { Actions, PageServerLoad } from './$types';
import { vacancySchema } from '$lib/manualSchemas';
import { updateVacancy, getVacancy } from '$lib/server/db';

export const load: PageServerLoad = async ({ params }) => {
	return {
		form: await getVacancy({ where: { id: { equals: Number(params.id) } } })
	};
};

export const actions = {
	default: async ({ request, params }) => {
		// Validate or return errors
		const form = await superValidate(request, zod(vacancySchema));
		console.log(form);

		if (!form.valid) {
			console.log('Returning fail 400 (not valid)');
			// TODO: Double check response codes
			return fail(400, { form });
		}

		// Save or return errors
		try {
			console.log('Attempting to save: ', form.data);
			const vacancy = await updateVacancy({
				data: { ...form.data, id: Number(params.id) },
				where: { id: Number(params.id) }
			});
			console.log('Vacancy updated: ', vacancy);
		} catch (error) {
			console.error(error);
			return message(form, { type: 'error', text: `Something went wrong` }, { status: 403 });
		}

		// Return success
		return message(form, { type: 'success', text: 'Success! Vacancy updated' });
	}
} satisfies Actions;

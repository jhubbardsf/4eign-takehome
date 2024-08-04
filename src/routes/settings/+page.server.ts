// import { fail, json } from '@sveltejs/kit';
import { superValidate, message, fail } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { Actions, PageServerLoad } from './$types';
import type { State } from '@vincjo/datatables/remote';
import { vacancySchema } from '$lib/manualSchemas';
import { addVacancy, getParams, getVacancies } from '$lib/server/db';

const DEFAULT_PARAMS: State = {
	rowsPerPage: 5,
	pageNumber: 0,
	offset: 0,
	search: '',
	sort: undefined,
	filters: undefined,
	setTotalRows: (num) => num,
	sorted: undefined
};

export const load: PageServerLoad = async () => {
	return {
		vacancies: await getVacancies(getParams(DEFAULT_PARAMS))
	};
};

export const actions = {
	default: async ({ request }) => {
		// Reload with new data
		const datatableParams = await request.formData();

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
			const vacancy = await addVacancy({ data: form.data });
			console.log('Vacancy created: ', vacancy);
		} catch (error) {
			console.error(error);
			return message(form, { type: 'error', text: `Something went wrong` }, { status: 403 });
		}

		// Return success
		return message(form, { type: 'success', text: 'Success! Vacancy created' });
	}
} satisfies Actions;

// import { fail, json } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { State } from '@vincjo/datatables/remote';
import { getParams, getVacancies, getVacancyCount } from '$lib/server/db';

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
		vacancies: await getVacancies(getParams(DEFAULT_PARAMS)),
		count: await getVacancyCount()
	};
};

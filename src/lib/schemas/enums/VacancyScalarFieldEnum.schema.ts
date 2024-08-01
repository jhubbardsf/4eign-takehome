import { z } from 'zod';

export const VacancyScalarFieldEnumSchema = z.enum([
	'id',
	'title',
	'address',
	'start_date',
	'urgency'
]);

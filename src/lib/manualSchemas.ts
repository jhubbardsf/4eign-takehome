import { z } from 'zod';

export const vacancySchema = z.object({
	id: z.number().optional(),
	title: z.string().min(1, { message: 'Title is required' }),
	address: z.string().min(1, { message: 'Address is required' }),
	start_date: z.date().refine(
		(date) => {
			const now = new Date();
			const validMonth = now.getMonth() + 3;
			return date >= new Date(now.setMonth(validMonth));
		},
		{
			message: 'Date must be at least 3 months in the future'
		}
	),
	urgency: z.number().min(1).max(100, { message: 'Urgency must be between 1 and 100' }).default(50)
});

// Define the Filter type
export const dtFilterSchema = z.object({
	filterBy: vacancySchema.keyof(),
	value: z.union([z.string(), z.number(), z.boolean()]).optional()
});

// Define the Sort type
const dtSortSchema = z.object({
	orderBy: vacancySchema.keyof(),
	direction: z.enum(['asc', 'desc']).optional()
});

// Define the State type
const dtStateSchema = z.object({
	pageNumber: z.number(),
	rowsPerPage: z.number(),
	offset: z.number(),
	search: z.string().optional(),
	sort: dtSortSchema.optional(),
	filters: z.array(dtFilterSchema).optional(),
	setTotalRows: z.function().args(z.number()).returns(z.void()).optional(),
	sorted: dtSortSchema.describe("Deprecated: use 'sort' instead").optional()
});

export const stateSchema = dtStateSchema;

export type StateSchema = z.infer<typeof stateSchema>;
export type VacancySchema = z.infer<typeof vacancySchema>;

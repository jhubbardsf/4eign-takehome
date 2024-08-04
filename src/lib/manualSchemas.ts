import { z } from 'zod';

export const vacancySchema = z
	.object({
		id: z.number().optional(),
		title: z.string().min(1, { message: 'Title is required' }),
		address: z.string().min(1, { message: 'Address is required' }),
		start_date: z.date({ message: 'Start date is invalid' }),
		urgency: z
			.number()
			.min(1)
			.max(100, { message: 'Urgency must be between 1 and 100' })
			.default(50)
	})
	.required();

// Helper schema for keyof Row
const rowKeySchema = z.union([z.string(), z.number(), z.symbol()]);

const filterSchema = z.object({
	filterBy: rowKeySchema,
	value: z.union([z.string(), z.number(), z.boolean()]).optional()
});

const sortSchema = z.object({
	orderBy: rowKeySchema.optional(),
	direction: z.enum(['asc', 'desc']).optional()
});

export const stateSchema = z.object({
	pageNumber: z.number(),
	rowsPerPage: z.number(),
	offset: z.number(),
	search: z.string().optional(),
	sort: sortSchema.optional(),
	filters: z.array(filterSchema).optional(),
	setTotalRows: z.function().args(z.number()).returns(z.void())
});

export type VacancySchema = z.infer<typeof vacancySchema>;

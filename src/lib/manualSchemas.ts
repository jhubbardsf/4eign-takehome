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

// Define the Filter type
// const dtFilterSchema = <T extends z.ZodType>(rowSchema: T) =>
// 	z.object({
// 		filterBy: z
// 			.string()
// 			.refine((key) => key in rowSchema, {
// 				message: 'orderBy key must exist in Row'
// 			})
// 			.optional() as z.ZodType<keyof z.infer<typeof rowSchema>>,
// 		value: z.union([z.string(), z.number(), z.boolean()]).optional()
// 	});

const dtFilterSchema = z.object({
	filterBy: vacancySchema.keyof(),
	value: z.union([z.string(), z.number(), z.boolean()]).optional()
});

// Define the Sort type
// const dtSortSchema = <T extends z.ZodTypeAny>(rowSchema: T) =>
// 	z.object({
// 		orderBy: z
// 			.string()
// 			.refine((key) => key in rowSchema, {
// 				message: 'orderBy key must exist in Row'
// 			})
// 			.optional() as z.ZodType<keyof z.infer<typeof rowSchema>>,
// 		direction: z.enum(['asc', 'desc']).optional()
// 	});
const dtSortSchema = z.object({
	orderBy: vacancySchema.keyof(),
	direction: z.enum(['asc', 'desc']).optional()
});

// Define the State type
// const dtStateSchema = <T extends z.ZodTypeAny>(rowSchema: T) =>
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

// export const stateSchema = dtStateSchema(vacancySchema);
export const stateSchema = dtStateSchema;

export type StateSchema = z.infer<typeof stateSchema>;
export type VacancySchema = z.infer<typeof vacancySchema>;

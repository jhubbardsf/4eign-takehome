import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VacancyScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => VacancyScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => VacancyScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => VacancyScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => VacancyScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => VacancyScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional(),
		title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		address: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		start_date: z
			.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()])
			.optional(),
		urgency: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional()
	})
	.strict();

export const VacancyScalarWhereWithAggregatesInputObjectSchema = Schema;

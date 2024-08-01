import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VacancyWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => VacancyWhereInputObjectSchema),
				z.lazy(() => VacancyWhereInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => VacancyWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => VacancyWhereInputObjectSchema),
				z.lazy(() => VacancyWhereInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
		title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		address: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		start_date: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		urgency: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional()
	})
	.strict();

export const VacancyWhereInputObjectSchema = Schema;

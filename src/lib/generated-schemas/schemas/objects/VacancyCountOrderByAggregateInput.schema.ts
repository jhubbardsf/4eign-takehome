import { SortOrderSchema } from '../enums/SortOrder.schema';
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VacancyCountOrderByAggregateInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		title: z.lazy(() => SortOrderSchema).optional(),
		address: z.lazy(() => SortOrderSchema).optional(),
		start_date: z.lazy(() => SortOrderSchema).optional(),
		urgency: z.lazy(() => SortOrderSchema).optional()
	})
	.strict();

export const VacancyCountOrderByAggregateInputObjectSchema = Schema;

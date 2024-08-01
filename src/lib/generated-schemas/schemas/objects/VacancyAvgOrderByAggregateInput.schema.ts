import { SortOrderSchema } from '../enums/SortOrder.schema';
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VacancyAvgOrderByAggregateInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		urgency: z.lazy(() => SortOrderSchema).optional()
	})
	.strict();

export const VacancyAvgOrderByAggregateInputObjectSchema = Schema;

import { SortOrderSchema } from '../enums/SortOrder.schema';
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VacancySumOrderByAggregateInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		urgency: z.lazy(() => SortOrderSchema).optional()
	})
	.strict();

export const VacancySumOrderByAggregateInputObjectSchema = Schema;

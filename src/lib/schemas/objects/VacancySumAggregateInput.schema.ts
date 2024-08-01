import { z } from 'zod';
import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VacancySumAggregateInputType> = z
	.object({
		id: z.literal(true).optional(),
		urgency: z.literal(true).optional()
	})
	.strict();

export const VacancySumAggregateInputObjectSchema = Schema;

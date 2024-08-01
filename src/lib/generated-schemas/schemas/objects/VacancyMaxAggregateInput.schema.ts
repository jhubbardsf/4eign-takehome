import { z } from 'zod';
import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VacancyMaxAggregateInputType> = z
	.object({
		id: z.literal(true).optional(),
		title: z.literal(true).optional(),
		address: z.literal(true).optional(),
		start_date: z.literal(true).optional(),
		urgency: z.literal(true).optional()
	})
	.strict();

export const VacancyMaxAggregateInputObjectSchema = Schema;

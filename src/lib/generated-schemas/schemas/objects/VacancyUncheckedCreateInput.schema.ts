import { z } from 'zod';
import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VacancyUncheckedCreateInput> = z
	.object({
		id: z.number().optional(),
		title: z.string(),
		address: z.string(),
		start_date: z.coerce.date(),
		urgency: z.number()
	})
	.strict();

export const VacancyUncheckedCreateInputObjectSchema = Schema;

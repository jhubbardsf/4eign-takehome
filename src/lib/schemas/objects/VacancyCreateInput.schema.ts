import { z } from 'zod';
import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VacancyCreateInput> = z
	.object({
		title: z.string(),
		address: z.string(),
		start_date: z.coerce.date(),
		urgency: z.number()
	})
	.strict();

export const VacancyCreateInputObjectSchema = Schema;

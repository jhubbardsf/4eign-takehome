import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VacancyUpdateManyMutationInput> = z
	.object({
		title: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		address: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		start_date: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		urgency: z
			.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)])
			.optional()
	})
	.strict();

export const VacancyUpdateManyMutationInputObjectSchema = Schema;

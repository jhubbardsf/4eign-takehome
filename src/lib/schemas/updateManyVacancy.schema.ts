import { VacancyUpdateManyMutationInputObjectSchema } from './objects/VacancyUpdateManyMutationInput.schema';
import { VacancyWhereInputObjectSchema } from './objects/VacancyWhereInput.schema';
import { z } from 'zod';

export const VacancyUpdateManySchema = z.object({
	data: VacancyUpdateManyMutationInputObjectSchema,
	where: VacancyWhereInputObjectSchema.optional()
});

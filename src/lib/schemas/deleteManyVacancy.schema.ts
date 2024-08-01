import { VacancyWhereInputObjectSchema } from './objects/VacancyWhereInput.schema';
import { z } from 'zod';

export const VacancyDeleteManySchema = z.object({
	where: VacancyWhereInputObjectSchema.optional()
});

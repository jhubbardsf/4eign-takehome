import { VacancyCreateInputObjectSchema } from './objects/VacancyCreateInput.schema';
import { VacancyUncheckedCreateInputObjectSchema } from './objects/VacancyUncheckedCreateInput.schema';
import { z } from 'zod';

export const VacancyCreateOneSchema = z.object({
	data: z.union([VacancyCreateInputObjectSchema, VacancyUncheckedCreateInputObjectSchema])
});

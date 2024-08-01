import { VacancyUncheckedUpdateInputObjectSchema } from './objects/VacancyUncheckedUpdateInput.schema';
import { VacancyUpdateInputObjectSchema } from './objects/VacancyUpdateInput.schema';
import { VacancyWhereUniqueInputObjectSchema } from './objects/VacancyWhereUniqueInput.schema';
import { z } from 'zod';

export const VacancyUpdateOneSchema = z.object({
	data: z.union([VacancyUpdateInputObjectSchema, VacancyUncheckedUpdateInputObjectSchema]),
	where: VacancyWhereUniqueInputObjectSchema
});

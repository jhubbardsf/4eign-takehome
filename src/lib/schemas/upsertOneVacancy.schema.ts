import { VacancyCreateInputObjectSchema } from './objects/VacancyCreateInput.schema';
import { VacancyUncheckedCreateInputObjectSchema } from './objects/VacancyUncheckedCreateInput.schema';
import { VacancyUncheckedUpdateInputObjectSchema } from './objects/VacancyUncheckedUpdateInput.schema';
import { VacancyUpdateInputObjectSchema } from './objects/VacancyUpdateInput.schema';
import { VacancyWhereUniqueInputObjectSchema } from './objects/VacancyWhereUniqueInput.schema';
import { z } from 'zod';

export const VacancyUpsertSchema = z.object({
	where: VacancyWhereUniqueInputObjectSchema,
	create: z.union([VacancyCreateInputObjectSchema, VacancyUncheckedCreateInputObjectSchema]),
	update: z.union([VacancyUpdateInputObjectSchema, VacancyUncheckedUpdateInputObjectSchema])
});

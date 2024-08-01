import { VacancyScalarFieldEnumSchema } from './enums/VacancyScalarFieldEnum.schema';
import { VacancyOrderByWithRelationInputObjectSchema } from './objects/VacancyOrderByWithRelationInput.schema';
import { VacancyWhereInputObjectSchema } from './objects/VacancyWhereInput.schema';
import { VacancyWhereUniqueInputObjectSchema } from './objects/VacancyWhereUniqueInput.schema';
import { z } from 'zod';

export const VacancyFindManySchema = z.object({
	orderBy: z
		.union([
			VacancyOrderByWithRelationInputObjectSchema,
			VacancyOrderByWithRelationInputObjectSchema.array()
		])
		.optional(),
	where: VacancyWhereInputObjectSchema.optional(),
	cursor: VacancyWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	distinct: z.array(VacancyScalarFieldEnumSchema).optional()
});

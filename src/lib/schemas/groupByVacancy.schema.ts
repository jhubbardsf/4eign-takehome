import { VacancyScalarFieldEnumSchema } from './enums/VacancyScalarFieldEnum.schema';
import { VacancyOrderByWithAggregationInputObjectSchema } from './objects/VacancyOrderByWithAggregationInput.schema';
import { VacancyScalarWhereWithAggregatesInputObjectSchema } from './objects/VacancyScalarWhereWithAggregatesInput.schema';
import { VacancyWhereInputObjectSchema } from './objects/VacancyWhereInput.schema';
import { z } from 'zod';

export const VacancyGroupBySchema = z.object({
	where: VacancyWhereInputObjectSchema.optional(),
	orderBy: z
		.union([
			VacancyOrderByWithAggregationInputObjectSchema,
			VacancyOrderByWithAggregationInputObjectSchema.array()
		])
		.optional(),
	having: VacancyScalarWhereWithAggregatesInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	by: z.array(VacancyScalarFieldEnumSchema)
});

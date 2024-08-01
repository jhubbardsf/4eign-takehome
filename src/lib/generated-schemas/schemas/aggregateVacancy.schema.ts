import { VacancyAvgAggregateInputObjectSchema } from './objects/VacancyAvgAggregateInput.schema';
import { VacancyCountAggregateInputObjectSchema } from './objects/VacancyCountAggregateInput.schema';
import { VacancyMaxAggregateInputObjectSchema } from './objects/VacancyMaxAggregateInput.schema';
import { VacancyMinAggregateInputObjectSchema } from './objects/VacancyMinAggregateInput.schema';
import { VacancyOrderByWithRelationInputObjectSchema } from './objects/VacancyOrderByWithRelationInput.schema';
import { VacancySumAggregateInputObjectSchema } from './objects/VacancySumAggregateInput.schema';
import { VacancyWhereInputObjectSchema } from './objects/VacancyWhereInput.schema';
import { VacancyWhereUniqueInputObjectSchema } from './objects/VacancyWhereUniqueInput.schema';
import { z } from 'zod';

export const VacancyAggregateSchema = z.object({
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
	_count: z.union([z.literal(true), VacancyCountAggregateInputObjectSchema]).optional(),
	_min: VacancyMinAggregateInputObjectSchema.optional(),
	_max: VacancyMaxAggregateInputObjectSchema.optional(),
	_avg: VacancyAvgAggregateInputObjectSchema.optional(),
	_sum: VacancySumAggregateInputObjectSchema.optional()
});

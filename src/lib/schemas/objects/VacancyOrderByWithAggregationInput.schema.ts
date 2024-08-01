import { VacancyAvgOrderByAggregateInputObjectSchema } from './VacancyAvgOrderByAggregateInput.schema';
import { VacancyCountOrderByAggregateInputObjectSchema } from './VacancyCountOrderByAggregateInput.schema';
import { VacancyMaxOrderByAggregateInputObjectSchema } from './VacancyMaxOrderByAggregateInput.schema';
import { VacancyMinOrderByAggregateInputObjectSchema } from './VacancyMinOrderByAggregateInput.schema';
import { VacancySumOrderByAggregateInputObjectSchema } from './VacancySumOrderByAggregateInput.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VacancyOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		title: z.lazy(() => SortOrderSchema).optional(),
		address: z.lazy(() => SortOrderSchema).optional(),
		start_date: z.lazy(() => SortOrderSchema).optional(),
		urgency: z.lazy(() => SortOrderSchema).optional(),
		_count: z.lazy(() => VacancyCountOrderByAggregateInputObjectSchema).optional(),
		_avg: z.lazy(() => VacancyAvgOrderByAggregateInputObjectSchema).optional(),
		_max: z.lazy(() => VacancyMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => VacancyMinOrderByAggregateInputObjectSchema).optional(),
		_sum: z.lazy(() => VacancySumOrderByAggregateInputObjectSchema).optional()
	})
	.strict();

export const VacancyOrderByWithAggregationInputObjectSchema = Schema;

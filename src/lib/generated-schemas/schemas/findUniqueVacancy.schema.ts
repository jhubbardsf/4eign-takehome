import { VacancyWhereUniqueInputObjectSchema } from './objects/VacancyWhereUniqueInput.schema';
import { z } from 'zod';

export const VacancyFindUniqueSchema = z.object({ where: VacancyWhereUniqueInputObjectSchema });

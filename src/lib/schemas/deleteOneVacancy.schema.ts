import { VacancyWhereUniqueInputObjectSchema } from './objects/VacancyWhereUniqueInput.schema';
import { z } from 'zod';

export const VacancyDeleteOneSchema = z.object({ where: VacancyWhereUniqueInputObjectSchema });

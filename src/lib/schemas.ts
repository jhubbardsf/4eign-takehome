import { z } from 'zod';

export const VacancySchema = z.object({
	title: z.string(),
	address: z.string().email(),
	start_date: z.date(),
	urgency: z.number().min(1).max(100)
});

export type TVacancy = z.infer<typeof VacancySchema>;

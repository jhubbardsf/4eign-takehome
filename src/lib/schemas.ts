import { z } from 'zod';

export const VacancySchema = z
	.object({
		title: z.string().min(1, { message: 'Title is required' }),
		address: z.string().min(1, { message: 'Address is required' }),
		start_date: z.date({ message: 'Start date is invalid' }),
		urgency: z.number().min(1).max(100)
	})
	.required();

export type TVacancy = z.infer<typeof VacancySchema>;

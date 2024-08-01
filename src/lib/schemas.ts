import { z } from 'zod';

export const vacancySchema = z
	.object({
		title: z.string().min(1, { message: 'Title is required' }),
		address: z.string().min(1, { message: 'Address is required' }),
		start_date: z.date({ message: 'Start date is invalid' }),
		urgency: z
			.number()
			.min(1)
			.max(100, { message: 'Urgency must be between 1 and 100' })
			.default(50)
	})
	.required();

export type VacancySchema = z.infer<typeof vacancySchema>;

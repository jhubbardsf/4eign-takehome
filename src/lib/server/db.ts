import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import type { VacancyCreateOneSchema, VacancyFindFirstSchema } from '@schemas';

export const prisma = new PrismaClient();

export const getVacancy = async (vacancy: z.infer<typeof VacancyFindFirstSchema>) => {
	const returnData = await prisma.vacancy.findFirst(vacancy);

	return returnData;
};

export const getVacancies = async () => {
	const vacancies = await prisma.vacancy.findMany();

	return vacancies;
};

export const addVacancy = async (vacancy: z.infer<typeof VacancyCreateOneSchema>) => {
	const returnData = await prisma.vacancy.create(vacancy);

	return returnData;
};

import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import type {
	VacancyCreateOneSchema,
	VacancyFindFirstSchema,
	VacancyUpdateOneSchema,
	VacancyFindManySchema,
	VacancyWhereInputObjectSchema
} from '$lib/schemas';
import type { State } from '@vincjo/datatables/remote';

export const prisma = new PrismaClient();

export const getVacancy = async (vacancy: z.infer<typeof VacancyFindFirstSchema>) => {
	const returnData = await prisma.vacancy.findFirst(vacancy);

	return returnData;
};

export const getVacancies = async (vacancy: z.infer<typeof VacancyFindManySchema> = {}) => {
	const vacancies = await prisma.vacancy.findMany(vacancy);

	return vacancies;
};

export const addVacancy = async (vacancy: z.infer<typeof VacancyCreateOneSchema>) => {
	const returnData = await prisma.vacancy.create(vacancy);

	return returnData;
};

export const updateVacancy = async (vacancy: z.infer<typeof VacancyUpdateOneSchema>) => {
	const returnData = await prisma.vacancy.update(vacancy);

	return returnData;
};

export const reload = async (state: State) => {
	// const response = await
	// fetch(`https://jsonplaceholder.typicode.com/todos?${getParams(state)}`);
	const response = await getVacancies(getParams(state));
	return response;
};

// export type State = {
//     pageNumber: number;
//     rowsPerPage: number;
//     offset: number;
//     search: string | undefined;
//     sort: Sort<Row> | undefined;
//     filters: Filter<Row>[] | undefined;
//     setTotalRows: (value: number) => void;
//     /**
//      * @deprecated use 'sort' instead
//      */
//     sorted: Sort<Row> | undefined;
// };

// export const VacancyFindManySchema = z.object({
// 	orderBy: z
// 	.union([
// 		VacancyOrderByWithRelationInputObjectSchema,
// 		VacancyOrderByWithRelationInputObjectSchema.array()
// 	])
// 	.optional(),
// where: VacancyWhereInputObjectSchema.optional(),
// cursor: VacancyWhereUniqueInputObjectSchema.optional(),
// take: z.number().optional(),
// skip: z.number().optional(),
// distinct: z.array(VacancyScalarFieldEnumSchema).optional()
// });

/**
 * Generates the parameters for a Prisma query based on the provided state.
 *
 * @param state - The state object containing the rowsPerPage, sort, filters, and offset.
 * @return The generated parameters for the Prisma query.
 * @see https://vincjo.fr/datatables/remote/basic-usage
 * @see https://www.prisma.io/docs/orm/prisma-client/queries/filtering-and-sorting
 */
export const getParams = (state: State): z.infer<typeof VacancyFindManySchema> => {
	const { rowsPerPage, sort, filters, offset } = state;

	const params: z.infer<typeof VacancyFindManySchema> = {
		skip: offset,
		take: rowsPerPage
	};

	if (sort) {
		params.orderBy = {
			[sort.orderBy!]: sort.direction
		};
	}

	const whereConditions: z.infer<typeof VacancyWhereInputObjectSchema> = {};

	if (filters && filters.length > 0) {
		whereConditions.AND = filters.map(({ filterBy, value }) => ({
			[filterBy]: { contains: value }
		}));
	}

	if (Object.keys(whereConditions).length > 0) {
		params.where = whereConditions;
	}

	console.log('Prisma query params:', params);
	return params;
};

export const dateFormatter = (isoDate: Date, format = 'mm/dd/yyyy') => {
	const date = new Date(isoDate);

	if (isNaN(date.getTime())) {
		throw new Error('Invalid date string');
	}

	const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
	const day = date.getUTCDate().toString().padStart(2, '0');
	const year = date.getUTCFullYear();

	const formattedDate = format
		.replace('mm', month)
		.replace('dd', day)
		.replace('yyyy', year.toString());

	return formattedDate;
};

export const formatDate = (inputDate: string): string => {
	const date = new Date(inputDate);
	const day = date.getDate();
	const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
		date
	);
	return `${day} ${month}`;
};

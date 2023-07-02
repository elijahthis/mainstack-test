export const formatDate = (inputDate: string): string => {
	const date = new Date(inputDate);
	const day = date.getDate();
	const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
		date
	);
	return `${day} ${month}`;
};

export const getFlagEmoji = (countryCode: string): string => {
	const codePoints = countryCode
		.toUpperCase()
		.split("")
		.map((char) => 127397 + char.charCodeAt(0));
	return String.fromCodePoint(...codePoints);
};

export const capitalizeFirstLetter = (text: string) =>
	text.charAt(0).toUpperCase() + text.slice(1);


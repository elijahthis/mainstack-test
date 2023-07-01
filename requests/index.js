import { request } from "../config/axios";

export const fetchChartData = async () => {
	try {
		const res = await request.get("");
		console.log(res);
		return res;
	} catch (err) {
		console.log(err?.response?.data);
		console.log(err?.response?.data?.message);
		throw err;
	}
};

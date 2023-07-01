import axios from "axios";
import { BASE_URL } from "./env";

const options = {
	baseURL: BASE_URL,
	headers: {
		Accept: "application/json,text/plain,*/*",
		"Content-Type": "application/json",
	},
};

export const request = axios.create(options);

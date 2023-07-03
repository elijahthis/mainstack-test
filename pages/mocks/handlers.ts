import { rest } from "msw";

export const handlers = [
	rest.get("https://fe-task-api.mainstack.io/", (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				graph_data: {
					views: {
						"2022-07-31": 1,
					},
				},
				top_locations: [{ country: "Nigeria", count: 2, percent: 2 }],
				top_sources: [{ source: "google", count: 2, percent: 2 }],
			})
		);
	}),
];

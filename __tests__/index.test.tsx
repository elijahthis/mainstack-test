import { render, screen } from "@testing-library/react";
import Dashboard from "../pages";
import { createMockRouter } from "../pages/test-utils/createMockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";

// try the full router context approach

const chartDataIds = ["line-chart", "pie-chart-1", "pie-chart-2"];

describe("Dashboard Page -- data-fetching functionality", () => {
	test("renders loading state initially", () => {
		render(
			<RouterContext.Provider value={createMockRouter({})}>
				<Dashboard />
			</RouterContext.Provider>
		);

		expect(screen.getAllByTestId("loader")[0]).toBeInTheDocument();
	});

	// test("renders all charts if API request is successful", async () => {
	// 	render(
	// 		<RouterContext.Provider value={createMockRouter({})}>
	// 			<Dashboard />
	// 		</RouterContext.Provider>
	// 	);

	// 	const chartData = await screen.findAllByTestId("line-chart");

	// 	expect(chartData).toHaveLength(1);

	// 	// expect(await screen.findByTestId("line-chart")).toBeInTheDocument();

	// 	// await chartDataIds.forEach((id) =>
	// 	// 	expect(screen.findByTestId(id)).toBeInTheDocument()
	// 	// );
	// });
});

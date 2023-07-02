import PageLayout from "@/layouts/PageLayout";
import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import Tabs from "@/components/Tabs";
import LineChartBox from "@/components/LineChartBox";
import PieChartBox from "@/components/PieChartBox";
import { fetchChartData } from "../requests";
import { formatDate } from "@/utils/helpers";
import { pieColors } from "@/utils/constants";
import Loader from "@/components/Loader";
import ErrorPage from "@/components/ErrorPage";

export default function Dashboard() {
	const [fetched, setFetched] = useState(false);
	const [loading, setLoading] = useState(false);
	const [chartData, setChartData] = useState<any>({});

	const fetchFunc = async () => {
		setLoading(true);
		try {
			const res = await fetchChartData();
			console.log("fetchChartData", res);
			setChartData(res.data);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
			setFetched(true);
		}
	};

	useEffect(() => {
		fetchFunc();
	}, []);

	console.log(chartData?.graph_data?.views);

	return (
		<main className="">
			<div className="flex flex-col items-start md:flex-row md:items-center gap-4 justify-between mb-6">
				<div>
					<h3 className="mb-[10px]">Good morning, Blessing ⛅️</h3>
					<p className="font-Söhne-Light text-sm">
						Check out your dashboard summary.
					</p>
				</div>
				<Link href="/" className="text-sm text-[#FF5403]">
					View analytics
				</Link>
			</div>
			<div className="mb-6">
				<Tabs
					tabItems={[
						"1 Day",
						"3 Days",
						"7 Days",
						"30 Days",
						"All Time",
						"Custom Date",
					]}
					defaultTab={4}
				/>
			</div>
			{loading || !fetched ? (
				<Loader />
			) : Object.entries(chartData).length === 0 ? (
				<ErrorPage />
			) : (
				<>
					<div className="overflow-y-auto">
						<div className="w-[800px] mb-6 h-[576px] md:w-full">
							<LineChartBox
								title="Page Views"
								data={[
									{
										id: "fake corp. A",
										data: Object.entries(chartData?.graph_data?.views)?.map(
											(item: any[]) => ({
												x: formatDate(item[0]),
												y: item[1],
											})
										),
										color: "#FF5403",
									},
								]}
							/>
						</div>
					</div>
					<div className="h-[600px] flex flex-col items-stretch gap-4 md:grid md:grid-cols-2 md:h-80">
						<PieChartBox
							title="Top Locations"
							data={chartData?.top_locations?.map((item: any, ind: number) => ({
								id: item?.country,
								label: `${item?.country} (${item?.percent}%)`,
								value: item?.percent,
								color: pieColors[ind],
							}))}
						/>
						<PieChartBox
							title="Top Referral source"
							data={chartData?.top_sources?.map((item: any, ind: number) => ({
								id: item?.source,
								label: item?.source,
								value: item?.percent,
								color: pieColors[ind],
							}))}
						/>
					</div>
				</>
			)}
		</main>
	);
}

Dashboard.getLayout = function getLayout(page: ReactNode) {
	return <PageLayout>{page}</PageLayout>;
};

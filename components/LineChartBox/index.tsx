import { lineData } from "@/utils/constants";
import { ResponsiveLine } from "@nivo/line";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { Defs, linearGradientDef } from "@nivo/core";

interface LineChartBoxProps {
	title: string;
	data: any[];
}

const LineChartBox = ({ title, data }: LineChartBoxProps) => {
	const router = useRouter();

	return (
		<div className="h-full bg-white border border-[#EFF1F6] rounded-tl-xl p-6 pt-8 relative">
			<div className="mb-[40px] absolute top-0 left-0 w-full p-6">
				<h4 className="mb-2">{title}</h4>
				<p className="text-sm mb-6 text-[#4D5760] font-Söhne-Light">
					{decodeURIComponent(router.asPath).slice(2)}
				</p>
				<h3 className="text-5xl">500</h3>
			</div>
			<ResponsiveLine
				data={data}
				colors={{ datum: "color" }}
				pointBorderColor="#cc0000"
				pointColor={"#cc0000"}
				margin={{ top: 150, right: 110, bottom: 50, left: 60 }}
				xScale={{ type: "point" }}
				yScale={{
					type: "linear",
					min: "auto",
					max: "auto",
					stacked: true,
					reverse: false,
				}}
				yFormat=" >-.2f"
				axisTop={null}
				axisRight={null}
				axisBottom={{
					// orient: "bottom",
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					// legend: "transportation",
					legendOffset: 0,
					legendPosition: "middle",
				}}
				axisLeft={{
					// orient: "left",
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					// legend: "count",
					legendOffset: 0,
					legendPosition: "middle",
				}}
				enablePoints={false}
				enableArea={true}
				enableGridX={false}
				// areaBlendMode="lighten"
				useMesh={true}
				legends={[
					{
						anchor: "bottom-right",
						direction: "column",
						justify: false,
						translateX: 100,
						translateY: 0,
						itemsSpacing: 0,
						itemDirection: "left-to-right",
						itemWidth: 80,
						itemHeight: 20,
						itemOpacity: 0.75,
						symbolSize: 12,
						symbolShape: "circle",
						symbolBorderColor: "rgba(0, 0, 0, .5)",
						effects: [
							{
								on: "hover",
								style: {
									itemBackground: "rgba(0, 0, 0, .03)",
									itemOpacity: 1,
								},
							},
						],
					},
				]}
				defs={[
					linearGradientDef("gradientA", [
						{ offset: 0, color: "inherit", opacity: 1 },
						{ offset: 100, color: "inherit", opacity: 0.2 },
					]),
				]}
				fill={[{ match: "*", id: "gradientA" }]}
				theme={{
					axis: {
						ticks: {
							line: {
								stroke: "transparent",
							},
							text: {
								fill: "#56616B",
								fontFamily: "Söhne-Light",
							},
						},
					},
					grid: {
						line: {
							stroke: "#DBDEE6",
							strokeWidth: 2,
							strokeDasharray: "4 4",
						},
					},
				}}
			/>
		</div>
	);
};

export default dynamic(() => Promise.resolve(LineChartBox), { ssr: false });

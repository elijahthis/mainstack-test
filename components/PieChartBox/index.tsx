import { pieData } from "@/utils/constants";
import { ResponsivePie, Pie } from "@nivo/pie";
import Link from "next/link";

interface PieChartBoxProps {
	title: string;
	data: any[];
}

const PieChartBox = ({ title, data = [] }: PieChartBoxProps) => {
	return (
		<div className="h-full bg-white border border-[#EFF1F6] rounded-tl-xl p-6 relative">
			<div className="mb-[40px] absolute top-0 left-0 w-full flex flex-row items-center justify-between p-6">
				<h4>{title}</h4>
				<Link href="/" className="text-sm text-[#FF5403] cursor-pointer z-10">
					View full reports
				</Link>
			</div>
			<div className="h-full">
				<ResponsivePie
					data={data}
					colors={{ datum: "data.color" }}
					margin={{ top: 60, right: 0, bottom: 0, left: 200 }}
					innerRadius={0.7}
					padAngle={0.7}
					// cornerRadius={0}
					activeOuterRadiusOffset={8}
					borderWidth={1}
					borderColor={{
						from: "color",
						modifiers: [["darker", 0.2]],
					}}
					enableArcLabels={false}
					enableArcLinkLabels={false}
					defs={[
						{
							id: "dots",
							type: "patternDots",
							background: "inherit",
							color: "rgba(255, 255, 255, 0.3)",
							size: 4,
							padding: 1,
							stagger: true,
						},
						{
							id: "lines",
							type: "patternLines",
							background: "inherit",
							color: "rgba(255, 255, 255, 0.3)",
							rotation: -45,
							lineWidth: 6,
							spacing: 10,
						},
					]}
					legends={[
						{
							anchor: "left",
							direction: "column",
							justify: true,
							translateX: -190,
							translateY: 0,
							itemsSpacing: 20,
							itemWidth: 150,
							itemHeight: 16,
							itemTextColor: "#131316",
							itemDirection: "right-to-left",
							itemOpacity: 1,
							symbolSize: 12,
							symbolShape: "circle",
							effects: [
								{
									on: "hover",
									style: {
										itemTextColor: "#000",
									},
								},
							],
						},
					]}
				/>
			</div>
		</div>
	);
};

export default PieChartBox;

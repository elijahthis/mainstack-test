import { useState, useEffect, Dispatch, SetStateAction, useRef } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Link from "next/link";
// import styles from "./styles.module.scss";

interface TabsProps {
	tabItems: string[];
	defaultTab?: number;
}

const Tabs = ({ tabItems, defaultTab = 0 }: TabsProps) => {
	const router = useRouter();
	const [isNavigating, setIsNavigating] = useState(false);

	useEffect(() => {
		const handleRouteChangeStart = () => {
			setIsNavigating(true);
		};

		const handleRouteChangeComplete = () => {
			setIsNavigating(false);
		};

		router.events.on("routeChangeStart", handleRouteChangeStart);
		router.events.on("routeChangeComplete", handleRouteChangeComplete);

		return () => {
			router.events.off("routeChangeStart", handleRouteChangeStart);
			router.events.off("routeChangeComplete", handleRouteChangeComplete);
		};
	}, [router]);

	const hash = useRef<string | null>(null);

	hash.current = router.asPath.includes("#")
		? router.asPath.split("#")[1]
		: null;

	useEffect(() => {
		if (hash.current === null && !isNavigating) {
			hash.current = tabItems[defaultTab];
			router.push({ hash: encodeURIComponent(hash.current) });
		}
	}, [isNavigating, hash.current]);

	return (
		<div className="flex flex-row items-center gap-3 overflow-y-auto">
			{tabItems.map((tabItem, ind) => (
				<Tab tabItem={tabItem} hash={hash.current} ind={ind} key={ind} />
			))}
		</div>
	);
};

const Tab = ({
	tabItem,
	hash,
	ind,
}: {
	tabItem: string;
	hash: string | null;
	ind: number;
}) => {
	const router = useRouter();

	return (
		<Link
			className={`text-sm leading-4 py-3 px-4 border border-[#EFF1F6] cursor-pointer rounded-[100px] min-w-max ${
				hash === encodeURIComponent(tabItem)
					? "text-[#FF5403] border-[#FF5403] bg-[#FFDDCD] "
					: ""
			}`}
			href={{ hash: encodeURIComponent(tabItem) }}
			key={ind}
		>
			{tabItem}
		</Link>
	);
};

export default dynamic(() => Promise.resolve(Tabs), { ssr: false });

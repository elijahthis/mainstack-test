import "@/styles/globals.css";
import { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import type { NextComponentType } from "next";
import { ReactNode } from "react";
import Head from "next/head";

// if (process.env.NEXT_PUBLIC_API_MOCKING === "true") {
// 	import("./mocks").then(({ setupMocks }) => {
// 		setupMocks();
// 	});
// }

const App: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
	Component,
	pageProps,
}: AppLayoutProps) => {
	const getLayout = Component.getLayout || ((page: ReactNode) => page);

	return getLayout(
		<>
			<Head>
				<title>Mainstack Dashboard</title>
				<meta
					name="description"
					content="The all-in-one platform for entrepreneurs, creators, and businesses to showcase their work, sell products and services with global payment options. Build your community, and track analytics."
				/>
				<link rel="icon" type="image/x-icon" href="/mainstack-logo.svg"></link>
			</Head>
			<Component {...pageProps} />
		</>
	);
};

export default App;

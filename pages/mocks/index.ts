export const IS_BROWSER = typeof window !== undefined;

// export const setupMocks = async () => {
// 	if (IS_BROWSER) {
// 		const { mswWorker } = await import("./serviceWorker");
// 		mswWorker.start();
// 	} else {
// 		const { server } = await import("./server");
// 		server.listen();
// 	}
// };

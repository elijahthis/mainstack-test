import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import PageLayout from "@/layouts/PageLayout";
import { ReactNode } from "react";

export default function ItemPage() {
	return (
		<div className="text-left pt-9">
			<h3 className="mb-2">Coming Soon</h3>
			<p>This feature is in the kitchen. Please keep exploring.</p>
		</div>
	);
}

ItemPage.getLayout = function getLayout(page: ReactNode) {
	return <PageLayout>{page}</PageLayout>;
};

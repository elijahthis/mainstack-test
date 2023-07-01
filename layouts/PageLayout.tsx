import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import styles from "./PageLayout.module.scss";

interface PageLayoutProps {
	children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
	const [openNav, setOpenNav] = useState(false);

	return (
		<div className={styles.PageLayout}>
			<Sidebar openNav={openNav} setOpenNav={setOpenNav} />
			<div>
				<Header openNav={openNav} setOpenNav={setOpenNav} />
				<div className={styles.PageLayout__children}>{children}</div>
			</div>
		</div>
	);
};

export default PageLayout;

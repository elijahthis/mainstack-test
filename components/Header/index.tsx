import React from "react";
import { Dispatch, SetStateAction } from "react";

interface HeaderProps {
	openNav: boolean;
	setOpenNav: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ openNav, setOpenNav }: HeaderProps): JSX.Element => {
	return (
		<header className="bg-white px-5 py-[22px] md:px-[60px] md:py-[22px] w-full">
			<h3>Dashboard</h3>
		</header>
	);
};

export default Header;

import React from "react";
import { Dispatch, SetStateAction } from "react";
import { HiMenuAlt2 } from "react-icons/hi";

interface HeaderProps {
	openNav: boolean;
	setOpenNav: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ openNav, setOpenNav }: HeaderProps): JSX.Element => {
	return (
		<header className="bg-white px-5 py-[22px] md:px-[60px] md:py-[22px] w-full flex flex-row items-center gap-3   ">
			<HiMenuAlt2
				size={24}
				className="md:hidden visible cursor-pointer"
				onClick={() => setOpenNav(true)}
			/>
			<h3>Dashboard</h3>
		</header>
	);
};

export default Header;

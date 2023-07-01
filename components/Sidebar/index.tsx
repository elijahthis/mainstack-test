import {
	AlarmIcon,
	CameraIcon,
	DashBoardIcon,
	DeleteIcon,
	EditIcon,
	FileIcon,
	HourGlassIcon,
	Logo,
	PeopleIcon,
	VidsIcon,
} from "../svgs";
import { Dispatch, SetStateAction, useState } from "react";
import { MdOutlineSettings } from "react-icons/md";
import { PiDotsNineThin, PiDotsThreeBold } from "react-icons/pi";
import { RiBug2Line } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import SettingsIcon from "../../assets/svgs/settings.svg";

type LinkItemType = { icon: JSX.Element; label: string; link: string };

interface SidebarProps {
	openNav: boolean;
	setOpenNav: Dispatch<SetStateAction<boolean>>;
}

interface SideGroupProps {
	propObj: { title: string | null; list: LinkItemType[] };
}

const Sidebar = ({ openNav, setOpenNav }: SidebarProps) => {
	const router = useRouter();
	console.log(router);

	const navList: { title: string | null; list: LinkItemType[] }[] = [
		{
			title: null,
			list: [
				{ icon: <DashBoardIcon />, label: "Dashboard", link: "/" },
				{ icon: <EditIcon />, label: "Item 1", link: "/item-1" },
				{ icon: <PeopleIcon />, label: "Item 2", link: "/item-2" },
				{ icon: <HourGlassIcon />, label: "Item 3", link: "/item-3" },
			],
		},
		{
			title: "OTHERS 1",
			list: [
				{ icon: <CameraIcon />, label: "Item 4", link: "/item-4" },
				{ icon: <DeleteIcon />, label: "Item 5", link: "/item-5" },
			],
		},
		{
			title: "OTHER 2",
			list: [
				{ icon: <VidsIcon />, label: "Item 6", link: "/item-6" },
				{ icon: <FileIcon />, label: "Item 7", link: "/item-7" },
				{ icon: <AlarmIcon />, label: "Item 8", link: "/item-8" },
			],
		},
	];

	return (
		<aside className="absolute left-[-231px] py-8 border-r border-[#eff1f6] md:relative md:left-0 flex flex-col items-stretch">
			<div className="ml-[54px]">
				<Link href="/" className="block w-max">
					<Logo />
				</Link>
			</div>

			<div className="mt-11 flex flex-col items-stretch gap-8">
				{navList.map((navBlock, ind) => (
					<SideGroup propObj={navBlock} key={ind} />
				))}
			</div>

			{/* user info + modal */}
			<UserPopUp />
			<SettingsIcon />
		</aside>
	);
};

export default Sidebar;

const SideGroup = ({ propObj }: SideGroupProps) => {
	const router = useRouter();

	return (
		<div>
			<p className="px-[60px] uppercase text-[4D5760] text-xs mb-5 font-Söhne-Light text-[#4D5760]">
				{propObj.title}
			</p>
			<ul className="flex flex-col items-stretch gap-6">
				{propObj.list.map((navItem, ind) => {
					return (
						<li key={ind}>
							<Link
								href={navItem.link}
								className={`px-[60px] flex flex-row items-center gap-3 ${
									router.route === navItem.link
										? "text-[#FF5403]"
										: "text-[#56616B]"
								} hover:text-[#FF5403] hover:text-opacity-80 transition-colors duration-500`}
							>
								{navItem.icon}
								<span className={`text-base font-Söhne-Power `}>
									{navItem.label}
								</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

const UserPopUp = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const userActions = [
		{ label: "Settings", icon: <MdOutlineSettings /> },
		{ label: "Integrations", icon: <></> },
		{ label: "Refer and Earn", icon: <></> },
		{ label: "Report bug", icon: <RiBug2Line /> },
		{ label: "Switch account", icon: <></> },
		{ label: "Log out", icon: <></> },
	];

	return (
		<div className="flex flex-row items-center gap-3 pr-4 pl-[60px] mt-auto cursor-pointer relative">
			<Image
				src="/images/profile-pic.png"
				alt="profile"
				width={32}
				height={32}
				className="rounded-full"
			/>
			<p>Blessing Daniels</p>
			<PiDotsThreeBold className="ml-auto " />

			{/* Pop up */}
			<div></div>
		</div>
	);
};

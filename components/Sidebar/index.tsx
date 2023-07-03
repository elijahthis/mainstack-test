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
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { PiDotsThreeBold } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import useOutsideAlerter from "@/hooks/useOutsideAlerter";

type LinkItemType = { icon: JSX.Element; label: string; link: string };

interface SidebarProps {
	openNav: boolean;
	setOpenNav: Dispatch<SetStateAction<boolean>>;
}

interface SideGroupProps {
	propObj: { title: string | null; list: LinkItemType[] };
}

const Sidebar = ({ openNav, setOpenNav }: SidebarProps) => {
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

	const router = useRouter();

	const wrapperRef = useRef<HTMLDivElement>(null);

	useOutsideAlerter(wrapperRef, () => {
		setOpenNav(false);
	});
	console.log("router", router);

	return (
		<aside
			className={`absolute ${
				openNav ? "left-0" : "-left-full"
			} py-8 border-r border-[#eff1f6] bg-white h-full md:relative md:left-0 flex flex-col items-stretch transition-all duration-500 z-10 shadow-md md:shadow-none`}
			ref={wrapperRef}
		>
			<div className="md:ml-[54px] ml-5">
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
		</aside>
	);
};

export default Sidebar;

const SideGroup = ({ propObj }: SideGroupProps) => {
	const router = useRouter();

	return (
		<div>
			<p className="md:px-[60px] px-5 uppercase text-[4D5760] text-xs mb-5 font-Söhne-Light text-[#4D5760]">
				{propObj.title}
			</p>
			<ul className="flex flex-col items-stretch gap-6">
				{propObj.list.map((navItem, ind) => {
					return (
						<li key={ind}>
							<Link
								href={navItem.link}
								className={`md:px-[60px] px-5 flex flex-row items-center gap-3 ${
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
	const userActions: { label: string; icon: any }[] = [
		{ label: "Settings", icon: "/images/settings.svg" },
		{ label: "Integrations", icon: "/images/integrations.svg" },
		{ label: "Refer and Earn", icon: "/images/refer.svg" },
		{ label: "Report bug", icon: "/images/bug_report.svg" },
		{ label: "Switch account", icon: "/images/switch_account.svg" },
		{ label: "Log out", icon: "/images/logout.svg" },
	];

	const [isOpen, setIsOpen] = useState<boolean>(false);

	const wrapperRef = useRef<HTMLDivElement>(null);

	useOutsideAlerter(wrapperRef, () => {
		setIsOpen(false);
	});

	return (
		<div
			className="flex flex-row items-center gap-3 pr-4 md:pl-[60px] pl-5 mt-auto cursor-pointer relative"
			onClick={() => setIsOpen((prev) => !prev)}
			ref={wrapperRef}
		>
			<Image
				src="/images/profile-pic.png"
				alt="profile picture"
				width={32}
				height={32}
				className="rounded-full"
			/>
			<p
				className="text-[#4D5760]"
				style={{ fontSize: "15px", fontWeight: "400", lineHeight: "16px" }}
			>
				Blessing Daniels
			</p>
			<PiDotsThreeBold className="ml-auto " />

			{/* Pop up */}
			<div
				className={`absolute right-0 bottom-0 w-11/12 bg-white  rounded-[6px] overflow-hidden transition-all duration-500 translate-y-3 ${
					isOpen ? "h-auto opacity-1 translate-y-0" : "h-0 opacity-0"
				}`}
				style={{ boxShadow: "0px 10px 24px 0px rgba(55, 62, 64, 0.15)" }}
			>
				{userActions.map((item, ind) => (
					<div
						className={`p-[14px] flex flex-row items-center gap-3 text-sm ${
							ind === userActions.length - 1 ? "text-red-500" : "text-[#4D5760]"
						} font-medium cursor-pointer hover:bg-gray-100`}
						key={ind}
					>
						<Image
							src={item.icon}
							width={16}
							height={16}
							alt={`${item.label} icon`}
							// className
						/>
						<p>{item.label}</p>
					</div>
				))}
			</div>
		</div>
	);
};

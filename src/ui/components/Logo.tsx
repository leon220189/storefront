"use client";

import { usePathname } from "next/navigation";
import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon";
import { LinkWithChannel } from "../atoms/LinkWithChannel";

const companyName = "LETGO";

export const Logo = () => {
	const pathname = usePathname();

	function HomeIcon(props: SvgIconProps) {
		return (
			<SvgIcon {...props}>
				<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
			</SvgIcon>
		);
	}

	if (pathname === "/") {
		return (
			<h1 className="flex items-center font-bold" aria-label="homepage">
				{companyName}
			</h1>
		);
	}
	return (
		<div className="flex items-center font-bold">
			<LinkWithChannel aria-label="homepage" href="/" className="flex items-center">
				<HomeIcon color="primary" />
				<h1 className="ml-2 font-bold" aria-label="homepage">
					{companyName}
				</h1>
			</LinkWithChannel>
		</div>
	);
};

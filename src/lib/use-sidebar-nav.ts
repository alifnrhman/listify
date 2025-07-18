"use client";

import { usePathname } from "next/navigation";

export function useSidebarNav(data: typeof import("../constants").navData) {
	const pathname = usePathname();

	const mapWithIsActive = (navArray: typeof data.navMain) =>
		navArray.map((item: any) => ({
			...item,
			isActive: pathname === item.url || pathname.startsWith(item.url + "/"),
		}));

	return {
		teams: data.teams,
		navMain: mapWithIsActive(data.navMain),
		navSecondary: mapWithIsActive(data.navSecondary),
	};
}

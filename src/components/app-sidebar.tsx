"use client";

import * as React from "react";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail, useSidebar } from "@/components/ui/sidebar";
import { NavSecondary } from "./nav-secondary";
import { Button } from "./ui/button";
import { useSidebarNav } from "@/lib/use-sidebar-nav";
import { navData } from "@/constants";
import { useRouter } from "next/navigation";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const { navMain, navSecondary, teams } = useSidebarNav(navData);
	const router = useRouter();
	const { state } = useSidebar();

	return (
		<Sidebar
			collapsible="icon"
			{...props}>
			<SidebarHeader>
				<TeamSwitcher teams={teams} />
				<div className={`${state == "collapsed" ? "p-0" : "px-2"} pt-2`}>
					<Button
						className="w-full"
						onClick={() => router.push("/contents/new")}>
						{state == "collapsed" ? "+" : "+ Create New Content"}
					</Button>
				</div>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={navMain} />
				<NavSecondary
					items={navSecondary}
					className="mt-auto"
				/>
			</SidebarContent>
			<SidebarFooter>
				<NavUser />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}

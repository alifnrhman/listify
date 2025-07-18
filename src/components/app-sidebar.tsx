"use client";

import * as React from "react";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar";
import { NavSecondary } from "./nav-secondary";
import { Button } from "./ui/button";
import { useSidebarNav } from "@/lib/use-sidebar-nav";
import { navData } from "@/constants";

export function AppSidebar({ user, ...props }: { user: any } & React.ComponentProps<typeof Sidebar>) {
	const { navMain, navSecondary, teams } = useSidebarNav(navData);

	return (
		<Sidebar
			collapsible="icon"
			{...props}>
			<SidebarHeader>
				<TeamSwitcher teams={teams} />
				<div className="px-2 mt-4">
					<Button
						className="w-full"
						variant="default"
						size="sm">
						+ New Listing
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
				<NavUser user={user} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}

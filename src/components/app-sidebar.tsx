"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar";

import { LayoutDashboard, ImageIcon, Sparkles, Settings2, HelpCircle, LayoutTemplateIcon, UserRoundIcon } from "lucide-react";
import { NavSecondary } from "./nav-secondary";

export const data = {
	teams: [
		{
			name: "Personal Workspace ",
			logo: UserRoundIcon,
			plan: "Free Plan",
		},
	],
	navMain: [
		{
			title: "Dashboard",
			url: "/dashboard",
			icon: LayoutDashboard,
		},
		{
			title: "Generate Listing",
			url: "/generate",
			icon: Sparkles,
		},
		{
			title: "My Listings",
			url: "/listings",
			icon: ImageIcon,
		},
		{
			title: "My Templates",
			url: "/templates",
			icon: LayoutTemplateIcon,
		},
	],
	navSecondary: [
		{
			title: "Settings",
			url: "/settings",
			icon: Settings2,
		},
		{
			title: "Help",
			url: "/help",
			icon: HelpCircle,
		},
	],
};

export function AppSidebar({ user, ...props }: { user: any } & React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar
			collapsible="icon"
			{...props}>
			<SidebarHeader>
				<TeamSwitcher teams={data.teams} />
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavSecondary
					items={data.navSecondary}
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

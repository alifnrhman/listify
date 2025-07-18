import { LayoutDashboard, HelpCircle, UserRoundIcon, Settings, Layers, Image, RocketIcon } from "lucide-react";

export const navData = {
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
			title: "Listings",
			url: "/listings",
			icon: Image,
		},
		{
			title: "My Templates",
			url: "/templates",
			icon: Layers,
		},
	],
	navSecondary: [
		{
			title: "Help",
			url: "/help",
			icon: HelpCircle,
		},
		{
			title: "Settings",
			url: "/settings",
			icon: Settings,
		},
		{
			title: "Upgrade Plan",
			url: "/pricing",
			icon: RocketIcon,
		},
	],
};

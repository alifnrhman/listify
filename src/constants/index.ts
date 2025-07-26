import { HelpCircle, UserRoundIcon, Settings, RocketIcon, Compass, FileText, LayoutTemplate, Home } from "lucide-react";

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
			icon: Home,
		},
		{
			title: "My Contents",
			url: "/contents",
			icon: FileText,
		},
		{
			title: "My Templates",
			url: "/templates",
			icon: LayoutTemplate,
		},
		{
			title: "Explore Templates",
			url: "/explore",
			icon: Compass,
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

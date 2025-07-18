"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { DropdownMenuSub, DropdownMenuSubContent, DropdownMenuItem, DropdownMenuSubTrigger } from "@/components/ui/dropdown-menu";
import { useEffect } from "react";

export function ThemeToggleWithLabel() {
	const { setTheme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = React.useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<DropdownMenuSub>
			<DropdownMenuSubTrigger>
				<button className="relative flex items-center gap-2 cursor-pointer w-full">
					<Sun className="h-[1rem] w-[1rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 opacity-60" />
					<Moon className="absolute h-[1rem] w-[1rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 opacity-60" />
					<span>Theme: {resolvedTheme ? resolvedTheme.charAt(0).toUpperCase() + resolvedTheme.slice(1) : ""}</span>
				</button>
			</DropdownMenuSubTrigger>
			<DropdownMenuSubContent>
				<DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
			</DropdownMenuSubContent>
		</DropdownMenuSub>
	);
}

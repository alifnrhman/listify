"use client";

import { useUser } from "@clerk/nextjs";
import Sidebar from "./Sidebar";
import { redirect } from "next/navigation";

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { isLoaded, user } = useUser();
	if (!isLoaded) {
		return null;
	}

	if (!user) {
		redirect("/auth/sign-in");
	}

	return (
		<>
			<Sidebar>{children}</Sidebar>
		</>
	);
}

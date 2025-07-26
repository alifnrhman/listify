"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useUser } from "@clerk/nextjs";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { DynamicBreadcrumb } from "@/components/dashboard/DynamicBreadcrumb";

export default function Sidebar({ children }: { children: React.ReactNode }) {
	const { isLoaded, user } = useUser();

	if (!isLoaded) {
		return null;
	}

	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
					<div className="flex items-center gap-2 px-4 fixed bg-background w-full h-16 z-50 border-b">
						<SidebarTrigger className="-ml-1" />
						<Separator
							orientation="vertical"
							className="mr-2 data-[orientation=vertical]:h-4"
						/>
						<DynamicBreadcrumb />
					</div>
				</header>

				{/* Content */}
				<div className="w-full h-full px-16 pt-8">{children}</div>
			</SidebarInset>
		</SidebarProvider>
	);
}

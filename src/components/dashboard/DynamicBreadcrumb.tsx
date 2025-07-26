"use client";

import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Fragment } from "react";

export function DynamicBreadcrumb() {
	const pathname = usePathname();
	const segments = pathname.split("/").filter(Boolean); // remove empty

	const breadcrumbMap: Record<string, string> = {
		contents: "My Contents",
		templates: "My Templates",
		new: "New",
		edit: "Edit",
		explore: "Explore Templates",
		dashboard: "Dashboard",
		settings: "Settings",
		help: "Help",
	};

	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
				</BreadcrumbItem>

				{segments.map((segment, i) => {
					const href = "/" + segments.slice(0, i + 1).join("/");
					const isLast = i === segments.length - 1;
					const label = breadcrumbMap[segment] || formatSegment(segment);

					return (
						<Fragment key={href}>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								{isLast ? (
									<BreadcrumbPage>{label}</BreadcrumbPage>
								) : (
									<BreadcrumbLink asChild>
										<Link href={href}>{label}</Link>
									</BreadcrumbLink>
								)}
							</BreadcrumbItem>
						</Fragment>
					);
				})}
			</BreadcrumbList>
		</Breadcrumb>
	);
}

function formatSegment(segment: string) {
	return segment.replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase());
}

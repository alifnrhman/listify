"use client";

import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import { useUser } from "@clerk/nextjs";
import { LayoutTemplate, MoreHorizontal, Rocket } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
	const router = useRouter();
	const { user } = useUser();

	return (
		<main className="flex flex-col gap-y-10 pb-10">
			{/* Welcome & Plan */}
			<div className="flex flex-row gap-x-20 justify-between">
				{/* Welcome Section */}
				<div className="flex flex-col gap-y-2">
					<h1 className="text-3xl font-bold">Welcome back, {user?.firstName}!</h1>
					<p className="text-muted-foreground text-sm">Here&apos;s what&apos;s happening on your dashboard.</p>
				</div>

				{/* Plan Section */}
				<Card className="w-fit rounded-sm p-2.5 gap-y-0">
					<CardContent className="flex flex-col gap-y-1 p-2.5">
						<div className="flex items-center justify-between gap-x-10">
							<div>
								<p className="font-bold text-sm">Free Plan</p>
								<p className="text-xs text-muted-foreground mt-1">
									Content generated: <strong>12</strong> / <strong>50</strong> this month
								</p>
							</div>
							<Button
								variant="outline"
								size="sm"
								className="text-xs"
								onClick={() => router.push("/settings/plan")}>
								<Rocket className="mr-1 size-3.5" />
								Upgrade Plan
							</Button>
						</div>
						<Progress
							value={70}
							max={100}
							className="mt-2 h-1.5"
						/>
					</CardContent>
				</Card>
			</div>

			{/* Recent Contents */}
			<div className="flex flex-col gap-y-4">
				<div className="flex flex-col md:flex-row md:items-center justify-between gap-y-4 md:gap-y-0">
					<div>
						<h2 className="text-lg font-semibold">Recent Contents</h2>
						<p className="text-sm text-muted-foreground">Here are your recently edited contents.</p>
					</div>
					<Button onClick={() => router.push("/contents/new")}>+ Create New Content</Button>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{[
						{ imageUrl: "https://picsum.photos/200/300?random=1", title: "4BR House - Kemang", templateName: "Template 1", lastEdited: "2 days ago" },
						{ imageUrl: "https://picsum.photos/200/300?random=2", title: "3BR House - Jakarta", templateName: "Template 1", lastEdited: "5 days ago" },
						{ imageUrl: "https://picsum.photos/200/300?random=3", title: "2BR Cottage - Bali", templateName: "Template 2", lastEdited: "1 week ago" },
						{ imageUrl: "https://picsum.photos/200/300?random=4", title: "5BR Villa - Bali", templateName: "Template 3", lastEdited: "2 weeks ago" },
						{ imageUrl: "https://picsum.photos/200/300?random=5", title: "4BR Beachfront - Bali", templateName: "Template 3", lastEdited: "3 weeks ago" },
					].map((stat) => (
						<Card
							key={stat.title}
							className="flex flex-col md:flex-row p-0 max-h-auto md:max-h-36 overflow-hidden gap-0">
							<img
								src={stat.imageUrl}
								alt={stat.title}
								className="w-auto h-full aspect-square object-cover object-center rounded-md"
							/>
							<div className="flex flex-col justify-between p-4 pe-2 w-full">
								<CardHeader className="px-2">
									<CardTitle>{stat.title}</CardTitle>
									<CardDescription className="text-sm text-muted-foreground flex items-center gap-2">
										<LayoutTemplate className="size-4" />
										{stat.templateName}
									</CardDescription>
									<CardAction>
										<DropdownMenu>
											<DropdownMenuTrigger
												asChild
												className="cursor-pointer p-1 rounded-md hover:bg-muted">
												<MoreHorizontal className="size-8" />
											</DropdownMenuTrigger>
											<DropdownMenuContent align="end">
												<DropdownMenuItem>Edit Content</DropdownMenuItem>
												<DropdownMenuItem>Duplicate</DropdownMenuItem>
												<DropdownMenuItem>Download Images</DropdownMenuItem>
												<DropdownMenuItem>Copy Caption</DropdownMenuItem>
												<DropdownMenuItem>Delete</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu>
									</CardAction>
								</CardHeader>
								<CardContent className="px-2">
									<p className="text-sm text-muted-foreground line-clamp-1">Last edited {stat.lastEdited}</p>
								</CardContent>
							</div>
						</Card>
					))}
				</div>
			</div>

			{/* Recent Templates */}
			<div className="flex flex-col gap-y-4">
				<div className="flex flex-col md:flex-row md:items-center justify-between gap-y-4 md:gap-y-0">
					<div>
						<h2 className="text-lg font-semibold">Recent Templates</h2>
						<p className="text-sm text-muted-foreground">Here are your recently edited templates.</p>
					</div>
					<Button>+ Create New Template</Button>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{[
						{ imageUrl: "https://picsum.photos/200/300?random=1", templateName: "Image Template 1", type: "Image Only", lastEdited: "2 days ago" },
						{ imageUrl: "https://picsum.photos/200/300?random=2", templateName: "Template 2", type: "Image + Caption", lastEdited: "5 days ago" },
						{ imageUrl: "https://picsum.photos/200/300?random=3", templateName: "Caption Template 3", type: "Caption Only", lastEdited: "1 week ago" },
					].map((template) => (
						<Card
							key={template.templateName}
							className="flex flex-col md:flex-row p-0 max-h-auto md:max-h-36 overflow-hidden gap-0">
							<img
								src={template.imageUrl}
								alt={template.templateName}
								className="w-auto h-full aspect-square object-cover object-center rounded-md"
							/>
							<div className="flex flex-col justify-between p-4 pe-2 w-full">
								<CardHeader className="px-2">
									<CardTitle>{template.templateName}</CardTitle>
									{/* Template Type */}
									<CardDescription className="text-sm text-muted-foreground flex items-center gap-2">{template.type}</CardDescription>
									<CardAction>
										<DropdownMenu>
											<DropdownMenuTrigger
												asChild
												className="cursor-pointer p-1 rounded-md hover:bg-muted">
												<MoreHorizontal className="size-8" />
											</DropdownMenuTrigger>
											<DropdownMenuContent align="end">
												<DropdownMenuItem>Use Template</DropdownMenuItem>
												<DropdownMenuItem>Preview</DropdownMenuItem>
												<DropdownMenuItem>Edit</DropdownMenuItem>
												<DropdownMenuItem>Duplicate</DropdownMenuItem>
												<DropdownMenuItem>Delete</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu>
									</CardAction>
								</CardHeader>
								<CardContent className="px-2">
									<p className="text-sm text-muted-foreground line-clamp-1">Last edited {template.lastEdited}</p>
								</CardContent>
							</div>
						</Card>
					))}
				</div>
			</div>
		</main>
	);
}

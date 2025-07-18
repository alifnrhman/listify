import Sidebar from "./Sidebar";

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Sidebar>{children}</Sidebar>
		</>
	);
}

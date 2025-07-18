"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { Logo } from "./Logo";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const navLinks = [
	{ title: "Features", href: "#features" },
	{ title: "Pricing", href: "#pricing" },
	{ title: "Testimonials", href: "#testimonials" },
	{ title: "FAQ", href: "#faq" },
];

export function Navbar() {
	const router = useRouter();

	return (
		<header className="w-full bg-transparent fixed top-0 left-0 z-50 backdrop-blur">
			<div className="mx-auto w-full max-w-7xl px-4 flex h-16 items-center">
				{/* Logo */}
				<div className="flex-1">
					<Link
						href="/"
						className="text-xl font-bold tracking-tight text-primary">
						<Logo />
					</Link>
				</div>

				{/* Center nav */}
				<nav className="hidden md:flex flex-1 justify-center items-center gap-6">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
							{link.title}
						</Link>
					))}
				</nav>

				{/* Right Side */}
				<div className="hidden md:flex flex-1 justify-end items-center gap-4">
					<ThemeToggle />
					<SignedOut>
						<SignInButton>
							<Button variant="ghost">Sign In</Button>
						</SignInButton>
						<SignUpButton>
							<Button>Sign Up</Button>
						</SignUpButton>
					</SignedOut>
					<SignedIn>
						<Button
							variant="outline"
							onClick={() => router.push("/dashboard")}>
							Dashboard
						</Button>
						<UserButton />
					</SignedIn>
				</div>

				{/* Mobile Menu */}
				<div className="md:hidden">
					<Sheet>
						<SheetTrigger asChild>
							<Button
								variant="ghost"
								size="icon">
								<Menu className="h-6 w-6" />
							</Button>
						</SheetTrigger>
						<SheetContent
							side="left"
							className="w-64">
							<SheetHeader>
								<h2 className="text-lg font-semibold text-primary">Menu</h2>
							</SheetHeader>
							<nav className="mt-4 mx-4 flex flex-col gap-4">
								{navLinks.map((link) => (
									<Link
										key={link.href}
										href={link.href}
										className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
										{link.title}
									</Link>
								))}

								<div className="mt-6 flex flex-col gap-2">
									<ThemeToggle />
									<SignedOut>
										<SignInButton>
											<Button variant="ghost">Sign In</Button>
										</SignInButton>
										<SignUpButton>
											<Button>Sign Up</Button>
										</SignUpButton>
									</SignedOut>
									<SignedIn>
										<Button
											variant="ghost"
											onClick={() => router.push("/dashboard")}>
											Dashboard
										</Button>
										<UserButton showName />
									</SignedIn>
								</div>
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}

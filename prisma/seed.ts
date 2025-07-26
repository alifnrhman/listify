// prisma/seed.ts
import { prisma } from "@/lib/prisma";

async function main() {
	const user = await prisma.user.create({
		data: {
			clerkId: "clerk_test_123",
			email: "test@example.com",
			name: "Test User",
		},
	});

	const team = await prisma.team.create({
		data: {
			name: "Personal Team",
			slug: user.clerkId,
			members: {
				create: {
					userId: user.id,
					role: "owner",
				},
			},
		},
	});

	console.log({ user, team });
}

main()
	.then(() => {
		console.log("Seeded successfully");
	})
	.catch((e) => {
		console.error(e);
		process.exit(1);
	});

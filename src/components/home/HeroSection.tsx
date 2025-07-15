import { Button } from "../ui/button";
import Image from "next/image";
import { Spotlight } from "../ui/spotlight-new";
import { FlipWords } from "../ui/flip-words";

export const HeroSection = () => {
	// const words = [
	// 	{ text: "The" },
	// 	{ text: "smarter", className: "bg-gradient-to-t from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent!" },
	// 	{ text: "way" },
	// 	{ text: "to" },
	// 	{ text: "post" },
	// 	{ text: "your" },
	// 	{ text: "property" },
	// 	{ text: "listings." },
	// ];

	const words = ["smarter", "faster", "easier", "better"];

	return (
		<section className="h-screen w-screen overflow-hidden relative">
			<Spotlight />
			<div className="relative z-10 max-w-6xl mx-auto text-center pt-35">
				<h1 className="font-bold leading-tight mb-6 text-4xl">
					{/* <TypewriterEffectSmooth words={words} /> */}
					The
					<FlipWords words={words} />
					way to post your property listings.
				</h1>
				<p className="text-lg text-neutral-800 dark:text-neutral-300 mb-8">Automate property listing images and captions with just a few clicks. Perfect for freelance agents.</p>

				<div className="flex justify-center gap-4">
					<Button size="lg">Get Started</Button>
					<Button
						variant="outline"
						size="lg">
						See how it works
					</Button>
				</div>
			</div>

			{/* Image Mockups */}
			<div className="relative mt-28 flex justify-center items-center z-20">
				<div className="relative w-full max-w-5xl h-[300px]">
					<Image
						src="/mockups/mockup-center.png"
						alt="Form Caption Generator"
						width={460}
						height={340}
						className="absolute z-20 left-1/2 -translate-x-1/2 top-0 shadow-2xl rounded-xl dark:brightness-90"
					/>
					<Image
						src="/mockups/mockup-left.png"
						alt="Listing Preview"
						width={400}
						height={300}
						className="absolute left-0 top-12 shadow-xl rounded-xl rotate-[-5deg] dark:brightness-90"
					/>
					<Image
						src="/mockups/mockup-right.png"
						alt="Listing Details"
						width={400}
						height={300}
						className="absolute right-0 top-12 shadow-xl rounded-xl rotate-[5deg] dark:brightness-90"
					/>
				</div>
			</div>
		</section>
	);
};

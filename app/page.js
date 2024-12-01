import Image from "next/image";
import bgHeroImage from "@/public/heroImage.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <section className="px-12">
      <Image src={bgHeroImage} fill placeholder="blur" quality={60} className="object-cover object-bottom grayscale blur-[0.5px]" alt="Explore Hotels" />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative max-w-2xl text-white flex flex-col gap-3 mt-20">
        <h1 className="font-bold text-5xl">Your Next Adventure Awaits</h1>
        <p className="font-normal text-sm">
          Discover, plan, and book your dream trips effortlessly with LetsBook. From cozy stays to thrilling experiences, we make travel simple, fun, and stress-free. Start your journey today!
        </p>
        <Link href="/hotels" className="text-black px-6 py-2 bg-zinc-200 mt-3 w-fit rounded-md hover:bg-zinc-900 hover:text-zinc-100 hover:scale-105 transition-all">
          Book Now
        </Link>
      </div>
    </section>
  );
}

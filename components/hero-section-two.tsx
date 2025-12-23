"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroHeader } from "./header";
import { useCountdown } from "@/lib/useCountdown";

export default function HeroSection() {
  const launchDate = new Date("2026-02-14T06:07:00");
  const { days, hours, minutes, seconds } = useCountdown(launchDate);
  return (
    <>
      {/* <HeroHeader /> */}

      <main>
        <section className="relative min-h-screen overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2400&q=80"
            alt="Mountains background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-white">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-14 flex justify-center">
                <div className="relative flex items-center gap-6 px-16 py-10">
                  <div className="absolute left-0 top-1/2 h-24 w-[2px] -translate-y-1/2 bg-white/70" />
                  <div className="absolute left-0 top-1/2 -translate-y-[48px] h-[2px] w-5 bg-white/70" />
                  <div className="absolute left-0 top-1/2 translate-y-[46px] h-[2px] w-20 bg-white/70" />

                  <div className="absolute right-0 top-1/2 h-24 w-[2px] -translate-y-1/2 bg-white/70" />
                  <div className="absolute right-0 top-1/2 -translate-y-[48px] h-[2px] w-5 bg-white/70" />
                  <div className="absolute right-0 top-1/2 translate-y-[46px] h-[2px] w-20 bg-white/70" />

                  <div className="text-7xl font-extrabold tracking-tight">
                    {String(days).padStart(2, "0")}
                  </div>

                  <div className="pb-6 text-sm tracking-widest text-white/80">
                    DAYS
                  </div>

                  <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-6 text-xs tracking-widest text-white/70">
                    <span>{String(hours).padStart(2, "0")}H</span>
                    <span>{String(minutes).padStart(2, "0")}MN</span>
                    <span>{String(seconds).padStart(2, "0")}S</span>
                  </div>
                </div>
              </div>

              <p className="mb-2 tracking-widest text-white/70">WE ARE</p>
              <h1 className="mb-8 text-4xl font-bold sm:text-5xl">
                BE READY TO
              </h1>

              <div className="mx-auto mb-6 flex max-w-md overflow-hidden rounded-md bg-white">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="flex-1 px-4 py-3 text-black outline-none"
                />
                <button className="bg-black px-6 text-sm font-medium text-white">
                  Get Notify
                </button>
              </div>

              <div className="flex justify-center gap-4">
                <Button asChild variant="secondary">
                  <Link href="#contact">Contact Us</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="#about">About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

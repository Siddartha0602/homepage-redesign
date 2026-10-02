"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import CustomCursor from "./components/ui/CustomCursor";
import ScrollProgress from "./components/ui/ScrollProgress";
import FadeIn from "./components/ui/FadeIn";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <main className="min-h-screen bg-white dark:bg-tis-darkBg text-slate-900 dark:text-slate-100 transition-colors">
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <Hero />
        <Stats />

        <section id="about" className="py-24 max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl sm:text-5xl font-bold">Modern Gurukul Vision</h2>
              <p className="text-gray-600 dark:text-gray-400">
                At TIS, we blend modern technological advancement with traditional values, fostering independent thinkers and global leaders.
              </p>
            </div>
          </FadeIn>
        </section>
      </main>
    </ThemeProvider>
  );
}
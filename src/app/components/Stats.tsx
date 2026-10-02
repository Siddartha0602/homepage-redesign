"use client";

import FadeIn from "./ui/FadeIn";

const stats = [
  { label: "Campus Acreage", value: "16+ Acres" },
  { label: "Student-Teacher Ratio", value: "8:1" },
  { label: "Boarding Facility", value: "24/7 Residential" },
  { label: "CBSE Pass Rate", value: "100%" },
];

export default function Stats() {
  return (
    <section className="py-16 bg-tis-gold text-tis-navy dark:bg-amber-500 dark:text-tis-navy font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div className="text-center space-y-1">
              <p className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm font-bold tracking-wider uppercase opacity-90">
                {stat.label}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
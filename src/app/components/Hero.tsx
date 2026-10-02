"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center bg-gradient-to-br from-tis-navy via-slate-900 to-tis-darkBg text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tis-gold/20 border border-tis-gold/40 text-tis-gold text-sm font-semibold">
            <Sparkles size={16} /> #1 Boarding School in Dehradun
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Where Tradition Meets{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tis-gold to-yellow-200">
              Modern Global Excellence
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            Blending the timeless values of the Modern Gurukul concept with
            cutting-edge CBSE global education. Inspiring young minds on a modern
            16-acre campus.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#admissions"
              className="bg-tis-gold hover:bg-amber-500 text-tis-navy font-bold px-8 py-4 rounded-xl transition transform hover:-translate-y-1 shadow-lg"
            >
              Enquire for Admission
            </a>
            <a
              href="#virtual-tour"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition"
            >
              Explore Campus Tour
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-3xl overflow-hidden border-2 border-tis-gold/30 shadow-2xl bg-slate-800 p-8 space-y-6">
            <h3 className="text-2xl font-bold">Quick Admission Inquiry</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Parent's Name"
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-tis-gold"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-tis-gold"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-tis-gold"
              />
              <button className="w-full py-4 bg-tis-gold text-tis-navy font-bold rounded-lg hover:bg-amber-500 transition">
                Submit Inquiry
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
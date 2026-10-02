"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsHovered(!!target.closest("a, button, input, textarea"));
    };

    window.addEventListener("mousemove", updateMouse);
    return () => window.removeEventListener("mousemove", updateMouse);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference bg-white"
      animate={{
        x: mousePosition.x - (isHovered ? 24 : 12),
        y: mousePosition.y - (isHovered ? 24 : 12),
        width: isHovered ? 48 : 24,
        height: isHovered ? 48 : 24,
        opacity: 0.8,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
}
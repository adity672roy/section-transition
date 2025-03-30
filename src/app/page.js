"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={containerRef} className="relative bg-zinc-900 h-[200vh]">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </main>
  );
}

const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -6]);
  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 h-screen  bg-white text-2xl flex flex-col items-center justify-center p-10"
    >
      <p>This is a Next.js application that implements a smooth scrolling effect with `Lenis` and section transitions using `framer-motion`. The effect creates a perspective illusion as the user scrolls, making the UI more interactive and visually appealing.</p>
    </motion.div>
  );
};

const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
  return (
    <motion.div style={{ rotate, scale }} className="relative h-screen">
      <Image
        src="https://images.unsplash.com/photo-1742330425089-1f91d18eaa4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
        alt="Background Image"
        fill
        className="object-cover"
      />
    </motion.div>
  );
};

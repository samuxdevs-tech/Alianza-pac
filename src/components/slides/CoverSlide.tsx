"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export default function CoverSlide() {
  return (
    <div className="w-full h-full flex flex-col items-start justify-center p-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md text-white/80 inline-block"
      >
        <Globe size={48} strokeWidth={1.5} />
      </motion.div>
      
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-6"
      >
        La Alianza del Pacífico
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-2xl text-zinc-400 font-light max-w-2xl tracking-wide"
      >
        Un bloque económico estratégico para impulsar el comercio, la inversión y la integración global.
      </motion.p>
    </div>
  );
}

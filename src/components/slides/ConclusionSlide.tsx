"use client";

import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

export default function ConclusionSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-8 p-6 bg-white/[0.02] border border-white/[0.08] rounded-full inline-block text-blue-500"
      >
        <Handshake size={64} strokeWidth={1.5} />
      </motion.div>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8"
      >
        Conclusión
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-2xl text-zinc-300 font-light leading-relaxed max-w-3xl"
      >
        La Alianza del Pacífico demuestra que el <strong className="text-white font-medium">trabajo conjunto</strong> es el motor fundamental para fortalecer la economía regional, multiplicar el comercio global y, en última instancia, <strong className="text-blue-400 font-medium">mejorar las oportunidades</strong> de los ciudadanos.
      </motion.p>
    </div>
  );
}

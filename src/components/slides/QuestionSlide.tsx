"use client";

import { motion } from "framer-motion";
import { MessageSquareShare } from "lucide-react";

export default function QuestionSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 max-w-4xl mx-auto text-center">
      <motion.span 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-blue-500 font-medium tracking-widest uppercase text-sm mb-6"
      >
        Debate
      </motion.span>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-12 leading-tight"
      >
        ¿Crees que Colombia obtiene más beneficios o más desafíos al pertenecer a la Alianza del Pacífico?
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex flex-col items-center gap-4 text-zinc-400"
      >
        <MessageSquareShare size={32} />
        <p className="text-xl font-light">Levanta la mano y explica tu respuesta.</p>
      </motion.div>
    </div>
  );
}

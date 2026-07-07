"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";

export default function TrueFalseSlide() {
  const [selected, setSelected] = useState<boolean | null>(null);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 max-w-4xl mx-auto text-center">
      <motion.span 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-blue-500 font-medium tracking-widest uppercase text-sm mb-4"
      >
        Dato Histórico
      </motion.span>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-16 leading-tight"
      >
        La Alianza del Pacífico fue creada en el año 1995.
      </motion.h2>

      <div className="flex gap-6 w-full max-w-md justify-center">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          onClick={() => setSelected(true)}
          disabled={selected !== null}
          className={`flex-1 py-4 rounded-xl border font-semibold text-lg transition-all ${
            selected === true 
              ? 'bg-red-500/20 border-red-500/50 text-red-400' 
              : selected === false
                ? 'opacity-30 border-white/[0.08] bg-transparent text-zinc-500'
                : 'bg-white/[0.02] border-white/[0.08] text-white hover:bg-white/[0.05]'
          }`}
        >
          Verdadero
        </motion.button>
        
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          onClick={() => setSelected(false)}
          disabled={selected !== null}
          className={`flex-1 py-4 rounded-xl border font-semibold text-lg transition-all ${
            selected === false 
              ? 'bg-green-500/20 border-green-500/50 text-green-400' 
              : selected === true
                ? 'opacity-30 border-white/[0.08] bg-transparent text-zinc-500'
                : 'bg-white/[0.02] border-white/[0.08] text-white hover:bg-white/[0.05]'
          }`}
        >
          Falso
        </motion.button>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className={`mt-12 p-6 rounded-xl border max-w-md w-full flex items-start gap-4 ${
              selected === false 
                ? 'bg-green-500/10 border-green-500/20' 
                : 'bg-red-500/10 border-red-500/20'
            }`}
          >
            <div className={`p-2 rounded-full ${selected === false ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
              {selected === false ? <Check size={24} /> : <X size={24} />}
            </div>
            <div className="text-left">
              <h4 className={`text-xl font-bold mb-1 ${selected === false ? 'text-green-400' : 'text-red-400'}`}>
                {selected === false ? '¡Correcto!' : 'Incorrecto'}
              </h4>
              <p className="text-zinc-300 font-light">
                La Alianza del Pacífico fue creada en <strong className="text-white">2011</strong> mediante la Declaración de Lima.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

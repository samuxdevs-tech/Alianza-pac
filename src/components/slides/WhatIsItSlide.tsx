"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const milestones = [
  { year: 2011, title: "Declaración de Lima", desc: "Acuerdo fundacional de los 4 presidentes." },
  { year: 2012, title: "Acuerdo Marco", desc: "Firma en Paranal. Establece como regla de oro tener TLCs previos vigentes con todos los miembros." },
  { year: 2014, title: "Protocolo Comercial", desc: "Desgravación arancelaria del 92% de bienes." },
  { year: 2022, title: "Estado Asociado", desc: "Singapur se une como primer Estado Asociado." }
];

export default function WhatIsItSlide() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="w-full h-full flex flex-col items-start justify-center p-8 max-w-5xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
      >
        ¿Qué es la Alianza del Pacífico?
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-2xl text-zinc-300 font-light leading-relaxed mb-12 max-w-3xl"
      >
        Es un bloque económico estratégico creado con el objetivo fundamental de fortalecer el libre comercio y la cooperación profunda entre sus miembros.
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8 w-full relative">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex-1 flex flex-col relative"
        >
          {/* SVG Animated Timeline Line */}
          <div className="absolute left-[23px] top-[24px] bottom-[24px] w-[2px]">
            <svg width="2" height="100%" className="overflow-visible">
              <line x1="1" y1="0" x2="1" y2="100%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4" />
              <motion.line 
                x1="1" y1="0" x2="1" y2={`${(activeIdx / (milestones.length - 1)) * 100}%`} 
                stroke="#3B82F6" strokeWidth="2" 
                animate={{ y2: `${(activeIdx / (milestones.length - 1)) * 100}%` }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              />
            </svg>
          </div>

          <div className="flex flex-col justify-between h-[300px]">
            {milestones.map((m, idx) => (
              <div 
                key={m.year}
                onClick={() => setActiveIdx(idx)}
                className="relative flex items-center gap-6 cursor-pointer group"
              >
                {/* SVG Node */}
                <div className="relative z-10 w-12 h-12 flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke={activeIdx >= idx ? "#3B82F6" : "rgba(255,255,255,0.2)"} strokeWidth="2" fill={activeIdx === idx ? "#3B82F6" : "#0B0F19"} className="transition-all duration-300" />
                    {activeIdx === idx && (
                      <motion.circle initial={{ scale: 0 }} animate={{ scale: 1 }} cx="12" cy="12" r="4" fill="#FFFFFF" />
                    )}
                  </svg>
                </div>
                
                <div className={`transition-all duration-300 ${activeIdx === idx ? 'opacity-100 translate-x-2' : 'opacity-50 group-hover:opacity-80'}`}>
                  <span className={`font-bold text-xl block ${activeIdx === idx ? 'text-blue-400' : 'text-zinc-400'}`}>{m.year}</span>
                  <span className="font-medium text-white block text-lg">{m.title}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex-1 bg-white/[0.02] border border-white/[0.08] backdrop-blur-md p-8 rounded-2xl flex flex-col justify-center relative overflow-hidden h-[300px]"
        >
          <div className="absolute top-0 right-0 p-12 bg-blue-500/5 blur-[80px] rounded-full" />
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-blue-400 font-black text-5xl mb-4 block">
                {milestones[activeIdx].year}
              </span>
              <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">
                {milestones[activeIdx].title}
              </h4>
              <p className="text-zinc-300 text-xl font-light leading-relaxed">
                {milestones[activeIdx].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

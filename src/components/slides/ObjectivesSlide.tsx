"use client";

import { motion } from "framer-motion";
import { Handshake, PlaneTakeoff, TrendingUp, Globe2 } from "lucide-react";

const objectives = [
  { icon: Handshake, title: "Libre Comercio", desc: "Facilitar el intercambio comercial sin barreras arancelarias." },
  { icon: PlaneTakeoff, title: "Libre Circulación", desc: "Movilidad sin fricción de bienes, servicios, capitales y personas." },
  { icon: TrendingUp, title: "Atracción de Inversión", desc: "Impulsar de manera conjunta las inversiones extranjeras directas." },
  { icon: Globe2, title: "Proyección Global", desc: "Acercar a América Latina con la estratégica región de Asia-Pacífico." }
];

export default function ObjectivesSlide() {
  return (
    <div className="w-full h-full flex flex-col items-start justify-center p-8 max-w-5xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-12"
      >
        Objetivos Principales
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {objectives.map((obj, idx) => (
          <motion.div
            key={obj.title}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + idx * 0.15, duration: 0.6 }}
            className="flex items-start gap-6 bg-white/[0.02] border border-white/[0.08] backdrop-blur-md p-8 rounded-xl hover:bg-white/[0.04] transition-colors group"
          >
            <div className="p-4 bg-white/[0.03] rounded-lg text-blue-400 group-hover:scale-110 group-hover:text-blue-300 transition-all">
              <obj.icon size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">{obj.title}</h3>
              <p className="text-zinc-400 leading-relaxed font-light">{obj.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

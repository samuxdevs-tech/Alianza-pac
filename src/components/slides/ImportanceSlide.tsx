"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, MapPin, Building2 } from "lucide-react";

const points = [
  { icon: ArrowUpRight, title: "Facilita las exportaciones", desc: "Apertura de nuevos mercados con menores costos." },
  { icon: Building2, title: "Atrae inversión extranjera", desc: "Reglas claras que generan confianza global." },
  { icon: MapPin, title: "Oportunidades empresariales", desc: "Ecosistema favorable para Pymes y startups locales." },
  { icon: ShieldCheck, title: "Relaciones sólidas", desc: "Fortalece lazos diplomáticos y comerciales internacionales." },
];

export default function ImportanceSlide() {
  return (
    <div className="w-full h-full flex flex-col items-start justify-center p-8 max-w-5xl mx-auto">
      <motion.span 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-blue-500 font-medium tracking-widest uppercase text-sm mb-4"
      >
        Impacto Local
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-12"
      >
        Importancia para Colombia
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 w-full">
        {points.map((pt, idx) => (
          <motion.div
            key={pt.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
            className="flex items-start gap-6 group"
          >
            <div className="p-3 bg-white/[0.02] border border-white/[0.05] rounded-xl text-zinc-400 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors">
              <pt.icon size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2 tracking-tight group-hover:text-blue-50 transition-colors">{pt.title}</h3>
              <p className="text-zinc-400 font-light leading-relaxed">{pt.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

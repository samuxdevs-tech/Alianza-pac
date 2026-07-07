"use client";

import { motion } from "framer-motion";
import { Briefcase, BarChart3, Coins, BookOpen } from "lucide-react";

const benefits = [
  { icon: Briefcase, title: "Empleo", value: "Más oportunidades laborales transnacionales." },
  { icon: BarChart3, title: "Comercio", value: "Mayor intercambio de bienes con arancel cero." },
  { icon: Coins, title: "Inversión (MILA)", value: "Crecimiento del flujo de capital intrarregional gracias al Mercado Integrado Latinoamericano." },
  { icon: BookOpen, title: "Cooperación", value: "Becas y movilidad estudiantil conjunta." }
];

export default function BenefitsSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 max-w-5xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-16 text-center"
      >
        Beneficios Estratégicos
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8 w-full">
        {benefits.map((benefit, idx) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + idx * 0.1, duration: 0.5, type: "spring" }}
            className="flex flex-col items-center text-center max-w-[200px]"
          >
            <div className="w-24 h-24 rounded-full bg-white/[0.02] border border-white/[0.08] backdrop-blur-md flex items-center justify-center mb-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <benefit.icon size={36} className="text-zinc-300 group-hover:text-white transition-colors relative z-10" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{benefit.title}</h3>
            <p className="text-sm text-zinc-400 font-light leading-relaxed">{benefit.value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

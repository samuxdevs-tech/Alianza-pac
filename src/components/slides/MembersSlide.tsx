"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, TrendingUp, Globe2, ArrowRight } from "lucide-react";
import { FlagColombia, FlagChile, FlagMexico, FlagPeru } from "@/components/ui/Flags";

const countries = [
  { 
    id: "col",
    name: "Colombia", 
    flag: FlagColombia, 
    fact: "Principal exportador de esmeraldas y café suave.", 
    details: "Colombia aporta un mercado interno dinámico y es líder regional en exportaciones de servicios IT y moda. Su posición bioceánica es clave para la conexión con el Pacífico.",
    stats: [
      { label: "PIB", value: "$343.6B", pct: 24 },
      { label: "Población", value: "51.5M", pct: 40 },
      { label: "Exportaciones", value: "$41.2B", pct: 7 }
    ]
  },
  { 
    id: "chi",
    name: "Chile", 
    flag: FlagChile, 
    fact: "Mayor productor y exportador de cobre global.", 
    details: "Chile cuenta con la economía más estable de la región y la mayor red de Tratados de Libre Comercio (TLC) con Asia, siendo la principal puerta comercial al Pacífico.",
    stats: [
      { label: "PIB", value: "$317.0B", pct: 22 },
      { label: "Población", value: "19.4M", pct: 15 },
      { label: "Exportaciones", value: "$94.8B", pct: 16 }
    ]
  },
  { 
    id: "mex",
    name: "México", 
    flag: FlagMexico, 
    fact: "Potencia manufacturera y principal socio comercial de EE.UU.", 
    details: "Es la economía más grande de la Alianza. Su industria automotriz y aeroespacial son pilares del bloque, sirviendo como puente entre Norte y Sudamérica.",
    stats: [
      { label: "PIB", value: "$1.41T", pct: 100 },
      { label: "Población", value: "126.7M", pct: 100 },
      { label: "Exportaciones", value: "$578.1B", pct: 100 }
    ]
  },
  { 
    id: "per",
    name: "Perú", 
    flag: FlagPeru, 
    fact: "Referente en minería, agroexportación y gastronomía.", 
    details: "Perú lidera el crecimiento sostenido de la región. Sus exportaciones mineras y su naciente industria agrícola lo convierten en un socio altamente estratégico.",
    stats: [
      { label: "PIB", value: "$242.6B", pct: 17 },
      { label: "Población", value: "33.7M", pct: 26 },
      { label: "Exportaciones", value: "$63.1B", pct: 11 }
    ]
  },
];

export default function MembersSlide() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedCountry = countries.find(c => c.id === selectedId);

  return (
    <div className="w-full h-full flex flex-col items-start justify-center p-8 max-w-5xl mx-auto relative">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2"
      >
        Economías Integradas
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-xl text-zinc-400 font-light mb-12 tracking-wide"
      >
        Selecciona un país para ver su dossier económico detallado.
      </motion.p>

      {/* Balanced 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {countries.map((country, idx) => {
          const FlagIcon = country.flag;
          return (
            <motion.div
              layoutId={`card-${country.id}`}
              key={country.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
              onClick={() => setSelectedId(country.id)}
              className="relative bg-white/[0.02] border border-white/[0.08] backdrop-blur-md rounded-2xl p-8 flex flex-col hover:bg-white/[0.05] hover:border-white/[0.15] cursor-pointer transition-all duration-300 group overflow-hidden"
            >
              {/* Subtle Watermark Flag */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500 pointer-events-none grayscale group-hover:grayscale-0">
                <FlagIcon className="w-full h-full object-cover" />
              </div>

              <motion.div layoutId={`header-${country.id}`} className="flex items-center gap-5 mb-6 relative z-10">
                <motion.div layoutId={`flag-${country.id}`} className="w-14 h-14 overflow-hidden rounded-full shadow-lg border border-white/[0.1]">
                  <FlagIcon className="w-full h-full object-cover" />
                </motion.div>
                <motion.h3 layoutId={`title-${country.id}`} className="text-3xl font-semibold text-white tracking-tight">{country.name}</motion.h3>
              </motion.div>
              
              <div className="flex flex-col flex-1 justify-between relative z-10">
                <motion.p layoutId={`fact-${country.id}`} className="text-zinc-400 font-light text-lg leading-relaxed mb-6">
                  {country.fact}
                </motion.p>
                
                <div className="flex items-center gap-2 text-blue-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                  Ver dossier <ArrowRight size={18} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedId && selectedCountry && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="absolute inset-0 bg-[#0B0F19]/80 backdrop-blur-sm"
              onClick={() => setSelectedId(null)}
            />
            
            <motion.div 
              layoutId={`card-${selectedCountry.id}`}
              className="relative w-full max-w-4xl bg-[#111827] border border-white/[0.1] shadow-2xl rounded-2xl p-8 md:p-12 z-50 overflow-hidden"
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors bg-white/[0.05] p-2 rounded-full"
              >
                <X size={24} />
              </button>

              <div className="flex items-center gap-6 mb-8 border-b border-white/[0.1] pb-6">
                <motion.div layoutId={`flag-${selectedCountry.id}`} className="w-20 h-20 overflow-hidden rounded-full shadow-lg border border-white/[0.1]">
                  <selectedCountry.flag className="w-full h-full object-cover"/>
                </motion.div>
                <motion.h3 layoutId={`title-${selectedCountry.id}`} className="text-4xl font-bold text-white tracking-tight">{selectedCountry.name}</motion.h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Globe2 className="text-blue-400" /> Visión Estratégica
                  </h4>
                  <p className="text-zinc-300 font-light leading-relaxed text-lg mb-6">
                    {selectedCountry.details}
                  </p>
                  <motion.p layoutId={`fact-${selectedCountry.id}`} className="text-zinc-400 italic border-l-2 border-blue-500 pl-4">
                    {selectedCountry.fact}
                  </motion.p>
                </div>

                <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                    <TrendingUp className="text-green-400" /> Datos Macroeconómicos
                  </h4>
                  <div className="flex flex-col gap-6">
                    {selectedCountry.stats.map((stat, i) => (
                      <div key={stat.label} className="w-full">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-zinc-400">{stat.label}</span>
                          <span className="text-white font-medium">{stat.value}</span>
                        </div>
                        <div className="w-full h-2 bg-white/[0.05] rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${stat.pct}%` }}
                            transition={{ delay: 0.4 + (i * 0.15), duration: 0.8, ease: "easeOut" }}
                            className="h-full bg-blue-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

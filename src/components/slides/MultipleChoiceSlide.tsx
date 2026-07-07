"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ArrowRight, Trophy } from "lucide-react";

const quizData = [
  {
    question: "¿Qué país NO pertenece a la Alianza del Pacífico?",
    options: [
      { id: "A", text: "Colombia", isCorrect: false },
      { id: "B", text: "México", isCorrect: false },
      { id: "C", text: "Brasil", isCorrect: true },
      { id: "D", text: "Perú", isCorrect: false },
    ],
    explanation: "Brasil es miembro de MERCOSUR, no de la Alianza del Pacífico."
  },
  {
    question: "¿Qué requisito es indispensable para ser aceptado como Estado Miembro de la Alianza?",
    options: [
      { id: "A", text: "Compartir frontera terrestre", isCorrect: false },
      { id: "B", text: "Tener Tratados de Libre Comercio con todos los miembros", isCorrect: true },
      { id: "C", text: "Tener la misma moneda (Dólar)", isCorrect: false },
      { id: "D", text: "Ser parte de la OCDE", isCorrect: false },
    ],
    explanation: "El Acuerdo Marco exige que cualquier nuevo miembro tenga un TLC vigente con cada uno de los países fundadores."
  },
  {
    question: "En 2022, el bloque admitió oficialmente a su primer 'Estado Asociado'. ¿Cuál fue?",
    options: [
      { id: "A", text: "Singapur", isCorrect: true },
      { id: "B", text: "Corea del Sur", isCorrect: false },
      { id: "C", text: "Japón", isCorrect: false },
      { id: "D", text: "Australia", isCorrect: false },
    ],
    explanation: "Singapur firmó el Tratado de Libre Comercio con la Alianza en 2022, abriendo la puerta directa a Asia."
  },
  {
    question: "Con la entrada en vigor del Protocolo Comercial, ¿qué porcentaje de bienes quedó con arancel cero de forma inmediata?",
    options: [
      { id: "A", text: "50%", isCorrect: false },
      { id: "B", text: "75%", isCorrect: false },
      { id: "C", text: "92%", isCorrect: true },
      { id: "D", text: "100%", isCorrect: false },
    ],
    explanation: "El 92% se desgravó inmediatamente, dejando el 8% restante (principalmente agrícola) para una desgravación gradual."
  },
  {
    question: "NIVEL EXPERTO: ¿Bajo qué nombre opera el mecanismo técnico que integró operativamente las Bolsas de Valores de Santiago, Bogotá, Lima y México para el libre flujo de capitales?",
    options: [
      { id: "A", text: "Fondo de Inversión del Pacífico (FIP)", isCorrect: false },
      { id: "B", text: "Bolsa Única Latinoamericana (BUL)", isCorrect: false },
      { id: "C", text: "Mercado Integrado Latinoamericano (MILA)", isCorrect: true },
      { id: "D", text: "Cámara de Compensación Regional (CCR)", isCorrect: false },
    ],
    explanation: "El MILA es el brazo financiero de la Alianza. Es un dato técnico económico que muy pocos fuera de la bolsa de valores conocen."
  }
];

export default function MultipleChoiceSlide() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = quizData[currentIdx];
  const isRevealed = selectedId !== null;

  const handleSelect = (id: string, isCorrect: boolean) => {
    if (isRevealed) return;
    setSelectedId(id);
    if (isCorrect) setScore(s => s + 1);
  };

  const nextQuestion = () => {
    if (currentIdx < quizData.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedId(null);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-8 max-w-4xl mx-auto text-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }} className="w-32 h-32 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mb-8 border border-blue-500/50">
          <Trophy size={64} />
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
          Evaluación Completada
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-2xl text-zinc-300">
          Puntuación Final: <strong className="text-white text-3xl">{score} / {quizData.length}</strong>
        </motion.p>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 max-w-5xl mx-auto text-center relative">
      <div className="absolute top-8 left-8 right-8 flex justify-between items-center text-zinc-400 text-sm font-medium tracking-widest uppercase">
        <span>Evaluación Interactiva</span>
        <span>Pregunta {currentIdx + 1} de {quizData.length}</span>
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          className="w-full flex flex-col items-center"
        >
          {currentIdx === quizData.length - 1 && (
            <span className="px-4 py-1 bg-red-500/20 text-red-400 border border-red-500/50 rounded-full text-xs font-bold tracking-widest uppercase mb-6 animate-pulse">
              Pregunta Rompe-Cabezas
            </span>
          )}

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-12 leading-tight max-w-4xl">
            {currentQ.question}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedId === opt.id;
              
              let stateClass = "bg-white/[0.02] border-white/[0.08] text-zinc-300 hover:bg-white/[0.05]";
              if (isRevealed) {
                if (opt.isCorrect) {
                  stateClass = "bg-green-500/20 border-green-500/50 text-green-400";
                } else if (isSelected && !opt.isCorrect) {
                  stateClass = "bg-red-500/20 border-red-500/50 text-red-400";
                } else {
                  stateClass = "opacity-30 border-white/[0.08] bg-transparent text-zinc-500";
                }
              }

              return (
                <motion.button
                  key={opt.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  onClick={() => handleSelect(opt.id, opt.isCorrect)}
                  disabled={isRevealed}
                  className={`relative flex items-center p-6 rounded-xl border transition-all text-left ${stateClass}`}
                >
                  <div className="flex-1">
                    <span className="font-bold text-xl mr-4 opacity-50">{opt.id}</span>
                    <span className="text-xl font-medium">{opt.text}</span>
                  </div>
                  
                  {isRevealed && opt.isCorrect && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute right-6 text-green-400">
                      <Check size={24} />
                    </motion.div>
                  )}
                  {isRevealed && isSelected && !opt.isCorrect && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute right-6 text-red-400">
                      <X size={24} />
                    </motion.div>
                  )}
                </motion.button>
              )
            })}
          </div>
          
          <AnimatePresence>
            {isRevealed && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-10 flex flex-col items-center"
              >
                <div className="text-zinc-300 font-light text-lg mb-6 max-w-2xl bg-white/[0.02] border border-white/[0.05] p-4 rounded-xl">
                  {currentQ.explanation}
                </div>
                
                <button 
                  onClick={nextQuestion}
                  className="flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-colors"
                >
                  {currentIdx === quizData.length - 1 ? 'Ver Resultados' : 'Siguiente Pregunta'} <ArrowRight size={20} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

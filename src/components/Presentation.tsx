"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface PresentationProps {
  slides: React.ReactNode[];
}

export default function Presentation({ slides }: PresentationProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Initialize Web Audio API on first interaction
  const initAudio = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  };

  const playTick = () => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    osc.type = "sine";
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.05);
    
    gainNode.gain.setValueAtTime(0.025, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
    
    osc.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  };

  const paginate = useCallback((newDirection: number, exactSlide?: number) => {
    initAudio();
    playTick();
    
    if (exactSlide !== undefined) {
      if (exactSlide >= 0 && exactSlide < slides.length && exactSlide !== currentSlide) {
        setDirection(exactSlide > currentSlide ? 1 : -1);
        setCurrentSlide(exactSlide);
        setIsMenuOpen(false);
      }
      return;
    }

    if (currentSlide + newDirection >= 0 && currentSlide + newDirection < slides.length) {
      setDirection(newDirection);
      setCurrentSlide(currentSlide + newDirection);
    }
  }, [currentSlide, slides.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't paginate if menu is open and trying to navigate slides
      if (isMenuOpen && (e.key === "ArrowRight" || e.key === "ArrowLeft" || e.key === "Space")) {
        return;
      }

      if (e.key === "ArrowRight" || e.key === "Space") {
        paginate(1);
      } else if (e.key === "ArrowLeft") {
        paginate(-1);
      } else if (e.key === "m" || e.key === "M" || e.key === "Escape") {
        initAudio();
        setIsMenuOpen(prev => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [paginate, isMenuOpen]);

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 50 : -50,
        opacity: 0,
        filter: "blur(10px)",
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 50 : -50,
        opacity: 0,
        filter: "blur(10px)",
      };
    },
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-[#0B0F19]"
      onClick={initAudio}
    >
      {/* Discreet Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/5 z-40">
        <motion.div 
          className="h-full bg-blue-600" 
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      <div className="relative w-full h-full flex items-center justify-center p-8">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 400, damping: 40 },
              opacity: { duration: 0.4 },
              filter: { duration: 0.4 }
            }}
            className="absolute w-full max-w-6xl h-full max-h-[900px] flex items-center justify-center"
          >
            {slides[currentSlide]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Spotlight Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 md:pt-32 p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="absolute inset-0 bg-[#0B0F19]/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-[#111827] border border-white/[0.1] rounded-2xl shadow-2xl overflow-hidden z-50 flex flex-col"
            >
              <div className="p-4 border-b border-white/[0.1] bg-white/[0.02]">
                <p className="text-zinc-400 text-sm font-medium">Spotlight Menu - Selecciona una diapositiva</p>
              </div>
              <div className="p-2 max-h-[60vh] overflow-y-auto flex flex-col">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => paginate(0, idx)}
                    className={`text-left p-4 rounded-xl transition-all flex items-center gap-4 ${
                      currentSlide === idx 
                        ? 'bg-blue-600/20 text-white border border-blue-500/30' 
                        : 'text-zinc-400 hover:bg-white/[0.05] hover:text-white border border-transparent'
                    }`}
                  >
                    <span className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center font-mono text-sm shrink-0">
                      {idx + 1}
                    </span>
                    <span className="font-medium text-lg">
                      Diapositiva {idx + 1}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

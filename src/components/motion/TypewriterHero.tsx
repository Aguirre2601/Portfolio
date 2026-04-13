"use client";
import { useTypewriter } from "@/hooks/use-type-writer";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";


// ─── Tipos ───────────────────────────────────────────────────────────────────
interface TypewriterHeroProps {
    /** Palabras que rotan en el efecto typewriter */
    words?: string[];
    /** Velocidad de escritura en ms por carácter */
    typingSpeed?: number;
    /** Velocidad de borrado en ms por carácter */
    deletingSpeed?: number;
    /** Pausa al terminar de escribir (ms) */
    pauseAfterType?: number;
    /** Pausa al terminar de borrar (ms) */
    pauseAfterDelete?: number;
}

// ─── Constantes por defecto ───────────────────────────────────────────────────
const DEFAULT_WORDS = [
    "desarrollando",
    "investigando",
    "consturyendo",
    "innovadondo",
    "diseñando",
];

// ─── Componente principal ─────────────────────────────────────────────────────
export default function TypewriterHero({
    words = DEFAULT_WORDS,
}: TypewriterHeroProps) {
    const { displayText, wordIndex } = useTypewriter({ words });

    return (
        <section className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
            {/* Entrada suave de toda la sección */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex flex-col items-center gap-5"
            >
                {/* Etiqueta superior */}
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-base uppercase tracking-widest font-satoshi font-bold"
                >
                    Portfolio 2026
                </motion.span>

                {/* Titular principal */}
                <h1 className="flex flex-wrap items-baseline justify-center gap-x-3 text-5xl font-medium leading-none tracking-tight md:text-7xl">
                    <span className="text-foreground">Estoy</span>

                    {/* Contenedor del texto animado */}
                    <span className="relative flex items-baseline">
                        {/*
             * AnimatePresence detecta cuándo el texto cambia de longitud
             * y aplica la animación de entrada/salida del cursor.
             * Cada letra podría animarse individualmente, pero para el
             * efecto typewriter el cursor parpadeante es suficiente y
             * más liviano en rendimiento.
             */}
                        <motion.span
                            key={displayText}
                            className = "text-violet-500 font-ArraySemiBold"
                            aria-live="polite"
                            aria-label={`Estoy ${words[wordIndex]}`}
                        >
                            {displayText}
                        </motion.span>

                        {/* Cursor parpadeante */}
                        <motion.span
                            className="ml-0.5 inline-block h-[0.85em] w-0.75 bg-violet-500 align-middle"
                            animate={{ opacity: [1, 1, 0, 0] }}
                            transition={{
                                duration: 0.9,
                                repeat: Infinity,
                                repeatType: "loop",
                                times: [0, 0.5, 0.5, 1],
                            }}
                            aria-hidden="true"
                        />
                    </span>
                </h1>


                {/* Indicadores de palabra actual */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="flex gap-2"
                    aria-hidden="true"
                >
                    {words.map((_, i) => (
                        <span
                            key={i}
                            className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${i === wordIndex ? "bg-violet-500" : "bg-neutral-300"
                                }`}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
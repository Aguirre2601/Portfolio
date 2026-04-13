
import { useEffect, useState, useCallback } from "react";
// src/hooks/useTypewriter.ts

interface UseTypewriterOptions {
    words: string[];
    baseTypingSpeed?: number;  // velocidad base en ms
    deletingSpeed?: number;
    pauseAfterType?: number;
    pauseAfterDelete?: number;
    speedVariation?: number;  // ± variación aleatoria por letra (jitter)
    lengthFactor?: number;  // ms extra por cada carácter de la palabra
}

export function useTypewriter({
    words,
    baseTypingSpeed = 80,
    deletingSpeed = 45,
    pauseAfterType = 1500,
    pauseAfterDelete = 60, //corregido 
    speedVariation = 25,   // ± 25ms de aleatoriedad
    lengthFactor = 2,  // palabras largas → un poco más lentas
}: UseTypewriterOptions) {

    const [displayText, setDisplayText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    // ✦ Función nueva: calcula la demora real para esta palabra
    const getTypingDelay = useCallback((word: string): number => {
        const lengthPenalty = word.length * lengthFactor;   // más letras → más lento
        const jitter = (Math.random() - 0.5) * 2 * speedVariation; // ± variación
        return Math.max(40, baseTypingSpeed + lengthPenalty + jitter);
        //              ↑ mínimo de 40ms para que nunca sea instantáneo
    }, [baseTypingSpeed, speedVariation, lengthFactor]);

    useEffect(() => {
        const currentWord = words[wordIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(currentWord.slice(0, displayText.length + 1));
                if (displayText.length + 1 === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), pauseAfterType);
                }
            } else {
                setDisplayText(currentWord.slice(0, displayText.length - 1));
                if (displayText.length - 1 === 0) {
                    setIsDeleting(false);
                    setTimeout(() => {
                        setWordIndex((prev) => (prev + 1) % words.length);
                    }, pauseAfterDelete);
                }
            }
        }, isDeleting ? deletingSpeed : getTypingDelay(currentWord)); // ← único cambio aquí
        //                                ↑ antes era solo `typingSpeed`

        return () => clearTimeout(timeout);

    }, [displayText, isDeleting, wordIndex, words,
        deletingSpeed, pauseAfterType, pauseAfterDelete, getTypingDelay]);

    return { displayText, wordIndex };
}
// src/app/page.tsx
"use client";
import { useState, useEffect } from "react";

import ParticleSphere from '@/components/canvas/ParticleSphere';
import TypewriterHero from '@/components/motion/TypewriterHero';
import { motion, AnimatePresence } from "motion/react";
import ButtonEstrella from "@/components/ui/Buttons/ButtonEstrella";
import ButtonMinimalist from "@/components/ui/Buttons/ButtonMinimalist";
import Grid from "@/components/ui/Grid/Grid";


export default function HomePage() {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
        const timer = setTimeout(() => {
            const AOS = require('aos');
            AOS.init({
                duration: 1000,  // delay para asegurar que el DOM esté estable
                once: true,
                mirror: false,
                startEvent: 'DOMContentLoaded', // Esta opción ayuda a que AOS no oculte cosas que ya deberían verse
            });
            AOS.refresh();
        }, 100); // 100ms es imperceptible para el usuario pero vital para el código

        return () => clearTimeout(timer); // Limpieza de memoria
    }, []);


    return (
        <>
            {/* Fondo 3D fijo — detrás de todo */}
            <ParticleSphere />

            {/* Tu contenido encima */}
            <main className="relative z-10 pointer-events-none ">
                {/* Hero — primera pantalla */}
                <section className="h-screen flex flex-col items-center justify-center text-center px-8">
                    <TypewriterHero />
                </section>
                <div className='py-24 md:pt-40 px-6 md:px-12 lg:px-24 tracking-tight relative' id="servicios">
                    <div className='flex flex-col items-center text-center mb-16'>
                        <h2 className='text-5xl text-transparent bg-clip-text bg-linear-to-br from-gray-100 via-gray-400 to-gray-200 font-outfit font-normal' data-aos={isMounted ? "fade-up" : undefined}>Desarrollo web con arquitectura analítica</h2>
                        <p className="tracking-widest font-satoshi  font-light max-w-1/2 md:text-xl mt-5 text-transparent bg-clip-text bg-linear-to-br from-gray-100 via-gray-300 to-gray-100 " data-aos={isMounted ? "fade-up" : undefined}>
                            Construyo software priorizando la integridad de los datos y la eficiencia del código para resolver desafíos técnicos complejos
                        </p>
                        <div className='flex flex-row items-center gap-2 md:gap-6 relative z-30 justify-center mt-6' data-aos={isMounted ? "fade-up" : undefined}>
                            <a href="#ApWhatApps"><ButtonEstrella children="Explora mis proyectos . . ." /> </a>
                            <a href="#proyectos"> <ButtonMinimalist /> </a>
                        </div>
                    </div>
                    <Grid/>
                </div>
                {/* Segunda sección — acá la esfera ya está dispersa */}
                <section className="h-screen flex items-center justify-center">
                    <h2 className="text-3xl font-light opacity-70">Sobre mí</h2>
                </section>
                <section className="h-screen flex items-center justify-center">
                    <h2 className="text-3xl font-light opacity-70">Sobre mí 2</h2>
                </section>
                <section className="h-screen flex items-center justify-center">
                    <h2 className="text-3xl font-light opacity-70">Sobre mí 3</h2>
                </section>

            </main>
        </>
    );
}
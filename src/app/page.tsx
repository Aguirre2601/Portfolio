// src/app/page.tsx
"use client";
import { useState, useEffect } from "react";

import ParticleSphere from '@/components/canvas/ParticleSphere';
import TypewriterHero from '@/components/motion/TypewriterHero';
import { motion, AnimatePresence } from "motion/react";
import ButtonEstrella from "@/components/ui/Buttons/ButtonEstrella";
import ButtonMinimalist from "@/components/ui/Buttons/ButtonMinimalist";
import Grid from "@/components/ui/Grid/Grid";
import GlowText from "@/components/ui/GlowText";


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
            <ParticleSphere />{/* Fondo 3D fijo — detrás de todo */}
            <main className="relative z-10 pointer-events-none "> 
                <section className="h-screen flex flex-col items-center justify-center text-center px-8" id="home">
                    <TypewriterHero />
                </section>
                <section className="h-screen flex items-center justify-center">
                    <div className='md:pt-40 px-6 md:px-12 lg:px-24 tracking-tight relative' id="Sobre mí">
                        <Grid />
                    </div>
                </section>
                <section className="h-screen flex flex-col items-center justify-center text-center px-8" id="Services">
                    <div className='md:pt-40 px-6 md:px-12 lg:px-24 tracking-tight relative'>
                        <div className='flex flex-col items-center text-center mb-16 '>
                            <h2 className='text-5xl text-transparent bg-clip-text bg-linear-to-br from-gray-100 via-gray-400 to-gray-200 font-satoshi font-normal p-4' data-aos={isMounted ? "fade-up" : undefined}>¿Buscas un perfil profesional que no genere deuda técnica?</h2>
                            <p className="tracking-widest font-satoshi  font-light max-w-1/2 md:text-xl mt-3 text-transparent bg-clip-text bg-linear-to-br from-gray-100 via-gray-300 to-gray-100 " data-aos={isMounted ? "fade-up" : undefined}>Soy una desarrolladora convencida de que <a className="underline decoration-red-500">la eficiencia no está solo en que el código funcione</a>, sino en que sea legible y escalable.
                            </p>
                            <p className="tracking-widest font-satoshi  font-light max-w-1/2 md:text-xl mt-3 text-transparent bg-clip-text bg-linear-to-br from-gray-100 via-gray-300 to-gray-100 " data-aos={isMounted ? "fade-up" : undefined}>Utilizo estándares de <a className="underline decoration-violet-700">Clean Code</a> y principios <a className="underline decoration-sky-500">S.O.L.I.D</a> para facilitar el mantenimiento y la integridad de los datos. Mi meta es ser el soporte que ayude al líder a escalar el proyecto <a className="underline decoration-lime-400">sin fricciones técnicas</a>.</p>
                            <p className="tracking-widest font-satoshi  font-light max-w-1/2 md:text-xl mt-3 text-transparent bg-clip-text bg-linear-to-br from-gray-100 via-gray-300 to-gray-100 " data-aos={isMounted ? "fade-up" : undefined}>¿Conversamos sobre cómo puedo fortalecer tu equipo de desarrollo?</p>
                            <div className='flex flex-col items-center gap-2  relative z-30 justify-center mt-6 md:flex-row md:gap-6' data-aos={isMounted ? "fade-up" : undefined}>
                                <a href="#proyectos"> <ButtonMinimalist /> </a>
                                <a href="#ApWhatApps"><ButtonEstrella children="Explora mis proyectos . . ." /> </a>
                            </div>
                        </div>
                    </div>
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
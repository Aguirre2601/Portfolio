// src/app/page.tsx
"use client";
import { useState, useEffect } from "react";

import ParticleSphere from '@/components/canvas/ParticleSphere';
import TypewriterHero from '@/components/motion/TypewriterHero';
import ButtonEstrella from "@/components/ui/Buttons/ButtonEstrella";
import ButtonMinimalist from "@/components/ui/Buttons/ButtonMinimalist";
import ButtonCV from "@/components/ui/Buttons/ButtonCV";
import Grid from "@/components/ui/Grid/Grid";
import {TotalCard} from "@/components/ui/Cards/TotalCard";


import {ImgAtelier} from '@/constants/ImgProjects/ImgAtelier'; 
import {ImgPronafe} from '@/constants/ImgProjects/ImgPronafe';
import {ImgISFDT} from '@/constants/ImgProjects/ImgISFDT'; 
import {ImgClinic} from '@/constants/ImgProjects/ImgClinic'; 
import {ImgBVSV} from '@/constants/ImgProjects/ImgBVSV'; 
import {ImgPasteleria} from '@/constants/ImgProjects/ImgPasteleria';
import {ImgPV} from '@/constants/ImgProjects/ImgPV'; 
import {ImgPyE} from '@/constants/ImgProjects/ImgP&E'; 
import {ImgRaices} from '@/constants/ImgProjects/ImgRaices';
import {ImgTutoBit} from '@/constants/ImgProjects/ImgTutoBit';


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
            <ParticleSphere />{/* Fondo 3D fijo — detrás de todo */} <ButtonCV />{/* Botón de descarga de CV — siempre visible */}
            <main className="relative z-3 pointer-events-none ">
                
                <section className="h-screen flex flex-col items-center justify-center text-center px-8" id="home">
                    <TypewriterHero />
                </section>
                <section className="flex items-center justify-center">
                    <div className='md:pt-40 px-6 md:px-12 lg:px-24 relative z-2' id="Sobre mí">
                        <Grid/>
                    </div>
                </section>
                <section className="flex flex-col items-center justify-center text-center md:px-8 mt-20" id="Services">
                    <div className='md:px-12 lg:px-24 tracking-tight relative'>
                        <div className='flex flex-col items-center text-center mb-3 md:mb-16 '>
                            <h2 className='text-lg md:text-5xl text-transparent bg-clip-text bg-linear-to-br from-gray-100 via-gray-400 to-gray-200 font-satoshi font-normal p-4' data-aos={isMounted ? "fade-up" : undefined}>¿Buscas un perfil profesional que no genere deuda técnica?</h2>
                            <p className="tracking-widest font-satoshi  font-light max-w-11/12 text-xs md:text-xl mt-1 md:mt-3 text-transparent bg-clip-text bg-linear-to-br from-gray-100 via-gray-300 to-gray-100 " data-aos={isMounted ? "fade-up" : undefined}> <a className="underline decoration-red-500">La eficiencia no está solo en que el código funcione</a>, sino en que sea legible y escalable.
                            </p>
                            <p className="tracking-widest font-satoshi  font-light text-xs md:text-xl mt-1  md:mt-3 text-transparent bg-clip-text bg-linear-to-br from-gray-100 via-gray-300 to-gray-100 max-w-11/12 " data-aos={isMounted ? "fade-up" : undefined}>Uso estándares de <a className="underline decoration-violet-700">Clean Code</a> y principios <a className="underline decoration-sky-500">S.O.L.I.D</a> para facilitar el mantenimiento y la integridad de mis proyectos. Mi meta es ser el soporte que ayude al líder a escalar el proyecto <a className="underline decoration-lime-400">sin fricciones técnicas</a>.</p>
                            <p className="tracking-widest font-satoshi  font-light max-w-11/12 text-xs md:text-xl mt-2 md:mt-3 text-transparent bg-clip-text bg-linear-to-br from-gray-100 via-gray-300 to-gray-100 " data-aos={isMounted ? "fade-up" : undefined}>¿Conversamos sobre cómo puedo fortalecer tu equipo de desarrollo?</p>
                            <div className='flex flex-col items-center gap-2 relative z-2 justify-center mt-3 md:mt-6 md:flex-row md:gap-6 ' data-aos={isMounted ? "fade-up" : undefined}>
                                <a href="#Contacto"> <ButtonMinimalist /> </a>
                                <a href="#Proyectos"><ButtonEstrella children="Explora mis proyectos . . ." /> </a>
                            </div>
                        </div>
                    </div>
                </section> 

                <section className="flex items-center justify-center m-3" id="Proyectos">
                        <div className="" >
                            <div className="rounded-xl p-1 md:p-6 bg-linear-65 to-mauve-950 from-neutral-900 border-xl border-neutral-800 grid grid-cols-5 gap-8" data-aos={isMounted ? "fade-up" : undefined}>
                                <div className="w-90 h-auto ">
                                    <TotalCard 
                                    listaDeImagenes={ImgClinic} 
                                    shadow="hover:border hover:border-green-600/50 hover:shadow-lg transition-shadow hover:shadow-green-600/50" 
                                    textoTitulo="Clinica"
                                    textoParrafo1="Aplicación web médica desarrollada de forma colaborativa. Implementa la gestión integral (CRUD) de turnos, médicos y pacientes. La solución utiliza React y Tailwind CSS en el client-side, conectándose mediante una API REST a un ecosistema de Supabase, el cual administra la base de datos relacional y el ciclo de vida de la autenticación de usuarios."
                                    textoParrafo2= "React | Tailwind CSS | Supabase | PostgreSQL"
                                    GitHub={false}
                                    />
                                </div>
                                <div className="w-90 h-auto ">
                                    <TotalCard 
                                    listaDeImagenes={ImgPronafe} 
                                    shadow="hover:border hover:border-blue-500/50 hover:shadow-lg transition-shadow hover:shadow-blue-500/50" 
                                    textoTitulo="PRONAFE"
                                    textoParrafo1="Desarrolladora Full Stack en proyecto colaborativo para PRONAFE Argentina. Diseñé e implementé de forma integral el módulo de auditoría y reportes estadísticos de formularios. Alcance técnico: En la capa de backend, programé los modelos, rutas y controladores para el procesamiento y persistencia de estados de aprobación. En la capa frontend, desarrollé las vistas de usuario, integrando grillas dinámicas de datos y componentes gráficos interactivos para el análisis visual de las métricas."
                                    textoParrafo2="Laravel | TypeScript | Tailwind CSS | React| PHP | MySQL"
                                    GitHub={true}
                                    linkGitHub="https://github.com/Aguirre2601/Lirios-Atelier"
                                    />
                                </div>
                                <div className="w-90 h-auto ">
                                    <TotalCard 
                                    listaDeImagenes={ImgISFDT} 
                                    shadow="hover:border hover:border-sky-800/50 hover:shadow-lg transition-shadow hover:shadow-sky-800/50" 
                                    textoTitulo="ISFDT"
                                    textoParrafo1="Desarrollada en .NET Lirios atelier es una Desktop Applications que funciona como un CRUD de clientes, productos y ventas."
                                    textoParrafo2="C# | .NET | SQL Server | Entity Framework | WPF"
                                    GitHub={true}
                                    linkGitHub="https://github.com/Aguirre2601/Lirios-Atelier"
                                    />
                                </div>
                                <div className="w-90 h-auto ">
                                    <TotalCard 
                                    listaDeImagenes={ImgPV} 
                                    shadow="hover:border hover:border-emerald-800/50 hover:shadow-lg transition-shadow hover:shadow-emerald-800/50" 
                                    textoTitulo="Web Plnaeta Verde"
                                    textoParrafo1="Desarrollada en .NET Lirios atelier es una Desktop Applications que funciona como un CRUD de clientes, productos y ventas."
                                    textoParrafo2="C# | .NET | SQL Server | Entity Framework | WPF"
                                    GitHub={true}
                                    linkGitHub="https://github.com/Aguirre2601/Lirios-Atelier"
                                    />
                                </div>
                                
                                <div className="w-90 h-auto ">
                                    <TotalCard 
                                    listaDeImagenes={ImgTutoBit} 
                                    shadow="hover:border hover:border-indigo-800/50 hover:shadow-lg transition-shadow hover:shadow-indigo-800/50" 
                                    textoTitulo="Web TutoBit"
                                    textoParrafo1="Desarrollada en .NET Lirios atelier es una Desktop Applications que funciona como un CRUD de clientes, productos y ventas."
                                    textoParrafo2="C# | .NET | SQL Server | Entity Framework | WPF"
                                    GitHub={true}
                                    linkGitHub="https://github.com/Aguirre2601/Lirios-Atelier"
                                    />
                                </div>
                                <div className="w-90 h-auto ">
                                    <TotalCard 
                                    listaDeImagenes={ImgPasteleria} 
                                    shadow="hover:border hover:border-orange-500/50 hover:shadow-lg transition-shadow hover:shadow-orange-500/50" 
                                    textoTitulo="Pasteleria - Un poco dulce"
                                    textoParrafo1="Desarrollada en .NET Lirios atelier es una Desktop Applications que funciona como un CRUD de clientes, productos y ventas."
                                    textoParrafo2="C# | .NET | SQL Server | Entity Framework | WPF"
                                    GitHub={true}
                                    linkGitHub="https://github.com/Aguirre2601/Lirios-Atelier"
                                    />
                                </div>
                                <div className="w-90 h-auto ">
                                    <TotalCard 
                                    listaDeImagenes={ImgAtelier} 
                                    shadow="hover:border hover:border-lime-500/50 hover:shadow-lg transition-shadow hover:shadow-lime-500/50" 
                                    textoTitulo="Lirios Atelier"
                                    textoParrafo1="Desarrollada en .NET Lirios atelier es una Desktop Applications que funciona como un CRUD de clientes, productos y ventas."
                                    textoParrafo2="C# | .NET | SQL Server | Entity Framework | WPF"
                                    GitHub={true}
                                    linkGitHub="https://github.com/Aguirre2601/Lirios-Atelier"
                                    />
                                </div>
                                <div className="w-90 h-auto ">
                                    <TotalCard 
                                    listaDeImagenes={ImgBVSV} 
                                    shadow="hover:border hover:border-red-700/50 hover:shadow-lg transition-shadow hover:shadow-red-700/50" 
                                    textoTitulo="Bomberos Voluntarios San Vicente"
                                    textoParrafo1="Desarrollada en .NET Lirios atelier es una Desktop Applications que funciona como un CRUD de clientes, productos y ventas."
                                    textoParrafo2="C# | .NET | SQL Server | Entity Framework | WPF"
                                    GitHub={true}
                                    linkGitHub="https://github.com/Aguirre2601/Lirios-Atelier"
                                    />
                                </div>
                                <div className="w-90 h-auto ">
                                    <TotalCard 
                                    listaDeImagenes={ImgPyE} 
                                    shadow="hover:border hover:border-cyan-400/50 hover:shadow-lg transition-shadow hover:shadow-cyan-400/50" 
                                    textoTitulo="Calculadora de Estadisticas"
                                    textoParrafo1="Desarrollada en .NET Lirios atelier es una Desktop Applications que funciona como un CRUD de clientes, productos y ventas."
                                    textoParrafo2="C# | .NET | SQL Server | Entity Framework | WPF"
                                    GitHub={true}
                                    linkGitHub="https://github.com/Aguirre2601/Lirios-Atelier"
                                    />
                                </div>
                                <div className="w-90 h-auto ">
                                    <TotalCard 
                                    listaDeImagenes={ImgRaices} 
                                    shadow="hover:border hover:border-amber-50/50 hover:shadow-lg transition-shadow hover:shadow-amber-50/50" 
                                    textoTitulo="Calculadora de raíces"
                                    textoParrafo1="Desarrollada en .NET Lirios atelier es una Desktop Applications que funciona como un CRUD de clientes, productos y ventas."
                                    textoParrafo2="C# | .NET | SQL Server | Entity Framework | WPF"
                                    GitHub={true}
                                    linkGitHub="https://github.com/Aguirre2601/Lirios-Atelier"
                                    />
                                </div>
                            </div>
                        </div>   
                </section> 
                <section className="h-screen flex items-center justify-center">
                    <h2 className="text-3xl font-light opacity-70">Proyectos</h2>
                </section>
                <section className="h-screen flex items-center justify-center">
                    <h2 className="text-3xl font-light opacity-70">Contacto</h2>
                </section>
                <section className="h-screen flex items-center justify-center">
                    <h2 className="text-3xl font-light opacity-70">Sobre mí 3</h2>
                </section>

            </main>
        </>
    );
}
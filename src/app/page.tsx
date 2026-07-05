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

import GlowText from '@/components/ui/Title/GlowText';

import MotionStudio from '@/components/ui/Title/MotionStudio';
import MagicCard from "@/components/ui/cardmagic";

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

import EducationTimeline from '@/components/ui/EducationTimeline';

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
                    <TypewriterHero classname="text-celeste font-ArraySemiBold "></TypewriterHero>
                </section>

                <section className="flex flex-col items-center justify-center text-center md:px-8 mt-20  backdrop-blur-xs" id="Services">
                    <div className='md:px-12 lg:px-24 px-9 tracking-tight relative'>
                        <div className='flex flex-col items-center text-center mb-3 md:mb-16 '>
                            <h2 className=' text-transparent bg-clip-text bg-linear-to-br from-gray-100 via-gray-400 to-gray-100 font-ArraySemiBold font-bold text-4xl md:text-6xl p-6 text-center' data-aos={isMounted ? "fade-up" : undefined}>¿Buscas un perfil profesional que no genere deuda técnica?</h2>
                            <p className="tracking-widest font-satoshi  font-light   text-xs md:text-xl mt-1 md:mt-3 text-transparent bg-clip-text bg-linear-to-br from-gray-100 via-gray-300 to-gray-100 " data-aos={isMounted ? "fade-up" : undefined}> <a className="underline decoration-red-500">La eficiencia no está solo en que el código funcione</a>, sino en que sea legible y escalable.
                            </p>
                            <p className="tracking-widest font-satoshi  font-light text-xs md:text-xl mt-1  md:mt-3 text-transparent bg-clip-text bg-linear-to-br from-gray-100 via-gray-300 to-gray-100   " data-aos={isMounted ? "fade-up" : undefined}>Uso estándares de <a className="underline decoration-violet-700">Clean Code</a> y principios <a className="underline decoration-sky-500">S.O.L.I.D</a> para facilitar el mantenimiento y la integridad de mis proyectos. Mi meta es ser el soporte que ayude al líder a escalar el proyecto <a className="underline decoration-lime-400">sin fricciones técnicas</a>.</p>
                            <p className="tracking-widest font-satoshi  font-light   text-xs md:text-xl mt-2 md:mt-3 text-transparent bg-clip-text bg-linear-to-br from-gray-100 via-gray-300 to-gray-100 " data-aos={isMounted ? "fade-up" : undefined}>¿Conversamos sobre cómo puedo fortalecer tu equipo de desarrollo?</p>
                            <div className='flex flex-col items-center gap-2 relative z-2 justify-center mt-3 md:mt-6 md:flex-row md:gap-6 ' data-aos={isMounted ? "fade-up" : undefined}>
                                <a href="#Contacto"> <ButtonMinimalist /> </a>
                                <a href="#Proyectos"><ButtonEstrella children="Explora mis proyectos . . ." /> </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flex items-center justify-center" id='who is me'>
                    <div className='px-6 md:px-12 lg:px-24 relative z-2'>
                        <Grid/>
                    </div>
                </section>

                <section className="items-center justify-center bg-linear-to-b from-transparent to-black" id="projects">
                    <MotionStudio /> 
                    <h2 className='text-transparent bg-clip-text bg-linear-to-br  from-slate-50 via-gray-400 to-slate-100 font-satoshi font-bold text-4xl md:text-6xl p-6 text-center mb-14 ' data-aos={isMounted ? "fade-up" : undefined}>  <span className="font-ArraySemiBold">EXPLORA MIS PROYECTOS</span></h2>
                    <div className="  grid 
                    grid-cols-2 gap-1 p-0.5
                    sm:grid-cols-3 sm:gap-1.3 sm:p-1 
                    md:grid-cols-3 md:gap-3 md:p-3 
                    lg:grid-cols-5 lg:gap-4 lg:p-6" 
                    data-aos={isMounted ? "fade-up" : undefined}>
                        <div className="w-25 sm:w-40 md:w-75 lg:w-85 h-auto ">
                            <TotalCard 
                            listaDeImagenes={ImgClinic} 
                            shadow="hover:border hover:border-green-600/50 hover:shadow-lg transition-shadow hover:shadow-green-600/50" 
                            textoTitulo="Clinica"
                            textoParrafo1="Aplicación web médica desarrollada de forma colaborativa. Implementa la gestión integral (CRUD) de turnos, médicos y pacientes. La solución utiliza React y Tailwind CSS en el client-side, conectándose mediante una API REST a un ecosistema de Supabase, el cual administra la base de datos relacional y el ciclo de vida de la autenticación de usuarios."
                            textoParrafo2= "React | Tailwind CSS | Supabase | PostgreSQL"
                            GitHub={false}
                            />
                        </div>
                        <div className="w-25 sm:w-40 md:w-75 lg:w-85 h-auto ">
                            <TotalCard 
                            listaDeImagenes={ImgPronafe} 
                            shadow="hover:border hover:border-blue-500/50 hover:shadow-lg transition-shadow hover:shadow-blue-500/50" 
                            textoTitulo="PRONAFE"
                            textoParrafo1="Desarrolladora Full Stack en proyecto colaborativo para PRONAFE Argentina. Diseñé e implementé de forma integral el módulo de auditoría y reportes estadísticos de formularios. Alcance técnico: En la capa de backend, programé los modelos, rutas y controladores para el procesamiento y persistencia de estados de aprobación. En la capa frontend, desarrollé las vistas de usuario, integrando grillas dinámicas de datos y componentes gráficos interactivos para el análisis visual de las métricas."
                            textoParrafo2="Laravel | TypeScript | Tailwind CSS | React| PHP | MySQL"
                            GitHub={false}
                            />
                        </div>
                        <div className="w-25 sm:w-40 md:w-75 lg:w-85 h-auto ">
                            <TotalCard 
                            listaDeImagenes={ImgISFDT} 
                            shadow="hover:border hover:border-sky-800/50 hover:shadow-lg transition-shadow hover:shadow-sky-800/50" 
                            textoTitulo="ISFDT"
                            textoParrafo1="Desarrollo individual de un sistema de gestión y autenticación para institutos educativos. Como desarrolladora del proyecto, diseñé la arquitectura lógica de la base de datos e implementé el backend completo aplicando patrones MVC, middlewares de seguridad para el control de accesos y un servicio integrado de correos. Desarrollé los módulos CRUD para la administración de alumnos, profesores, directores y carreras, y diseñé la interfaz de usuario adaptativa enfocada en la visualización eficiente de datos."
                            textoParrafo2="PHP | MySQL | WampServer | Tailwind CSS"
                            GitHub={true}
                            linkGitHub="https://github.com/Aguirre2601/InstituteProject"
                            />
                        </div>
                        <div className="w-25 sm:w-40 md:w-75 lg:w-85 h-auto  ">
                            <TotalCard 
                            listaDeImagenes={ImgPV} 
                            shadow="hover:border hover:border-emerald-800/50 hover:shadow-lg transition-shadow hover:shadow-emerald-800/50" 
                            textoTitulo="Web Planeta Verde"
                            textoParrafo1="Desarrollo individual de un portal web informativo para una ONG ambientalista. Proyecto diseñado bajo los criterios de UX/UI y diseño adaptativo (responsive design). Implementé la maquetación semántica del sitio, la lógica de interactividad mediante JavaScript y la integración de complementos visuales dinámicos para maximizar el engagement y la usabilidad de la plataforma."
                            textoParrafo2="CSS3 | HTML5 | JS | Boostrap | plugins"
                            GitHub={true}
                            linkGitHub="https://github.com/Aguirre2601/PlanetaVerde-Boostrap_CSS_HTML_PLUINGS"
                            />
                        </div>
                        <div className="w-25 sm:w-40 md:w-75 lg:w-85 h-auto ">
                            <TotalCard 
                            listaDeImagenes={ImgTutoBit} 
                            shadow="hover:border hover:border-indigo-800/50 hover:shadow-lg transition-shadow hover:shadow-indigo-800/50" 
                            textoTitulo="Web TutoBit"
                            textoParrafo1="TutoBit es una plataforma web interactiva que simula la interfaz de un agente virtual especializado en tutorías de programación. El proyecto fue desarrollado priorizando un diseño limpio, accesible y centrado en el usuario mediante las siguientes prácticas: A11y, Affordance, Diseño Responsivo y Modo Oscuro/Claro"
                            textoParrafo2="HTML5 | CSS3 | JS "
                            GitHub={true}
                            linkGitHub="https://github.com/Aguirre2601/BIT-tutOnline"
                            />
                        </div>
                        <div className="w-25 sm:w-40 md:w-75 lg:w-85 h-auto ">
                            <TotalCard 
                            listaDeImagenes={ImgPasteleria} 
                            shadow="hover:border hover:border-orange-500/50 hover:shadow-lg transition-shadow hover:shadow-orange-500/50" 
                            textoTitulo="Pasteleria - Un poco dulce"
                            textoParrafo1="Aplicación web estática enfocada en rendimiento y accesibilidad. Implementa Responsive Web Design mediante layouts flexibles y la configuración estratégica de breakpoints con Media Queries para una adaptabilidad total. Integra de forma eficiente herramientas de terceros, incluyendo la optimización tipográfica con Google Fonts y la geolocalización interactiva con la API de Google Maps, aplicando buenas prácticas de renderizado y consistencia visual cross-browser."
                            textoParrafo2="HTML5|  CSS3 |  Google Maps Platform API"
                            GitHub={true}
                            linkGitHub="https://github.com/Aguirre2601/pasteleria-CSS-HTML-2"
                            />
                        </div>
                        <div className="w-25 sm:w-40 md:w-75 lg:w-85 h-auto ">
                            <TotalCard 
                            listaDeImagenes={ImgAtelier} 
                            shadow="hover:border hover:border-lime-500/50 hover:shadow-lg transition-shadow hover:shadow-lime-500/50" 
                            textoTitulo="Lirios Atelier"
                            textoParrafo1="Sistema de escritorio ERP desarrollado de extremo a extremo (End-to-End) para el control de stock y cuentas corrientes de clientes y proveedores. Implementa una arquitectura de software en 3 capas utilizando C# y .NET. Fui responsable del ciclo completo del proyecto: modelado y normalización de la base de datos relacional en SQL Server, persistencia y abstracción de datos mediante Entity Framework (ORM), y el diseño e implementación de la interfaz de usuario en WPF, aplicando principios avanzados de UI/UX para optimizar la productividad operativa."
                            textoParrafo2="C# | .NET | SQL Server | Entity Framework | WPF"
                            GitHub={true}
                            linkGitHub="https://github.com/Aguirre2601/Lirios-Atelier"
                            />
                        </div>
                        <div className="w-25 sm:w-40 md:w-75 lg:w-85 h-auto  ">
                            <TotalCard 
                            listaDeImagenes={ImgBVSV} 
                            shadow="hover:border hover:border-red-700/50 hover:shadow-lg transition-shadow hover:shadow-red-700/50" 
                            textoTitulo="Bomberos Voluntarios San Vicente"
                            textoParrafo1="Aplicación colaborativa para auditoría de presentismo. Diseñé y normalicé la base de datos relacional, programando queries para métricas de asistencia y exportación a .xlsx. En el frontend, lideré el ciclo de diseño UI/UX mediante mockups, el desarrollo de la interfaz final y la redacción de la documentación técnica, asegurando un producto escalable para entornos operativos de alta exigencia."
                            textoParrafo2="C# | .NET | SQL Server | Entity Framework | WPF | miro"
                            GitHub={false}
                            linkGitHub="https://github.com/Aguirre2601/Lirios-Atelier"
                            />
                        </div>
                        <div className="w-25 sm:w-40 md:w-75 lg:w-85 h-auto  ">
                            <TotalCard 
                            listaDeImagenes={ImgPyE} 
                            shadow="hover:border hover:border-cyan-400/50 hover:shadow-lg transition-shadow hover:shadow-cyan-400/50" 
                            textoTitulo="Calculadora de Estadisticas"
                            textoParrafo1="Aplicación de escritorio desarrollada individualmente en C# y .NET para el procesamiento cuantitativo de datos. Fui responsable de la arquitectura integral del software, desde la lógica matemática para el ordenamiento y cálculo de frecuencias, hasta la capa de presentación que genera gráficas estadísticas interactivas para el análisis visual de las distribuciones."
                            textoParrafo2="C# | .NET"
                            GitHub={true}
                            linkGitHub="https://github.com/Aguirre2601/Estadistica"
                            />
                        </div>
                        <div className="w-25 sm:w-40 md:w-75 lg:w-85 h-auto ">
                            <TotalCard 
                            listaDeImagenes={ImgRaices} 
                            shadow="hover:border hover:border-amber-50/50 hover:shadow-lg transition-shadow hover:shadow-amber-50/50" 
                            textoTitulo="Calculadora de raíces"
                            textoParrafo1="Software de escritorio desarrollado individualmente en C# y .NET especializado en la resolución algorítmica de raíces polinómicas mediante la regla de Ruffini. El sistema fue estructurado bajo un patrón de diseño arquitectónico en capas para garantizar la separación de responsabilidades."
                            textoParrafo2="C# | .NET"
                            GitHub={true}
                            linkGitHub="https://github.com/Aguirre2601/Calculadora-Ruffini"
                            />
                        </div>
                    </div>  
                </section> 

                <section className="flex items-center justify-center bg-black" id="education ">
                    <EducationTimeline />
                </section>

                <section
                    className="relative z-2 bg-cover bg-center bg-no-repeat h-screen"
                    style={{ backgroundImage: "url('/pexels-mahmoudramadan-31622908.jpg')" }}
                    id="Contacto"
                >
                    <MagicCard />
                </section>



            </main>
        </>
    );
}
"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const educationData = [
  {
    year: "2026",
    title: "Licenciatura en Ciencia de Datos",
    institution: "Universidad de la Ciudad de Buenos Aires",
    description: "Formación especializada en modelos predictivos, estadística avanzada, matemática y computación para transformar datos en decisiones estratégicas.",
  },
  {
    year: "2023 - 2026",
    title: "Analista Programador en Desarrollo de Aplicaciones",
    institution: "Instituto Superior de Formación Técnica Nº 93",
    description: "Sólida base en ingeniería de software, arquitectura de bases de datos SQL y lógica de programación aplicable a la ingeniería de datos.",
  },
  {
    year: "2022 - 2023",
    title: "Medicina",
    institution: "Facultad de Medicina (UBA)",
    description: "Estudios universitarios que desarrollaron mi pensamiento analítico y el interés por la investigación y el análisis de problemas complejos.",
  },
  {
    year: "2018 - 2022",
    title: "CBC de Medicina",
    institution: "Universidad de Buenos Aires (UBA)",
    description: "Formación inicial con fuerte foco en ciencias exactas, incluyendo Biofísica, Pensamiento Científico, Química y Análisis Matemático.",
  },
  {
    year: "2019",
    title: "Bachiller en Economía y Administración",
    institution: "Nuevo Colegio Glew",
    description: "Introducción a los conceptos clave de gestión empresarial y análisis financiero.",
  },
];

export default function EducationTimeline() {
  const containerRef = useRef(null);

  // 1. Detectamos el progreso de scroll exclusivamente dentro de este contenedor
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"], // Empieza cuando el inicio entra al centro, termina cuando el final llega al centro
  });

  // 2. Aplicamos un efecto "spring" para que la línea se llene de forma elástica y suave
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <section 
      ref={containerRef} 
      className="relative max-w-4xl mx-auto px-4 py-16 bg-black text-white min-h-screen "
    >
      <h2 className="font-ArraySemiBold  mb-20 uppercase tracking-wider    text-transparent bg-clip-text bg-linear-to-br  from-slate-50 via-gray-400 to-slate-100   font-bold text-4xl md:text-6xl p-6 text-center  ">
        Mi Formación
      </h2>

      <div className="relative">
        {/* LÍNEA DE FONDO (Gris oscura, fija) */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-neutral-800 rounded-full" />

        {/* LÍNEA DE PROGRESO (Blanca, se llena con el scroll) */}
        <motion.div 
          className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-2  rounded-full origin-top   bg-linear-to-t from-purple-500 from-5% via-violet-800 via-45% to-violet-950 to-90%"
          style={{ scaleY }}
        />

        {/* CONTENEDOR DE HITOS ACADÉMICOS */}
        <div className="space-y-20">
          {educationData.map((item, index) => {
            // Alternamos si va a la izquierda o derecha en pantallas de computadora
            const isEven = index % 2 === 0;

            return (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-start relative ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Bloque del contenido de la tarjeta */}
                <motion.div 
                  className="w-90% md:w-3/7 pl-12 md:pl-0 md:px-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className=" hover:border-purple-700 transition-colors  p-4 md:p-6 bg-black/50 backdrop-blur-sm border border-gray-700 rounded-xl pointer-events-auto ">
                    {/* Año resaltado con tu fuente principal */}
                    <span className="font-ArraySemiBold text-xl text-neutral-400 block mb-2">
                      {item.year}
                    </span>
                    
                    {/* Título del estudio */}
                    <h3 className="font-ArraySemiBold text-2xl text-white uppercase mb-1">
                      {item.title}
                    </h3>
                    
                    {/* Institución */}
                    <h4 className="font-satoshi font-medium text-sm text-neutral-400 tracking-wide uppercase mb-3">
                      {item.institution}
                    </h4>
                    
                    {/* Descripción en Satoshi legible */}
                    <p className="font-satoshi text-neutral-400 text-sm leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </motion.div>

                {/* El círculo central indicador */}
                <div className="absolute left-2 md:left-1/2 transform -translate-x-1/2 top-6 z-10  ">
                  <div className="w-5 h-5 rounded-full bg-black border-4 border-white  " />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

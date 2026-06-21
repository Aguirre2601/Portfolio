import { useEffect, useState } from 'react';
import GlowText from '../GlowText';
import {ImgBackend} from '@/constants/ImgBackend';
import {ImgFrontend} from '@/constants/ImgFrontend';
import {ImgTools} from '@/constants/ImgTool';

export default function Grid() {
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
        <div className="grid gap-4 grid-cols-3">
            <div className="col-span-3 rounded-xl p-1 md:p-6 bg-linear-65 from-mauve-950 to-neutral-900 border border-neutral-800   " data-aos={isMounted ? "fade-up" : undefined}>
                <h2 className="text-sm sm:text-xs md:text-3xl m-0.5 md:m-2 font-semibold text-transparent bg-clip-text bg-linear-to-br from-gray-100 via-gray-400 to-gray-100 font-satoshi  flex flex-col lg:flex-row">Hola! soy<GlowText text="Mariela" /></h2> 
                <h3 className="text-xs sm:text-xs md:text-2xl m-2 font-medium text-transparent bg-clip-text bg-linear-to-br from-gray-100 via-gray-400 to-gray-100 font-satoshi">Tengo 24 años y vivo en Buenos Aires, Argentina.</h3>
                <p className="text-xs sm:text-sm md:text-xl m-2 text-transparent bg-clip-text bg-linear-to-br from-gray-100 via-gray-400 to-gray-100 font-satoshi font-normal">Busco entender la lógica detrás de lo que solemos dar por sentado. Combino la investigación constante con una rutina activa: correr, tocar el piano y meditar son mis herramientas para mantener el equilibrio entre mente y cuerpo.</p>
            </div>


            <div className="row-span-1 rounded-xl p-1 md:p-6 bg-linear-65 to-neutral-900 from-mauve-950 border border-neutral-800   " data-aos={isMounted ? "fade-up" : undefined}>
                <h2 className="text-sm sm:text-xs md:text-3xl  m-2 font-semibold font-satoshi  flex flex-col min-[1025px]:flex-row  text-transparent bg-clip-text bg-linear-to-br from-gray-100 via-gray-400 to-gray-100">Lenguajes de <GlowText text="Frontend" /></h2> 
                <div className="flex flex-wrap gap-1 md:gap-4 mt-1 md:mt-6">
                    {ImgFrontend.map((img, index) => (
                        <div key={index} className="w-4 h-4 m-1 md:w-16 md:h-16 md:m-3" >
                            <img loading="lazy" src={img.src} alt={img.alt} className="w-full h-full object-contain" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-1 md:p-6 border border-slate-700  " data-aos={isMounted ? "fade-up" : undefined}>
                <span className="text-slate-400 text-sm sm:text-xs md:text-3xl ">FOTO</span>
            </div>

            <div className="row-span-1  rounded-xl p-1 md:p-6 bg-linear-65 to-mauve-950 from-neutral-900 border border-neutral-800 " data-aos={isMounted ? "fade-up" : undefined}>
                <h2 className="text-sm sm:text-xs md:text-3xl m-2 font-semibold font-satoshi  flex flex-col min-[1025px]:flex-row  text-transparent bg-clip-text bg-linear-to-br from-gray-100 via-gray-400 to-gray-100">Lenguajes de <GlowText text="Backend" /></h2> 
                <div className="flex flex-wrap gap-1 md:gap-4 mt-1 md:mt-6 ">
                    {ImgBackend.map((img, index) => (
                        <div key={index} className="w-4 h-4 m-1 md:w-16 md:h-16 md:m-3 " >
                            <img loading="lazy" src={img.src} alt={img.alt} className="w-full h-full object-contain" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="col-span-3 rounded-xl p-1 md:p-6   bg-linear-65 to-mauve-950 from-neutral-900 border border-neutral-800  " data-aos={isMounted ? "fade-up" : undefined}>
                <h2 className="text-sm sm:text-xs md:text-3xl m-2 font-semibold font-satoshi  flex flex-row text-transparent bg-clip-text bg-linear-to-br from-gray-100 via-gray-400 to-gray-100 ">Mis  <GlowText text="Tools" /></h2> 
                
                <div className="flex flex-wrap gap-1 md:gap-4 mt-1 md:mt-6">
                    {ImgTools.map((img, index) => (
                    <div key={index} className="w-4 h-4 m-1 md:w-16 md:h-16 md:m-3  " >
                            <img  loading="lazy" src={img.src} alt={img.alt} className="w-full h-full object-contain " />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
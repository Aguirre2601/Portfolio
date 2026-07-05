import { useEffect, useState } from 'react';
import GlowText from '../Title/GlowText';
import {ImgBackend} from '@/constants/ImgBackend';
import {ImgFrontend} from '@/constants/ImgFrontend';
import {ImgTool} from '@/constants/ImgTool';
import GlowCard from '@/components/ui/Shadows/GlowCard';

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
            <div className="col-span-3 p-1 md:p-6 border  border-gray-700 rounded-xl  bg-transparent backdrop-blur-sm " >
                <h2 className="text-sm sm:text-xs md:text-3xl m-0.5 md:m-2 font-semibold text-transparent bg-clip-text bg-linear-to-br from-slate-50 via-gray-400 to-slate-100 font-satoshi  flex flex-col lg:flex-row">Hola! soy<GlowText text="Mariela" /></h2> 
                <h3 className="text-xs sm:text-xs md:text-2xl m-2 font-medium text-transparent bg-clip-text bg-linear-to-br from-slate-50 via-gray-400 to-slate-100 font-satoshi">Tengo 24 años y vivo en Buenos Aires, Argentina.</h3>
                <p className="text-xs sm:text-sm md:text-xl m-2 text-transparent bg-clip-text bg-linear-to-br from-slate-50 via-gray-400 to-slate-100 font-satoshi font-normal">Busco entender la lógica detrás de lo que solemos dar por sentado. Combino la investigación constante con una rutina activa: correr, tocar el piano y meditar son mis herramientas para mantener el equilibrio entre mente y cuerpo.</p>
            </div>


            <div className="row-span-1 p-1 md:p-6 border  border-gray-700 rounded-xl  bg-transparent backdrop-blur-sm   " >
                <h2 className="text-sm sm:text-xs md:text-3xl  m-2 font-semibold font-satoshi  flex flex-col min-[1025px]:flex-row  text-transparent bg-clip-text bg-linear-to-br from-slate-50 via-gray-400 to-slate-100">Lenguajes de <span className="  ml-2 font-ArraySemiBold">  Frontend</span></h2> 
                <div className="flex flex-wrap gap-1 md:gap-4 mt-1 md:mt-6 p-2">
                    {ImgFrontend.map((img, index) => (
                        <GlowCard key={index} className="w-3 h-3 p-0.5 sm:w-15 sm:h-15 sm:p-1 md:w-20px md:h-20px md:p-3" >
                            <img loading="lazy" src={img.src} alt={img.alt} className="w-full h-full object-contain" />
                        </GlowCard>
                    ))}
                </div>
            </div>

            <GlowCard className="w-3 h-3 p-0.5 sm:w-13 sm:h-10 sm:p-1 md:w-20px md:h-20px md:p-3" > 
                <div className="bg-transparent rounded-xl p-1 md:p-6  ">
                    <span className="text-slate-400 text-sm sm:text-xs md:text-3xl ">FOTO</span>
                </div>  
            </GlowCard>

            <div className="row-span-1  p-1 md:p-6 border  border-gray-700 rounded-xl  bg-transparent backdrop-blur-sm " >
                <h2 className="text-sm sm:text-xs md:text-3xl m-2 font-semibold font-satoshi  flex flex-col min-[1025px]:flex-row  text-transparent bg-clip-text bg-linear-to-br from-slate-50 via-gray-400 to-slate-100">Lenguajes de   <span className="  ml-2 font-ArraySemiBold">Backend</span></h2> 
                <div className="flex flex-wrap gap-1 md:gap-4 mt-1 md:mt-6 p-2 ">
                    {ImgBackend.map((img, index) => (
                        <GlowCard key={index} className="w-3 h-3 p-0.5 sm:w-15 sm:h-15 sm:p-1 md:w-20px md:h-20px md:p-3" >
                            <img loading="lazy" src={img.src} alt={img.alt} className="w-full h-full object-contain" />
                        </GlowCard>
                    ))}
                </div>
            </div>
            <div className="col-span-3  p-1 md:p-6 border  border-gray-700 rounded-xl  bg-transparent backdrop-blur-sm " >
                <h2 className="text-sm sm:text-xs md:text-3xl m-2 font-semibold font-satoshi  flex flex-row text-transparent bg-clip-text bg-linear-to-br from-slate-50 via-gray-400 to-slate-100 ">Mis    <span className="  ml-2 font-ArraySemiBold">  Tools</span></h2> 
                <div className="flex flex-wrap gap-1 md:gap-4 mt-1 md:mt-6 p-2 ">
                {ImgTool.map((img, index) => (
                    <GlowCard key={index} className="w-3 h-3 p-0.5 sm:w-15 sm:h-15 sm:p-1 md:w-20px md:h-20px md:p-3" >
                        <img  loading="lazy" src={img.src} alt={img.alt} className="w-full h-full object-contain " />
                    </GlowCard>
                    ))}
                </div>
            </div>

        </div>
    );
}
import { useEffect, useState } from 'react';
import GlowText from '../Title/GlowText';
import {ImgBackend} from '@/constants/ImgBackend';
import {ImgFrontend} from '@/constants/ImgFrontend';
import {ImgTool} from '@/constants/ImgTool';
import GlowCard from '@/components/ui/Shadows/GlowCard';
import SoftSkill from '@/components/ui/SoftSkill'
import miImagen  from '@/assets/images/FINAL.png'; 
import Image from 'next/image';

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
        <div className="grid grid-cols-3 gap-4">
            {/**foto */}
            <div className="col-span-1 row-span-2 border border-gray-700 rounded-xl bg-transparent backdrop-blur-sm flex p-2 justify-center"  > 
                <div className="bg-transparent rounded-xl relative select-none w-xl md:w-base ">
                    <GlowCard>
                        <Image
                    src={miImagen}
                    alt="Foto de Mariela Aguirre sonriente"
                    onContextMenu={(e) => e.preventDefault()}
                    className="pointer-events-none"/>
                    </GlowCard>
                    
                </div>  
            </div>
            {/**txt */}
            <div className="col-span-2 row-span-1 p-1 md:p-6 border  border-gray-700 rounded-xl  bg-transparent backdrop-blur-sm " >
                <h2 className="text-sm sm:text-xs md:text-3xl m-0.5 md:m-2 font-semibold text-transparent bg-clip-text bg-linear-to-br from-slate-50 via-gray-400 to-slate-100 font-satoshi  flex flex-col lg:flex-row">Hola! soy<GlowText text="Mariela" /></h2> 
                <h3 className="text-xs sm:text-xs md:text-2xl m-2 font-medium text-transparent bg-clip-text bg-linear-to-br from-slate-50 via-gray-400 to-slate-100 font-satoshi">Tengo 24 años y soy de Argentina.</h3>
                <p className="text-xs sm:text-sm md:text-xl m-2 text-transparent bg-clip-text bg-linear-to-br from-slate-50 via-gray-400 to-slate-100 font-satoshi font-normal">A lo largo de mi trayectoria, trabaje con C# en backend e integré de forma robusta React, SQL, PHP y TypeScript.</p>
                <p className="text-xs sm:text-sm md:text-xl m-2 text-transparent bg-clip-text bg-linear-to-br from-slate-50 via-gray-400 to-slate-100 font-satoshi font-normal">Mi perfil técnico se complementa fuertemente con el diseño UX/UI, maquetación avanzada con HTML, CSS, TailwindCSS y Bootstrap, el uso de frameworks como Laravel, y herramientas esenciales de entorno como Docker y GitHub. </p>
                <p className="text-xs sm:text-sm md:text-xl m-2 text-transparent bg-clip-text bg-linear-to-br from-slate-50 via-gray-400 to-slate-100 font-satoshi font-normal">Además, cuento con un nivel de inglés B1 que me permite comprender documentación técnica avanzada y colaborar eficazmente en entornos profesionales.</p>
                <p className="text-xs sm:text-sm md:text-xl m-2 text-transparent bg-clip-text bg-linear-to-br from-slate-50 via-gray-400 to-slate-100 font-satoshi font-normal">Actualmente experimento con Python y proyectos personales, continuando mi capacitación y adquiriendo nuevos conocimientos.</p>
            </div>
            {/**frontend */}
            <div className="col-span-1 row-span-1 p-1 md:p-6 border  border-gray-700 rounded-xl  bg-transparent backdrop-blur-sm   " >
                <h2 className="text-sm sm:text-xs md:text-3xl  m-2 font-semibold font-satoshi  flex flex-col min-[1025px]:flex-row  text-transparent bg-clip-text bg-linear-to-br from-slate-50 via-gray-400 to-slate-100">Lenguajes de <span className="  ml-2 font-ArraySemiBold">  Frontend</span></h2> 
                <div className="flex flex-wrap gap-1 md:gap-4 mt-1 md:mt-6 p-2">
                    {ImgFrontend.map((img, index) => (
                        <GlowCard key={index} className="w-3 h-3 p-0.5 sm:w-15 sm:h-15 sm:p-1 md:w-20px md:h-20px md:p-3" >
                            <img loading="lazy" src={img.src} alt={img.alt} className="w-full h-full object-contain" />
                        </GlowCard>
                    ))}
                </div>
            </div>
            {/**backend */}
            <div className="col-span-1 row-span-1 p-1 md:p-6 border  border-gray-700 rounded-xl  bg-transparent backdrop-blur-sm " >
                <h2 className="text-sm sm:text-xs md:text-3xl m-2 font-semibold font-satoshi  flex flex-col min-[1025px]:flex-row  text-transparent bg-clip-text bg-linear-to-br from-slate-50 via-gray-400 to-slate-100">Lenguajes de   <span className="  ml-2 font-ArraySemiBold">Backend</span></h2> 
                <div className="flex flex-wrap gap-1 md:gap-4 mt-1 md:mt-6 p-2 ">
                    {ImgBackend.map((img, index) => (
                        <GlowCard key={index} className="w-3 h-3 p-0.5 sm:w-15 sm:h-15 sm:p-1 md:w-20px md:h-20px md:p-3" >
                            <img loading="lazy" src={img.src} alt={img.alt} className="w-full h-full object-contain" />
                        </GlowCard>
                    ))}
                </div>
            </div>
            {/**skill */}
            <div className="col-span-2  p-1 md:p-6 border  border-gray-700 rounded-xl  bg-transparent backdrop-blur-sm   " >
                <h2 className="text-sm sm:text-xs md:text-3xl  m-2 font-semibold font-satoshi  flex flex-col min-[1025px]:flex-row  text-transparent bg-clip-text bg-linear-to-br from-slate-50 via-gray-400 to-slate-100"><span className="  ml-2 font-ArraySemiBold">SOFT SKILL</span></h2> 
                <div className="flex flex-wrap gap-1 md:gap-4 mt-1 md:mt-6 p-2">
                    <SoftSkill/>
                </div>
            </div> 
            {/**Tools */}
            <div className="col-span-1  p-1 md:p-6 border  border-gray-700 rounded-xl  bg-transparent backdrop-blur-sm " >
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
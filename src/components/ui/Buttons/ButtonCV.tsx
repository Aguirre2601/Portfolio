import React from 'react';



export default function Button() {
    return (
        <button className='border-2 border-gray-300 rounded-full px-4 py-2 text-xs md:text-base font-satoshi font-light tracking-wide text-gray-700 transition-colors duration-300 z-10  top-11/12 left-11/12 transform -translate-x-11/12 -translate-y-11/12 flex items-center group-hover:animate-pulse fixed shadow-2xl shadow-gray-300/50 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2' onClick={() => window.open('/Mariela_Aguirre_CV.pdf', '_blank')}>
            <img className="w-5 h-5 float-left" src="./download-solid-full.svg" alt="Descargar CV"></img>
            <span className='ml-2 float-right'>Descargar CV</span>
        </button>
    );
}
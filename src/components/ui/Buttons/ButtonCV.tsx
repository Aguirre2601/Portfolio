export default function Button() {
    return (
        <a 
            href="./Currículum.pdf" // Ruta al archivo (con el punto inicial para evitar fallos en GitHub Pages)
            download="CV_Mariela_Aguirre.pdf" // Fuerza la descarga directa en el dispositivo
            className="fixed z-50 bottom-8 right-8 inline-flex items-center justify-center gap-2 py-2 px-6 border border-gray-300 rounded-full text-xs md:text-base font-satoshi font-light tracking-wide text-gray-900 transition-colors duration-300 hover:shadow-purple-600 hover:cursor-pointer shadow-lg shadow-gray-100/30 bg-gray-200 hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 w-fit" 
            aria-label="Descargar CV de Mariela Aguirre en formato PDF" // Nombre accesible descriptivo para Lighthouse
        >
            <img 
                className="w-5 h-5 shrink-0" 
                src="./archivo (2).png" 
                alt="" // Queda vacío porque el texto del enlace ya describe la acción
                aria-hidden="true" // Oculta el icono para los lectores de pantalla
            />
            <span className="shrink-0">Descargar CV</span>
        </a>
    );
}

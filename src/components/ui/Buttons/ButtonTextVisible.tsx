import { useState } from "react";

interface TextoCortoProps {
    texto: string;
    limite?: number;
}

function TextoCorto({ texto, limite = 100 }: TextoCortoProps) {
    const [mostrarTodo, setMostrarTodo] = useState(false);
    const esTextoLargo = texto.length > limite;

    return (
        <div className="max-w-md">
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${mostrarTodo ? "max-h-125" : "max-h-18"
                    }`} >
                <p> {texto} </p>
            </div>
            {esTextoLargo && (
                <button
                    onClick={() => setMostrarTodo(!mostrarTodo)}
                    className="mt-4 text-sm font-satoshi text-white bg-gray-200/30 hover:bg-gray-100/50  transition-colors duration-200 ease-in-out px-2 py-1 rounded-full hover:cursor-pointer"
                >
                    {mostrarTodo ? "Ver menos ↑" : "Ver más ↓"}
                </button>
            )}
        </div>
    );
}

export default TextoCorto;

import { useState } from "react";
import { jsx } from "react/jsx-runtime";

interface TextoCortoProps {
    texto: string;
    limite?: number;
}

function TextoCorto({ texto, limite = 100 }: TextoCortoProps) {
    const [mostrarTodo, setMostrarTodo] = useState(false);
    const esTextoLargo = texto.length > limite;

    const textoAMostrar = mostrarTodo
        ? texto
        : texto.substring(0, limite) + "...";

    return (
        <div style={{maxWidth: "400px", lineHeight: "1.5" }}>
            <p>
                {esTextoLargo ? textoAMostrar : texto}
            </p>
            {esTextoLargo && (
                <button
                    onClick={() => setMostrarTodo(!mostrarTodo)}
                    style={style} 
                >
                    {mostrarTodo ? "Ver menos" : "Ver más"}
                </button>
            )}
        </div>
    );
}

const style = {
    marginTop: "5px",
    background: "#5E5E5E",
    border: "0px solid grey",
    padding: "2px 8px",
    borderRadius: "15px",
    color: "white",
    cursor: "pointer",
    fontWeight: "normal",
};
export default TextoCorto;

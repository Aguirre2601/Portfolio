import styles from "./Button.module.css";

// Definimos las props que acepta el botón
type ButtonProps = {
    children: React.ReactNode;       // el texto o contenido adentro
    onClick?: () => void;            // acción al hacer click (opcional)
    type?: "button" | "submit";      // tipo HTML (por defecto "button")
    className?: string;              // clases extra desde afuera (opcional)
    disabled?: boolean;
};

export default function Button({  children, onClick, type = "button", className = "", disabled = false,}: ButtonProps) 
{
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
        relative cursor-pointer
        bg-black text-white font-semibold
        text-xl py-[0.4rem] px-[0.8rem] rounded-[0.99rem]
        border-none
        transition-opacity
        disabled:opacity-50 disabled:cursor-not-allowed 
        ${styles.magic}
        ${className}
        `}
        >
            {children}
        </button>
    );
}
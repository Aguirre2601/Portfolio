"use client";
import { useState }  from "react";
import  React from "react";
import { useTheme } from '@/components/context/ThemeContext';
import Link from "next/link";
import Button from "@/components/ui/Buttons/ButtonEstrella";
import { useScrollDirection } from "@/hooks/use-scroll-direction";

interface NavItem {
    label: string;
    href: string;
    variant: "link" | "magic";
}

const navItems: NavItem[] = [
    { label: "Sobre mí", href: "#", variant: 'link' },
    { label: "Tecnologías", href: "#", variant: 'link' },
    { label: "Proyectos", href: "#", variant: 'link' },
    { label: "Formación", href: "#", variant: 'link' },
    { label: "Contáctame", href: "#", variant: 'link' },
];

export default function FloatingHeader() {
    const isVisible = useScrollDirection();
    //const { isDark, toggleTheme } = useTheme(); 
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={`fixed top-6 inset-x-0 z-9 flex justify-center transition-all duration-500 ease-in-out ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"}`}>
            <header className="flex items-center gap-7 px-2 py-1  shadow-sm border border-gray-700 rounded-xl  bg-black/50 backdrop-blur-sm ">
                
                <Link href="/" className=" text-2xl tracking-tight p-2 ml-3 text-transparent bg-clip-text bg-linear-to-br from-gray-100 via-gray-400 to-gray-200  font-bold font-satoshi ">
                    Aguirre Mariela
                </Link>

                <div className="w-px h-5 bg-gray-700" />

                <nav className="hidden lg:flex items-center gap-6">
                    {navItems.map((item, index) => {
                        const isLast = index === navItems.length - 1;
                        return (
                            <React.Fragment key={item.label}>
                                {isLast && <div className="w-px h-5 bg-gray-700" />}
                                {item.variant === "magic" ? (
                                    <Button >
                                        <Link href={item.href}>{item.label}</Link>
                                    </Button>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="px-3 py-2 text-lg transition-colors rounded-xl hover:underline hover:underline-offset-8 hover:decoration-purple-600 hover:decoration-2 font-satoshi"
                                    >
                                        {item.label}
                                    </Link>
                                )}

                            </React.Fragment>
                        );
                    })}
                </nav>

                {/* Theme toggle — sin cambios 
                <button
                    onClick={toggleTheme}
                    aria-label="Cambiar modo"
                    className='p-2 rounded-full hover:bg-amber-100/40 transition-colors hover:cursor-pointer'
                >
                    {isDark ? "☀️" : "🌙"}
                </button>

                <div className="w-px h-5 bg-border" />*/}

                {/* ── HAMBURGUESA — solo visible en mobile ── */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={menuOpen}
                    className="lg:hidden p-2 mr-3 hover:underline hover:underline-offset-8 hover:decoration-purple-600 hover:decoration-2 font-satoshi"
                >
                    {/* Icono animado: 3 líneas → X */}
                    <div className="flex flex-col gap-1.5 w-5">
                        <span className={`block h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
                        <span className={`block h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </div>
                </button>
            </header>

            {/* ── MENÚ DESPLEGABLE MOBILE ── */}
            {/* Aparece debajo de la píldora, desaparece con animación */}
            <div
                className={`
                    absolute top-full mt-3 
                    w-[calc(100%-3rem)] max-w-lg
                    shadow-sm border border-gray-700 rounded-xl  bg-black/50 backdrop-blur-sm 
                    flex flex-col items-stretch gap-2 p-1
                    transition-all duration-300 ease-in-out
                    lg:hidden
                    ${menuOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }
                `}
            >
                {navItems.map((item) =>
                    item.variant === "magic" ? (
                        <Button
                            key={item.href}
                            onClick={() => setMenuOpen(false)}
                        >
                            <Link href={item.href}>{item.label}</Link>
                        </Button>
                    ) : (
                        <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className="px-4 py-3 text-lg font-normal text-center text--mi-gradiente  rounded-xl font-satoshi  hover:underline hover:underline-offset-8 hover:decoration-purple-600 hover:decoration-2 "
                        >
                            {item.label}
                        </Link>
                    )
                )}
            </div>
        </div>
    );
}
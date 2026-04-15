"use client";
import { useState } from "react";
import { useTheme } from '@/components/context/ThemeContext';
import Link from "next/link";
import Button from "@/components/ui/Button";
import { useScrollDirection } from "@/hooks/use-scroll-direction";

interface NavItem {
    label: string;
    href: string;
    variant: "link" | "magic";
}

const navItems: NavItem[] = [
    { label: "Inicio", href: "#", variant: 'link' },
    { label: "Sobre mí", href: "#", variant: 'link' },
    { label: "Proyectos", href: "#", variant: 'magic' },
];

export default function FloatingHeader() {
    const isVisible = useScrollDirection();
    const { isDark, toggleTheme } = useTheme();
    // 👇 Nuevo: estado para el menú móvil
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div
            className={`fixed top-6 inset-x-0 z-50 flex justify-center transition-all duration-500 ease-in-out ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"}`}>

            {/* ── PÍLDORA PRINCIPAL (idéntica al diseño actual en desktop) ── */}
            <header className="flex items-center gap-7 px-2 py-1 rounded-full border border-border bg-primary backdrop-blur-md shadow-sm text-main-text">

                {/* Logo — sin cambios */}
                <Link href="/" className="font-bold font-ArraySemiBold text-4xl tracking-tight text-main-text p-2 ml-3">
                    AG
                </Link>

                <div className="w-px h-5 bg-border" />

                {/* Nav links — ocultos en mobile, visibles en md+ */}
                <nav className="hidden md:flex items-center gap-7">
                    {navItems.map((item) =>
                        item.variant === "magic" ? (
                            <Button key={item.href} className="">
                                <Link href={item.href}>{item.label}</Link>
                            </Button>
                        ) : (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="px-3 py-2 text-xl font-medium text-color-main-text transition-colors rounded-full hover:bg-hover"
                            >
                                {item.label}
                            </Link>
                        )
                    )}
                </nav>

                {/* Separador — solo visible en desktop cuando hay nav */}
                <div className="hidden md:block w-px h-5 bg-border" />

                {/* Theme toggle — sin cambios */}
                <button
                    onClick={toggleTheme}
                    aria-label="Cambiar modo"
                    className='p-2 rounded-full hover:bg-amber-100/40 transition-colors hover:cursor-pointer'
                >
                    {isDark ? "☀️" : "🌙"}
                </button>

                <div className="w-px h-5 bg-border" />

                {/* Contacto — ya tenía hidden md:inline-flex, no se toca */}
                <Link
                    href="#contacto"
                    className="hidden md:inline-flex items-center px-3 py-2 rounded-full bg-olive-200 text-zinc-800 text-xl font-medium hover:opacity-80 transition-opacity mr-3"
                >
                    Contactame
                </Link>

                {/* ── HAMBURGUESA — solo visible en mobile ── */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={menuOpen}
                    className="md:hidden p-2 mr-3 rounded-full hover:bg-hover transition-colors"
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
                    w-[calc(100%-3rem)] max-w-sm
                    rounded-2xl border border-border bg-primary backdrop-blur-md shadow-sm
                    flex flex-col items-stretch gap-2 p-1
                    transition-all duration-300 ease-in-out
                    md:hidden
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
                            className="w-[calc(100%-2rem)] justify-center"
                            onClick={() => setMenuOpen(false)}
                        >
                            <Link href={item.href}>{item.label}</Link>
                        </Button>
                    ) : (
                        <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className="px-4 py-3 text-xl font-medium text-center text-color-main-text transition-colors rounded-xl hover:bg-hover"
                        >
                            {item.label}
                        </Link>
                    )
                )}
                {/* Contacto visible también en el menú mobile */}
                <Link
                    href="#contacto"
                    onClick={() => setMenuOpen(false)}
                    className="mt-1 px-4 py-3 rounded-xl bg-olive-200 text-zinc-800 text-xl font-medium text-center hover:opacity-80 transition-opacity"
                >
                    Contactame
                </Link>
            </div>
        </div>
    );
}
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import styles from "./Header.module.css";

// Cada link ahora tiene un "variant" que decide cómo se renderiza
type NavLink = {
    label: string;
    href: string;
    variant: "link" | "magic";
};

const navLinks: NavLink[] = [
    { label: "Inicio", href: "#inicio", variant: "link" },
    { label: "Proyectos", href: "#proyectos", variant: "magic" },
    { label: "Sobre mí", href: "#sobre-mi", variant: "link" },
];

export default function Header() {
    const [visible, setVisible] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [dark, setDark] = useState(false);

    useEffect(() => {
        let lastY = window.scrollY;
        const handleScroll = () => {
            const currentY = window.scrollY;
            setVisible(currentY < lastY || currentY < 10);
            setScrolled(currentY > 10);
            lastY = currentY;
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
    }, [dark]);

    return (
        // Contenedor exterior: ocupa todo el ancho pero solo para posicionar
        <div
            className={`
        fixed top-5 left-0 right-0 z-50
        flex justify-center              
        transition-transform duration-300
        ${visible ? "translate-y-0" : "-translate-y-full"}
      `}
        >
            {/* 
        La "píldora" — no ocupa todo el ancho.
        inline-flex hace que el ancho se ajuste a su contenido.
      */}
            <header
                className={`
                        inline-flex items-center gap-18
                        px-4 py-3 p-10
                        rounded-full
                        border border-zinc-200 dark:border-zinc-700
                        transition-colors duration-300
                        ${scrolled ? "bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-sm" : "bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm"}
        `}
            >
                {/* Logo */}
                <Link
                    href="/"
                    className="font-bold text-lg tracking-tight text-zinc-900 dark:text-white mr-2 p-10"
                >
                    AG {/* ← reemplazá con tu nombre/logo */}
                </Link>
                <div className="w-px h-5 bg-zinc-700" />
                {/* Nav — desktop */}
                <nav className="hidden md:flex items-center gap-18">
                    {navLinks.map((link) =>
                        link.variant === "magic" ? (
                            // Link con estilo Button magic
                            <Button key={link.href} className="text-lg py-4 px-8">
                                <Link href={link.href}>{link.label}</Link>
                            </Button>
                        ) : (
                            // Link normal
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-lg text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors px-4 py-8 "
                            >
                                {link.label}
                            </Link>
                        )
                    )}
                </nav>

                {/* Separador visual */}
                <div className="hidden md:block w-px h-4 bg-zinc-200 dark:bg-zinc-700" />

                {/* Dark mode toggle */}
                <button
                    onClick={() => setDark(!dark)}
                    aria-label="Cambiar modo de color"
                    className="p-1.5 rounded-full text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-lg"
                >
                    {dark ? "☀️" : "🌙"}
                </button>

                {/* CTA */}
                <Link
                    href="#contacto"
                    className="hidden md:inline-flex items-center px-4 py-1.5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-lg font-medium hover:opacity-80 transition-opacity"
                >
                    Contactame
                </Link>

                {/* Hamburguesa mobile */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menú"
                    className="md:hidden p-1.5 rounded-md text-zinc-600 dark:text-zinc-300"
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
            </header>

            {/* Menú mobile — debajo de la píldora */}
            {menuOpen && (
                <div className="absolute top-14 left-4 right-4 md:hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 flex flex-col gap-14 shadow-lg">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-lg text-zinc-700 dark:text-zinc-300"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="#contacto"
                        onClick={() => setMenuOpen(false)}
                        className="mt-2 text-center px-4 py-2 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-lg font-medium"
                    >
                        Contactame
                    </Link>
                </div>
            )}
        </div>
    );
}
"use client";
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

    return (
        <div
            className={`fixed top-6 inset-x-0 z-50 flex justify-center transition-all duration-500 ease-in-out ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"}`} >
            {/* La "Píldora" - Estilo inspirado en los componentes oficiales de Tailwind */}
            <header className=" flex items-center gap-7 px-2 py-1 rounded-full border border-border bg-primary backdrop-blur-md shadow-sm text-main-text">
                <Link href="/" className="font-bold font-ArraySemiBold text-4xl tracking-tight text-main-text p-2 ml-3" >{/* Logo */}
                    AG
                </Link>
                <div className="w-px h-5 bg-border" />
                {navItems.map((item) =>
                    item.variant === "magic" ? (
                        <Button key={item.href} className="">
                            <Link href={item.href}>{item.label}</Link>
                        </Button>
                    ) : (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="px-3 py-2 text-xl font-medium text-color-main-text transition-colors rounded-full hover:bg-hover "
                        >   
                            {item.label}
                        </Link>
                    ))}
                <div className="w-px h-5 bg-border" />
                <button onClick={toggleTheme} aria-label="Cambiar modo" className='p-2 rounded-full hover:bg-amber-100/40 transition-colors hover:cursor-pointer'>
                    {isDark ? "☀️" : "🌙"}
                </button>
                <div className="w-px h-5 bg-border" />
                <Link
                    href="#contacto"
                    className="hidden md:inline-flex items-center px-3 py-2 rounded-full bg-olive-200 text-zinc-800 text-xl font-medium hover:opacity-80 transition-opacity mr-3" >       
                    Contactame
                </Link>
            </header>
        </div>
    );
}
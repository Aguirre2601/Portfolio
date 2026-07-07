import './globals.css';
import type { Metadata, Viewport } from 'next';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import localFont from 'next/font/local';
import { ThemeProvider } from "@/components/context/ThemeContext"; 
import { AosProvider } from "@/hooks/AosProvider";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    // Also supported but less commonly used
    // interactiveWidget: 'resizes-visual',
}
const satoshi = localFont({
    src: './fonts/Satoshi-Regular.woff2',
    variable: '--font-satoshi',
    display: 'swap', // Esto ayuda al SEO evitando que el texto sea invisible mientras carga
})

const ArraySemiBold = localFont({
    src: './fonts/Array-Semibold.woff2',
    variable: '--font-ArraySemiBold',
    display: 'swap', 
})



export const metadata: Metadata = {
    title: 'Mariela Aguirre — Portfolio',
    description: 'Portfolio personal',
    authors: [{ name: 'Mariela Aguirre', url: 'https://marielaaguirre.com' }],
    keywords: ['portfolio', 'developer', 'designer', 'builder', 'mariela aguirre', 'full-stack', 'creative', 'innovative', 'web development', 'software engineering', 'UX/UI design', 'personal projects', 'tech blog'],
}


export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="es"className={cn(satoshi.variable, ArraySemiBold.variable, "font-sans", geist.variable)}>
            <body className="">
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
                </head>
                <ThemeProvider>
                    <Header/>
                        <AosProvider children={children} />
                    <Footer/>
                </ThemeProvider>
            </body>
        </html>
    )
}
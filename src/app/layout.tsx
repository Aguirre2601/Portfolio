import './globals.css';
import type { Metadata } from 'next';
import Header from "@/components/layout/Header";
import localFont from 'next/font/local';
import { ThemeProvider } from "@/components/context/ThemeContext"; 
import { AosProvider } from "@/hooks/AosProvider";

const satoshi = localFont({
    src: './fonts/Satoshi-Regular.woff2',
    variable: '--font-satoshi',
    display: 'swap', // Esto ayuda al SEO evitando que el texto sea invisible mientras carga
})

const tanker = localFont({
    src: './fonts/Tanker-Regular.woff2',
    variable: '--font-tanker',
    display: 'swap',
})

const ArraySemiBold = localFont({
    src: './fonts/Array-SemiBold.woff2',
    variable: '--font-ArraySemiBold',
    display: 'swap', 
})

const bebasNeue = localFont({
    src: './fonts/BebasNeue-Regular.woff2',
    variable: '--font-bebas-neue',
    display: 'swap',
})
const outfit = localFont({
    src: './fonts/Outfit-Regular.woff2',
    variable: '--font-outfit',
    display: 'swap',
})


export const metadata: Metadata = {
    title: 'Mariela Aguirre — Portfolio',
    description: 'Portfolio personal',
    authors: [{ name: 'Mariela Aguirre', url: 'https://marielaaguirre.com' }],
    keywords: ['portfolio', 'developer', 'designer', 'builder', 'mariela aguirre', 'full-stack', 'creative', 'innovative', 'web development', 'software engineering', 'UX/UI design', 'personal projects', 'tech blog'],
    //viewport:{ width: 'device-width', height: 'initial-scale=1.0' }
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="es"className={`${satoshi.variable} ${tanker.variable} ${ArraySemiBold.variable} ${bebasNeue.variable} ${outfit.variable} dark`}>
            <body className="">
                <ThemeProvider>
                    <Header/>
                    <AosProvider children={children} />
                </ThemeProvider>
            </body>
        </html>
    )
}
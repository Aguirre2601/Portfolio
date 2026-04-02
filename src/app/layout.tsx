
import type { Metadata } from 'next';
import Header from "@/components/layout/Header";
import './globals.css'

export const metadata: Metadata = {
    title: 'Mariela Aguirre — Portfolio',
    description: 'Portfolio personal',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="es">
            <body className="bg-main-bg text-main-text">
                <Header/>
                {children}
            </body>
        </html>
    )
}
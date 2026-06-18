import { ImageSwiper } from "@/components/ui/Cards/image-swiper";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import TextoCorto  from "../Buttons/ButtonTextVisible";

const images = [
    './projects/Atelier/Atelier 1.png',
    './projects/Atelier/Atelier 2.png',
    './projects/Atelier/Atelier 3.png',
    './projects/Atelier/Atelier 4.png',
]
interface GaleriaProps {
    listaDeImagenes: string[];
    shadow: string;
    textoTitulo: string;
    textoParrafo1: string;
    textoParrafo2?: string;
    GitHub: boolean;
    linkGitHub?: string;
}

export function TotalCard({ listaDeImagenes, shadow, textoTitulo, textoParrafo1, textoParrafo2, GitHub, linkGitHub }: GaleriaProps) {
    return (
        <Card className={`w-max-400 border border-gray-500/50 ${shadow}`}>
            <CardContent className="p-0 ">
                <ImageSwiper images={listaDeImagenes} className="w-full h-full" />
            </CardContent>
            <CardHeader>
                <CardTitle className="text-lg font-semibold">{textoTitulo}</CardTitle>
                <TextoCorto texto={textoParrafo1} limite={100} />
                <p className="mt-1"> <span className="font-semibold">STACK</span> </p>
                <p> {textoParrafo2} </p>
                {GitHub && (
                    <div className="relative size-12 left-65" >
                        <div className="absolute -inset-1 rounded-full bg-linear-to-br  from-cyan-700 via-purple-500 to-cyan-600 opacity-50 blur-md  "></div>
                        <div className="relative rounded-full right-0 bottom-0">
                            <svg width="37" height="37" xmlns="http://w3.org" className={'border-2 rounded-full p-0 pointer-events-auto border-indigo-600 hover:shadow-xl transition-shadow hover:shadow-indigo-500/50 bg-black shadow-xl  shadow-linear-to-br from-indigo-700 via-purple-500 to-cyan-600 '}>
                            <a href={linkGitHub}>
                            <image href="./Tools/github_dark.svg" width="37" height="37" />
                        </a>
                    </svg>
                        </div>
                    </div>
                )}
            </CardHeader>
        </Card>
    )
}
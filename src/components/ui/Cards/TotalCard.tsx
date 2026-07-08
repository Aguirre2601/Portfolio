import { ImageSwiper } from "@/components/ui/Cards/image-swiper";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import TextoCorto from "../Buttons/ButtonTextVisible";


type Images = {
    id:  number;
    src: string;
    alt:string;
}[];

interface GaleriaProps {
    listaDeImagenes: Images;
    shadow: string;
    textoTitulo: string;
    textoParrafo1: string;
    textoParrafo2?: string;
    GitHub: boolean;
    linkGitHub?: string;
}

export function TotalCard({ listaDeImagenes, shadow, textoTitulo, textoParrafo1, textoParrafo2, GitHub, linkGitHub }: GaleriaProps) {
    return (
        <Card className={`w-max-100 sm:w-max-200 md:w-max-200 lg:w-max-400  border  border-gray-700 rounded-xl  bg-transparent backdrop-blur-sm "  ${shadow}`}>
            <CardContent className="p-0 ">
                <ImageSwiper images={listaDeImagenes}  className="w-full h-full" />
            </CardContent>
            <CardHeader className="p-3 font-satoshi">
                <CardTitle className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold font-satoshi">{textoTitulo}</CardTitle>
                {textoParrafo1.length >= 150 ? (<TextoCorto texto={textoParrafo1} limite={145} />) : (<p>{textoParrafo1}</p>)}
                <p className="mt-1"> <span className="font-bold font-ArraySemiBold text-gray-200 text-xs sm:text-sm md:text-base lg:text-base">STACK</span> </p>
                <p className="text-xs sm:text-sm md:text-base lg:text-base font-satoshi"> {textoParrafo2} </p>
                {GitHub && (
                    <div className="grid place-items-end">
                        <div className="relative size-11 p-2" >
                            <div className="absolute -inset-1 rounded-full bg-linear-to-br  from-cyan-700 via-purple-500 to-cyan-600 opacity-50 blur-md  "></div>
                            <div className="relative rounded-full right-0 bottom-0 inline-block" >
                                <a
                                    href={linkGitHub}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="pointer-events-auto block rounded-full transition-transform hover:scale-105"
                                    aria-label="Visitar mi perfil de GitHub"
                                    >
                                    <svg
                                        width="37"
                                        height="37"
                                        viewBox="0 0 37 37"
                                        xmlns="http://w3.org"
                                        className="border-2 rounded-full  border-indigo-600 hover:shadow-xl transition-shadow hover:shadow-indigo-500/50 bg-black shadow-xl shadow-linear-to-br from-indigo-700 via-purple-500 to-cyan-600 flex items-center justify-center"
                                    >
                                        <image
                                            href="./Tools/github_dark.svg"
                                            className="w-full h-full" 
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>

                    </div>
                )}
            </CardHeader>
        </Card>
    )
}
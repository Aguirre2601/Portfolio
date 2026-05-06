import { useMemo } from 'react';
import Image from 'next/image'; // Importamos el componente de Next.js

interface ImageData {
  id: number;
  src: string;
  alt: string;
}

interface SvgGridProps {
  images: ImageData[]; 
}


const getColumns = (count : number) => {
  if (count <= 1) return 1;
  if (count <= 4) return 2;
  if (count <= 9) return 3;
  if (count <= 16) return 4;
  if (count <= 25) return 5;
  return 6;
};

export default function SvgGrid({ images = [] }: SvgGridProps) {
  const columns = useMemo(() => getColumns(images.length), [images.length]);

  const styles = `
    @keyframes slideRow {
      0%   { transform: translateX(-100%); }
      100% { transform: translateX(0); }
    }
    .svg-row {
      animation: slideRow 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
    }
    .svg-cell {
      transition:
        transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
        box-shadow 0.25s ease,
        border-color 0.25s ease;
    }
    .svg-cell:hover {
      transform: scale(1.08) translateY(-4px);
      box-shadow:
        0 0 0 1.5px #a855f7,
        0 8px 24px rgba(168, 85, 247, 0.30);
      border-color: #a855f7;
      z-index: 10;
    }
  `;

  const rows = useMemo(() => {
    const result = [];
    for (let i = 0; i < images.length; i += columns) {
      result.push(images.slice(i, i + columns));
    }
    return result;
  }, [images, columns]);

  if (!images.length) {
    return (
      <div className="flex items-center justify-center p-8 text-gray-400 text-sm">
        No hay imágenes para mostrar.
      </div>
    );
  }

  const colClass = {
    1: "grid-cols-1",
    2: "grid-cols-2 sm:grid-cols-2",
    3: "grid-cols-2 sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
    5: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
    6: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
  }[columns] || "grid-cols-3";

  return (
    <>
      <style>{styles}</style>

      <div className="w-full overflow-hidden mt-6">
        {rows.map((row, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className={`grid ${colClass} gap-px svg-row`}
            style={{
              animationDelay: `${rowIndex * 0.1}s`,
            }}
          >
            {/* Cambiamos 'src' por 'image' para acceder a sus propiedades */}
            {row.map((image) => (
              <div
                key={image.id} // Usamos el ID del objeto como key
                className="svg-cell relative flex items-center justify-center bg-transparent rounded-sm overflow-hidden aspect-square w-15 h-15 m-3"
              >
                <Image
                  src={image.src} // Ruta desde el objeto
                  alt={image.alt} // Texto alternativo desde el objeto
                  fill // En Next.js, 'fill' es ideal para contenedores con 'aspect-square'
                  sizes="( max-width: 640px ) 50vw, ( max-width: 1024px ) 33vw, ( max-width: 1280px ) 25vw, ( max-width: 1536px ) 20vw, 16.66vw"
                  className="object-contain"
                  draggable={false}
                />
              </div>
            ))}

            {row.length < columns &&
              Array.from({ length: columns - row.length }).map((_, i) => (
                <div
                  key={`empty-${rowIndex}-${i}`}
                  className="svg-cell bg-transparent rounded-sm aspect-square  w-15 h-15 m-3"
                />
              ))}
          </div>
        ))}
      </div>
    </>
  );
}

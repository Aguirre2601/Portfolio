import { useMemo } from "react";

/**
 * SvgGrid
 * Props:
 *  - images: string[]  → lista de rutas/URLs de archivos .svg
 *
 * La grilla se calcula automáticamente según la cantidad de imágenes:
 *   1        → 1×1
 *   2–4      → 2×2
 *   5–9      → 3×3
 *   10–16    → 4×4
 *   17–25    → 5×5
 *   26+      → 6 columnas (filas variables)
 *
 * Cada fila se desplaza horizontalmente de izquierda a derecha (animación CSS).
 * Hover: la celda "salta hacia afuera" y los bordes se iluminan en purple.
 */

const getColumns = (count) => {
  if (count <= 1) return 1;
  if (count <= 4) return 2;
  if (count <= 9) return 3;
  if (count <= 16) return 4;
  if (count <= 25) return 5;
  return 6;
};

export default function SvgGrid({ images = [] }) {
  const columns = useMemo(() => getColumns(images.length), [images.length]);

  // Estilos inline necesarios para la animación (Tailwind no soporta keyframes dinámicos)
  const styles = `
    @keyframes slideRow {
      0%   { transform: translateX(-100%); }
      100% { transform: translateX(0); }
    }

    .svg-row {
      animation: slideRow 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
    }

    .svg-cell {
      border: 0.5px solid #d1d5db;
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

  // Agrupar imágenes en filas
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

  // Clases de columnas Tailwind según número de columnas
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

      <div className="w-full overflow-hidden">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid ${colClass} gap-px svg-row`}
            style={{
              animationDelay: `${rowIndex * 0.1}s`,
              /* gap-px = 4px en Tailwind; lo sobreescribimos a 2px */
              gap: "2px",
            }}
          >
            {row.map((src, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className="svg-cell relative flex items-center justify-center bg-white rounded-sm overflow-hidden aspect-square"
              >
                <img
                  src={src}
                  alt={`svg-${rowIndex * columns + colIndex}`}
                  className="w-3/4 h-3/4 object-contain pointer-events-none select-none"
                  draggable={false}
                />
              </div>
            ))}

            {/* Celdas vacías para completar la última fila */}
            {row.length < columns &&
              Array.from({ length: columns - row.length }).map((_, i) => (
                <div
                  key={`empty-${i}`}
                  className="svg-cell bg-gray-50 rounded-sm aspect-square"
                />
              ))}
          </div>
        ))}
      </div>
    </>
  );
}

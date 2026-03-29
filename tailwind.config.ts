import type { Config } from 'tailwindcss'

const config: Config = {
  // Le dice a Tailwind qué archivos escanear para generar las clases CSS
  // Si un archivo no está acá, sus clases de Tailwind NO se incluyen en el build
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/hooks/**/*.{ts,tsx}',
    './src/lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      // Aquí van tus colores, fuentes y tokens de diseño personalizados
      // Ejemplo:
      // fontFamily: {
      //   sans: ['Inter', 'sans-serif'],
      // },
      colors:{
        'theme.dark': '#1c1c1c',
        'theme-light': '#f4f4f4',
        'sombra-azul': '#1b51da',

      }
    },
  },
  plugins: [],
}

export default config
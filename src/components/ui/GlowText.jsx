import React from 'react';

export default function GlowText({ text = "Hover sobre las palabras" }) {
  const words = text.trim().split(/\s+/);

  return (
    <>
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }

        .glow-word {
          position: relative;
          font-size: clamp(2rem, 6vw, 3.5rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          cursor: pointer;
          display: inline-block;
          color: currentColor;
          font-family: system-ui, -apple-system, sans-serif;
        }

        .glow-word span {
          display: block;
          transition: opacity 0.35s ease;
        }

        .glow-word::after {
          content: attr(data-word);
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            #7c3aed 0%,
            #22c55e 25%,
            #000000 50%,
            #7c3aed 75%,
            #22c55e 100%
          );
          background-size: 300% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0;
          animation: gradientShift 2.5s linear infinite;
          filter: 
            drop-shadow(0 0 8px rgba(124, 58, 237, 0.9))
            drop-shadow(0 0 16px rgba(34, 197, 94, 0.6))
            drop-shadow(0 0 24px rgba(124, 58, 237, 0.4));
          transition: opacity 0.35s ease;
          white-space: nowrap;
        }

        .glow-word:hover::after {
          opacity: 1;
        }

        .glow-word:hover span {
          opacity: 0;
        }
      `}</style>

      <div className="flex flex-wrap gap-1 justify-center select-none">
        {words.map((word, i) => (
          <div
            key={i}
            className="glow-word"
            data-word={word}
          >
            <span>{word}</span>
          </div>
        ))}
      </div>
    </>
  );
}

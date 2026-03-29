export default function Loading() {
    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            background: '#1c1c1c',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#1b51da',
                animation: 'pulse 1.4s ease-in-out infinite',
            }} />
            <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50%       { opacity: 1;   transform: scale(1.2); }
        }
      `}</style>
        </div>
    )
}
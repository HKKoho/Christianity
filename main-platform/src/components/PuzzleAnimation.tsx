import { useEffect, useState } from 'react';

interface PuzzlePiece {
  id: number;
  row: number;
  col: number;
  delay: number;
}

export function PuzzleAnimation() {
  const [assembled, setAssembled] = useState(false);

  useEffect(() => {
    // Start animation after component mounts
    const timer = setTimeout(() => {
      setAssembled(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // 8 puzzle pieces in a 2x4 grid
  const pieces: PuzzlePiece[] = [
    { id: 1, row: 0, col: 0, delay: 0 },
    { id: 2, row: 0, col: 1, delay: 100 },
    { id: 3, row: 0, col: 2, delay: 200 },
    { id: 4, row: 0, col: 3, delay: 300 },
    { id: 5, row: 1, col: 0, delay: 400 },
    { id: 6, row: 1, col: 1, delay: 500 },
    { id: 7, row: 1, col: 2, delay: 600 },
    { id: 8, row: 1, col: 3, delay: 700 },
  ];

  const pieceWidth = 120;
  const pieceHeight = 100;
  const gap = 4;

  return (
    <div className="relative w-full flex items-center justify-center" style={{ minHeight: '280px', padding: '40px 0' }}>
      <div className="relative" style={{ width: (pieceWidth * 4) + (gap * 3), height: (pieceHeight * 2) + gap }}>
        {pieces.map((piece) => {
          // Calculate final assembled position
          const finalX = piece.col * (pieceWidth + gap);
          const finalY = piece.row * (pieceHeight + gap);

          // Calculate initial scattered position (spread out from center)
          const centerX = ((pieceWidth * 4) + (gap * 3)) / 2;
          const centerY = ((pieceHeight * 2) + gap) / 2;
          const scatterDistance = 200;

          const angle = (piece.id - 1) * (Math.PI * 2 / 8);
          const initialX = centerX + Math.cos(angle) * scatterDistance - pieceWidth / 2;
          const initialY = centerY + Math.sin(angle) * scatterDistance - pieceHeight / 2;

          // Determine gradient color based on piece number
          const getGradient = (id: number) => {
            const gradients = [
              'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // Purple
              'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', // Pink-Red
              'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', // Blue
              'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', // Green-Cyan
              'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', // Pink-Yellow
              'linear-gradient(135deg, #30cfd0 0%, #330867 100%)', // Cyan-Purple
              'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', // Light Blue-Pink
              'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)', // Coral-Pink
            ];
            return gradients[(id - 1) % gradients.length];
          };

          return (
            <div
              key={piece.id}
              className="absolute rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-2xl"
              style={{
                width: pieceWidth,
                height: pieceHeight,
                background: getGradient(piece.id),
                transform: assembled
                  ? `translate(${finalX}px, ${finalY}px) rotate(0deg) scale(1)`
                  : `translate(${initialX}px, ${initialY}px) rotate(${(piece.id - 1) * 45}deg) scale(0.8)`,
                opacity: assembled ? 1 : 0.7,
                transition: `all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${piece.delay}ms`,
                border: '2px solid rgba(255, 255, 255, 0.3)',
                boxShadow: assembled
                  ? '0 4px 6px rgba(0, 0, 0, 0.1)'
                  : '0 8px 16px rgba(0, 0, 0, 0.2)',
              }}
            >
              {piece.id}
            </div>
          );
        })}
      </div>
    </div>
  );
}

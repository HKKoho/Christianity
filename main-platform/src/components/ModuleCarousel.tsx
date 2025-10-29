import { useState, useEffect } from 'react';
import { CanvasModuleCard } from './CanvasModuleCard';

interface Module {
  id: string;
  icon: string;
  displayName: string;
  description: string;
  features: string[];
  targetAudience: string;
  path: string;
  color: string;
}

interface ModuleCarouselProps {
  modules: Module[];
}

export function ModuleCarousel({ modules }: ModuleCarouselProps) {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentRotation, setCurrentRotation] = useState(0);

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setRotation((prev) => prev + 90);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    // Don't start dragging if clicking on a card or button
    if ((e.target as HTMLElement).closest('.module-card-content') ||
        (e.target as HTMLElement).tagName === 'A' ||
        (e.target as HTMLElement).closest('a')) {
      return;
    }
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentRotation(rotation);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    const rotationDiff = diff * 0.5;
    setRotation(currentRotation + rotationDiff);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Snap to nearest 90 degrees
    const snappedRotation = Math.round(rotation / 90) * 90;
    setRotation(snappedRotation);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    // Don't start dragging if touching a card or button
    if ((e.target as HTMLElement).closest('.module-card-content') ||
        (e.target as HTMLElement).tagName === 'A' ||
        (e.target as HTMLElement).closest('a')) {
      return;
    }
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentRotation(rotation);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - startX;
    const rotationDiff = diff * 0.5;
    setRotation(currentRotation + rotationDiff);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    // Snap to nearest 90 degrees
    const snappedRotation = Math.round(rotation / 90) * 90;
    setRotation(snappedRotation);
  };

  const handlePrevious = () => {
    setRotation((prev) => prev - 90);
  };

  const handleNext = () => {
    setRotation((prev) => prev + 90);
  };

  return (
    <div className="relative w-full" style={{ padding: '60px 0' }}>
      {/* Navigation Buttons */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 z-20 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300"
        style={{
          border: '2px solid #ff6b6b',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#ff6b6b';
          e.currentTarget.style.color = '#ffffff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
          e.currentTarget.style.color = '#1f2937';
        }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 z-20 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300"
        style={{
          border: '2px solid #ff6b6b',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#ff6b6b';
          e.currentTarget.style.color = '#ffffff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
          e.currentTarget.style.color = '#1f2937';
        }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Carousel Container */}
      <div
        className="carousel-container"
        style={{
          perspective: '2000px',
          perspectiveOrigin: '50% 50%',
          width: '100%',
          height: '600px',
          position: 'relative',
          cursor: isDragging ? 'grabbing' : 'grab',
          userSelect: 'none'
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="carousel-track"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            transformStyle: 'preserve-3d',
            transform: `rotateY(${-rotation}deg)`,
            transition: isDragging ? 'none' : 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {modules.map((module, index) => {
            const angle = (360 / modules.length) * index;
            const radius = 450; // Distance from center

            return (
              <div
                key={module.id}
                className="carousel-item"
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  width: '280px',
                  height: '500px',
                  transformStyle: 'preserve-3d',
                  transform: `
                    translate(-50%, -50%)
                    rotateY(${angle}deg)
                    translateZ(${radius}px)
                  `,
                  backfaceVisibility: 'hidden'
                }}
              >
                <div
                  className="module-card-content"
                  style={{
                    width: '100%',
                    height: '100%',
                    transform: 'rotateY(0deg)',
                    transformStyle: 'preserve-3d',
                    pointerEvents: 'auto'
                  }}
                >
                  <CanvasModuleCard
                    icon={module.icon}
                    displayName={module.displayName}
                    description={module.description}
                    features={module.features}
                    targetAudience={module.targetAudience}
                    path={module.path}
                    color={module.color}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Rotation Indicators */}
      <div className="flex justify-center gap-3 mt-8">
        {modules.map((_, index) => {
          const normalizedRotation = ((rotation % 360) + 360) % 360;
          const targetAngle = (360 / modules.length) * index;
          const isActive = Math.abs(normalizedRotation % 360 - targetAngle) < 45 ||
                          Math.abs((normalizedRotation % 360) - (targetAngle + 360)) < 45;

          return (
            <button
              key={index}
              onClick={() => setRotation(targetAngle)}
              className="transition-all duration-300"
              style={{
                width: isActive ? '12px' : '8px',
                height: isActive ? '12px' : '8px',
                borderRadius: '50%',
                backgroundColor: isActive ? '#ff6b6b' : 'rgba(255, 107, 107, 0.3)',
                border: 'none',
                cursor: 'pointer',
                boxShadow: isActive ? '0 0 10px rgba(255, 107, 107, 0.5)' : 'none'
              }}
            />
          );
        })}
      </div>

      {/* Instructions */}
      <div className="text-center mt-6">
        <p
          className="text-sm font-medium"
          style={{
            color: '#ffffff',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
          }}
        >
          Drag to rotate • Auto-rotates every 4 seconds
        </p>
      </div>
    </div>
  );
}

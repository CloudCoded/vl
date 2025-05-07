import React from "react";
import Image from "next/image";

export default function PageLoadPlaceholder() {
  // Function to generate styles with more even spacing using a grid concept
  const generateEvenlySpacedStyles = (
    count: number,
    gridX: number,
    gridY: number
  ) => {
    const styles = [];
    const cellWidth = 100 / gridX;
    const cellHeight = 100 / gridY;
    let elementIndex = 0;

    for (let y = 0; y < gridY; y++) {
      for (let x = 0; x < gridX; x++) {
        if (elementIndex >= count) break;

        // Calculate random position within the current cell
        const randomOffsetX = Math.random() * cellWidth;
        const randomOffsetY = Math.random() * cellHeight;

        const left = x * cellWidth + randomOffsetX;
        const top = y * cellHeight + randomOffsetY;

        const duration = 10 + Math.random() * 10; // Random duration between 10s and 20s

        styles.push({
          // Clamp values to prevent overflow, though overflow is hidden on parent
          top: `${Math.min(95, Math.max(5, top))}%`, // Keep within bounds slightly
          left: `${Math.min(95, Math.max(5, left))}%`, // Keep within bounds slightly
          animationDuration: `${duration}s`,
        } as React.CSSProperties);
        elementIndex++;
      }
      if (elementIndex >= count) break;
    }
    return styles;
  };

  // Define grid dimensions (e.g., 5 columns, 4 rows for 20 elements)
  const gridColumns = 5;
  const gridRows = 4;
  const totalElements = 20;
  const backgroundTextStyles = generateEvenlySpacedStyles(
    totalElements,
    gridColumns,
    gridRows
  );

  return (
    <div className="flex flex-col items-center justify-center h-screen relative bg-lite-primary overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {backgroundTextStyles.map((style, index) => (
          <span
            key={index}
            className="absolute text-white/10 text-lg whitespace-nowrap animate-move-text"
            style={style}
          >
            Lite Ops
          </span>
        ))}
      </div>
      <div className="text-2xl font-bold text-gray-700 flex items-center gap-1">
        <div>
          <Image
            src="/logo-white.png"
            alt="Logo"
            width={1000}
            height={1000}
            priority
            className="w-24 h-auto md:w-32 bounce-animation animate-bounce"
            quality={100}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}

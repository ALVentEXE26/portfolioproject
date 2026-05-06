"use client";

import { useEffect, useState } from "react";

interface TrailDot {
  id: number;
  x: number;
  y: number;
}

export function PixelCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState<TrailDot[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let currentId = 0;
    const trailLength = 8;
    const delay = 60;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const newDot: TrailDot = {
        id: currentId++,
        x: e.clientX,
        y: e.clientY,
      };

      setTrail((prev) => {
        const newTrail = [...prev, newDot];
        if (newTrail.length > trailLength) {
          return newTrail.slice(-trailLength);
        }
        return newTrail;
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!isVisible && position.x === -100) return null;

  return (
    <>
      <style jsx>{`
        .cursor-main {
          position: fixed;
          width: 12px;
          height: 12px;
          background: #3b82f6;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 4px #3b82f6;
        }
        .cursor-trail {
          position: fixed;
          width: 8px;
          height: 8px;
          background: #2563eb;
          pointer-events: none;
          z-index: 9998;
          transform: translate(-50%, -50%);
          opacity: 0.7;
          transition: opacity 0.1s;
        }
        .cursor-dot {
          position: fixed;
          width: 4px;
          height: 4px;
          background: #1d4ed8;
          pointer-events: none;
          z-index: 9997;
          transform: translate(-50%, -50%);
          opacity: 0.5;
        }
        @media (pointer: coarse) {
          .cursor-main,
          .cursor-trail,
          .cursor-dot {
            display: none;
          }
        }
      `}</style>
      <div
        className="cursor-main"
        style={{ left: position.x, top: position.y }}
      />
      {trail.slice(0, -1).map((dot, index) => (
        <div
          key={dot.id}
          className="cursor-trail"
          style={{
            left: dot.x,
            top: dot.y,
            width: 8 - index * 0.5,
            height: 8 - index * 0.5,
          }}
        />
      ))}
      {trail.slice(0, 3).map((dot) => (
        <div
          key={dot.id}
          className="cursor-dot"
          style={{ left: dot.x, top: dot.y }}
        />
      ))}
    </>
  );
}
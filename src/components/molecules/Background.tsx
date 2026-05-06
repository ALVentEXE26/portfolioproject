"use client";

import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

export function Background() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newParticle: Particle = {
        id: Date.now(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.3 + 0.2,
      };
      setParticles((prev) => {
        const updated = [...prev, newParticle];
        return updated.slice(-50);
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animate = () => {
      setParticles((prev) =>
        prev
          .map((p) => ({ ...p, y: p.y - p.speed }))
          .filter((p) => p.y > -10)
      );
      requestAnimationFrame(animate);
    };
    const frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [particles]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.06]"
        viewBox="0 0 400 400"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <svg
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.15]"
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="80" fill="none" stroke="#3B82F6" strokeWidth="1" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="#3B82F6" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="40" fill="none" stroke="#3B82F6" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="20" fill="none" stroke="#3B82F6" strokeWidth="0.5" />

        <path
          d="M 100 20 L 100 40 M 100 160 L 100 180 M 20 100 L 40 100 M 160 100 L 180 100"
          stroke="#3B82F6"
          strokeWidth="1"
        />

        <path
          d="M 100 35 L 115 55 L 140 60 L 120 80 L 125 105 L 100 95 L 75 105 L 80 80 L 60 60 L 85 55 Z"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="1"
        />

        <text
          x="100"
          y="145"
          textAnchor="middle"
          fill="#3B82F6"
          fontSize="24"
          fontFamily="monospace"
          fontWeight="bold"
        >
          EXE
        </text>

        <path
          d="M 70 155 Q 85 165 100 155 Q 115 165 130 155"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="1"
        />
      </svg>

      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-[#3B82F6]"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B0F19]" />
    </div>
  );
}
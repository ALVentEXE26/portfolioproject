"use client";

import { useEffect, useState, type ReactNode } from "react";

interface PageAnimationProps {
  children: ReactNode;
  delay?: number;
}

export function PageAnimation({ children, delay = 0 }: PageAnimationProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`transition-all duration-500 ease-out ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScrolling({ children } : any) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true, easing: function easeOutExpo(x: number): number {
        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
        } }}>
      {children}
    </ReactLenis>
  );
}
import { useEffect, useRef, type MutableRefObject } from "react";

export interface MousePosition {
  x: number;
  y: number;
}

/**
 * Melacak posisi kursor secara global dan menormalisasinya ke rentang [-1, 1].
 * Memakai `useRef` (bukan state) agar tidak memicu re-render tiap mouse bergerak.
 */
export const useMouse = (): MutableRefObject<MousePosition> => {
  const mouse = useRef<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event: MouseEvent): void => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (event.clientY / window.innerHeight) * 2 - 1;
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return mouse;
};

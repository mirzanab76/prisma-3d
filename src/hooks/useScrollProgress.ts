import { useEffect, useRef, type MutableRefObject, type RefObject } from "react";

const clamp = (value: number, min: number, max: number): number =>
  Math.max(min, Math.min(max, value));

/**
 * Menghitung progress scroll (0 → 1) dari atas halaman sampai
 * elemen target (Products Section) mencapai puncak viewport.
 * 0 = posisi awal (Hero), 1 = model sudah "mendarat" di Products Section.
 */
export const useScrollProgress = (
  targetRef: RefObject<HTMLElement>
): MutableRefObject<number> => {
  const progress = useRef<number>(0);

  useEffect(() => {
    const update = (): void => {
      const target = targetRef.current;
      const end = target ? target.offsetTop : window.innerHeight * 2;
      progress.current = end > 0 ? clamp(window.scrollY / end, 0, 1) : 0;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [targetRef]);

  return progress;
};

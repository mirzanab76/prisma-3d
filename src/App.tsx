import { useRef } from "react";
import Scene from "./components/three/Scene";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Footer from "./components/Footer";
import { useMouse } from "./hooks/useMouse";
import { useScrollProgress } from "./hooks/useScrollProgress";

const App = (): JSX.Element => {
  const productsRef = useRef<HTMLElement>(null);
  const mouseRef = useMouse();
  const scrollRef = useScrollProgress(productsRef);

  return (
    <div className="relative">
      {/* Layer 1: Latar gradien beranimasi */}
      <div className="animated-gradient fixed inset-0 -z-20" />

      {/* Layer 2: Canvas 3D (fixed, tidak menghalangi scroll/klik) */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Scene scrollRef={scrollRef} mouseRef={mouseRef} />
      </div>

      {/* Layer 3: Konten halaman */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Products ref={productsRef} />
        <Footer />
      </div>
    </div>
  );
};

export default App;

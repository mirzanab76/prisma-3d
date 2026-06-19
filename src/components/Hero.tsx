const Hero = (): JSX.Element => {
  return (
    <section id="hero" className="relative flex min-h-screen items-center">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <span className="mb-4 w-fit rounded-full glass px-4 py-1.5 text-sm font-medium">
            ✦ Creative Tech Studio
          </span>
          <h1 className="text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
            We craft <br />
            <span className="bg-gradient-to-r from-cyan-200 via-white to-pink-200 bg-clip-text text-transparent">
              bold digital
            </span>
            <br /> experiences.
          </h1>
          <p className="mt-6 max-w-md text-lg text-white/80">
            PRISMA membantu brand bertransformasi melalui produk digital yang
            interaktif, imersif, dan tak terlupakan.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#products"
              className="rounded-full bg-white px-7 py-3 font-semibold text-purple-700 transition hover:scale-105"
            >
              Explore our work
            </a>
            <a
              href="#about"
              className="rounded-full glass px-7 py-3 font-semibold transition hover:bg-white/20"
            >
              Learn more
            </a>
          </div>
        </div>
        {/* Kolom kanan dibiarkan kosong — model 3D dari <Scene/> melayang di sini */}
        <div aria-hidden className="hidden md:block" />
      </div>
    </section>
  );
};

export default Hero;

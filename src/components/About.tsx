import { motion } from "framer-motion";

const stats: ReadonlyArray<{ value: string; label: string }> = [
  { value: "120+", label: "Projects shipped" },
  { value: "40+", label: "Happy clients" },
  { value: "8 yrs", label: "Of experience" },
];

const About = (): JSX.Element => {
  return (
    <section id="about" className="relative flex min-h-screen items-center">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={ { opacity: 0, y: 40 } }
          whileInView={ { opacity: 1, y: 0 } }
          viewport={ { once: true, amount: 0.4 } }
          transition={ { duration: 0.6, ease: "easeOut" } }
          className="glass rounded-3xl p-10 md:p-14"
        >
          <h2 className="text-4xl font-black md:text-5xl">About Us</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/85">
            Kami adalah studio lintas-disiplin yang menggabungkan desain,
            teknologi, dan storytelling. Dari interface 3D yang interaktif
            hingga sistem produk berskala besar, PRISMA percaya bahwa detail
            kecil menciptakan pengalaman besar.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-black text-cyan-200 md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

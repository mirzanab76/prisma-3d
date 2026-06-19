import { forwardRef } from "react";
import { motion } from "framer-motion";

const features: ReadonlyArray<{ title: string; desc: string }> = [
  { title: "Interactive 3D", desc: "Pengalaman produk yang hidup & responsif." },
  { title: "Performant", desc: "Dioptimalkan untuk kecepatan di semua perangkat." },
  { title: "Type-safe", desc: "Dibangun dengan TypeScript yang strictly typed." },
];

const Products = forwardRef<HTMLElement>((_props, ref): JSX.Element => {
  return (
    <section
      id="products"
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24"
    >
      <motion.h2
        initial={ { opacity: 0, y: 40 } }
        whileInView={ { opacity: 1, y: 0 } }
        viewport={ { once: true, amount: 0.5 } }
        transition={ { duration: 0.6, ease: "easeOut" } }
        className="text-center text-4xl font-black md:text-6xl"
      >
        Our Flagship Product
      </motion.h2>
      <p className="mt-4 max-w-xl text-center text-white/80">
        Model 3D di tengah layar adalah pusat perhatian section ini —
        berputar & membesar mulus mengikuti scroll Anda.
      </p>

      {/* Ruang untuk model 3D yang "mendarat" di tengah */}
      <div aria-hidden className="h-[40vh]" />

      <div className="grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={ { opacity: 0, y: 30 } }
            whileInView={ { opacity: 1, y: 0 } }
            viewport={ { once: true, amount: 0.5 } }
            transition={ { duration: 0.6, ease: "easeOut", delay: index * 0.1 } }
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="mt-2 text-sm text-white/75">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
});

Products.displayName = "Products";
export default Products;

const links: ReadonlyArray<{ label: string; href: string }> = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#footer" },
];

const Navbar = (): JSX.Element => {
  return (
    <nav className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-2xl font-black tracking-tight">
          PRISMA<span className="text-cyan-300">.</span>
        </a>
        <ul className="hidden gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/80 transition hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#footer"
          className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-purple-700 transition hover:scale-105"
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

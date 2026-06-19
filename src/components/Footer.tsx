const socials: ReadonlyArray<{ label: string; href: string }> = [
  { label: "Twitter", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Dribbble", href: "#" },
];

const Footer = (): JSX.Element => {
  return (
    <footer id="footer" className="relative border-t border-white/15">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 md:flex-row md:justify-between">
        <div className="text-2xl font-black">
          PRISMA<span className="text-cyan-300">.</span>
        </div>
        <ul className="flex gap-6">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                className="text-sm text-white/80 transition hover:text-white"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} PRISMA Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

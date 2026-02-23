const Footer = () => (
  <footer className="bg-secondary py-12 border-t border-secondary-foreground/10">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#" className="font-display text-xl font-bold text-secondary-foreground tracking-tight">
          Hire<span className="text-primary">GNX</span>
        </a>
        <div className="flex gap-8">
          {["About", "Services", "Results", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
        <p className="text-sm text-secondary-foreground/40">
          © {new Date().getFullYear()} HireGNX. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

import logo from "@/assets/hiregnx.png";

const Footer = () => (
  <footer className="bg-secondary py-12 border-t border-secondary-foreground/10">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#" className="flex items-center">
          <img src={logo} alt="HireGNX" className="h-10" />
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

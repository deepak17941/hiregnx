import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const highlights = [
  "80% Job Placement Rate",
  "500+ Candidates Placed",
  "Top Tech Companies",
];

const HeroSection = () => (
  <section
    className="relative min-h-screen flex items-center bg-hero overflow-hidden pt-16"
  >
    <div
      className="absolute inset-0 bg-cover bg-center opacity-30"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 to-secondary" />

    <div className="container relative z-10 py-20 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
          Technical Consulting & Career Services
        </p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-hero-foreground">
          Land Your Dream Tech Role with{" "}
          <span className="text-gradient">Expert Guidance</span>
        </h1>
        <p className="text-lg text-hero-foreground/70 mb-8 max-w-xl leading-relaxed">
          From resume crafting to salary negotiation, HireGNX provides end-to-end career support that has helped hundreds of professionals break into top-tier tech companies.
        </p>

        <div className="flex flex-wrap gap-4 mb-10">
          <Button asChild size="lg" className="text-base font-semibold">
            <a href="#contact">
              Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base border-primary/50 text-primary hover:bg-primary/10 hover:text-primary">
            <a href="#services">View Services</a>
          </Button>
        </div>

        <div className="flex flex-wrap gap-6">
          {highlights.map((h) => (
            <div key={h} className="flex items-center gap-2 text-sm text-hero-foreground/70">
              <CheckCircle className="h-4 w-4 text-primary" />
              {h}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;

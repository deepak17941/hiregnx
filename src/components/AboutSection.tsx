import { motion } from "framer-motion";
import { Target, Users, Zap } from "lucide-react";

const values = [
  { icon: Target, title: "Precision Matching", desc: "We align your skills with the right opportunities at top tech firms." },
  { icon: Users, title: "Personalized Coaching", desc: "One-on-one mentorship tailored to your experience level and career goals." },
  { icon: Zap, title: "Rapid Results", desc: "Our streamlined process gets candidates interview-ready in weeks, not months." },
];

const AboutSection = () => (
  <section id="about" className="py-20 lg:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center mb-16"
      >
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">About HireGNX</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-foreground">
          Your Partner in Tech Career Success
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          HireGNX was founded by industry veterans who understand what it takes to land—and excel in—top technical roles. We bridge the gap between talent and opportunity with proven methodologies.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <v.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-3 text-card-foreground">{v.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;

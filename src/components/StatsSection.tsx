import { motion } from "framer-motion";

const stats = [
  { value: "80%", label: "Job Placement Ratio" },
  { value: "500+", label: "Candidates Placed" },
  { value: "150+", label: "Partner Companies" },
  { value: "95%", label: "Client Satisfaction" },
];

const StatsSection = () => (
  <section id="stats" className="py-20 lg:py-24 bg-stats">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Proven Results</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-hero-foreground">
          Numbers That Speak for Themselves
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <p className="font-display text-4xl sm:text-5xl font-bold text-primary mb-2">{s.value}</p>
            <p className="text-hero-foreground/60 text-sm">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;

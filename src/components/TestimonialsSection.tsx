import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer at Google",
    text: "HireGNX transformed my job search. Their interview coaching was incredibly detailed—I went from failing phone screens to landing a senior role at Google in just 8 weeks.",
  },
  {
    name: "Marcus Johnson",
    role: "Staff Engineer at Meta",
    text: "The salary negotiation guidance alone was worth it. They helped me secure a 35% higher offer than what was initially presented. Absolute game-changer.",
  },
  {
    name: "Emily Chen",
    role: "Engineering Manager at Stripe",
    text: "From resume rewrite to system design prep, the end-to-end support was seamless. I couldn't have navigated the hiring process at Stripe without their expert guidance.",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 lg:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center mb-16"
      >
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Testimonials</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-foreground">
          What Our Clients Say
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-card border border-border rounded-lg p-8 flex flex-col"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-card-foreground/80 text-sm leading-relaxed mb-6 flex-1">"{t.text}"</p>
            <div>
              <p className="font-display font-semibold text-card-foreground">{t.name}</p>
              <p className="text-muted-foreground text-sm">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;

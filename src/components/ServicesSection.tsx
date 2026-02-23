import { motion } from "framer-motion";
import { FileText, MessageSquare, DollarSign, Search, ArrowRightLeft, LayoutDashboard } from "lucide-react";

const services = [
  { icon: FileText, title: "Resume Preparation", desc: "ATS-optimized resumes and portfolios tailored for top tech companies and specific roles." },
  { icon: MessageSquare, title: "Interview Coaching", desc: "Multi-round prep covering technical, behavioral, and system design interviews with mock sessions." },
  { icon: DollarSign, title: "Salary Negotiation", desc: "Data-driven negotiation strategies to maximize your compensation package and benefits." },
  { icon: Search, title: "Job Search Strategy", desc: "Targeted approach to finding and applying for roles that match your skills and career trajectory." },
  { icon: ArrowRightLeft, title: "End-to-End Support", desc: "Complete hiring lifecycle management from application to offer acceptance and onboarding." },
  { icon: LayoutDashboard, title: "Career Roadmapping", desc: "Long-term career planning with actionable milestones to reach your professional goals." },
];

const ServicesSection = () => (
  <section id="services" className="py-20 lg:py-28 bg-section-alt">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center mb-16"
      >
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Services</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-foreground">
          Everything You Need to Get Hired
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Comprehensive career services designed to give you an unfair advantage in the competitive tech job market.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card border border-border rounded-lg p-7 hover:border-primary/40 transition-all group hover:shadow-md"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2 text-card-foreground">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

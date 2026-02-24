import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "5b1b6700-d1e3-404f-a38c-d083ad12d735",
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `New Contact Form Submission from ${form.name}`,
        }),
      });

      const data = await response.json();
      if (data.success) {
        toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
        setForm({ name: "", email: "", message: "" });
      } else {
        toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Network error", description: "Please check your connection and try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Get in Touch</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Ready to Accelerate Your Career?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Fill out the form below or reach out directly. We typically respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-card"
                maxLength={100}
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-card"
                maxLength={200}
              />
            </div>
            <Textarea
              placeholder="Tell us about your career goals and how we can help..."
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-card resize-none"
              maxLength={2000}
            />
            <Button type="submit" size="lg" className="w-full sm:w-auto text-base font-semibold" disabled={loading}>
              {loading ? "Sending..." : "Send Message"} {!loading && <Send className="ml-2 h-4 w-4" />}
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            {[
              { icon: Mail, label: "Email", value: "hiregnx@gmail.com" },
              { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
              { icon: MapPin, label: "Location", value: "971 US Highway 202N, Ste N, Branchburg, NJ 08876" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  <p className="text-muted-foreground text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

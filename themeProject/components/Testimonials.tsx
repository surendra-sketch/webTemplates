import React from 'react';
import { motion } from 'framer-motion';
import { Testimonial } from '../types';
import { Quote } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "CTO",
    company: "TechFlow",
    content: "Lumina has completely revolutionized how our team ships code. The AI integration is unlike anything else on the market.",
    avatar: "https://picsum.photos/100/100?random=10"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Senior Dev",
    company: "StartUp Inc",
    content: "I was skeptical at first, but the productivity gains are undeniable. I'm saving about 15 hours a week.",
    avatar: "https://picsum.photos/100/100?random=11"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Product Manager",
    company: "Creative Sol",
    content: "The visual builder helps me prototype ideas instantly without waiting for engineering resources. A game changer.",
    avatar: "https://picsum.photos/100/100?random=12"
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-background relative overflow-hidden transition-colors duration-500">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_800px_at_50%_50%,rgba(var(--primary),0.05),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Loved by Developers
          </motion.h2>
          <p className="text-slate-400 text-lg">Join thousands of satisfied users shipping faster.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-card border border-white/5 p-8 rounded-3xl relative hover:border-primary/30 transition-all shadow-xl"
            >
              <Quote className="absolute top-8 right-8 text-white/10 w-10 h-10" />
              <p className="text-slate-300 mb-8 relative z-10 leading-relaxed text-lg">"{t.content}"</p>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-primary/20" />
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <div className="text-sm text-primary">{t.role}</div>
                  <div className="text-xs text-slate-500">{t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
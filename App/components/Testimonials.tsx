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
    <section id="testimonials" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Loved by Developers
          </motion.h2>
          <p className="text-slate-400">Join thousands of satisfied users shipping faster.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-900 border border-slate-800 p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-8 right-8 text-slate-700 w-8 h-8 opacity-50" />
              <p className="text-slate-300 mb-8 relative z-10 leading-relaxed">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-slate-700" />
                <div>
                  <h4 className="text-white font-semibold">{t.name}</h4>
                  <div className="text-sm text-slate-500">{t.role}, {t.company}</div>
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
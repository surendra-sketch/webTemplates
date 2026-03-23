import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for hobbyists and side projects.",
    features: ["Up to 3 projects", "Basic AI Autocomplete", "Community Support", "1GB Storage"],
  },
  {
    name: "Pro",
    price: "$29",
    description: "For professional developers and freelancers.",
    features: ["Unlimited projects", "Advanced AI Models", "Priority Support", "10GB Storage", "Team Collaboration"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Scalable solutions for large teams.",
    features: ["SSO & Security", "Dedicated Success Manager", "Unlimited Storage", "Custom Contracts", "SLA Guarantee"],
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 bg-background relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
           <p className="text-slate-400 text-lg">Choose the plan that's right for you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl p-8 border flex flex-col ${
                plan.popular 
                  ? 'bg-card border-primary shadow-2xl shadow-primary/10' 
                  : 'bg-card/40 border-white/5'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-lg">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-5xl font-bold text-white tracking-tight">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-slate-500">/mo</span>}
              </div>
              <p className="text-slate-400 text-sm mb-8 pb-8 border-b border-white/5">{plan.description}</p>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-slate-300 text-sm group">
                    <div className="mt-0.5 p-1 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                       <Check size={12} strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                plan.popular 
                  ? 'bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25' 
                  : 'bg-white/5 hover:bg-white/10 text-white border border-white/5'
              }`}>
                Choose {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
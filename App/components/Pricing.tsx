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
    <section id="pricing" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
           <p className="text-slate-400">Choose the plan that's right for you.</p>
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
              className={`relative rounded-2xl p-8 border ${
                plan.popular 
                  ? 'bg-slate-800 border-blue-500 shadow-2xl shadow-blue-900/20' 
                  : 'bg-slate-900 border-slate-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-slate-500">/mo</span>}
              </div>
              <p className="text-slate-400 text-sm mb-6">{plan.description}</p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-slate-300 text-sm">
                    <Check className="w-5 h-5 text-blue-500 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                plan.popular 
                  ? 'bg-blue-600 hover:bg-blue-500 text-white' 
                  : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
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
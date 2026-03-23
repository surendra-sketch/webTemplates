import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Shield, Zap, Layout, Terminal } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    id: 1,
    title: 'AI-Powered Logic',
    description: 'Our proprietary model predicts your next move, automating repetitive coding tasks.',
    icon: <Cpu className="w-6 h-6 text-blue-400" />,
    delay: 0.1,
  },
  {
    id: 2,
    title: 'Global Edge Network',
    description: 'Deploy instantly to 35+ regions worldwide with millisecond latency.',
    icon: <Globe className="w-6 h-6 text-purple-400" />,
    delay: 0.2,
  },
  {
    id: 3,
    title: 'Enterprise Security',
    description: 'SOC2 Type II certified. End-to-end encryption for all your data at rest and in transit.',
    icon: <Shield className="w-6 h-6 text-green-400" />,
    delay: 0.3,
  },
  {
    id: 4,
    title: 'Instant Reloads',
    description: 'Experience sub-second hot reloading. Never lose your state again.',
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    delay: 0.4,
  },
  {
    id: 5,
    title: 'Visual Builder',
    description: 'Drag, drop, and customize components with our advanced visual editor.',
    icon: <Layout className="w-6 h-6 text-pink-400" />,
    delay: 0.5,
  },
  {
    id: 6,
    title: 'Command Line CLI',
    description: 'For power users who prefer the terminal. Full parity with our web dashboard.',
    icon: <Terminal className="w-6 h-6 text-orange-400" />,
    delay: 0.6,
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Powering the Future of Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Everything you need to build scalable, high-performance applications in one unified platform.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay }}
              whileHover={{ y: -5 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:bg-slate-800 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
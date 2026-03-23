import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Command, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background transition-colors duration-500">
      
      {/* Dynamic Backgrounds */}
      <motion.div style={{ y: y1, opacity: 0.4 }} className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-screen" />
      <motion.div style={{ y: y2, opacity: 0.3 }} className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none mix-blend-screen" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div className="text-center lg:text-left pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium mb-8 backdrop-blur-sm"
          >
            <Sparkles size={14} />
            <span>Lumina 2.0 is now available</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1]"
          >
            Crafting the <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x">
              Impossible.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
          >
            Experience a workspace that adapts to your thought process. 
            AI-driven workflows, real-time collaboration, and limitless scalability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-black font-bold text-lg shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors"
            >
              Start Building
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 text-white font-bold text-lg border border-white/10 hover:bg-white/10 backdrop-blur-md flex items-center justify-center gap-2 transition-colors"
            >
              <Play className="w-5 h-5 fill-current" />
              Watch Demo
            </motion.button>
          </motion.div>

          <div className="mt-12 flex items-center gap-4 justify-center lg:justify-start">
             <div className="flex -space-x-3">
               {[1,2,3,4].map((i) => (
                 <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-slate-800 overflow-hidden relative">
                   <img src={`https://picsum.photos/40/40?random=${i+10}`} className="w-full h-full object-cover" />
                 </div>
               ))}
             </div>
             <div className="text-sm text-slate-500 font-medium">
               Trusted by <span className="text-white">10,000+</span> teams
             </div>
          </div>
        </div>

        {/* 3D Floating Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.4, type: "spring" }}
          className="relative hidden lg:block perspective-1000"
        >
          {/* Main Card */}
          <motion.div 
             animate={{ y: [-10, 10, -10] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             className="relative rounded-3xl bg-card border border-white/10 shadow-2xl overflow-hidden aspect-square z-10"
          >
             {/* UI Header */}
             <div className="h-12 border-b border-white/5 bg-black/20 flex items-center px-6 gap-2">
               <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-500/80" />
                 <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                 <div className="w-3 h-3 rounded-full bg-green-500/80" />
               </div>
               <div className="ml-4 px-3 py-1 rounded-md bg-white/5 text-xs text-slate-400 font-mono flex items-center gap-2">
                 <Command size={10} /> lumina-app / src / main.tsx
               </div>
             </div>

             {/* UI Content */}
             <div className="p-8 font-mono text-sm relative">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                
                <div className="space-y-4">
                  {[1,2,3].map((i) => (
                    <div key={i} className="flex gap-4 opacity-50">
                      <div className="w-6 text-slate-600 text-right">{i}</div>
                      <div className="h-4 bg-slate-700/50 rounded w-full max-w-[200px]" />
                    </div>
                  ))}
                  
                  {/* Highlighted active line */}
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 1 }}
                    className="flex gap-4 relative py-1 bg-primary/10 -mx-4 px-4 border-l-2 border-primary"
                  >
                     <div className="w-6 text-primary text-right">4</div>
                     <span className="text-secondary">const</span> <span className="text-primary">App</span> = () ={'>'} {'{'}
                  </motion.div>

                   <div className="pl-10 space-y-2 pt-2">
                      <div className="flex gap-2">
                        <span className="text-accent">return</span> (
                      </div>
                      <div className="pl-4 text-white">
                        {'<'}Hero <span className="text-secondary">animated</span>={'{'}<span className="text-primary">true</span>{'}'} {'/>'}
                      </div>
                      <div className="pl-4 text-white">
                        {'<'}Features {'/>'}
                      </div>
                      <div>);</div>
                   </div>
                </div>

                {/* Floating Widgets */}
                <motion.div 
                  className="absolute bottom-8 right-8 bg-black/40 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-xl"
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-green-500 to-emerald-300 flex items-center justify-center text-black font-bold shadow-lg shadow-green-500/20">
                       A+
                     </div>
                     <div>
                       <div className="text-xs text-slate-400">Performance</div>
                       <div className="text-white font-bold">99.9%</div>
                     </div>
                   </div>
                </motion.div>
             </div>
          </motion.div>
          
          {/* Decorative Glow Behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-full blur-[80px] -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
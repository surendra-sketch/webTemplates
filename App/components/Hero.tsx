import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-600/20 rounded-full blur-[100px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-6"
          >
            <span className="flex h-2 w-2 relative mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            v2.0 is now live
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
          >
            Build faster with <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Intelligence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            Lumina leverages advanced AI to streamline your development workflow. 
            Write code, debug, and deploy in record time with our next-gen platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-lg shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 group"
            >
              Start Building
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800 text-white font-bold text-lg border border-slate-700 hover:bg-slate-700 flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5 fill-current" />
              Watch Demo
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-slate-500 text-sm"
          >
            <div className="flex -space-x-2">
               {[1, 2, 3, 4].map((i) => (
                 <img key={i} src={`https://picsum.photos/32/32?random=${i}`} alt="User" className="w-8 h-8 rounded-full border-2 border-slate-900" />
               ))}
            </div>
            <p>Trusted by 10,000+ developers</p>
          </motion.div>
        </div>

        {/* Visual Element / Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative perspective-1000 hidden lg:block"
        >
          <div className="relative rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden aspect-[4/3] group">
             {/* Abstract UI representation */}
             <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 z-0"></div>
             
             {/* Decorative Grid */}
             <div className="absolute inset-0 opacity-20" 
                style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
             </div>

             {/* Code Snippet Mockup */}
             <div className="absolute top-10 left-10 right-10 bottom-10 bg-black/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6 font-mono text-sm overflow-hidden">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"/>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                  <div className="w-3 h-3 rounded-full bg-green-500"/>
                </div>
                <div className="space-y-2">
                  <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: "100%" }} 
                    transition={{ duration: 2, delay: 1 }}
                    className="h-4 w-3/4 bg-slate-700 rounded animate-pulse" 
                  />
                  <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: "80%" }} 
                    transition={{ duration: 2, delay: 1.2 }}
                    className="h-4 w-1/2 bg-blue-900/50 rounded animate-pulse" 
                  />
                  <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: "60%" }} 
                    transition={{ duration: 2, delay: 1.4 }}
                    className="h-4 w-2/3 bg-slate-700 rounded animate-pulse" 
                  />
                </div>
                
                {/* Floating Card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-6 right-6 bg-slate-800 p-4 rounded-lg border border-slate-600 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold">98</div>
                    <div>
                      <div className="text-xs text-slate-400">Optimization Score</div>
                      <div className="text-white font-bold">Excellent</div>
                    </div>
                  </div>
                </motion.div>
             </div>
          </div>
          
          {/* Decorative Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 opacity-30 blur-2xl -z-10 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Moon, Sun, Droplets, Trees } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ThemeType } from '../types';

const themes: { id: ThemeType; label: string; icon: React.ReactNode; color: string }[] = [
  { id: 'cyber', label: 'Cyber', icon: <Moon size={16} />, color: 'bg-blue-500' },
  { id: 'sunset', label: 'Sunset', icon: <Sun size={16} />, color: 'bg-orange-500' },
  { id: 'ocean', label: 'Ocean', icon: <Droplets size={16} />, color: 'bg-cyan-500' },
  { id: 'forest', label: 'Forest', icon: <Trees size={16} />, color: 'bg-green-500' },
];

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full bg-card border border-white/10 hover:border-primary/50 transition-colors relative"
      >
        <Palette className="w-5 h-5 text-primary" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full right-0 mt-3 p-2 bg-card/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl w-40 z-50 overflow-hidden"
          >
            <div className="space-y-1">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${
                    theme === t.id
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${t.color}`} />
                  {t.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeToggle;
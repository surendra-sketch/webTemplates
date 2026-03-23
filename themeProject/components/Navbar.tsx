import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, ChevronDown, Activity, Box, Shield, FileText, Users, CreditCard } from 'lucide-react';
import { NavItem } from '../types';
import ThemeToggle from './ThemeToggle';

const navItems: NavItem[] = [
  { 
    label: 'Product', 
    isMega: true,
    children: [
      { title: 'Analytics', description: 'Real-time insights for your apps', icon: <Activity className="text-primary" />, href: '#' },
      { title: 'Automation', description: 'Build workflows in seconds', icon: <Box className="text-secondary" />, href: '#' },
      { title: 'Security', description: 'Enterprise-grade protection', icon: <Shield className="text-accent" />, href: '#' },
    ]
  },
  { 
    label: 'Resources', 
    children: [
      { title: 'Documentation', description: 'Start building today', icon: <FileText className="text-primary" />, href: '#' },
      { title: 'Community', description: 'Join our discord', icon: <Users className="text-secondary" />, href: '#' },
    ]
  },
  { label: 'Pricing', href: '#pricing' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 z-50 relative"
          >
            <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-xl shadow-lg shadow-primary/20">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              Lumina
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <div 
                key={item.label} 
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
              >
                <a
                  href={item.href || '#'}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all flex items-center gap-1 group ${
                    activeDropdown === item.label ? 'text-white bg-white/10' : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  )}
                </a>

                {/* Dropdown / Mega Menu */}
                <AnimatePresence>
                  {activeDropdown === item.label && item.children && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-max min-w-[200px] z-50`}
                    >
                       <div className={`bg-card/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-4 overflow-hidden
                         ${item.isMega ? 'grid grid-cols-3 gap-4 w-[600px]' : 'flex flex-col gap-2 w-64'}
                       `}>
                         {/* Glossy overlay */}
                         <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                         
                         {item.children.map((child) => (
                           <a 
                             key={child.title} 
                             href={child.href}
                             className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group relative z-10"
                           >
                             <div className="mt-1 p-2 rounded-lg bg-background border border-white/5 group-hover:border-primary/30 transition-colors">
                               {child.icon}
                             </div>
                             <div>
                               <div className="text-white font-medium mb-1 group-hover:text-primary transition-colors">{child.title}</div>
                               <div className="text-xs text-slate-400">{child.description}</div>
                             </div>
                           </a>
                         ))}
                       </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <ThemeToggle />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background fixed inset-0 top-20 z-40 overflow-y-auto"
          >
            <div className="px-4 py-6 space-y-6">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div className="space-y-4">
                      <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider px-3">{item.label}</div>
                      <div className="grid gap-2">
                        {item.children.map(child => (
                           <a 
                             key={child.title} 
                             href={child.href}
                             className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5"
                           >
                             {child.icon}
                             <span className="text-slate-200">{child.title}</span>
                           </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xl font-medium text-white px-3"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              
              <div className="pt-8 px-3">
                <button className="w-full px-5 py-4 rounded-xl bg-primary text-white font-bold text-lg shadow-lg shadow-primary/20">
                  Get Started Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../types';

interface NavigationProps {
  currentSection: string;
  onNavigate: (section: Section) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentSection, onNavigate }) => {
  const links = [
    { id: Section.HERO, label: 'Home' },
    { id: Section.SQUAD, label: 'Squad' },
    { id: Section.HISTORY, label: 'History' },
    { id: Section.AI, label: 'Assistant' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6"
    >
      <div className="glass-panel rounded-full px-8 py-4 flex items-center space-x-8 shadow-2xl border border-white/10">
        <div className="text-xl font-bold tracking-tighter mr-4">
          <span className="text-[#A50044]">FC</span>
          <span className="text-[#004D98]">Barça</span>
        </div>
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`text-sm font-semibold tracking-wide transition-all duration-300 relative ${
                currentSection === link.id ? 'text-[#edbb00]' : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.label}
              {currentSection === link.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#edbb00]"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};
import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { ThreeHero } from './components/ThreeHero';
import { SquadSection } from './components/SquadSection';
import { HistorySection } from './components/HistorySection';
import { ChatAssistant } from './components/ChatAssistant';
import { Section } from './types';
import { motion } from 'framer-motion';

function App() {
  const [currentSection, setCurrentSection] = useState<Section>(Section.HERO);

  const scrollToSection = (section: Section) => {
    setCurrentSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#050510] text-white selection:bg-[#A50044] selection:text-white">
      <Navigation currentSection={currentSection} onNavigate={scrollToSection} />
      
      {/* HERO SECTION */}
      <section id={Section.HERO} className="relative h-screen flex items-center justify-center overflow-hidden">
        <ThreeHero />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050510] z-0" />
        
        <div className="z-10 text-center px-4 max-w-5xl mx-auto pointer-events-none">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-[#edbb00] font-bold tracking-[0.5em] text-sm md:text-lg mb-6 uppercase"
          >
            Est. 1899 • Catalonia
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="text-7xl md:text-9xl font-black tracking-tighter mb-4 leading-none"
          >
            MÉS QUE <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A50044] to-[#004D98]">UN CLUB</span>
          </motion.h1>
          <motion.div
             initial={{ width: 0 }}
             animate={{ width: "100px" }}
             transition={{ delay: 1, duration: 0.8 }}
             className="h-2 bg-[#edbb00] mx-auto rounded-full mb-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
          >
            Experience the passion, the history, and the future of the greatest football club in the world.
          </motion.p>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 z-10 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
             <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* SQUAD SECTION */}
      <section id={Section.SQUAD} className="relative z-10">
        <SquadSection />
      </section>

      {/* HISTORY SECTION */}
      <section id={Section.HISTORY} className="relative z-10">
        <HistorySection />
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-black text-center text-gray-500 border-t border-white/10 relative z-10">
        <p className="text-sm">© {new Date().getFullYear()} FC Barcelona Fan Project. Created with Love & Antigravity.</p>
        <div className="flex justify-center space-x-6 mt-4">
           <span className="w-3 h-3 rounded-full bg-[#004D98]" />
           <span className="w-3 h-3 rounded-full bg-[#A50044]" />
           <span className="w-3 h-3 rounded-full bg-[#edbb00]" />
        </div>
      </footer>

      {/* AI ASSISTANT WIDGET */}
      <ChatAssistant />
    </div>
  );
}

export default App;
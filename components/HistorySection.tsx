import React from 'react';
import { motion } from 'framer-motion';
import { TROPHIES } from '../constants';
import { Trophy } from 'lucide-react';

export const HistorySection = () => {
  return (
    <div className="min-h-screen py-24 px-6 bg-[#050510] relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-20 text-center"
        >
          <h2 className="text-6xl font-black text-white mb-6">GLORY</h2>
          <div className="h-1 w-32 bg-[#edbb00] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TROPHIES.map((trophy, index) => (
            <motion.div
              key={trophy.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: "spring" }}
              whileHover={{ y: -15 }}
              className="glass-panel p-8 rounded-2xl border border-[#edbb00]/20 text-center relative overflow-hidden group"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#edbb00]/10 rounded-full blur-2xl group-hover:bg-[#edbb00]/20 transition-colors" />
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#edbb00] to-[#b8860b] flex items-center justify-center mb-6 shadow-lg shadow-yellow-500/20">
                  <Trophy size={40} className="text-white" />
                </div>
                <h3 className="text-4xl font-black text-white mb-2">{trophy.count}</h3>
                <p className="text-sm uppercase tracking-widest text-[#edbb00] mb-4">{trophy.name}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{trophy.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cinematic Text Block */}
        <div className="mt-32 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl font-bold mb-6 leading-tight">
              More than a Club. <br/>
              <span className="text-[#A50044]">A Philosophy.</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Founded in 1899, FC Barcelona has become a symbol of Catalan culture and Catalanism, hence the motto "Més que un club". Unlike many other football clubs, the supporters own and operate Barcelona.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="h-80 rounded-2xl overflow-hidden glass-panel relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#004D98] to-[#A50044] opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
               <span className="text-9xl font-black text-white/10 select-none">1899</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
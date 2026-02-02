import React from 'react';
import { motion } from 'framer-motion';
import { SQUAD_DATA, COLORS } from '../constants';
import { User, Activity } from 'lucide-react';

export const SquadSection = () => {
  return (
    <div className="min-h-screen py-24 px-6 relative overflow-hidden bg-gradient-to-b from-[#050510] to-[#001a33]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-4 uppercase tracking-tighter">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A50044] to-[#004D98]">Squad</span>
          </h2>
          <p className="text-xl text-gray-400 font-light">Stars of the Blaugrana</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SQUAD_DATA.map((player, index) => (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative h-[450px] rounded-3xl overflow-hidden glass-panel cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10" />
              <img
                src={player.image}
                alt={player.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute top-4 right-4 z-20 bg-white/10 backdrop-blur-md rounded-full w-12 h-12 flex items-center justify-center border border-white/20">
                <span className="text-xl font-bold text-white">{player.number}</span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform transition-transform duration-500">
                <h3 className="text-3xl font-bold mb-1">{player.name}</h3>
                <p className="text-[#edbb00] font-semibold uppercase tracking-wider mb-4">{player.position}</p>
                
                <div className="grid grid-cols-2 gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="flex items-center space-x-2">
                    <Activity size={16} className="text-[#A50044]" />
                    <span className="text-sm text-gray-300">SHT: {player.stats.shooting}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Activity size={16} className="text-[#004D98]" />
                    <span className="text-sm text-gray-300">PAS: {player.stats.passing}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Activity size={16} className="text-[#edbb00]" />
                    <span className="text-sm text-gray-300">DRI: {player.stats.dribbling}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Activity size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-300">PAC: {player.stats.pace}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
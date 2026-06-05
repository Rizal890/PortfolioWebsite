import { motion } from 'motion/react';
import { ArrowRight, Download, Mail, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-28 pb-16 px-6 md:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left column text introduction */}
        <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#121212] border-2 border-[#121212] text-white rounded-none w-fit mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
            <span className="font-mono text-xs tracking-widest font-bold uppercase">
              R&D DIVISION 
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-sans font-black text-4xl sm:text-5xl md:text-6xl text-[#121212] tracking-tighter uppercase leading-[0.95] mb-6"
          >
            Embedded Systems & <span className="text-orange-600 italic font-serif lowercase tracking-normal">Intelligent Sensing</span> Engineer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sans text-lg text-[#4a4a4a] max-w-xl leading-relaxed mb-10"
          >
            Bridging the gap between hardware high precision and intelligent software. Specialized in autonomous robotics navigation, solar UAV energy management, advanced PCB layouts, and real-time telemetry pipelines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <button
              onClick={scrollToProjects}
              className="bg-[#121212] hover:bg-orange-600 text-white border-2 border-[#121212] hover:border-orange-600 px-6 py-4 rounded-none font-mono font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-2 cursor-pointer"
            >
              View Projects
              <ArrowRight className="w-4 h-4 text-white" />
            </button>

            <button
              onClick={onOpenResume}
              className="border-2 border-[#121212] bg-white hover:bg-orange-600 hover:text-white hover:border-orange-600 text-[#121212] px-6 py-4 rounded-none font-mono font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download CV / Resume
            </button>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-[#121212] hover:text-orange-600 px-6 py-4 font-mono text-xs font-bold tracking-widest flex items-center gap-2 hover:translate-x-1 transition-all cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-orange-600" />
              CONTACT_ME
            </button>
          </motion.div>
        </div>

        {/* Right column imagery portrait */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 6 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.2 }}
            className="relative"
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-none bg-white border-4 border-[#121212] p-4 rotate-3 hover:rotate-0 transition-all duration-700 hover:border-orange-600 group shadow-[8px_8px_0px_0px_#121212] hover:shadow-[8px_8px_0px_0px_#ea580c] relative z-10">
              <div className="w-full h-full rounded-none overflow-hidden relative border border-[#121212]/10">
                <img
                  src="https://lh3.googleusercontent.com/d/1A95iWZs1Nvw9aINocoKOrwCed2578vgy"
                  alt="Ahmad Rizal - Embedded Systems & Sensing Engineer Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 contrast-[1.05] brightness-[0.95] group-hover:scale-105 transition-all duration-700"
                />
              </div>
            </div>

            {/* Glowing active collaboration hardware ribbon */}
            <div className="absolute -bottom-4 -left-4 bg-white border-2 border-[#121212] p-3.5 rounded-none shadow-[4px_4px_0px_0px_#121212] hover:border-orange-600 transition-colors z-20">
              <span className="flex items-center gap-2.5">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-600 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-600"></span>
                </span>
                <span className="font-mono text-[10px] text-[#121212] tracking-widest uppercase font-black">
                </span>
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

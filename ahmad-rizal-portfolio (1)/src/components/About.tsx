import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data';
import { Cpu, Award, Zap, HardDrive } from 'lucide-react';

export default function About() {
  // Map icons helper for statistics
  const getStatIcon = (label: string) => {
    switch (label) {
      case 'Core Projects':
        return <Cpu className="w-5 h-5 text-orange-600" />;
      case 'Years Exp.':
        return <Award className="w-5 h-5 text-orange-600" />;
      case 'Sensors Utilized':
        return <Zap className="w-5 h-5 text-orange-600" />;
      default:
        return <HardDrive className="w-5 h-5 text-orange-600" />;
    }
  };

  return (
    <section id="about" className="py-24 bg-white border-y-2 border-[#121212] relative overflow-hidden px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        
        {/* Conceptual writeup and metrics */}
        <div className="flex flex-col justify-center text-left">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs text-orange-600 border-l-2 border-orange-600 pl-2 tracking-widest uppercase mb-3 block font-bold"
          >
            BIO_TELEMETRY: OVERVIEW
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-sans font-black text-3xl sm:text-4xl text-[#121212] tracking-tighter uppercase mb-6"
          >
            Engineering Precision into Reality
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans text-base text-[#4a4a4a] leading-relaxed mb-10"
          >
            With active expertise spanning hardware schematics, PCB layouts, firmware compilation, and IoT cloud databases, I specialize in building ruggedized engineering solutions for harsh, high-noise industrial applications. My methodology is rooted in rigorous validation conducting extensive thermal audits, signal-integrity simulations, and protocol telemetry calibrations.
          </motion.p>

          {/* Grid layout stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-4">
            {PERSONAL_INFO.metrics.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[#EBEBEB] border-2 border-[#121212] p-4 sm:p-5 rounded-none flex flex-col justify-between hover:bg-orange-100 transition-all group shadow-[4px_4px_0px_0px_#121212]"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="font-sans font-extrabold text-2xl sm:text-3xl text-[#121212] tracking-tight group-hover:text-orange-600 transition-colors leading-none">
                    {stat.value}
                  </span>
                  {getStatIcon(stat.label)}
                </div>
                <span className="font-mono text-[10px] text-gray-600 font-bold tracking-wider uppercase">
                  {stat.label.replace(' ', '_')}
                </span>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

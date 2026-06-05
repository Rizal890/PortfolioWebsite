import { motion } from 'motion/react';
import { Cpu, Router, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Expertise() {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-orange-600" />;
      case 'Router':
        return <Router className="w-6 h-6 text-orange-600" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-orange-600" />;
      default:
        return <Cpu className="w-6 h-6 text-orange-600" />;
    }
  };

  return (
    <section id="expertise" className="py-24 px-6 md:px-12 relative bg-transparent">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-orange-600 border-l-2 border-orange-600 pl-2 tracking-widest uppercase mb-3 inline-block font-bold"
        >
          ENGINEERING_CORES: MATRIX
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-sans font-black text-3xl sm:text-4xl text-[#121212] tracking-tighter uppercase mt-2"
        >
          Technological Specializations
        </motion.h2>
        <div className="w-16 h-0.5 bg-[#121212] mx-auto mt-4" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {PERSONAL_INFO.specializations.map((spec, i) => (
          <motion.div
            key={spec.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-white border-2 border-[#121212] rounded-none p-8 hover:border-orange-600 transition-all duration-300 group relative shadow-[6px_6px_0px_0px_#121212] hover:shadow-[6px_6px_0px_0px_#ea580c]"
          >
            <div className="w-12 h-12 bg-orange-50 border-2 border-[#121212] rounded-none flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors">
              {getIconComponent(spec.icon)}
            </div>

            <h3 className="font-sans font-extrabold text-xl text-[#121212] uppercase tracking-tight mb-4 group-hover:text-orange-600 transition-colors">
              {spec.title}
            </h3>

            <p className="font-sans text-sm text-[#4a4a4a] leading-relaxed">
              {spec.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

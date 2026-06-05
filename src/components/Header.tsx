import { Terminal, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface HeaderProps {
  onOpenDoc: () => void;
}

export default function Header({ onOpenDoc }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-white/95 backdrop-blur-md border-b-2 border-[#121212]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-12 h-20">
        {/* Left Brand Identity */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-none bg-orange-600/10 flex items-center justify-center border-2 border-[#121212]">
            <Terminal className="w-4 h-4 text-orange-600" />
          </div>
          <div>
            <span className="font-sans font-extrabold text-lg text-[#121212] tracking-tighter uppercase block leading-tight">
              {PERSONAL_INFO.shortName}
            </span>
            <span className="font-mono text-[9px] text-[#ea580c] tracking-widest uppercase font-bold block">
              SYS: ONLINE
            </span>
          </div>
        </div>

        {/* Center / Right Links */}
        <div className="hidden md:flex gap-8 items-center">
          <button
            onClick={() => scrollToSection('about')}
            className="text-[#4a4a4a] hover:text-orange-600 hover:italic transition-colors font-mono text-xs uppercase tracking-wider font-bold cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('expertise')}
            className="text-[#4a4a4a] hover:text-orange-600 hover:italic transition-colors font-mono text-xs uppercase tracking-wider font-bold cursor-pointer"
          >
            Expertise
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-[#4a4a4a] hover:text-orange-600 hover:italic transition-colors font-mono text-xs uppercase tracking-wider font-bold cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('research')}
            className="text-[#4a4a4a] hover:text-orange-600 hover:italic transition-colors font-mono text-xs uppercase tracking-wider font-bold cursor-pointer"
          >
            Research
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-[#4a4a4a] hover:text-orange-600 hover:italic transition-colors font-mono text-xs uppercase tracking-wider font-bold cursor-pointer"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-[#4a4a4a] hover:text-orange-600 hover:italic transition-colors font-mono text-xs uppercase tracking-wider font-bold cursor-pointer"
          >
            Contact
          </button>

          <span className="w-px h-4 bg-[#121212]/20" />

          {/* Connected Trigger Button */}
          <button
            id="header-resume-trigger"
            onClick={onOpenDoc}
            className="bg-[#121212] hover:bg-orange-600 text-white px-4 py-2 rounded-none font-mono font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:scale-95 transition-all cursor-pointer border-2 border-[#121212]"
          >
            <FileText className="w-3.5 h-3.5" />
            Get Resume
          </button>
        </div>

        {/* Mobile quick action trigger */}
        <button
          onClick={onOpenDoc}
          className="md:hidden w-10 h-10 rounded-none bg-orange-100 flex items-center justify-center border-2 border-[#121212] text-orange-600 hover:bg-orange-600 hover:text-white transition-colors"
          title="View Resume"
        >
          <FileText className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
}

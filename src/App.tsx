import { useState } from 'react';
import ParticleNetwork from './components/ParticleNetwork';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Research from './components/Research';
import ExperienceEducation from './components/ExperienceEducation';
import Contact from './components/Contact';
import { 
  X, 
  Printer, 
  Copy, 
  Mail, 
  MapPin, 
  ExternalLink,
  Cpu, 
  BookOpen, 
  Download 
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, TECHNICAL_SKILLS } from './data';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  return (
    <div className="relative min-h-screen bg-[#F8F9FA] text-[#121212] overflow-hidden selection:bg-orange-200 selection:text-[#121212]">
      
      {/* 1. Subtle Animated Sensor & PCB Background */}
      <ParticleNetwork />

      {/* 2. Frosted Header */}
      <Header 
        onOpenDoc={() => setIsResumeOpen(true)} 
      />

      {/* 3. Main Pages Container */}
      <main className="relative z-10 w-full">
        {/* Hero Section */}
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)} 
        />

        {/* Core Bio-Telemetry Statistics */}
        <About />

        {/* Competency & Expertise Cards */}
        <Expertise />

        {/* Project Portfolio Bento with Simulated Testing Lab */}
        <Projects />

        {/* Research Publication & Abstract Page Reader */}
        <Research />

        {/* Experience TIMELINES & Educational Records */}
        <ExperienceEducation />

        {/* Messaging Telemetry Form & Diagnostics pre logs */}
        <Contact />
      </main>

      {/* 4. Footer */}
      <footer className="relative z-10 border-t-2 border-[#121212] bg-white py-12 px-6 md:px-12 text-center text-xs text-gray-500 font-mono">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-left">
            <span className="text-orange-650 font-bold block">{PERSONAL_INFO.name}</span>
            <span className="text-[10px] uppercase tracking-widest mt-1 block">AHMAD_RIZAL_PORTFOLIO_V2.0.0</span>
          </div>
          <div className="flex gap-6 items-center">
            <a href="#about" className="hover:text-orange-600 transition-colors">INIT_ABOUT</a>
            <a href="#projects" className="hover:text-orange-600 transition-colors">ARCHIVE_PROJECTS</a>
            <a href="#contact" className="hover:text-orange-600 transition-colors">GATE_CONTACT</a>
          </div>
          <span className="text-[10px]">
            &copy; {new Date().getFullYear()} AH_RIZAL. ALL CHANNELS SECURED.
          </span>
        </div>
      </footer>

      {/* 6. Interactive CV / Professional Sheet Viewer Modal */}
      {isResumeOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#EBEBEB] border-4 border-[#121212] rounded-none w-full max-w-4xl shadow-[12px_12px_0px_0px_#121212] p-6 sm:p-8 relative">
            
            {/* Top close bar */}
            <div className="flex justify-between items-center border-b-2 border-[#121212] pb-4 mb-6">
              <span className="font-mono text-xs text-orange-600 font-bold tracking-widest uppercase block">
                SECURED_RESUME: OVERLAY
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setIsResumeOpen(false)}
                  className="w-8 h-8 rounded-none bg-white border-2 border-[#121212] flex items-center justify-center text-gray-800 hover:bg-orange-100 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Document sheet */}
            <div className="bg-white text-[#121212] p-6 sm:p-10 rounded-none border-2 border-[#121212] text-left max-h-[70vh] overflow-y-auto select-none font-serif text-sm leading-relaxed shadow-[4px_4px_0px_0px_#121212]">
              <div className="text-center border-b-2 border-[#121212] pb-5 mb-6">
                <h1 className="font-sans font-black text-2xl sm:text-3xl text-gray-900 uppercase tracking-tighter">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="font-sans font-black text-sm text-orange-600 tracking-wide mt-1 uppercase">
                  {PERSONAL_INFO.title}
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-xs font-sans text-gray-600 mt-3 font-medium">
                  <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-orange-600" /> {PERSONAL_INFO.email}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-orange-600" /> {PERSONAL_INFO.location}</span>
                  <span className="flex items-center gap-1"><ExternalLink className="w-3.5 h-3.5 text-orange-600" /> {PERSONAL_INFO.linkedin}</span>
                </div>
              </div>

              {/* Education section */}
              <div className="mb-6">
                <h3 className="font-sans font-black text-xs uppercase tracking-wider text-gray-900 border-b-2 border-gray-900 pb-1 mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-orange-600" />
                  Education
                </h3>
                <div>
                  <div className="flex justify-between font-sans font-black text-sm">
                    <span className="uppercase">{EDUCATION.institution}</span>
                    <span>{EDUCATION.period}</span>
                  </div>
                  <div className="italic text-xs text-gray-700 mt-0.5">
                    {EDUCATION.degree} — Cumulative GPA: <strong>{EDUCATION.gpa} / 4.00</strong>
                  </div>
                  <div className="text-xs text-orange-600 font-sans font-black mt-1 uppercase tracking-wide">
                    {EDUCATION.lab}
                  </div>
                  <ul className="list-disc pl-5 text-xs text-gray-700 mt-2 space-y-1">
                    {EDUCATION.details.map((d, i) => <li key={i}>{d}</li>)}
                  </ul>
                </div>
              </div>

              {/* Skills section */}
              <div className="mb-6">
                <h3 className="font-sans font-black text-xs uppercase tracking-wider text-gray-900 border-b-2 border-gray-900 pb-1 mb-3 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-orange-600" />
                  Technical Competency
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {TECHNICAL_SKILLS.map(cat => (
                    <div key={cat.title}>
                      <span className="font-sans font-black text-xs text-gray-800 uppercase block">
                        {cat.title}
                      </span>
                      <span className="text-xs text-gray-700 block mt-0.5 font-sans leading-relaxed">
                        {cat.skills.join(', ')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience section */}
              <div>
                <h3 className="font-sans font-black text-xs uppercase tracking-wider text-gray-900 border-b-2 border-gray-900 pb-1 mb-3 flex items-center gap-1.5">
                  <Download className="w-4 h-4 text-orange-600" />
                  Professional Timeline
                </h3>
                <div className="space-y-4">
                  {EXPERIENCES.map(exp => (
                    <div key={exp.company}>
                      <div className="flex justify-between font-sans font-black text-sm">
                        <span>{exp.company} — <span className="text-orange-600">{exp.role}</span></span>
                        <span className="text-xs font-normal text-gray-600">{exp.period}</span>
                      </div>
                      <p className="text-xs text-gray-700 mt-1 italic">{exp.description}</p>
                      <ul className="list-disc pl-5 text-xs text-gray-700 mt-1.5 space-y-1">
                        {exp.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom prompt */}
            <div className="mt-4 flex justify-between items-center text-xs font-mono text-gray-500">
              <span className="font-bold">Ledger validation integrity successfully confirmed.</span>
              <span className="text-orange-600 font-bold font-mono uppercase tracking-widest">
                SECURED_PORTAL_ACTIVE
              </span>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

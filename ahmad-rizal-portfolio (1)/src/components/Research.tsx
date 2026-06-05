import { useState } from 'react';
import { motion } from 'motion/react';
import { PUBLICATION } from '../data';
import { 
  Copy, 
  BookOpen, 
  FileCheck2 
} from 'lucide-react';

export default function Research() {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isCitationCopied, setIsCitationCopied] = useState<boolean>(false);

  const handleCopyCitation = () => {
    navigator.clipboard.writeText(PUBLICATION.citation);
    setIsCitationCopied(true);
    setTimeout(() => setIsCitationCopied(false), 2000);
  };

  const handleCopyBibtex = () => {
    const bibtex = `Not Available Yet
}`;
    navigator.clipboard.writeText(bibtex);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="research" className="py-24 bg-white border-t-2 border-[#121212] relative overflow-hidden px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left column - Rich Text Citation and Actions */}
        <div className="lg:col-span-5 text-left lg:sticky lg:top-28">
          <span className="font-mono text-xs text-orange-600 border-l-2 border-orange-600 pl-2 tracking-widest uppercase mb-3 block font-bold">
            RESEARCH_PREVIEW: SCHOLAR
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-[#121212] uppercase tracking-tighter mb-4">
            Research Horizons
          </h2>
          <p className="font-sans text-sm text-[#4a4a4a] leading-relaxed mb-8">
            Applying classical optimization and modern predictive logic to autonomous mechanical arrays. Read my featured journal paper on Non-linear Model Predictive Control parameters below.
          </p>

          {/* Citation / Action tools box */}
          <div className="bg-[#EBEBEB] border-2 border-[#121212] p-6 rounded-none space-y-4 shadow-[4px_4px_0px_0px_#121212]">
            <h4 className="font-mono text-xs text-orange-600 font-bold uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Academic Indexes
            </h4>
            
            <p className="font-sans text-xs text-gray-700 leading-relaxed">
              Copy pre-formatted academic references or BibTeX parameters directly for bibliography registers.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleCopyCitation}
                className="w-full bg-white hover:bg-orange-100 border-2 border-[#121212] text-[#121212] px-4 py-3 rounded-none font-sans text-xs font-black transition-all shadow-[2px_2px_0px_0px_#121212] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_#121212] cursor-pointer flex items-center justify-center gap-2 uppercase tracking-tight"
              >
                {isCitationCopied ? <FileCheck2 className="w-3.5 h-3.5 text-orange-600" /> : <Copy className="w-3.5 h-3.5" />}
                {isCitationCopied ? 'Citation Copied!' : 'Copy Citation'}
              </button>

              <button
                onClick={handleCopyBibtex}
                className="w-full bg-white hover:bg-orange-100 border-2 border-[#121212] text-[#121212] px-4 py-3 rounded-none font-sans text-xs font-black transition-all shadow-[2px_2px_0px_0px_#121212] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_#121212] cursor-pointer flex items-center justify-center gap-2 uppercase tracking-tight"
              >
                {isCopied ? <FileCheck2 className="w-3.5 h-3.5 text-orange-600" /> : <Copy className="w-3.5 h-3.5" />}
                {isCopied ? 'BibTeX Copied!' : 'Copy BibTeX'}
              </button>
            </div>
          </div>
        </div>

        {/* Right column - Full Abstract and Publication Presentation */}
        <div className="lg:col-span-7 flex flex-col items-center">
          
          <div className="w-full bg-[#ffffff] rounded-none shadow-[10px_10px_0px_0px_#121212] p-6 sm:p-10 relative border-4 border-[#121212]">
            
            {/* Header Badge */}
            <div className="absolute -top-3.5 left-6 bg-[#121212] text-white px-3 py-1 border border-[#121212] rounded-none font-mono text-[9px] font-bold tracking-wider uppercase">
              FEATURED PUBLICATION
            </div>

            {/* Document Header */}
            <div className="border-b-2 border-[#121212] pb-6 mb-6">
              <span className="font-mono text-[9px] text-[#4a4a4a] tracking-widest uppercase block mb-2">
                Not Published Yet
              </span>
              
              <h3 className="font-sans font-black uppercase text-xl sm:text-2xl text-[#121212] leading-tight mb-3">
                {PUBLICATION.title}
              </h3>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-4">
                <div>
                  <p className="font-sans font-black text-sm text-gray-900">
                    Azam Zamhuri Fuadi, Ahmad Rizal Miftah Awali Sofyan, Angga Rusdinar
                  </p>
                  <p className="font-sans text-[10px] text-gray-500 italic">
                    Department of Electrical Engineering, Telkom University, Bandung, Indonesia
                  </p>
                </div>
                <div className="text-right sm:text-right text-xs font-mono text-gray-500">
                  <span className="block font-bold">YEAR: {PUBLICATION.year}</span>
                  <span className="block text-[10px] text-orange-600">DOI: {PUBLICATION.doi}</span>
                </div>
              </div>
            </div>

            {/* Complete Abstract Presentation */}
            <div className="mb-8">
              <h4 className="font-mono text-xs text-orange-600 tracking-widest uppercase mb-3 font-black border-b border-[#121212]/20 pb-1">
                Paper Abstract
              </h4>
              <p className="font-serif text-sm text-gray-800 leading-relaxed text-left text-justify select-text">
                {PUBLICATION.abstract}
              </p>
            </div>

            {/* Key Contribution Highlights */}
            <div className="border-t-2 border-[#121212] pt-6">
              <h4 className="font-mono text-xs text-orange-600 tracking-widest uppercase mb-4 font-black">
                Key Words
              </h4>
              <ul className="space-y-3">
                {PUBLICATION.highlights.map((highlight, index) => (
                  <li key={index} className="flex gap-2.5 items-start text-xs text-gray-700 leading-relaxed text-left">
                    <span className="w-2 h-2 rounded-none bg-orange-600 mt-1.5 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
          
        </div>

      </div>
    </section>
  );
}

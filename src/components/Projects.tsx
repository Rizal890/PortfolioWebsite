import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { 
  X, 
  ExternalLink, 
  Layers, 
  Play, 
  CheckCircle, 
  FileText, 
  Maximize2, 
  Image as ImageIcon, 
  Cpu
} from 'lucide-react';

const getGoogleDriveImageUrl = (url: string) => {
  if (url && url.includes('drive.google.com/file/d/')) {
    const match = url.match(/\/file\/d\/([^\/]+)/);
    if (match && match[1]) {
      return `https://lh3.googleusercontent.com/d/${match[1]}`;
    }
  }
  return url;
};

const isGoogleDriveVideo = (url: string) => {
  return url && url.includes('drive.google.com/file/d/');
};

const getGoogleDriveVideoEmbedUrl = (url: string) => {
  if (url && url.includes('drive.google.com/file/d/')) {
    const match = url.match(/\/file\/d\/([^\/]+)/);
    if (match && match[1]) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
  }
  return url;
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  // Local state for uploaded assets mock-per-project simulator
  const [modifiedProjects, setModifiedProjects] = useState<Project[]>(PROJECTS);
  
  // Media index tracker inside active modal
  const [activeMediaIndex, setActiveMediaIndex] = useState<number>(0);
  const [isFullscreenVideo, setIsFullscreenVideo] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  // Filter labels mapping
  const categories = ['All', 'Robotics', 'IoT', 'Energy', 'Sensing'];

  const getFilteredProjects = () => {
    if (activeCategory === 'All') return modifiedProjects;
    return modifiedProjects.filter(p => 
      p.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(activeCategory.toLowerCase()))
    );
  };

  // Helper to extract media parts of active project
  const getProjectMedia = (proj: Project) => {
    const list: { type: 'image' | 'video'; url: string }[] = [];
    
    if (proj.images && proj.images.length > 0) {
      proj.images.forEach(img => {
        list.push({ type: 'image', url: img });
      });
    } else if (proj.image) {
      list.push({ type: 'image', url: proj.image });
    }

    if (proj.videoUrls && proj.videoUrls.length > 0) {
      proj.videoUrls.forEach(vid => {
        list.push({ type: 'video', url: vid });
      });
    } else if (proj.videoUrl) {
      list.push({ type: 'video', url: proj.videoUrl });
    }

    return list;
  };



  const handleToggleFullscreenVideo = () => {
    if (videoRef.current) {
      if (!document.fullscreenElement) {
        videoRef.current.requestFullscreen().catch(err => {
          console.error('Error enabling fullscreen video:', err);
        });
      } else {
        document.exitFullscreen();
      }
    }
  };

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-transparent border-t-2 border-[#121212] relative">
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-mono text-xs text-orange-600 border-l-2 border-orange-600 pl-2 tracking-widest uppercase mb-3 block font-bold">
            PROJECT_DB: ARCHIVES
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-[#121212] uppercase tracking-tighter">
            Project Portfolio
          </h2>
          <div className="w-16 h-0.5 bg-[#121212] mt-4" />
        </div>

        {/* Dynamic Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-none text-xs font-mono tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#121212] text-white font-bold border-2 border-[#121212]'
                  : 'bg-white border-2 border-[#121212] text-[#121212] hover:bg-orange-100 transition-all shadow-[2px_2px_0px_0px_#121212] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_#121212]'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of cards with custom Bento arrangement */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        {getFilteredProjects().map((proj, idx) => {
          // Assign bento col sizes based on index
          const isLarge = idx === 0 || idx === 4 || idx === 7;
          const colSpan = isLarge ? 'md:col-span-8' : 'md:col-span-4';

          return (
            <motion.div
              key={proj.id}
              layoutId={`proj-container-${proj.id}`}
              onClick={() => {
                setSelectedProject(proj);
                setActiveMediaIndex(0);
              }}
              className={`group bg-white border-2 border-[#121212] rounded-none overflow-hidden flex flex-col cursor-pointer hover:border-orange-600 transition-all duration-300 relative shadow-[6px_6px_0px_0px_#121212] hover:shadow-[6px_6px_0px_0px_#ea580c] ${colSpan}`}
            >
              {/* Layout for Large cards: horizontal on desktop */}
              <div className={`flex flex-col h-full ${isLarge ? 'lg:flex-row' : ''}`}>
                
                {/* Image Section */}
                <div className={`relative overflow-hidden ${isLarge ? 'lg:w-1/2 aspect-video lg:aspect-auto' : 'aspect-video'} border-b-2 lg:border-b-0 ${isLarge ? 'lg:border-r-2 lg:border-[#121212]' : ''} border-[#121212]`}>
                  <img
                    src={getGoogleDriveImageUrl(proj.image)}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute top-4 left-4 bg-white border-2 border-[#121212] px-3 py-1 rounded-none font-mono text-[10px] text-[#121212] font-black tracking-wider uppercase">
                    {proj.id.replace('-', '_')}_V1
                  </div>
                </div>

                {/* Info summary */}
                <div className={`p-6 sm:p-8 flex flex-col justify-between flex-grow ${isLarge ? 'lg:w-1/2' : ''}`}>
                  <div>
                    <span className="font-mono text-[10px] text-orange-600 font-bold tracking-widest uppercase mb-2 block">
                      {proj.category}
                    </span>
                    <h3 className="font-sans font-extrabold text-xl text-[#121212] mb-3 group-hover:text-orange-600 uppercase tracking-tight transition-colors leading-snug">
                      {proj.title}
                    </h3>
                    <p className="font-sans text-sm text-[#4a4a4a] leading-relaxed mb-6">
                      {proj.description}
                    </p>
                  </div>

                  {/* Tags and metrics preview */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {proj.tags.slice(0, 3).map(tag => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] px-2 py-0.5 rounded-none bg-orange-50 border border-[#121212] text-gray-800 font-bold uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="border-t-2 border-[#121212] pt-4 flex gap-4 text-xs font-mono text-[#121212]">
                      {proj.metrics.slice(0, 2).map((met, mi) => (
                        <div key={`${proj.id}-met-${mi}`}>
                          <span className="text-[10px] uppercase tracking-wider block opacity-70">
                            {met.label}
                          </span>
                          <span className="text-orange-600 font-bold block">
                            {met.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </motion.div>
          );
        })}
      </div>

      {/* Modal Detail & Diagnostic Gallery Viewer */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#121212]/80 backdrop-blur-md z-50 overflow-y-auto p-4 sm:p-6 md:p-10 flex justify-center items-start pt-20"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="bg-white border-4 border-[#121212] rounded-none w-full max-w-5xl overflow-hidden shadow-[12px_12px_0px_0px_#121212] flex flex-col"
            >
              
              {/* Header */}
              <div className="border-b-4 border-[#121212] p-6 flex justify-between items-center bg-[#EBEBEB]">
                <div>
                  <span className="font-mono text-xs text-orange-600 font-bold tracking-widest uppercase">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-sans font-black text-2xl text-[#121212] tracking-tighter uppercase mt-1">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 rounded-none bg-white border-2 border-[#121212] flex items-center justify-center text-[#121212] hover:bg-orange-600 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Left side: Media slider / Interactive viewing portal */}
                <div className="lg:col-span-7 bg-[#F8F9FA] p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r-4 border-[#121212]">
                  
                  {/* Dynamic viewing pane */}
                  <div className="aspect-video w-full rounded-none overflow-hidden border-2 border-[#121212] bg-[#EBEBEB] flex items-center justify-center relative group">
                    {getProjectMedia(selectedProject)[activeMediaIndex]?.type === 'video' ? (
                      <div className="relative w-full h-full">
                        {isGoogleDriveVideo(getProjectMedia(selectedProject)[activeMediaIndex]?.url) ? (
                          <iframe
                            src={getGoogleDriveVideoEmbedUrl(getProjectMedia(selectedProject)[activeMediaIndex]?.url)}
                            className="w-full h-full border-0 absolute inset-0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                          />
                        ) : (
                          <>
                            <video
                              ref={videoRef}
                              src={getProjectMedia(selectedProject)[activeMediaIndex]?.url}
                              className="w-full h-full object-cover"
                              controls
                              playsInline
                            />
                            <button
                              onClick={handleToggleFullscreenVideo}
                              className="absolute bottom-4 right-4 bg-white border-2 border-[#121212] p-2 rounded-none text-[#121212] hover:bg-orange-600 hover:text-white transition-all"
                              title="Fullscreen Player"
                            >
                              <Maximize2 className="w-4 h-4" />
                            </button>
                          </>
                        )}
                      </div>
                    ) : (
                      <img
                        src={getGoogleDriveImageUrl(getProjectMedia(selectedProject)[activeMediaIndex]?.url)}
                        alt="Project Media View"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>

                  {/* Micro triggers to switch images vs videos */}
                  <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                    {getProjectMedia(selectedProject).map((media, mIdx) => (
                      <button
                        key={mIdx}
                        onClick={() => setActiveMediaIndex(mIdx)}
                        className={`relative w-20 aspect-video rounded-none border-2 overflow-hidden flex-shrink-0 transition-all cursor-pointer ${
                          activeMediaIndex === mIdx ? 'border-orange-600' : 'border-[#121212]/30 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={media.type === 'image' ? getGoogleDriveImageUrl(media.url) : getGoogleDriveImageUrl(selectedProject.image)}
                          alt="Thumbnail"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          {media.type === 'video' ? (
                            <Play className="w-4 h-4 text-[#00d2ff]" />
                          ) : (
                            <ImageIcon className="w-4 h-4 text-[#adc6ff]" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>

                </div>

                {/* Right side: Engineering detailed logs */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white border-t lg:border-t-0 lg:border-l-2 border-[#121212]">
                  <div className="text-left">
                    <h4 className="font-mono text-xs text-[#121212] font-extrabold tracking-widest uppercase mb-2 border-b border-[#121212]/20 pb-1">
                      Description:
                    </h4>
                    <p className="font-sans text-sm text-[#4a4a4a] leading-relaxed mb-6">
                      {selectedProject.longDescription}
                    </p>

                    {/* Operational Highlights */}
                    <h4 className="font-mono text-xs text-orange-600 font-extrabold tracking-widest uppercase mb-3">
                      Contributions:
                    </h4>
                    <ul className="space-y-3.5 mb-8">
                      {selectedProject.details.map((bullet, bi) => (
                        <li key={bi} className="flex items-start gap-2.5 text-xs text-gray-700 leading-relaxed">
                          <CheckCircle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Achievements */}
                    <div className="bg-[#EBEBEB] border-2 border-[#121212] p-4 rounded-none mb-6 shadow-[4px_4px_0px_0px_#121212]">
                      <h4 className="font-mono text-xs text-[#121212] tracking-wider uppercase mb-2 flex items-center gap-1.5 font-black">
                        <Cpu className="w-3.5 h-3.5 text-orange-600" />
                        Benchmarks:
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.achievements.map((ach, ai) => (
                          <li key={ai} className="font-sans text-xs text-gray-800 flex items-center gap-2 font-medium">
                            <span className="w-1.5 h-1.5 bg-orange-600" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom details of variables */}
                  <div>
                    <h4 className="font-mono text-[10px] text-gray-600 font-bold tracking-widest uppercase mb-2 text-left">
                      Tools & Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-1.5 mb-4 justify-start">
                      {selectedProject.tags.map(tag => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] px-2.5 py-1 rounded-none bg-orange-50 border-2 border-[#121212] text-gray-800 font-bold uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="border-2 border-[#121212] pt-4 grid grid-cols-3 gap-2 font-mono text-left bg-[#EBEBEB] p-3 rounded-none">
                      {selectedProject.metrics.map((met, mi) => (
                        <div key={mi}>
                          <span className="text-[9px] uppercase tracking-wider block opacity-75 text-gray-600 font-bold">
                            {met.label}
                          </span>
                          <span className="text-xs text-[#121212] font-black block mt-0.5">
                            {met.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-white border-t-2 border-[#121212] relative">
      <div className="max-w-4xl mx-auto text-center">
        <span className="font-mono text-xs text-orange-600 border-b-2 border-orange-600 pb-1 tracking-widest uppercase mb-3 inline-block font-bold">
          CONTACT_SCHEME: NETWORK
        </span>
        <h2 className="font-sans font-black text-3xl sm:text-4xl text-[#121212] uppercase tracking-tighter mb-6">
          Initiate Connection
        </h2>

        <p className="font-sans text-sm text-[#4a4a4a] leading-relaxed mb-12 max-w-2xl mx-auto">
          Interested in collaborative sensing research projects, or advanced industrial embedded systems developments? Feel free to reach out through my certified handles below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-12">
          {/* Email Card */}
          <div className="bg-[#EBEBEB] border-2 border-[#121212] p-6 rounded-none shadow-[4px_4px_0px_0px_#121212] hover:border-orange-600 transition-colors flex gap-4 items-center">
            <div className="w-12 h-12 rounded-none bg-orange-100 border-2 border-[#121212] flex items-center justify-center text-orange-600 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-[9px] text-orange-600 font-bold uppercase tracking-wider block mb-1">
                EMAIL_ROUTING
              </span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="font-sans text-base text-[#121212] font-black hover:text-orange-600 transition-colors break-all"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-[#EBEBEB] border-2 border-[#121212] p-6 rounded-none shadow-[4px_4px_0px_0px_#121212] hover:border-orange-600 transition-colors flex gap-4 items-center">
            <div className="w-12 h-12 rounded-none bg-orange-100 border-2 border-[#121212] flex items-center justify-center text-orange-600 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-[9px] text-orange-600 font-bold uppercase tracking-wider block mb-1">
                DEPLOYMENT_COORDINATES
              </span>
              <span className="font-sans text-base text-[#121212] font-black">
                {PERSONAL_INFO.location}
              </span>
            </div>
          </div>
        </div>

        {/* Social connections */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-white border-2 border-[#121212] px-6 py-3 rounded-none text-sm text-[#121212] font-black uppercase transition-all shadow-[4px_4px_0px_0px_#121212] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#121212] hover:bg-orange-100 hover:text-orange-600 cursor-pointer"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4 text-orange-600" />
            LinkedIn Profile
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-white border-2 border-[#121212] px-6 py-3 rounded-none text-sm text-[#121212] font-black uppercase transition-all shadow-[4px_4px_0px_0px_#121212] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#121212] hover:bg-orange-100 hover:text-orange-600 cursor-pointer"
            title="GitHub Account"
          >
            <Github className="w-4 h-4 text-orange-600" />
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}

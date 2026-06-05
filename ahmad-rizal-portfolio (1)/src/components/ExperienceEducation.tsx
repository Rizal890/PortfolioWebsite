import { motion } from 'motion/react';
import { EXPERIENCES, EDUCATION, ORGANIZATIONS } from '../data';
import { Briefcase, GraduationCap, Calendar, Award, CheckCircle2, Users } from 'lucide-react';

export default function ExperienceEducation() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 relative bg-transparent">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column: Academic Credentials (Telkom University) & Organizations */}
        <div className="lg:col-span-5 text-left space-y-16">
          <div>
            <span className="font-mono text-xs text-orange-600 border-l-2 border-orange-600 pl-2 tracking-widest uppercase mb-3 block font-bold">
              ACADEMIC_PORTAL: DEGREES
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-[#121212] uppercase tracking-tighter mb-8">
              Education
            </h2>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border-2 border-[#121212] rounded-none p-6 sm:p-8 hover:border-orange-600 transition-colors relative shadow-[6px_6px_0px_0px_#121212]"
            >
              <div className="absolute top-6 right-6 w-12 h-12 rounded-none bg-orange-100 border-2 border-[#121212] flex items-center justify-center text-orange-600">
                <GraduationCap className="w-6 h-6" />
              </div>

              <span className="font-mono text-[10px] text-orange-600 tracking-widest uppercase block mb-1 font-bold">
                TELKOM UNIVERSITY
              </span>
              <h3 className="font-sans font-black text-xl text-[#121212] uppercase tracking-tight leading-snug mb-3 pr-10">
                {EDUCATION.degree}
              </h3>

              <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-700 mb-6">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-orange-600" />
                  {EDUCATION.period}
                </span>
                <span className="flex items-center gap-1.5 font-bold text-[#121212]">
                  <Award className="w-3.5 h-3.5 text-orange-600" />
                  GPA: {EDUCATION.gpa} / 4.00
                </span>
                <span className="block text-[11px] bg-[#EBEBEB] text-gray-800 border border-[#121212] px-2 py-0.5 rounded-none font-bold">
                  {EDUCATION.lab}
                </span>
              </div>

              <div className="border-t-2 border-[#121212] pt-5 space-y-3.5">
                {EDUCATION.details.map((detail, di) => (
                  <div key={di} className="flex items-start gap-2.5 text-xs text-gray-700 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Organizations Section */}
          <div>
            <span className="font-mono text-xs text-orange-600 border-l-2 border-orange-600 pl-2 tracking-widest uppercase mb-3 block font-bold">
              LEADERSHIP_REGISTRY: ROLES
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-[#121212] uppercase tracking-tighter mb-8">
              Organizations
            </h2>

            <div className="space-y-6">
              {ORGANIZATIONS.map((org, oi) => (
                <motion.div
                  key={org.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: oi * 0.1 }}
                  className="bg-white border-2 border-[#121212] rounded-none p-6 sm:p-8 hover:border-orange-600 transition-colors relative shadow-[6px_6px_0px_0px_#121212]"
                >
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-none bg-orange-100 border-2 border-[#121212] flex items-center justify-center text-orange-600">
                    <Users className="w-5 h-5" />
                  </div>

                  <span className="font-mono text-[10px] text-orange-600 tracking-widest uppercase block mb-1 font-bold">
                    {org.name}
                  </span>
                  <h3 className="font-sans font-black text-lg text-[#121212] uppercase tracking-tight leading-snug mb-3 pr-10">
                    {org.role}
                  </h3>

                  <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-700 mb-6">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-orange-600" />
                      {org.period}
                    </span>
                    <span className="block text-[11px] bg-[#EBEBEB] text-gray-800 border border-[#121212] px-2 py-0.5 rounded-none font-bold">
                      {org.location}
                    </span>
                  </div>

                  <div className="border-t-2 border-[#121212] pt-5 space-y-3.5">
                    {org.bullets.map((bullet, bi) => (
                      <div key={bi} className="flex items-start gap-2.5 text-xs text-gray-700 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-none bg-orange-600 mt-2 flex-shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Professional Experience Timeline (LCS, SKD, BRIN) */}
        <div className="lg:col-span-7 text-left">
          <span className="font-mono text-xs text-orange-600 border-l-2 border-orange-600 pl-2 tracking-widest uppercase mb-3 block font-bold">
            WORK_METRICS: TIMELINE
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-[#121212] uppercase tracking-tighter mb-8">
            Professional Experience
          </h2>

          <div className="space-y-8 relative before:absolute before:top-2 before:bottom-2 before:left-6 before:w-0.5 before:bg-[#121212]">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-14 group"
              >
                {/* Timeline square marker */}
                <div className="absolute left-[13px] top-4 w-6 h-6 rounded-none bg-white border-2 border-[#121212] flex items-center justify-center z-10 group-hover:border-orange-600 transition-colors">
                  <div className="w-2 h-2 rounded-none bg-orange-600" />
                </div>

                <div className="bg-white border-2 border-[#121212] p-6 sm:p-8 rounded-none hover:border-orange-600 hover:bg-orange-50/5 transition-all relative shadow-[4px_4px_0px_0px_#121212]">
                  
                  {/* Top line detail */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <span className="font-mono text-[10px] text-orange-600 font-bold tracking-widest uppercase block mb-0.5 animate-pulse">
                        {exp.company}
                      </span>
                      <h3 className="font-sans font-black text-lg text-[#121212] uppercase tracking-tight">
                        {exp.role}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-[#121212] font-bold flex items-center gap-1 bg-[#EBEBEB] border border-[#121212] px-2.5 py-1 rounded-none w-fit">
                      <Calendar className="w-3.5 h-3.5 text-orange-600" />
                      {exp.period}
                    </span>
                  </div>

                  <p className="font-sans text-sm text-[#4a4a4a] leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {exp.bullets.map((bullet, bi) => (
                      <li key={bi} className="flex items-start gap-2 text-xs text-gray-705 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-none bg-orange-600 mt-2 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Deployed Skills tags in this role */}
                  <div className="border-t border-[#121212]/20 pt-4 flex flex-wrap gap-1.5">
                    {exp.skills.map(sk => (
                      <span
                        key={sk}
                        className="font-mono text-[10px] px-2 py-0.5 rounded-none bg-orange-50/30 border border-[#121212] text-gray-800 font-bold uppercase"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

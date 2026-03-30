import { FaCode, FaExternalLinkAlt, FaPlay, FaGithub } from 'react-icons/fa';
import { memo, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative rounded-[2rem] border border-white/10 bg-[#111827] overflow-hidden transition-all duration-500 hover:border-emerald-500/30 flex flex-col h-full shadow-2xl transform-gpu will-change-transform"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Media Section */}
      <div className="relative aspect-video overflow-hidden bg-black/40 w-full group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500">
        <div className="absolute top-4 left-4 flex space-x-1.5 z-20">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-500/50" />
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/50" />
        </div>

        {project.featured && (
          <div className="absolute top-4 right-4 z-20">
            <span className="px-3 py-1 text-[9px] font-black uppercase tracking-widest bg-emerald-500 text-[#0d1224] rounded-full shadow-lg">
               Featured
            </span>
          </div>
        )}

        <div className="w-full h-full transition-all duration-700 group-hover:scale-110 group-hover:rotate-1">
          {project.video ? (
            <div className="relative w-full h-full">
              <video
                src={project.video}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                autoPlay={isHovered}
              />
              {!isHovered && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                  <div className="p-4 bg-white/20 rounded-full backdrop-blur-md">
                     <FaPlay className="text-white text-2xl" />
                  </div>
                </div>
              )}
            </div>
          ) : project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#1a1f35]">
              <span className="text-emerald-500/20 font-black text-6xl uppercase tracking-[0.5em] group-hover:scale-125 transition-transform">
                {project.name.charAt(0)}
              </span>
            </div>
          )}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
      </div>

      <div className="p-8 flex flex-col flex-grow relative z-10">
        <div className="mb-4 flex flex-wrap gap-2">
           {project.tools.slice(0, 3).map((tool, idx) => (
              <span key={idx} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-md text-[8px] font-mono font-bold text-emerald-400 uppercase tracking-widest">
                 {tool}
              </span>
           ))}
           {project.tools.length > 3 && (
              <span className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-md text-[8px] font-mono font-bold text-white/40 uppercase tracking-widest">
                 +{project.tools.length - 3}
              </span>
           )}
        </div>

        <h3 className="text-2xl font-black text-white mb-3 group-hover:text-emerald-400 transition-colors leading-none tracking-tight">
          {project.name}
        </h3>

        <p className="text-sm text-[var(--text-secondary)] mb-8 line-clamp-3 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
          {project.description}
        </p>

        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
          <a
            href={project.code || "#"}
            target="_blank" rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
          >
            <FaGithub size={14} />
            <span>Code</span>
          </a>

          {project.demo ? (
            <a
              href={project.demo}
              target="_blank" rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#0d1224] bg-emerald-500 rounded-xl hover:bg-emerald-400 transition-all duration-300 shadow-xl shadow-emerald-500/10"
            >
              <FaExternalLinkAlt size={12} />
              <span>Demo</span>
            </a>
          ) : (
            <div
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/20 bg-white/5 border border-white/5 rounded-xl cursor-not-allowed"
            >
              <FaExternalLinkAlt size={12} />
              <span>Layer</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(ProjectCard);
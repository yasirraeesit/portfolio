import { FaCode, FaExternalLinkAlt, FaPlay } from 'react-icons/fa';
import { memo, useState } from 'react';

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:border-[var(--accent-color)] flex flex-col h-full shadow-xl transform-gpu will-change-transform"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Media Section */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-black/20">
        <div className="absolute top-3 left-3 flex space-x-1.5 z-20">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/80 shadow-sm"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80 shadow-sm"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 shadow-sm"></div>
        </div>

        {project.featured && (
          <div className="absolute top-3 right-3 z-20">
            <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full shadow-lg">
              ⭐ Featured
            </span>
          </div>
        )}

        <div className="w-full h-full transition-transform duration-700 group-hover:scale-110">
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
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <FaPlay className="text-white/80 text-3xl" />
                </div>
              )}
            </div>
          ) : project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-500/10 to-transparent">
              <span className="text-violet-500/30 font-bold text-4xl uppercase tracking-widest transition-opacity group-hover:opacity-100">
                {project.name.charAt(0)}
              </span>
            </div>
          )}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl lg:text-2xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-color)] transition-colors">
          {project.name}
        </h3>

        <p className="text-xs uppercase font-semibold text-[var(--accent-color)] opacity-70 mb-3 tracking-widest">
          {project.role}
        </p>

        <p className="text-sm text-[var(--text-secondary)] mb-6 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tools.map((tool, index) => (
            <span
              key={index}
              className="px-2.5 py-0.5 text-[10px] font-medium rounded-md bg-violet-500/10 text-violet-400 border border-violet-500/20"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-auto pt-2">
          <a
            href={project.code || "#"}
            target="_blank" rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-white bg-white/5 border border-white/10 rounded-lg hover:bg-[var(--accent-color)] hover:border-[var(--accent-color)] transition-all duration-300"
          >
            <FaCode size={14} />
            <span>Code</span>
          </a>

          {project.demo ? (
            <a
              href={project.demo}
              target="_blank" rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-white bg-[var(--accent-color)] border border-[var(--accent-color)] rounded-lg hover:brightness-125 transition-all duration-300 shadow-lg shadow-[var(--accent-color)]/20"
            >
              <FaExternalLinkAlt size={12} />
              <span>Demo</span>
            </a>
          ) : (
            <div
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-white/5 border border-white/5 rounded-lg opacity-50 cursor-not-allowed"
            >
              <FaExternalLinkAlt size={12} />
              <span>Soon</span>
            </div>
          )}
        </div>
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--accent-color)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}

export default memo(ProjectCard);
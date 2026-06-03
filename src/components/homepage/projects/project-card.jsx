import { FaExternalLinkAlt, FaPlay, FaGithub } from 'react-icons/fa';
import { memo, useState } from 'react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="group relative overflow-hidden flex flex-col h-full p-0 min-h-[480px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Media Section */}
      <div className="relative aspect-[4/3] sm:aspect-video overflow-hidden bg-[linear-gradient(135deg,color-mix(in_srgb,var(--nb-surface)_82%,var(--nb-accent)_18%)_0%,var(--nb-bg)_100%)] w-full border-b-2 border-[var(--nb-border)]">

        {project.featured && (
          <div className="absolute top-4 right-4 z-20">
            <Badge tone="accent">Featured</Badge>
          </div>
        )}

        <div className="w-full h-full transition-all duration-700 group-hover:scale-[1.04]">
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
              className="w-full h-full object-cover transition-all duration-700 grayscale-[0.2] group-hover:grayscale-0"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[linear-gradient(135deg,color-mix(in_srgb,var(--nb-surface)_78%,var(--nb-accent)_22%)_0%,var(--nb-bg)_100%)]">
              <span className="text-[var(--nb-accent)]/25 font-black text-6xl uppercase tracking-[0.5em] group-hover:scale-125 transition-transform">
                {project.name.charAt(0)}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="p-5 md:p-5 flex flex-col flex-grow">
        <div className="mb-4 flex flex-wrap gap-2">
           {project.tools.slice(0, 3).map((tool, idx) => (
              <span key={idx} className="px-2 py-1 bg-[var(--nb-bg)] border-2 border-[var(--nb-border)] rounded-full text-[9px] font-black uppercase tracking-[0.18em] whitespace-nowrap">
                 {tool}
              </span>
           ))}
           {project.tools.length > 3 && (
              <span className="px-2 py-1 bg-[var(--nb-bg)] border-2 border-[var(--nb-border)] rounded-full text-[9px] font-black uppercase tracking-[0.18em] text-[var(--nb-muted)] whitespace-nowrap">
                 +{project.tools.length - 3}
              </span>
           )}
        </div>

        <h3 className="nb-h3">
          {project.name}
        </h3>

        <p className="nb-body mt-3 mb-6 line-clamp-3">
          {project.description}
        </p>

        <div className="mt-auto pt-5 border-t-2 border-[var(--nb-border)] flex flex-col sm:flex-row items-stretch gap-3">
          {project.code ? (
            <Button as="a" href={project.code} target="_blank" rel="noreferrer" variant="ghost" className="flex-1">
              Code <FaGithub size={14} />
            </Button>
          ) : (
              <div className="flex-1 flex items-center justify-center min-h-[52px]">
                <Badge tone="warning">Private</Badge>
              </div>
            )}

          {project.demo ? (
            <Button as="a" href={project.demo} target="_blank" rel="noreferrer" className="flex-1">
              Demo <FaExternalLinkAlt size={12} />
            </Button>
          ) : null}
        </div>
      </div>
    </Card>
  );
}

export default memo(ProjectCard);

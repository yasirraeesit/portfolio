import { useEffect, useMemo, useRef, useState } from 'react';
import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';
import { HiSearch } from 'react-icons/hi';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortMenuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sortMenuRef.current && !sortMenuRef.current.contains(event.target)) {
        setIsSortOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const categories = useMemo(() => {
    const derivedCategories = new Set(['All']);
    projectsData.forEach((project) => {
      project.tools.forEach((tool) => {
        if (tool.includes('React')) derivedCategories.add('React');
        if (tool.includes('Node') || tool.includes('Express')) derivedCategories.add('Backend');
        if (tool.includes('MongoDB') || tool.includes('Database')) derivedCategories.add('Database');
        if (tool.includes('AI') || tool.includes('TensorFlow') || tool.includes('Llama')) derivedCategories.add('AI/ML');
      });
    });
    return Array.from(derivedCategories);
  }, []);

  const sortedProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const filteredProjects = projectsData.filter((project) => {
      const matchesFilter =
        selectedFilter === 'All' ||
        (selectedFilter === 'React' && project.tools.some((tool) => tool.includes('React'))) ||
        (selectedFilter === 'Backend' && project.tools.some((tool) => tool.includes('Node') || tool.includes('Express'))) ||
        (selectedFilter === 'Database' && project.tools.some((tool) => tool.includes('MongoDB') || tool.includes('Database'))) ||
        (selectedFilter === 'AI/ML' &&
          project.tools.some((tool) => tool.includes('AI') || tool.includes('TensorFlow') || tool.includes('Llama') || tool.includes('Groq')));

      if (!matchesFilter) return false;
      if (!query) return true;

      return (
        project.name.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tools.some((tool) => tool.toLowerCase().includes(query))
      );
    });

    return [...filteredProjects].sort((a, b) => {
      if (sortBy === 'newest') return b.id - a.id;
      if (sortBy === 'oldest') return a.id - b.id;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });
  }, [searchQuery, selectedFilter, sortBy]);

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'name', label: 'Name (A-Z)' },
  ];

  const activeSortLabel = sortOptions.find((option) => option.value === sortBy)?.label || 'Newest First';
  const activeFilterLabel = selectedFilter === 'All' ? 'All projects' : `${selectedFilter} projects`;

  return (
    <section id="projects" className="nb-section nb-section-shell">
      <div className="nb-container">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work"
          subtitle="A small set of projects showing architecture, UI, and backend depth."
        />

        <div className="mt-8 rounded-[2rem] border-2 border-[var(--nb-border)] shadow-[8px_8px_0_0_var(--nb-shadow)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--nb-surface)_92%,var(--nb-accent)_8%)_0%,var(--nb-surface)_100%)] p-4 md:p-5 mb-6">
          <div className="grid gap-4">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_240px] gap-4 items-end">
              <div className="relative">
                <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--nb-muted)] w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-[var(--nb-surface)] border-2 border-[var(--nb-border)] text-[var(--nb-fg)] placeholder-[var(--nb-muted)] nb-focus shadow-[6px_6px_0_0_var(--nb-shadow)]"
                  aria-label="Search projects"
                />
              </div>

              <div ref={sortMenuRef} className="relative w-full">
                <button
                  type="button"
                  onClick={() => setIsSortOpen((current) => !current)}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--nb-bg)] border-2 border-[var(--nb-border)] text-[var(--nb-fg)] nb-focus cursor-pointer font-black text-[11px] uppercase tracking-[0.18em] shadow-[6px_6px_0_0_var(--nb-shadow)] flex items-center justify-between gap-4"
                  aria-label="Sort projects"
                  aria-haspopup="listbox"
                  aria-expanded={isSortOpen}
                >
                  <span className="truncate">{activeSortLabel}</span>
                  <svg className={`w-4 h-4 transition-transform ${isSortOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {isSortOpen ? (
                  <div className="absolute right-0 top-[calc(100%+0.75rem)] z-20 w-full rounded-2xl border-2 border-[var(--nb-border)] bg-[var(--nb-surface)] shadow-[8px_8px_0_0_var(--nb-shadow)] overflow-hidden">
                    {sortOptions.map((option) => {
                      const isActive = sortBy === option.value;

                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => {
                            setSortBy(option.value);
                            setIsSortOpen(false);
                          }}
                          className={`w-full px-5 py-4 text-left font-black text-[11px] uppercase tracking-[0.18em] transition-colors ${
                            isActive
                              ? 'bg-[var(--nb-accent)] text-[var(--nb-bg)]'
                              : 'text-[var(--nb-fg)] hover:bg-[var(--nb-bg)]'
                          }`}
                          role="option"
                          aria-selected={isActive}
                        >
                          {option.label}
                        </button>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--nb-muted)]">
                <span className="h-2 w-2 rounded-full bg-[var(--nb-accent)] border-2 border-[var(--nb-border)]" />
                <span>{activeFilterLabel}</span>
              </div>

              <div className="overflow-x-auto pb-1">
                <div className="flex flex-nowrap lg:flex-wrap gap-3 min-w-max lg:min-w-0">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedFilter(category)}
                      className={`px-5 py-2 rounded-xl font-black text-[10px] uppercase tracking-[0.18em] border-2 transition whitespace-nowrap ${selectedFilter === category
                        ? 'bg-[var(--nb-accent)] text-[var(--nb-bg)] border-[var(--nb-border)] shadow-[6px_6px_0_0_var(--nb-shadow)]'
                        : 'bg-[var(--nb-bg)] text-[var(--nb-muted)] border-[var(--nb-border)] shadow-[6px_6px_0_0_var(--nb-shadow)] hover:text-[var(--nb-fg)]'
                        }`}
                      aria-label={`Filter projects by ${category}`}
                      aria-pressed={selectedFilter === category}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Result Count */}
        <p className="text-[var(--nb-muted)] mb-5 font-black text-[10px] uppercase tracking-[0.22em]">
          Showing {sortedProjects.length} Result{sortedProjects.length === 1 ? '' : 's'}
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
          {sortedProjects.map((project) => (
            <div key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* No results message */}
        {sortedProjects.length === 0 && (
          <Card className="mt-10 p-10 text-center">
            <p className="nb-h3">No matches</p>
            <p className="nb-body mt-3">
              Try clearing the search or switching filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedFilter('All');
              }}
              className="mt-6 px-6 py-3 bg-[var(--nb-accent)] text-[var(--nb-bg)] border-2 border-[var(--nb-border)] rounded-xl font-black text-[11px] uppercase tracking-[0.18em] shadow-[6px_6px_0_0_var(--nb-shadow)] hover:-translate-y-[1px] transition"
            >
              Reset Filters
            </button>
          </Card>
        )}

        {/* CTA Section */}
        {sortedProjects.length > 0 && (
          <div className="mt-20 text-center rounded-[3rem] p-10 lg:p-16 relative overflow-hidden group border-2 border-[var(--nb-border)] shadow-[10px_10px_0_0_var(--nb-shadow)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--nb-surface)_88%,var(--nb-accent)_12%)_0%,var(--nb-bg)_100%)]">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="relative z-10 flex flex-wrap justify-center gap-2 mb-6">
              {["Architecture", "UI polish", "Production ready"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full border-2 border-[var(--nb-border)] bg-[var(--nb-bg)] text-[10px] font-black uppercase tracking-[0.18em] shadow-[4px_4px_0_0_var(--nb-shadow)]">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-4xl md:text-6xl font-black text-[var(--nb-fg)] mb-6 relative z-10 leading-none">
              HAVE A <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">VISION?</span>
            </h3>
            <p className="text-[var(--nb-muted)] text-xl mb-12 max-w-2xl mx-auto relative z-10">
              I'm always looking for ambitious projects to push the boundaries of what's possible on the web.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-10 py-5 bg-[var(--nb-accent)] hover:brightness-110 text-[var(--nb-bg)] font-black rounded-2xl transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-3 relative z-10 shadow-[0_20px_40px_rgba(16,185,129,0.2)] border-2 border-[var(--nb-border)]"
            >
              START A CONVERSATION
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

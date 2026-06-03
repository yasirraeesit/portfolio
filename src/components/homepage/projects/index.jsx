import { useState } from 'react';
import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';
import { HiSearch } from 'react-icons/hi';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  // Extract unique categories
  const getCategories = () => {
    const categories = new Set(['All']);
    projectsData.forEach(project => {
      project.tools.forEach(tool => {
        if (tool.includes('React')) categories.add('React');
        if (tool.includes('Node') || tool.includes('Express')) categories.add('Backend');
        if (tool.includes('MongoDB') || tool.includes('Database')) categories.add('Database');
        if (tool.includes('AI') || tool.includes('TensorFlow') || tool.includes('Llama')) categories.add('AI/ML');
      });
    });
    return Array.from(categories);
  };

  const categories = getCategories();

  // Filter and search projects
  let filteredProjects = selectedFilter === 'All'
    ? projectsData
    : projectsData.filter(project => {
      if (selectedFilter === 'React') return project.tools.some(tool => tool.includes('React'));
      if (selectedFilter === 'Backend') return project.tools.some(tool => tool.includes('Node') || tool.includes('Express'));
      if (selectedFilter === 'Database') return project.tools.some(tool => tool.includes('MongoDB') || tool.includes('Database'));
      if (selectedFilter === 'AI/ML') return project.tools.some(tool => tool.includes('AI') || tool.includes('TensorFlow') || tool.includes('Llama') || tool.includes('Groq'));
      return true;
    });

  // Apply search filter
  if (searchQuery) {
    filteredProjects = filteredProjects.filter(project =>
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Apply sorting
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === 'newest') return b.id - a.id;
    if (sortBy === 'oldest') return a.id - b.id;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <section id="projects" className="nb-section nb-section-shell">
      <div className="nb-container">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work"
          subtitle="A small set of projects showing architecture, UI, and backend depth."
        />

        {/* Search and Sort Controls */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search Bar */}
          <div className="flex-1 relative">
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

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-6 py-3 rounded-xl bg-[var(--nb-surface)] border-2 border-[var(--nb-border)] text-[var(--nb-fg)] nb-focus cursor-pointer font-black text-[11px] uppercase tracking-[0.18em] shadow-[6px_6px_0_0_var(--nb-shadow)]"
            aria-label="Sort projects"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="name">Name (A-Z)</option>
          </select>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-5 py-2 rounded-xl font-black text-[10px] uppercase tracking-[0.18em] border-2 transition ${selectedFilter === category
                ? 'bg-[var(--nb-accent)] text-[var(--nb-bg)] border-[var(--nb-border)] shadow-[6px_6px_0_0_var(--nb-shadow)]'
                : 'bg-[var(--nb-surface)] text-[var(--nb-muted)] border-[var(--nb-border)] shadow-[6px_6px_0_0_var(--nb-shadow)] hover:text-[var(--nb-fg)]'
                }`}
              aria-label={`Filter projects by ${category}`}
              aria-pressed={selectedFilter === category}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Result Count */}
        <p className="text-[var(--nb-muted)] mb-6 font-black text-[10px] uppercase tracking-[0.22em]">
          Showing {sortedProjects.length} Result{sortedProjects.length === 1 ? '' : 's'}
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <div className="mt-24 text-center rounded-[3rem] p-12 lg:p-20 relative overflow-hidden group border-2 border-[var(--nb-border)] shadow-[10px_10px_0_0_var(--nb-shadow)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--nb-surface)_88%,var(--nb-accent)_12%)_0%,var(--nb-bg)_100%)]">
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

import { useState } from 'react';
import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { HiSearch } from 'react-icons/hi';

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
    <div id="projects" className="relative py-24 lg:py-32 bg-[var(--background-color)]">
      <div className="container mx-auto px-6 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-[0.2em]">Portfolio Showcase</span>
        </motion.div>
        <h2 className="text-4xl md:text-7xl lg:text-9xl font-black text-white tracking-tighter leading-[0.85] uppercase">
          DIGITAL <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-500 italic">EXPERIENCES.</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Search and Sort Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-[#111827] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-emerald-500/50 transition-colors"
              aria-label="Search projects"
            />
          </div>

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-6 py-3 rounded-2xl bg-[#111827] border border-white/10 text-white focus:outline-none focus:border-emerald-500/50 transition-colors cursor-pointer font-bold text-sm"
            aria-label="Sort projects"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="name">Name (A-Z)</option>
          </select>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 ${selectedFilter === category
                ? 'bg-emerald-500 text-[#0d1224] shadow-[0_10px_20px_rgba(16,185,129,0.2)] scale-105'
                : 'bg-white/5 text-white/40 border border-white/10 hover:border-emerald-500/30 hover:text-white'
                }`}
              aria-label={`Filter projects by ${category}`}
              aria-pressed={selectedFilter === category}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Result Count */}
        <p className="text-[var(--text-secondary)] mb-8 font-mono text-[10px] uppercase tracking-widest">
          Showing {sortedProjects.length} Result{sortedProjects.length === 1 ? '' : 's'}
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {sortedProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No results message */}
        {sortedProjects.length === 0 && (
          <div className="text-center py-24">
            <div className="inline-flex p-6 bg-white/5 rounded-full mb-6">
               <HiSearch size={40} className="text-white/20" />
            </div>
            <p className="text-white/40 text-xl font-bold mb-8">
              No matching digital experiences found.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedFilter('All');
              }}
              className="px-8 py-4 bg-white/10 hover:bg-white text-white hover:text-[#0d1224] font-black rounded-2xl transition-all uppercase tracking-widest text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        {sortedProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 text-center bg-gradient-to-br from-[#1a1f35] to-[#0d1224] border border-white/10 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-grid opacity-20" />
            <h3 className="text-4xl md:text-6xl font-black text-white mb-6 relative z-10 leading-none">
              HAVE A <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">VISION?</span>
            </h3>
            <p className="text-[var(--text-secondary)] text-xl mb-12 max-w-2xl mx-auto relative z-10">
              I'm always looking for ambitious projects to push the boundaries of what's possible on the web.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-[#0d1224] font-black rounded-2xl transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-3 relative z-10 shadow-[0_20px_40px_rgba(16,185,129,0.2)]"
            >
              START A CONVERSATION
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
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
    <div id='projects' className="relative z-10 my-12 lg:my-24">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[var(--card-border)]"></span>
          <span className="bg-[var(--card-bg)] w-fit text-[var(--text-primary)] p-2 px-5 text-xl rounded-md border border-[var(--card-border)] uppercase tracking-wider transition-colors">
            Featured Projects
          </span>
          <span className="w-24 h-[2px] bg-[var(--card-border)]"></span>
        </div>
      </div>

      {/* Search and Sort Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6 px-4">
        {/* Search Bar */}
        <div className="flex-1 relative">
          <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] w-5 h-5" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-primary)] placeholder-gray-500 focus:outline-none focus:border-[var(--accent-color)] transition-colors"
            aria-label="Search projects"
          />
        </div>

        {/* Sort Dropdown */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-color)] transition-colors cursor-pointer"
          aria-label="Sort projects"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="name">Name (A-Z)</option>
        </select>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8 px-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedFilter(category)}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${selectedFilter === category
              ? 'bg-[var(--accent-color)] text-[#0d1224] shadow-lg scale-105'
              : 'bg-[var(--card-bg)] text-[var(--text-secondary)] border border-[var(--card-border)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)]'
              }`}
            aria-label={`Filter projects by ${category}`}
            aria-pressed={selectedFilter === category}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Result Count */}
      <p className="text-center text-[var(--text-secondary)] mb-6">
        Showing {sortedProjects.length} {sortedProjects.length === 1 ? 'project' : 'projects'}
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10">
        <AnimatePresence>
          {sortedProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* No results message */}
      {sortedProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-[var(--text-secondary)] text-lg">
            No projects found matching your criteria.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedFilter('All');
            }}
            className="mt-4 px-6 py-2 rounded-lg bg-[var(--accent-color)] text-[#0d1224] font-medium hover:scale-105 transition-transform"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* CTA Section */}
      {sortedProjects.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 lg:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">
            Like what you see?
          </h3>
          <p className="text-[var(--text-secondary)] text-lg mb-6 max-w-2xl mx-auto">
            I'm always excited to work on new projects. Let's build something amazing together!
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-xl transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2"
          >
            Get In Touch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Projects;
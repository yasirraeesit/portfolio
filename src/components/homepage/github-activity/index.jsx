// @flow strict
import { GitHubCalendar } from 'react-github-calendar';
import { personalData } from '@/utils/data/personal-data';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

function GitHubActivity() {
  const username = personalData.devUsername;

  return (
    <section id="github" className="relative py-24 lg:py-32 bg-[var(--background-color)]">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16 text-center lg:text-left"
        >
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
            <span className="w-8 h-1 bg-emerald-500 rounded-full" />
            <span className="text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-[0.3em]">Code Contributions</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
            OPEN SOURCE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 italic">ACTIVITY.</span>
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/5"
        >
          <div className="bg-[#111827] rounded-[2.2rem] p-8 md:p-12 overflow-hidden flex justify-center items-center shadow-2xl relative">
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="relative z-10 w-full overflow-x-auto scrollbar-hide py-4 flex justify-center">
               <GitHubCalendar
                 username={username}
                 blockSize={12}
                 blockMargin={5}
                 fontSize={14}
                 theme={{
                    light: ['#161b22', '#34d399'],
                    dark: ['#161b22', '#34d399']
                 }}
               />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubActivity;


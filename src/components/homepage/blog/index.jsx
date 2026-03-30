import { personalData } from '@/utils/data/personal-data';
import { useEffect, useState } from 'react';
import { FaArrowRight, FaRss } from 'react-icons/fa';
import BlogCard from './blog-card';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);
        if (res.ok) {
          const data = await res.json();
          const filtered = data.filter((item) => item?.cover_image || item?.social_image);
          setBlogs(filtered);
        }
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section id="blogs" className="relative py-24 lg:py-32 bg-[var(--background-color)]">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16 text-center lg:text-left"
        >
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
            <span className="w-8 h-1 bg-violet-500 rounded-full" />
            <span className="text-violet-400 font-mono text-[10px] font-bold uppercase tracking-[0.3em]">Latest Insights</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none text-center lg:text-left">
            EDITORIAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-500 italic">THOUGHTS.</span>
          </h2>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-[450px] bg-white/5 animate-pulse rounded-[2.5rem] border border-white/10" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.slice(0, 6).map((blog, i) => (
              <BlogCard blog={blog} key={i} />
            ))}
          </div>
        )}

        {blogs.length > 0 && !isLoading && (
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="flex justify-center mt-20"
          >
            <a
              className="px-10 py-5 bg-white/5 border border-white/10 hover:bg-white text-white hover:text-[#0d1224] rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center gap-3"
              href="/blog"
            >
              <span>EXPLORE ALL ARTICLES</span>
              <FaArrowRight size={14} />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Blog;
import { timeConverter } from '../../../utils/time-converter';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt, FaArrowRight, FaBookOpen } from 'react-icons/fa';

function BlogCard({ blog }) {
  return (
    <article className="group p-1 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/5 overflow-hidden transition-all duration-500 hover:scale-[1.02] flex flex-col h-full shadow-2xl">
      <div className="bg-[#111827] rounded-[2.2rem] overflow-hidden flex flex-col h-full">
         {/* Cover Image */}
         <div className="h-52 md:h-64 w-full cursor-pointer overflow-hidden relative">
            <img
               src={blog?.cover_image || blog?.social_image}
               alt={blog.title}
               loading="lazy"
               className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-80" />
            {/* Reading time badge */}
            <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-xl flex items-center gap-2 border border-white/10">
               <FaBookOpen size={10} className="text-violet-400" />
               {blog.reading_time_minutes} min
            </div>
         </div>

         {/* Content */}
         <div className="p-8 flex flex-col flex-grow">
            {/* Meta row */}
            <div className="flex justify-between items-center text-[var(--text-secondary)] mb-6">
               <span className="font-mono text-[10px] uppercase font-bold tracking-widest bg-white/5 px-2 py-1 rounded-md">
                  {timeConverter(blog.published_at)}
               </span>
               <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 text-rose-400 text-xs font-bold">
                     <BsHeartFill size={10} />
                     <span>{blog.public_reactions_count}</span>
                  </span>
                  {blog.comments_count > 0 && (
                     <span className="flex items-center gap-1.5 text-violet-400 text-xs font-bold">
                        <FaCommentAlt size={10} />
                        <span>{blog.comments_count}</span>
                     </span>
                  )}
               </div>
            </div>

            {/* Title */}
            <a
               target="_blank"
               rel="noreferrer"
               href={blog.url}
               className="block mb-4"
            >
               <h3 className="text-xl md:text-2xl font-black text-white leading-tight hover:text-violet-400 transition-colors line-clamp-2 uppercase tracking-tighter">
                  {blog.title}
               </h3>
            </a>

            {/* Description */}
            <p className="text-sm text-[var(--text-secondary)] line-clamp-3 leading-relaxed flex-grow mb-8 opacity-70 group-hover:opacity-100 transition-opacity">
               {blog.description}
            </p>

            {/* Read More */}
            <a
               target="_blank"
               rel="noreferrer"
               href={blog.url}
               className="mt-auto flex items-center justify-between w-full p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-violet-500/30 transition-all group/read"
            >
               <span className="text-white font-black text-[10px] uppercase tracking-[0.2em] group-hover:text-violet-400">Read Article</span>
               <FaArrowRight size={12} className="text-white/20 group-hover/read:translate-x-1 group-hover/read:text-violet-400 transition-all" />
            </a>
         </div>
      </div>
    </article>
  );
}

export default BlogCard;
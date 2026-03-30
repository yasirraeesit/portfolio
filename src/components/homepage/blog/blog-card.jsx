import { timeConverter } from '../../../utils/time-converter';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt, FaArrowRight, FaBookOpen } from 'react-icons/fa';

function BlogCard({ blog }) {
  return (
    <article className="group border border-[var(--card-border)] hover:border-[var(--accent-color)]/50 transition-all duration-500 bg-[var(--card-bg)] rounded-xl overflow-hidden flex flex-col h-full">
      {/* Cover Image */}
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden relative">
        <img
          src={blog?.cover_image || blog?.social_image}
          height={1080}
          width={1920}
          alt={blog.title}
          loading="lazy"
          className="h-full w-full object-cover group-hover:scale-110 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {/* Reading time badge */}
        <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
          <FaBookOpen size={10} />
          {blog.reading_time_minutes} min read
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        {/* Meta row */}
        <div className="flex justify-between items-center text-[var(--text-secondary)] text-xs mb-3">
          <p className="font-mono">{timeConverter(blog.published_at)}</p>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-rose-400">
              <BsHeartFill size={10} />
              <span>{blog.public_reactions_count}</span>
            </span>
            {blog.comments_count > 0 && (
              <span className="flex items-center gap-1 text-[var(--accent-color)]">
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
          className="group/link block mb-3"
        >
          <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] leading-snug hover:text-[var(--accent-color)] transition-colors line-clamp-2">
            {blog.title}
          </h3>
        </a>

        {/* Description */}
        <p className="text-sm text-[var(--text-secondary)] line-clamp-3 leading-relaxed flex-grow mb-4">
          {blog.description}
        </p>

        {/* Tags */}
        {blog.tag_list?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {blog.tag_list.slice(0, 3).map((tag, i) => (
              <span key={i} className="px-2 py-0.5 text-[10px] rounded-md bg-[var(--accent-color)]/10 text-[var(--accent-color)] border border-[var(--accent-color)]/20">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Read More */}
        <a
          target="_blank"
          rel="noreferrer"
          href={blog.url}
          className="mt-auto flex items-center gap-1 text-[var(--accent-color)] text-xs font-bold uppercase tracking-wider hover:gap-2 transition-all duration-200 group/read"
        >
          Read Article
          <FaArrowRight size={10} className="group-hover/read:translate-x-1 transition-transform" />
        </a>
      </div>
    </article>
  );
}

export default BlogCard;
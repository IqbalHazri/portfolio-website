import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "../../data/blog-posts";


export default function Blog() {
  return (
    <div className="min-h-screen bg-[rgb(10,34,57)] text-white px-6 py-16">

      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[rgb(255,136,17)]/90">Writings</span>

          <h1 className="mt-2 text-5xl font-extrabold tracking-tight text-white">Blog<span className="text-[rgb(255,136,17)]">.</span></h1>
          <p className="mt-3 max-w-2xl text-white/70">
            Thoughts on cybersecurity, DIY, and building things.
          </p>
          <div className="mt-6 h-[3px] w-24 bg-gradient-to-r from-[rgb(255,136,17)] to-white/0 rounded-full" />
        </header>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group block rounded-xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold group-hover:text-[rgb(255,136,17)] transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-white/70 leading-relaxed">{post.excerpt}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/50">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={14} /> {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock size={14} /> {post.readTime}
                    </span>
                    <div className="flex gap-2">
                      {post.tags.map((t) => (
                        <span key={t} className="text-xs px-2.5 py-0.5 rounded-full border border-[rgb(255,136,17)]/30 text-[rgb(255,136,17)]/80">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <ArrowRight size={20} className="mt-1 shrink-0 text-white/30 group-hover:text-[rgb(255,136,17)] transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
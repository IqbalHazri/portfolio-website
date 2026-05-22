import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "../../data/blog-posts";

export default function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const meta = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    // Vite ?raw suffix imports the file as a raw string
    import(`../../content/blog/${slug}.md?raw`)
      .then((mod) => setContent(mod.default))
      .catch(() => setContent("# Post not found"));
  }, [slug]);

  if (!meta) {
    return (
      <div className="min-h-screen bg-[rgb(10,34,57)] text-white flex items-center justify-center">
        <p>Post not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[rgb(10,34,57)] text-white px-6 py-16">
      <article className="max-w-3xl mx-auto">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-white/50 hover:text-[rgb(255,136,17)] transition-colors mb-8"
        >
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <header className="mb-10">
          <h1 className="text-5xl font-extrabold tracking-tight text-white">{meta.title}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
            <span className="text-[rgb(255,136,17)] font-medium">{meta.date}</span>
            <span className="text-white/40">·</span>
            <span className="text-white/50">{meta.readTime}</span>
            <div className="flex gap-2 ml-2">
              {meta.tags?.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-0.5 rounded-full border border-[rgb(255,136,17)]/30 text-[rgb(255,136,17)]/80"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-6 h-[2px] w-full bg-gradient-to-r from-[rgb(255,136,17)]/40 via-white/5 to-transparent rounded-full" />
        </header>

        <div className="prose prose-invert max-w-none
                      border border-white/10 rounded-xl p-8
                      bg-white/[0.02] backdrop-blur-sm
                      prose-headings:text-[rgb(255,210,140)]
                      prose-headings:font-['Playfair_Display',serif]
                      prose-h1:text-3xl prose-h1:font-bold prose-h1:mt-10 prose-h1:mb-4
                      prose-h2:text-2xl prose-h2:font-semibold prose-h2:mt-8 prose-h2:mb-3
                      prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-2
                      prose-p:text-white/75 prose-p:leading-[1.8] prose-p:mb-5
                      prose-a:text-[rgb(255,136,17)] prose-a:no-underline hover:prose-a:underline
                      prose-strong:text-white prose-strong:font-semibold
                      prose-code:text-[rgb(255,136,17)] prose-code:bg-white/5
                      prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                      prose-pre:bg-white/[0.04] prose-pre:border prose-pre:border-white/10
                      prose-pre:rounded-lg
                      prose-blockquote:border-l-[rgb(255,136,17)] prose-blockquote:border-l-4
                      prose-blockquote:pl-5 prose-blockquote:text-white/60 prose-blockquote:italic
                      prose-li:text-white/75 prose-li:leading-relaxed
                      prose-img:rounded-lg prose-img:border prose-img:border-white/10
                      prose-hr:border-white/10">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
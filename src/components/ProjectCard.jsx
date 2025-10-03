import { Github, ExternalLink } from "lucide-react";

const statusStyles = {
  published: "bg-green-600/20 text-green-300 border-green-600/40",
  wip: "bg-yellow-600/20 text-yellow-200 border-yellow-600/40",
  idea: "bg-gray-500/20 text-gray-200 border-gray-500/40",
};

export default function ProjectCard({ p }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:border-white/20 transition">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-semibold text-white">{p.title}</h3>
        <span className={`text-xs px-2 py-1 rounded border ${statusStyles[p.status]}`}>
          {p.status.toUpperCase()}
        </span>
      </div>

      <p className="text-white/80 mt-2">{p.summary}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded-full border border-white/15 text-white/80"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-4">
        {p.links.github && (
          <a
            href={p.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-[rgb(255,136,17)] hover:underline"
          >
            <Github size={16} /> Code
          </a>
        )}
        {p.links.demo && (
          <a
            href={p.links.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-[rgb(255,136,17)] hover:underline"
          >
            <ExternalLink size={16} /> Demo
          </a>
        )}
      </div>
    </div>
  );
}
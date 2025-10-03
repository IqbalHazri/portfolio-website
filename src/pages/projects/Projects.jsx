import { useMemo } from "react";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {

  const filtered = useMemo(() => {
    return projects.sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
  }, []);

  const hasAny = projects.length > 0;

  return (
    <div className="min-h-screen bg-[rgb(10,34,57)] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[rgb(255,136,17)]/90">
            My Work
          </span>

          <h1 className="mt-2 text-5xl font-extrabold tracking-tight text-white">
            Projects
            <span className="text-[rgb(255,136,17)]">.</span>
          </h1>

          <p className="mt-3 max-w-2xl text-white/70">
            Selected builds, experiments, and write-ups.
            <span className="text-[rgb(255,136,17)]"> Links are highlighted</span>.
          </p>

          <div className="mt-6 h-[3px] w-24 bg-gradient-to-r from-[rgb(255,136,17)] to-white/0 rounded-full" />
        </header>

        {hasAny ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-white/10 bg-white/5 p-10 text-center">
            <h2 className="text-2xl font-semibold mb-2 text-[rgb(255,136,17)]">
              🚧 Coming Soon
            </h2>
            <p className="text-white/80">
              I’m curating my favorite builds and writing short case studies.
              Check back soon!
            </p>
          </div>
        )}

          <div className="mt-16 text-center">
            <p className="text-lg font-medium text-white/80">
              More projects <span className="text-[rgb(255,136,17)]">coming soon...</span>
            </p>
          </div>
          
      </div>
    </div>
  );
}
import { Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[rgb(10,34,57)] border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left side - brand / text */}
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} Iqbal Hazri · Built with React & Tailwind
        </p>

        {/* Right side - social links */}
        <div className="flex space-x-6">
          <a
            href="mailto:muhdiqbalhazri@gmail.com"
            className="text-white/70 hover:text-[rgb(255,136,17)] transition"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/IqbalHazri"
            target="_blank"
            rel="noreferrer"
            className="text-white/70 hover:text-[rgb(255,136,17)] transition"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/iqbalhazri"
            target="_blank"
            rel="noreferrer"
            className="text-white/70 hover:text-[rgb(255,136,17)] transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const linkBase =
    "relative px-3 py-2 rounded-md outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-white/40";
  const getLinkClass = ({ isActive }) =>
    `${linkBase} ${
      isActive
        ? "text-white after:absolute after:left-3 after:right-3 after:-bottom-1 after:h-[2px] after:bg-[rgb(255,136,17)] after:content-['']"
        : "text-white/70 hover:text-white"
    }`;

  // Floating island shell
  const navShell =
    `fixed inset-x-0 top-4 z-50 mx-auto w-fit min-w-[400px] ` +
    `rounded-full border border-white/10 shadow-lg shadow-black/20 ` +
    `bg-[rgb(10,34,57)]/80 backdrop-blur-xl`;

  return (
    <nav className={navShell}>
      <div className="flex items-center justify-between gap-8 px-6 py-2.5">
        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold tracking-wide shrink-0">
          <span className="font-['Playfair_Display',serif] text-white">Iqbal</span>
          <span className="text-[rgb(255,136,17)]">.</span>
          <span className="font-['Playfair_Display',serif] text-white/80 text-lg">Hazri</span>
        </NavLink>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={getLinkClass}>Home</NavLink>
          <NavLink to="/projects" className={getLinkClass}>Projects</NavLink>
          <NavLink to="/blog" className={getLinkClass}>Blog</NavLink>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white focus-visible:ring-2 focus-visible:ring-white/40"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} z-40`}
        onClick={() => setOpen(false)}
      />

      {/* Slide-over panel */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-72 max-w-[80%] bg-[rgb(10,34,57)]/95 backdrop-blur-xl shadow-xl border-l border-white/10 transition-transform duration-200 ${open ? "translate-x-0" : "translate-x-full"} z-50`}
        role="dialog"
        aria-modal="true"
      >
        <div className="h-16 px-4 flex items-center justify-between border-b border-white/10">
          <span className="text-white font-semibold">Menu</span>
          <button
            className="p-2 rounded-md text-white focus-visible:ring-2 focus-visible:ring-white/40"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <div className="px-4 py-4 flex flex-col gap-2">
          <NavLink to="/" className={({ isActive }) => `${getLinkClass({ isActive })} block`} onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/projects" className={({ isActive }) => `${getLinkClass({ isActive })} block`} onClick={() => setOpen(false)}>Projects</NavLink>
          <NavLink to="/blog" className={({ isActive }) => `${getLinkClass({ isActive })} block`} onClick={() => setOpen(false)}>Blog</NavLink>
        </div>
      </div>
    </nav>
  );
}
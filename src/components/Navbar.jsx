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
        : "text-white hover:bg-[rgb(255,136,17)] hover:text-white"
    }`;

  // when open => solid bg + no blur. when closed => translucent + blur.
  const navShell =
    `fixed top-0 left-0 w-full z-50 shadow-lg shadow-[rgb(255,136,17)]/20 ` +
    (open ? "bg-[rgb(10,34,57)]" : "bg-[rgb(10,34,57)]/70 backdrop-blur-md");

  return (
    <nav className={navShell}>
      <div className="max-w-6xl mx-auto px-4 h-16 flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold text-white tracking-wide">
          Iqbal Hazri
        </NavLink>

        <div className="hidden md:flex items-center space-x-2">
          <NavLink to="/" className={getLinkClass}>Home</NavLink>
          <NavLink to="/projects" className={getLinkClass}>Projects</NavLink>
          <NavLink to="/blog" className={getLinkClass}>Blog</NavLink>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white focus-visible:ring-2 focus-visible:ring-white/40"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Overlay (make it nearly opaque) */}
      <div
        className={`md:hidden fixed inset-0 bg-black/90 transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} z-40`}
        onClick={() => setOpen(false)}
      />

      {/* Slide-over panel (ensure it's above the overlay) */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-72 max-w-[80%] bg-[rgb(10,34,57)] shadow-xl border-l border-white/10 transition-transform duration-200 ${open ? "translate-x-0" : "translate-x-full"} z-50`}
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
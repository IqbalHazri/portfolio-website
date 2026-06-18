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
    `fixed inset-x-0 top-4 z-50 mx-auto ` +
    `md:w-fit md:min-w-0 w-full ` +
    `md:rounded-full rounded-2xl ` +
    `border border-white/10 shadow-lg shadow-black/20 ` +
    `md:bg-[rgb(10,34,57)]/80 md:backdrop-blur-xl bg-[rgb(10,34,57)]`;

  return (
    <nav className={navShell}>
      <div className="flex items-center justify-between gap-8 md:px-6 px-4 py-2.5">
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
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden absolute left-0 right-0 top-full mt-1 rounded-2xl border border-white/10 bg-[rgb(6,22,40)] shadow-xl transition-all duration-200 ${open ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"} origin-top z-50`}
      >
        <div className="px-4 py-4 flex flex-col gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "text-[rgb(255,136,17)] font-semibold bg-white/5" : "text-white/80 hover:text-white hover:bg-white/5"}`
            }
            onClick={() => setOpen(false)}
          >Home</NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "text-[rgb(255,136,17)] font-semibold bg-white/5" : "text-white/80 hover:text-white hover:bg-white/5"}`
            }
            onClick={() => setOpen(false)}
          >Projects</NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "text-[rgb(255,136,17)] font-semibold bg-white/5" : "text-white/80 hover:text-white hover:bg-white/5"}`
            }
            onClick={() => setOpen(false)}
          >Blog</NavLink>
        </div>
      </div>
    </nav>
  );
}
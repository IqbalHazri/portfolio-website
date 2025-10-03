import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[rgb(10,34,57)]/70 backdrop-blur-md shadow-lg shadow-[rgb(255,136,17)]/20 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex justify-between items-center">
        {/* Logo / Brand */}
        <NavLink to="/" className="text-xl font-bold text-white tracking-wide">
          Iqbal Hazri
        </NavLink>

        {/* Links */}
        <div className="space-x-4">
          <NavLink 
            to="/" 
            className={({ isActive }) =>
              `relative px-3 py-1 rounded-md outline-none transition-all duration-200
              focus-visible:ring-2 focus-visible:ring-white/40
              ${isActive
                ? "text-white after:absolute after:left-3 after:right-3 after:-bottom-1 after:h-[2px] after:bg-[rgb(255,136,17)] after:content-['']"
                : "text-white hover:bg-[rgb(255,136,17)] hover:text-white"}`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) =>
              `relative px-3 py-1 rounded-md outline-none transition-all duration-200
              focus-visible:ring-2 focus-visible:ring-white/40
              ${isActive
                ? "text-white after:absolute after:left-3 after:right-3 after:-bottom-1 after:h-[2px] after:bg-[rgb(255,136,17)] after:content-['']"
                : "text-white hover:bg-[rgb(255,136,17)] hover:text-white"}`
            }
          >
            Projects
          </NavLink>
          <NavLink 
            to="/blog" 
            className={({ isActive }) =>
              `relative px-3 py-1 rounded-md outline-none transition-all duration-200
              focus-visible:ring-2 focus-visible:ring-white/40
              ${isActive
                ? "text-white after:absolute after:left-3 after:right-3 after:-bottom-1 after:h-[2px] after:bg-[rgb(255,136,17)] after:content-['']"
                : "text-white hover:bg-[rgb(255,136,17)] hover:text-white"}`
            }
          >
            Blog
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
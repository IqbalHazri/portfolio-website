import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="font-sans fixed top-0 left-0 w-full bg-[rgb(10,34,57)] shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link to="/" className="text-xl font-bold text-white">
          Iqbal Hazri
        </Link>

        {/* Links */}
        <div className="space-x-6">
          <Link to="/" className="text-white hover:text-[rgb(255,136,17)]">
            Home
          </Link>
          <Link to="/projects" className="text-white hover:text-[rgb(255,136,17)]">
            Projects
          </Link>
          <Link to="/blog" className="text-white hover:text-[rgb(255,136,17)]">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}

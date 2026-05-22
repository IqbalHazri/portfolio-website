import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Styles
import './App.css'

// Pages
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Blog from "./pages/blog/Blog";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Blog post content in src/content/blog/
import BlogPost from "./pages/blog/BlogPost";

function App() {

  return (
    <Router>

      {/* Sticky Navbar */}
      <Navbar />

      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>

      <Footer />

    </Router>
  )
}

export default App

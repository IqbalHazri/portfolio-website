import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Styles
import './App.css'

// Pages
import Home from "./pages/home/Home";
// import Projects from "./pages/Projects";
// import Blog from "./pages/Blog";

// Components
import Navbar from "./components/Navbar";

function App() {

  return (
    <Router>

      {/* Sticky Navbar */}
      <Navbar />

      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} /> */}
        </Routes>
      </main>

    </Router>
  )
}

export default App

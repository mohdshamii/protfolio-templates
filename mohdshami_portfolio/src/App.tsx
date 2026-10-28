import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { useEffect } from "react";
import { config } from "./constants/config";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-[#090B10] text-[#F1F5F9] min-h-screen relative z-0 selection:bg-sky-500/25 selection:text-white">
        <div className="relative">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>

        {/* Minimal Dark Footer */}
        <footer className="border-t border-[#1C2538] bg-[#090B10] py-10 mt-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-16 flex flex-col sm:flex-row items-center justify-between gap-4 text-[14px]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <p className="text-slate-400 font-medium">
                © {new Date().getFullYear()} {config.html.fullName} • AI/ML Engineer
              </p>
            </div>
            <div className="flex items-center gap-6 text-[14px]">
              <a
                href={config.html.github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-sky-400 transition-colors"
              >
                GitHub
              </a>
              <a
                href={config.html.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-sky-400 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${config.html.email}`}
                className="text-slate-400 hover:text-sky-400 transition-colors"
              >
                Email
              </a>
              <a
                href="#about"
                className="text-slate-500 hover:text-white transition-colors"
              >
                Back to Top ↑
              </a>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;

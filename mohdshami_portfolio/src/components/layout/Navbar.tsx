import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import { logo } from "../../assets";
import { config } from "../../constants/config";

const Navbar = () => {
  const [active, setActive] = useState<string | null>("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        // @ts-ignore
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.getBoundingClientRect().top - sectionHeight * 0.25;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } fixed top-0 z-40 flex w-full items-center py-3.5 transition-all duration-300 ${
        scrolled
          ? "bg-[#090B10]/85 backdrop-blur-md border-b border-[#1C2538] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <div className="relative">
            <img
              src={logo}
              alt="Mohd Shami"
              className="h-9 w-9 rounded-full object-cover border border-[#1C2538] group-hover:border-sky-400 transition-colors duration-300"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#090B10]" />
          </div>
          <div className="flex flex-col">
            <span className="text-[16px] font-bold text-white tracking-tight group-hover:text-sky-400 transition-colors duration-300">
              {config.html.fullName}
            </span>
            <span className="text-[11px] text-slate-400 font-medium -mt-0.5">
              AI/ML Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden list-none flex-row gap-7 sm:flex items-center">
          {navLinks.map((nav) => {
            const isActive = active === nav.id;
            return (
              <li
                key={nav.id}
                className="relative"
              >
                <a
                  href={`#${nav.id}`}
                  className={`text-[14px] font-medium transition-colors duration-200 ${
                    isActive ? "text-sky-400 font-semibold" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {nav.title}
                </a>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-sky-400 rounded-full" />
                )}
              </li>
            );
          })}
          <li>
            <a
              href="https://github.com/mohdshamii"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg border border-sky-500/30 bg-sky-500/10 text-sky-300 hover:bg-sky-500 hover:text-white text-[13px] font-semibold transition-all duration-200"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              <span>GitHub</span>
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden">
          <button
            type="button"
            aria-label="Toggle Menu"
            className="p-2 rounded-lg border border-[#1C2538] bg-[#0D1117] text-slate-300 hover:text-white"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Mobile Dropdown Menu */}
          {toggle && (
            <div className="absolute right-4 top-16 z-50 min-w-[210px] rounded-xl border border-[#1C2538] bg-[#0D1117]/95 p-5 shadow-2xl backdrop-blur-xl">
              <ul className="flex flex-col gap-3.5">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className="cursor-pointer text-[14px] font-medium"
                    onClick={() => setToggle(false)}
                  >
                    <a
                      href={`#${nav.id}`}
                      className={`block py-1 transition-colors ${
                        active === nav.id ? "text-sky-400 font-semibold" : "text-slate-300 hover:text-white"
                      }`}
                    >
                      {nav.title}
                    </a>
                  </li>
                ))}
                <li className="pt-2 border-t border-[#1C2538]">
                  <a
                    href="https://github.com/mohdshamii"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400 text-[13px] font-semibold"
                  >
                    GitHub Profile
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

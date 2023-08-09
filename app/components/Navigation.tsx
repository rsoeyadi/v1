"use client";
import React from "react";
import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <nav className="nav lg:block" aria-label="In-page jump links">
      <ul className="mt-10 w-max">
        {["about", "experience", "projects"].map((section) => (
          <li key={section}>
            <Link
              to={section}
              spy={true}
              smooth={true}
              offset={-10}
              duration={530}
              className="cursor-pointer group flex items-center py-3 active"
            >
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

"use client";
import { Link } from "react-scroll";

const Navigation = () => {
  const handleKeyDown = (event: any, section: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <nav className="nav lg:block" aria-label="In-page jump links">
      <ul className="mt-10 w-max">
        {["about", "experience"].map((section) => (
          <li key={section}>
            <Link
              to={section}
              spy={true}
              smooth={true}
              offset={-10}
              duration={530}
              className="cursor-pointer group flex items-center py-3 active"
              tabIndex={0}
              onKeyDown={(event) => handleKeyDown(event, section)}
            >
              <span className="nav-indicator mr-4 h-px w-8 bg-black dark:bg-white transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest  ">
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

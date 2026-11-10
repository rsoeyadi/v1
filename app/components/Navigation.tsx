const Navigation = () => {
  return (
    <nav className="nav lg:block" aria-label="In-page jump links">
      <ul className="mt-10 w-max">
        {["about", "experience"].map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className="group flex items-center py-3"
            >
              <span className="nav-indicator mr-4 h-px w-8 bg-black dark:bg-white transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest  ">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

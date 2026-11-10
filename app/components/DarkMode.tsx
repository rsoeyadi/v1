"use client";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <FaSun aria-hidden="true" className="dark:hidden" />
      <FaMoon aria-hidden="true" className="hidden dark:block" />
    </button>
  );
};

export default DarkModeButton;

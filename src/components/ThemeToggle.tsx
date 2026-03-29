"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 transition-colors"
      aria-label="Toggle Dark Mode"
    >
      {currentTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </motion.button>
  );
};

export default ThemeToggle;

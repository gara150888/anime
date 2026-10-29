"use client";

import * as React from "react";

const ThemeContext = React.createContext({ theme: "dark", setTheme: (_t: string) => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState("dark");

  React.useEffect(() => {
    const hasDark = document.documentElement.classList.contains("dark");
    const initial = hasDark ? "dark" : "light";
    setThemeState(initial);
    if (initial === "dark" && !hasDark) {
      document.documentElement.classList.add("dark");
    } else if (initial === "light" && hasDark) {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else if (theme === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
      }
    }
  }, [theme]);

  const setTheme = React.useCallback((t: string) => {
    setThemeState(t);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = React.useContext(ThemeContext);
  return {
    theme: ctx.theme,
    setTheme: ctx.setTheme,
    resolvedTheme: ctx.theme,
  };
}

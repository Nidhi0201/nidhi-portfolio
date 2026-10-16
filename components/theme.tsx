"use client";
import { useEffect, useState } from "react";

const KEY = "np-theme";

export function ThemeInit() {
  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    const dark =
      saved === "dark" ||
      (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", dark);
  }, []);
  return null;
}

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);
  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem(KEY, next ? "dark" : "light");
  }
  return (
    <button
      onClick={toggle}
      className="text-[11px] uppercase tracking-widest underline-hover"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? "☾ dark" : "☀ light"}
    </button>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/80 dark:border-gray-700 dark:bg-gray-900/80" />
    );
  }

  const currentTheme = theme === 'system' ? resolvedTheme : theme;
  const isDark = currentTheme === 'dark';

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-gray-700 transition hover:border-black hover:text-black dark:border-gray-700 dark:bg-gray-900/80 dark:text-gray-200 dark:hover:border-white dark:hover:text-white"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

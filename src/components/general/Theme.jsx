import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'

function Theme() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <button
    aria-label="Toggle Dark Mode"
    type="button"
    className="w-10 h-10 p-3 rounded focus:outline-none"
    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
  >
    {mounted && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
      >
        {theme === "dark" ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        )}
      </svg>
    )}
  </button>
  )
}

export default Theme
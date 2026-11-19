 import React, { useState } from "react";

export const Header = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "Analytics", href: "#analytics" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-900/95 backdrop-blur-md text-white border-b border-white/10 shadow-lg">
      <nav className="max-w-[1120px] mx-auto px-4 sm:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            onClick={() => setActive("Home")}
            className="flex items-center gap-2.5 text-base sm:text-lg md:text-2xl font-bold tracking-wide"
          >
            <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-cyan-400 animate-pulse" />
            <span>
              Mehedi<span className="text-cyan-400">Dev</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1.5 bg-slate-800/80 p-1.5 rounded-xl">
            {navItems.map((item) => {
              const isActive = active === item.name;
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setActive(item.name)}
                    className={`block px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-cyan-500 text-slate-950 shadow-sm scale-[1.02]"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:block">
            <a
              href="#menu"
              className="px-5 py-2.5 rounded-xl text-base font-semibold bg-gradient-to-r from-cyan-400 to-pink-500 text-slate-950 hover:opacity-90 transition"
            >
              Order Now
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
            className="md:hidden p-2 rounded-lg text-lg text-slate-300 hover:text-white hover:bg-white/10 transition cursor-pointer"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-white/10 flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = active === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActive(item.name);
                    setMenuOpen(false);
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition ${
                    isActive
                      ? "bg-cyan-500 text-slate-950 font-semibold"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
            <a
              href="#menu"
              onClick={() => setMenuOpen(false)}
              className="mt-1 text-center px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-400 to-pink-500 text-slate-950"
            >
              Order Now
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};
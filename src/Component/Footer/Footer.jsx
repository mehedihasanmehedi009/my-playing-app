 import React from "react";

export const Footer = () => {
  const socialLinks = [
    { name: "Facebook", href: "#facebook", icon: "🌐" },
    { name: "GitHub", href: "#github", icon: "💻" },
    { name: "LinkedIn", href: "#linkedin", icon: "🔗" },
    { name: "YouTube", href: "#youtube", icon: "▶️" },
  ];

  return (
    <footer className="w-full bg-slate-900 text-white border-t border-white/10 mt-16">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Copyright */}
          <div className="text-center md:text-left space-y-1">
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-xl md:text-2xl font-bold tracking-wide"
            >
              <span className="w-3 h-3 rounded-full bg-cyan-400" />
              <span>
                Mehedi<span className="text-cyan-400">Dev</span><span>eloper</span>
              </span>
            </a>
            <p className="text-sm md:text-base text-slate-300">
              © {new Date().getFullYear()} MehediDeveloper. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {socialLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-cyan-500 text-white hover:text-slate-950 text-base md:text-lg font-semibold transition"
                >
                  <span className="text-xl md:text-2xl leading-none">
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
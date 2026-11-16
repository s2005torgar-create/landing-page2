import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#trabajo', label: 'Trabajo' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#intereses', label: 'Intereses' },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-[#2c2727] bg-[#080808]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between gap-8 px-6 md:px-10">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#inicio"
          onClick={() => setMenuOpen(false)}
          className="inline-flex shrink-0 items-center gap-3 whitespace-nowrap text-sm font-extrabold tracking-[0.2em] text-[#f0eee9] transition-colors hover:text-[#b5092b]"
        >
          <img
            src="/src/assets/images/st_logo_emblem_1794856610330.jpg"
            alt=""
            width={28}
            height={28}
            referrerPolicy="no-referrer"
            className="h-7 w-7 object-contain mix-blend-lighten"
          />
          <span>SERGIO</span>
        </a>

        {/* Zone 2: Concise single-line text navigation links */}
        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-5 md:flex lg:gap-8"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 whitespace-nowrap font-mono text-xs uppercase tracking-[0.12em] text-[#c7c1bb] underline-offset-8 transition-colors duration-150 hover:text-[#f0eee9] hover:underline hover:decoration-[#b5092b]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary CTA + mobile drawer button */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href="#contacto"
            className="hidden shrink-0 whitespace-nowrap bg-[#b5092b] px-4 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.1em] text-[#f0eee9] transition-colors duration-150 hover:bg-[#d10c34] md:inline-flex"
          >
            Hablemos
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-11 w-11 items-center justify-center border border-[#2c2727] text-[#f0eee9] transition-colors hover:border-[#b5092b] md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navegación móvil"
          className="border-t border-[#2c2727] bg-[#111010] px-6 py-5 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-[44px] items-center border-b border-[#2c2727]/60 font-mono text-xs uppercase tracking-[0.12em] text-[#f0eee9] transition-colors hover:text-[#b5092b]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex min-h-[44px] items-center justify-center bg-[#b5092b] px-4 py-3 font-mono text-xs font-medium uppercase tracking-[0.12em] text-[#f0eee9] transition-colors hover:bg-[#d10c34]"
            >
              Hablemos
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

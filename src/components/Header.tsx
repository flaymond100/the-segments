import { useState, useEffect } from 'react';
import { siteContent } from '../content/siteContent';

const navItems = [
  { label: 'Release', href: '#release' },
  { label: 'Listen', href: '#listen' },
  { label: 'Video', href: '#video' },
  { label: 'Tour', href: '#tour' },
  { label: 'About', href: '#about' },
  { label: 'Newsletter', href: '#newsletter' },
  { label: 'Contact', href: '#contact' },
];

export const Header = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-panel/95 backdrop-blur-md border-b border-text/12'
          : 'bg-panel/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#top"
            onClick={(e) => handleNavClick(e, '#top')}
            className="text-xl md:text-2xl font-display font-bold tracking-wider text-text hover:text-sepia transition-colors"
          >
            {siteContent.bandName}
          </a>
          
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm uppercase tracking-widest transition-colors relative ${
                  activeSection === item.href.substring(1)
                    ? 'text-sepia'
                    : 'text-text/90 hover:text-sepia'
                }`}
              >
                {item.label}
                {activeSection === item.href.substring(1) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sepia" />
                )}
              </a>
            ))}
            <a
              href="#listen"
              onClick={(e) => handleNavClick(e, '#listen')}
              className="px-4 py-2 bg-sepia text-bg font-semibold text-sm uppercase tracking-wider hover:bg-sepia-hover transition-colors"
            >
              Listen
            </a>
          </div>

          <button
            className="md:hidden text-text"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};


import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const MENU_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 200;

      // Set scrolled state for background change
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-10',
      scrolled ? 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="text-xl font-medium tracking-tight">
          Portfolio<span className="text-blue-500">.</span>
        </a>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-10">
          {MENU_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                'nav-item', 
                activeSection === item.href.replace('#', '') ? 'active' : ''
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden glass-button p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        'absolute left-0 right-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm',
        'transition-all duration-300 ease-in-out overflow-hidden md:hidden',
        isMenuOpen ? 'top-full opacity-100 max-h-64' : 'top-0 opacity-0 max-h-0'
      )}>
        <nav className="flex flex-col space-y-4 p-6">
          {MENU_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                'nav-item text-base', 
                activeSection === item.href.replace('#', '') ? 'active' : ''
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

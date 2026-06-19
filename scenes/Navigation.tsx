'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, FolderGit2, Code2, Mail } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { assets } from '@/assets/asset';
import ThemeToggle from '@/components/ThemeToggle';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Tech Stack', href: '/#tech' },
  { label: 'Contact', href: '/contact' },
];

const mobileBottomItems = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'About', href: '/about', icon: FolderGit2 },
  { label: 'Projects', href: '/#projects', icon: Code2 },
  { label: 'Contact', href: '/contact', icon: Mail },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isContactPage = pathname === '/contact';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isHomePage) return;

    const handleScrollSpy = () => {
      const sections = ['home', 'projects', 'tech'];
      let current = 'home';

      const offset = window.innerHeight * 0.35;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + el.offsetHeight;

        if (top <= window.scrollY + offset && bottom >= window.scrollY + offset) {
          current = id;
          break;
        }
      }

      setActiveSection(current);
    };

    handleScrollSpy();
    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    window.addEventListener('resize', handleScrollSpy, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScrollSpy);
      window.removeEventListener('resize', handleScrollSpy);
    };
  }, [isHomePage]);

  const isActive = (item: (typeof navItems)[number]) => {
    if (item.href === '/about') return pathname === '/about';
    if (item.href === '/contact') return isContactPage;
    if (item.href === '/') return isHomePage && activeSection === 'home';
    if (item.href === '/#projects') return isHomePage && activeSection === 'projects';
    if (item.href === '/#tech') return isHomePage && activeSection === 'tech';
    return false;
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? 'bg-white/90 shadow-sm backdrop-blur-xl dark:bg-[#0b0f17]/90'
              : 'bg-white/80 backdrop-blur-sm dark:bg-[#0b0f17]/80'
          }`}
        >
          <div className="container mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
            <Link href="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight text-black dark:text-white md:text-2xl">
              <div className="relative h-10 w-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900 md:h-11 md:w-11">
                <Image
                  src={assets.profile_image}
                  alt="Olawuni Israel"
                  fill
                  sizes="44px"
                  className="object-cover"
                  priority
                />
              </div>
              <span>devTemilorun.</span>
            </Link>

            <nav className="hidden items-center gap-1 rounded-full bg-gray-50 p-1 dark:bg-gray-900/80 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive(item)
                      ? 'bg-black text-white shadow-sm dark:bg-white dark:text-black'
                      : 'text-gray-600 hover:bg-white hover:text-black dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Link
                href="/contact"
                className="hidden rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm transition hover:border-black hover:text-black dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:border-white dark:hover:text-white md:inline-flex"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </div>
        </div>
      </header>

      <nav className="fixed inset-x-0 bottom-0 z-40 mx-auto w-full max-w-md px-3 pb-3 md:hidden">
        <div className="rounded-[28px] border border-gray-200 bg-white/95 shadow-2xl shadow-black/5 backdrop-blur-xl dark:border-gray-700 dark:bg-[#0f172a]/95">
          <div className="grid grid-cols-4 gap-1 p-1.5">
            {mobileBottomItems.map((item) => {
              const Icon = item.icon;
              const active =
                (item.href === '/' && isHomePage && activeSection === 'home') ||
                (item.href === '/about' && pathname === '/about') ||
                (item.href === '/#projects' && isHomePage && activeSection === 'projects') ||
                (item.href === '/#tech' && isHomePage && activeSection === 'tech') ||
                (item.href === '/contact' && isContactPage);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex min-h-14 flex-col items-center justify-center rounded-[22px] px-1 py-2 transition-all duration-200 ${
                    active ? 'bg-black text-white dark:bg-white dark:text-black' : 'text-gray-500 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
                  }`}
                  style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
                >
                  <Icon size={18} />
                  <span className="mt-1 text-[11px] font-semibold">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
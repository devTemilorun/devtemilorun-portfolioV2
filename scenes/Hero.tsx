'use client';

import { useEffect, useRef, useState } from 'react';
import Button from '@/components/Button';
import { ChevronDown, Sparkles, Code2, Rocket, Zap } from 'lucide-react';

const roles = [
  { text: 'Frontend Developer',   Icon: Code2    },
  { text: 'React.js Developer',   Icon: Zap      },
  { text: 'Next.js Developer',    Icon: Rocket   },
  { text: 'Tailwind CSS Expert',  Icon: Sparkles },
  { text: 'Full-Stack Developer', Icon: Code2    },
];

const TECH_PILLS = ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'Tailwind'];

const BIO = 'Full Stack Web Developer | Crafting Seamless Front-End Experience & Robust Backend System | Turning Ideas into Scalable, User-Focused Web Solutions';

export default function Hero() {

  const [typedText, setTypedText] = useState(roles[0].text);
  const [roleIndex, setRoleIndex] = useState(0);

  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener('resize', checkSize, { passive: true });
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setTypedText(roles[0].text);
      return;
    }

    let isVisible = true;
    let active = true;
    let timeout: ReturnType<typeof setTimeout>;
    let charIndex = 0;

    let observer: IntersectionObserver | undefined;
    if (typeof IntersectionObserver !== 'undefined' && sectionRef.current) {
      observer = new IntersectionObserver(
        ([entry]) => { isVisible = entry.isIntersecting; },
        { threshold: 0.1 }
      );
      observer.observe(sectionRef.current);
    }

    const type = () => {
      if (!active) return;
      if (!isVisible) {
        timeout = setTimeout(type, 500);
        return;
      }

      const roleText = roles[roleIndex].text;

      if (charIndex <= roleText.length) {
        setTypedText(roleText.slice(0, charIndex));
        charIndex += 1;
        timeout = setTimeout(type, 80);
      } else {
        timeout = setTimeout(() => {
          if (active) setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
      }
    };

    type();

    return () => {
      active = false;
      clearTimeout(timeout);
      if (observer && sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [roleIndex, isMobile]);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const CurrentIcon = isMobile ? roles[0].Icon : roles[roleIndex].Icon;

  if (isMobile) {
    return (
      <section
        id="home"
        className="min-h-screen flex items-center pt-20 bg-linear-to-br from-white via-gray-50 to-gray-100 dark:from-[#0b0f17] dark:via-[#0f172a] dark:to-[#111827]"
      >
        <div className="w-full container mx-auto px-6 py-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full mb-6 dark:bg-white/5">
            <Sparkles size={16} className="text-yellow-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Available for work</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-gray-900 leading-tight dark:text-white">
            Hi, I&apos;m
            <span className="block mt-1">Olawuni Israel.</span>
          </h1>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center shrink-0">
              <CurrentIcon size={20} color="white" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              {typedText}
            </h2>
          </div>

          <p className="text-base text-gray-600 mb-8 leading-relaxed dark:text-gray-300">
            {BIO}
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button>Get In Touch →</Button>
            <button
              type="button"
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border-2
                         border-gray-300 text-gray-700 font-medium active:bg-gray-100
                         touch-manipulation dark:border-slate-700 dark:text-gray-200 dark:hover:border-white dark:hover:text-white dark:active:bg-slate-800"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              View Work
              <ChevronDown size={18} />
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {TECH_PILLS.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-white rounded-full text-xs font-medium
                           text-gray-600 border border-gray-200 dark:bg-slate-900 dark:text-gray-200 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center pt-20 bg-linear-to-br from-white via-gray-50 to-gray-100 overflow-hidden dark:from-[#0b0f17] dark:via-[#0f172a] dark:to-[#111827]"
    >
     
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className={`absolute inset-0 pointer-events-none z-0 ${'dark:bg-grid-white bg-grid-black'}`} />

      <div className="relative z-10 w-full container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full mb-8 backdrop-blur-sm animate-fade-up dark:bg-white/5" style={{ animationDelay: '0ms' }}>
              <Sparkles size={16} className="text-yellow-500" />
              <span className="text-lg font-medium text-gray-700 dark:text-gray-200">Available for work</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up dark:text-white" style={{ animationDelay: '80ms' }}>
              Hi, I&apos;m
              <span className="block bg-linear-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent animate-linear dark:from-white dark:via-gray-200 dark:to-white">
                Olawuni Israel.
              </span>
            </h1>

            <div className="flex items-center gap-3 mb-6 min-h-14 animate-fade-up" style={{ animationDelay: '160ms' }}>
              <div className="w-12 h-12 rounded-full bg-linear-to-br from-gray-800 to-gray-600 flex items-center justify-center shadow-lg shrink-0">
                <CurrentIcon size={24} color="white" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
                {typedText}
                <span className="inline-block w-0.5 h-8 md:h-12 bg-gray-900 ml-2 align-middle animate-blink" />
              </h2>
            </div>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed animate-fade-up dark:text-gray-300" style={{ animationDelay: '240ms' }}>
              {BIO}
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '320ms' }}>
              <Button>Get In Touch →</Button>
              <button
                type="button"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border-2
                           border-gray-300 text-gray-700 hover:border-black hover:text-black
                           transition-all duration-300 hover:scale-105 touch-manipulation
                           dark:border-slate-700 dark:text-gray-200 dark:hover:border-white dark:hover:text-white"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                View Work
                <ChevronDown size={18} className="animate-bounce" />
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mt-8 animate-fade-up" style={{ animationDelay: '400ms' }}>
              {TECH_PILLS.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/50 backdrop-blur-sm rounded-full text-xs
                             font-medium text-gray-600 border border-gray-200
                             transition-transform duration-200 hover:scale-105 hover:-translate-y-0.5 dark:bg-slate-900/70 dark:text-gray-200 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

         
          <div className="hidden lg:block relative animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-gray-800 via-gray-600 to-gray-800 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 animate-linear-xy" />

              <div className="relative bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-sm text-gray-400 ml-2">portfolio.tsx</span>
                </div>

                <div className="p-6 font-mono text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-pink-400">const</span>
                    <span className="text-blue-400">developer</span>
                    <span className="text-purple-400">=</span>
                    <span className="text-yellow-400">{'{'}</span>
                  </div>

                  <div className="ml-4 space-y-1 mt-2">
                    <div className="flex items-center gap-2">
                      <span className="text-pink-400">name</span>
                      <span className="text-purple-400">:</span>
                      <span className="text-green-400">&apos;Olawuni Israel&apos;,</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-pink-400">role</span>
                      <span className="text-purple-400">:</span>
                      <span className="text-green-400">&apos;FullStack Developer&apos;,</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-pink-400">skills</span>
                      <span className="text-purple-400">:</span>
                      <span className="text-yellow-400">[</span>
                    </div>

                    <div className="ml-4 space-y-1">
                      {['React', 'Next.js', 'TypeScript', 'Javascript'].map((skill) => (
                        <div key={skill} className="text-green-400">
                          &apos;{skill}&apos;,
                        </div>
                      ))}
                    </div>

                    <div className="text-yellow-400">],</div>

                    <div className="flex items-center gap-2">
                      <span className="text-pink-400">passion</span>
                      <span className="text-purple-400">:</span>
                      <span className="text-green-400">&apos;Building amazing things&apos;,</span>
                    </div>
                  </div>

                  <div className="text-yellow-400 mt-2">{'}'}</div>

                  <div className="mt-4 flex items-center gap-2 text-blue-400 animate-blink-slow">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span>{'// Ready to collaborate →'}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100 animate-fade-up dark:bg-slate-900 dark:border-slate-800" style={{ animationDelay: '500ms' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Zap size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Years Experience</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">3+</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100 animate-fade-up dark:bg-slate-900 dark:border-slate-800" style={{ animationDelay: '560ms' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <Rocket size={20} className="text-purple-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Projects Completed</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">15+</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <button
        type="button"
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center
                   gap-2 cursor-pointer touch-manipulation z-10"
        style={{ WebkitTapHighlightColor: 'transparent' }}
        aria-label="Scroll to projects"
      >
        <span className="text-xs text-gray-400 uppercase tracking-wider">Scroll</span>
        <ChevronDown size={20} className="text-gray-400 animate-bounce" />
      </button>
    </section>
  );
}
import { projects } from '@/assets/asset';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaCalendar,
  FaTag,
  FaCheck,
} from 'react-icons/fa';
import Navigation from '@/scenes/Navigation';
import Footer from '@/components/Footer';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.title} | Projects`,
    description: project.fullDescription || project.description || project.overview,
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function SingleProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  const techStack = project.techStack || project.tags || [];
  const description = project.fullDescription || project.description || project.overview;
  const statusLabel = project.isCompleted ? 'Completed' : 'In Progress';

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-28 pb-20 dark:bg-[#0b0f17]">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <Link
            href="/#projects"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
          >
            <FaArrowLeft size={14} />
            Back to Projects
          </Link>

          <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span
                className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${
                  project.isCompleted
                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200'
                    : 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200'
                }`}
              >
                {statusLabel}
              </span>

              <h1 className="mt-4 text-4xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
                {project.title}
              </h1>

              <p className="mt-4 text-lg leading-7 text-gray-600 dark:text-gray-300">
                {project.shortDescription || project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {techStack.slice(0, 6).map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-slate-800 dark:text-gray-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.liveUrl || project.demoUrl ? (
                  <a
                    href={project.liveUrl || project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                  >
                    <FaExternalLinkAlt size={14} />
                    Visit Live Site
                  </a>
                ) : null}
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold text-black transition hover:border-black dark:border-slate-700 dark:text-white dark:hover:border-white"
                  >
                    <FaGithub size={14} />
                    View Code
                  </a>
                ) : null}
                {project.backendGithubUrl ? (
                  <a
                    href={project.backendGithubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold text-black transition hover:border-black dark:border-slate-700 dark:text-white dark:hover:border-white"
                  >
                    <FaGithub size={14} />
                    Backend Repo
                  </a>
                ) : null}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                  priority
                />
              ) : null}
            </div>
          </section>

          <section className="mt-14 grid gap-6 rounded-3xl border border-gray-200 bg-gray-50 p-6 md:grid-cols-3 dark:border-slate-800 dark:bg-slate-900">
            {project.role ? (
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">Role</p>
                <p className="mt-2 text-base font-semibold text-black dark:text-white">{project.role}</p>
              </div>
            ) : null}
            {project.timeline ? (
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">Timeline</p>
                <p className="mt-2 flex items-center gap-2 text-base font-semibold text-black dark:text-white">
                  <FaCalendar size={14} />
                  {project.timeline}
                </p>
              </div>
            ) : null}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">Tech Stack</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {techStack.map((item) => (
                  <span key={item} className="rounded-full bg-white px-3 py-1 text-sm text-gray-700 dark:bg-slate-800 dark:text-gray-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {description ? (
            <section className="mt-14">
              <h2 className="text-3xl font-bold text-black dark:text-white">Overview</h2>
              <p className="mt-4 text-lg leading-8 text-gray-700 dark:text-gray-300">{description}</p>
            </section>
          ) : null}

          {project.features?.length ? (
            <section className="mt-14">
              <h2 className="text-3xl font-bold text-black dark:text-white">Key Features</h2>
              <ul className="mt-6 grid gap-3 md:grid-cols-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 rounded-2xl bg-gray-50 p-4 text-gray-700 dark:bg-slate-900 dark:text-gray-200">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
                      <FaCheck size={10} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {project.challenges?.length ? (
            <section className="mt-14">
              <h2 className="text-3xl font-bold text-black dark:text-white">Challenges & Solutions</h2>
              <ul className="mt-6 space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3 rounded-2xl border border-gray-200 p-4 text-gray-700 dark:border-slate-800 dark:bg-slate-900 dark:text-gray-200">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-black dark:bg-slate-800 dark:text-white">
                      {index + 1}
                    </span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {project.results?.length ? (
            <section className="mt-14">
              <h2 className="text-3xl font-bold text-black dark:text-white">Results</h2>
              <ul className="mt-6 grid gap-3 md:grid-cols-2">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3 rounded-2xl bg-black p-4 text-white dark:bg-white dark:text-black">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-sm font-semibold dark:bg-black/10">
                      {index + 1}
                    </span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {project.screenshots?.length ? (
            <section className="mt-14">
              <h2 className="text-3xl font-bold text-black dark:text-white">Project Gallery</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {project.screenshots.map((screenshot, index) => (
                  <div key={index} className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 dark:border-slate-800 dark:bg-slate-900">
                    <Image
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 1}`}
                      width={1200}
                      height={800}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {techStack.length ? (
            <section className="mt-14 rounded-3xl bg-gray-50 p-6 dark:bg-slate-900">
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <FaTag size={14} />
                <span className="text-sm font-semibold uppercase tracking-[0.2em]">Full Tech Stack</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {techStack.map((item) => (
                  <span key={item} className="rounded-full bg-white px-4 py-2 text-sm text-gray-700 dark:bg-slate-800 dark:text-gray-200">
                    {item}
                  </span>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </main>
      <Footer />
    </>
  );
}
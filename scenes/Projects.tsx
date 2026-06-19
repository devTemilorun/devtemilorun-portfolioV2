import { projects } from "@/assets/asset";
import SectionTitle from "@/components/SectionTitle";
import Link from 'next/link';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-[#0f172a]">
      <div className="container mx-auto px-4">
        <SectionTitle title="Projects." />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const techStack = project.techStack || project.tags || [];
            const summary = project.shortDescription || project.description || project.overview;
            const statusLabel = project.status || (project.isCompleted ? 'Completed' : 'In Progress');

            return (
              <Link key={index} href={`/projects/${project.slug}`}>
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer dark:bg-slate-900 dark:border dark:border-slate-800">
                  {statusLabel && (
                    <span className={`inline-block text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded mb-2 ${
                      statusLabel === 'In Progress'
                        ? 'bg-yellow-300 text-yellow-800'
                        : 'bg-green-300 text-gray-800'
                    }`}>
                      {statusLabel}
                    </span>
                  )}
                  <h3 className="text-xl font-bold mt-2 mb-3 text-black hover:text-blue-600 transition-colors dark:text-white dark:hover:text-blue-400">
                    {project.title}
                  </h3>
                  {project.tagline && (
                    <p className="text-gray-600 text-sm mb-3 font-medium dark:text-gray-300">{project.tagline}</p>
                  )}
                  {summary && (
                    <p className="text-gray-700 mb-4 text-sm line-clamp-2 dark:text-gray-300">{summary}</p>
                  )}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {techStack.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded dark:bg-slate-800 dark:text-gray-200">
                        {tag}
                      </span>
                    ))}
                    {techStack.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded dark:bg-slate-800 dark:text-gray-200">
                        +{techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
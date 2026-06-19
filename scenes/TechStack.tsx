'use client';

import SectionTitle from '@/components/SectionTitle';
import { techStacks } from '@/assets/asset';

export default function TechStack() {
  const categories = [
    { key: 'Frontend', title: 'Frontend Development' },
    { key: 'Backend', title: 'Backend & APIs' },
    { key: 'Database', title: 'Database & ORM' },
    { key: 'VersionControl', title: 'Version Control' },
    { key: 'Deployment', title: 'Deployment & Hosting' },
    { key: 'Tools', title: 'Dev Tools & Utilities' },
  ];

  return (
    <section id="tech" className="py-20 bg-gray-50 dark:bg-[#0b0f17]">
      <div className="container mx-auto px-4">
        <SectionTitle title="Tech Stack." subtitle="Technologies I work with" />
        
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.key}>
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-xl font-semibold mx-auto text-center text-gray-800 dark:text-gray-100">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {techStacks[category.key as keyof typeof techStacks].map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={index}
                      className="group flex flex-col items-center gap-2 p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:bg-slate-900 dark:border-slate-800"
                    >
                      <Icon size={35} style={{ color: tech.color }} />
                      <span className="text-gray-700 text-xs font-medium text-center dark:text-gray-200">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { PROJECTS } from '../data/projectsData.ts';
import { Project } from '../types/index.ts';

interface HomeFeaturedWorkProps {
  onSelectProject: (project: Project) => void;
  onNavigateToProjects: () => void;
}

export const HomeFeaturedWork: React.FC<HomeFeaturedWorkProps> = ({
  onSelectProject,
  onNavigateToProjects,
}) => {
  // Handpicked top 3 flagship projects for the home page teaser
  const featured = PROJECTS.slice(0, 3);

  return (
    <section className="py-24 border-b border-white/10 relative bg-[#0c0e0c]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full glass-card border border-white/10 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#dfff24]" />
              <span className="text-xs uppercase tracking-widest text-[#dfff24] font-bold">
                Selected Works Preview
              </span>
              <span className="text-zinc-600">|</span>
              <span className="text-xs text-zinc-300 font-medium">
                Recent Commercial Directives
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Crafted for screen, <br />
              <span className="text-[#dfff24]">built for cultural impact</span>.
            </h2>
          </div>

          <button
            onClick={onNavigateToProjects}
            type="button"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel border border-white/15 hover:border-[#dfff24] text-xs font-bold uppercase tracking-wider text-zinc-200 hover:text-white transition-all cursor-pointer self-start md:self-auto"
          >
            <span>View All Projects & Campaigns</span>
            <span className="text-[#dfff24]">→</span>
          </button>
        </div>

        {/* 3 Large Featured Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {featured.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer rounded-3xl overflow-hidden glass-card border border-white/10 hover:border-[#dfff24]/60 transition-all duration-500 hover:-translate-y-1.5 shadow-2xl flex flex-col"
            >
              {/* Project Image with Subtle Zoom Hover */}
              <div className="aspect-[4/3] overflow-hidden relative bg-zinc-950">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-105 group-hover:brightness-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Client Tag */}
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[#dfff24]">
                    {project.client}
                  </span>
                </div>

                {/* Arrow on hover */}
                <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[#dfff24] group-hover:text-black transition-all">
                  ↗
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs text-zinc-400 mb-2 font-medium">
                    <span className="uppercase tracking-wider">{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#dfff24] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-2 mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {(project.resultsHighlight || (project.stats && project.stats[0]?.value)) && (
                  <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs text-[#dfff24] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#dfff24]" />
                    <span>{project.resultsHighlight || `${project.stats?.[0]?.value} ${project.stats?.[0]?.label}`}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

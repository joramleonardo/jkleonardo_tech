import React, { useEffect, useMemo, useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import PortfolioLayout from '@/Layouts/PortfolioLayout';
import SpotlightCard from '@/Components/Portfolio/SpotlightCard';
import ProjectVisualPreview from '@/Components/Portfolio/ProjectVisualPreview';
import ProjectCaseStudyModal from '@/Components/Portfolio/ProjectCaseStudyModal';
import { PROJECTS, ProjectItem, RESUME_PROJECTS } from '@/data/portfolioData';

const CATEGORIES = [
    'All Projects',
    'Online Shop',
    'Web App',
    'Event App',
    'Portal',
] as const;

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All Projects');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            const highlightSlug = params.get('highlight');
            if (highlightSlug) {
                const found = PROJECTS.find((p) => p.slug === highlightSlug);
                if (found) {
                    setActiveModalProject(found);
                }
            }
        }
    }, []);

    const filteredProjects = useMemo(() => {
        return PROJECTS.filter((project) => {
            const matchesCategory =
                selectedCategory === 'All Projects' || project.category === selectedCategory;
            const q = searchQuery.trim().toLowerCase();
            const matchesSearch =
                !q ||
                project.title.toLowerCase().includes(q) ||
                project.subtitle.toLowerCase().includes(q) ||
                project.description.toLowerCase().includes(q) ||
                project.domainLabel.toLowerCase().includes(q) ||
                project.technologies.some((t) => t.toLowerCase().includes(q));
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    return (
        <PortfolioLayout>
            <Head title="My Web Projects — Joram Kate Leonardo" />

            {/* HERO HEADER */}
            <section className="pt-10 pb-12 sm:pt-16 sm:pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-xs font-mono text-violet-300 mb-4">
                            <span>// MY WEB PROJECTS • LIVE WEBSITES & INFORMATION SYSTEMS</span>
                        </div>
                        <h1 className="text-4xl sm:text-6xl font-extrabold font-display text-white tracking-tight leading-tight">
                            Websites & systems{' '}
                            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-indigo-400 bg-clip-text text-transparent">
                                I’ve built and launched.
                            </span>
                        </h1>
                        <p className="text-slate-300 mt-4 text-base sm:text-lg leading-relaxed">
                            Explore my live hosted websites on <code className="text-violet-300">*.jkleonardo.tech</code>{' '}
                            as well as the web-based information systems I developed at DOST-STII.
                        </p>
                    </div>

                    {/* Filter & Search Controls */}
                    <div className="mt-8 p-4 sm:p-5 rounded-2xl glass-panel border border-violet-500/25">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                            <div className="flex flex-wrap items-center gap-2">
                                {CATEGORIES.map((category) => {
                                    const active = selectedCategory === category;
                                    const count =
                                        category === 'All Projects'
                                            ? PROJECTS.length
                                            : PROJECTS.filter((p) => p.category === category).length;

                                    return (
                                        <button
                                            key={category}
                                            type="button"
                                            onClick={() => setSelectedCategory(category)}
                                            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition flex items-center gap-2 ${
                                                active
                                                    ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-md shadow-violet-600/30'
                                                    : 'bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 border border-white/10'
                                            }`}
                                        >
                                            <span>{category}</span>
                                            <span
                                                className={`px-1.5 py-0.2 rounded text-[10px] font-mono ${
                                                    active ? 'bg-white/20 text-white' : 'bg-white/10 text-slate-400'
                                                }`}
                                            >
                                                {count}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>

                            <div className="relative w-full lg:w-64">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search projects..."
                                    className="w-full pl-9 pr-8 py-2 rounded-xl bg-obsidian-950/90 border border-white/15 focus:border-violet-400 focus:ring-1 focus:ring-violet-400 text-xs sm:text-sm text-white placeholder-slate-500"
                                />
                                <svg
                                    className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                                {searchQuery && (
                                    <button
                                        type="button"
                                        onClick={() => setSearchQuery('')}
                                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                                    >
                                        ✕
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROJECTS GRID */}
            <section className="pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filteredProjects.length === 0 ? (
                        <div className="p-12 rounded-3xl glass-panel text-center space-y-4">
                            <div className="text-xl font-bold text-white">No projects match that search</div>
                            <button
                                type="button"
                                onClick={() => {
                                    setSelectedCategory('All Projects');
                                    setSearchQuery('');
                                }}
                                className="px-5 py-2.5 rounded-xl bg-violet-600 text-xs font-semibold text-white"
                            >
                                Show All Projects
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                            {filteredProjects.map((project) => (
                                <SpotlightCard key={project.id} className="p-5 sm:p-6 flex flex-col justify-between">
                                    <div>
                                        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-violet-500/15 text-violet-300 border border-violet-500/30">
                                                {project.category}
                                            </span>
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 transition"
                                            >
                                                {project.domainLabel} ↗
                                            </a>
                                        </div>

                                        <div
                                            onClick={() => setActiveModalProject(project)}
                                            className="cursor-pointer rounded-xl overflow-hidden border border-white/10 group-hover:border-violet-400/40 transition mb-5"
                                        >
                                            <ProjectVisualPreview project={project} compact />
                                        </div>

                                        <h2 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-violet-300 transition">
                                            {project.title}
                                        </h2>
                                        <p className="text-xs font-mono text-violet-300/90 mt-0.5">
                                            {project.subtitle}
                                        </p>
                                        <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-white/10 space-y-4">
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/10"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                                            <button
                                                type="button"
                                                onClick={() => setActiveModalProject(project)}
                                                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-violet-600/25 hover:bg-violet-600/40 border border-violet-400/30 text-xs font-semibold text-violet-200 transition"
                                            >
                                                <span>View Details</span>
                                                <span>→</span>
                                            </button>

                                            <div className="flex items-center gap-2">
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-violet-500/20 border border-white/10 hover:border-violet-400/40 text-xs font-mono text-violet-200 hover:text-white transition"
                                                >
                                                    Open Live Site ↗
                                                </a>
                                                <Link
                                                    href={`/contact?project=${project.slug}`}
                                                    className="px-3.5 py-2 rounded-xl btn-violet-shimmer text-xs font-semibold text-white"
                                                >
                                                    Build Similar
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </SpotlightCard>
                            ))}
                        </div>
                    )}

                    {/* Government & Institutional Systems Section */}
                    <div className="mt-16">
                        <div className="max-w-3xl mb-8">
                            <div className="text-xs font-mono uppercase tracking-widest text-violet-400 mb-2">
                                // INSTITUTIONAL PROJECTS • DOST-STII
                            </div>
                            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white">
                                Government & Information Systems
                            </h2>
                            <p className="text-sm sm:text-base text-slate-400 mt-2">
                                Web-based information systems developed and maintained for DOST-STII.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {RESUME_PROJECTS.map((sys) => (
                                <SpotlightCard key={sys.title} tilt={false} className="p-6 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center justify-between gap-2 mb-3">
                                            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-violet-500/20 text-violet-300 border border-violet-400/30">
                                                {sys.organization}
                                            </span>
                                            {sys.liveUrl && (
                                                <a
                                                    href={sys.liveUrl}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-xs font-mono text-emerald-300 hover:underline"
                                                >
                                                    ticketingportal.jkleonardo.tech ↗
                                                </a>
                                            )}
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                                            {sys.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                                            {sys.description}
                                        </p>
                                    </div>

                                    <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                                        {sys.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/[0.04] text-violet-200 border border-white/10"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </SpotlightCard>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Banner */}
                    <div className="mt-16 rounded-3xl glass-panel border border-violet-500/30 p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="space-y-2 max-w-2xl text-center lg:text-left">
                            <div className="text-xs font-mono uppercase tracking-widest text-violet-400">
                                // HAVE AN IDEA IN MIND?
                            </div>
                            <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-white">
                                Need a website or web app like one of these?
                            </h3>
                            <p className="text-sm sm:text-base text-slate-300">
                                Send me a message and let’s talk about how I can build it for you.
                            </p>
                        </div>
                        <Link
                            href="/contact"
                            className="px-7 py-4 rounded-2xl btn-violet-shimmer text-sm sm:text-base font-bold text-white shrink-0 shadow-xl"
                        >
                            Contact Me →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Project Details Modal */}
            <ProjectCaseStudyModal
                project={activeModalProject}
                onClose={() => setActiveModalProject(null)}
            />
        </PortfolioLayout>
    );
}


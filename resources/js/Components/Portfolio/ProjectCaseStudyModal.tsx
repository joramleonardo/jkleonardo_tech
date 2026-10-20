import React, { useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { ProjectItem } from '@/data/portfolioData';
import ProjectVisualPreview from './ProjectVisualPreview';

interface ProjectCaseStudyModalProps {
    project: ProjectItem | null;
    onClose: () => void;
}

export default function ProjectCaseStudyModal({ project, onClose }: ProjectCaseStudyModalProps) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (project) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [project, onClose]);

    if (!project) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-obsidian-950/80 backdrop-blur-xl animate-fadeIn"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
        >
            <div
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel border border-violet-500/30 shadow-[0_0_70px_-15px_rgba(139,92,246,0.45)] p-6 sm:p-8 text-slate-100"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Top Header */}
                <div className="flex items-start justify-between gap-4 pb-5 border-b border-white/10">
                    <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-violet-500/20 text-violet-300 border border-violet-400/30">
                                {project.category}
                            </span>
                            <span className="text-xs font-mono text-slate-400">
                                {project.role} • {project.year}
                            </span>
                            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                                {project.impactMetric} {project.impactLabel}
                            </span>
                        </div>
                        <h2 id="case-study-title" className="text-2xl sm:text-3xl font-bold font-display text-white">
                            {project.title}
                        </h2>
                        <p className="text-slate-300 text-sm sm:text-base mt-1">{project.subtitle}</p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="p-2 rounded-xl bg-white/5 hover:bg-violet-500/20 border border-white/10 hover:border-violet-400/40 text-slate-300 hover:text-white transition"
                        aria-label="Close project details"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Visual Preview */}
                <div className="rounded-2xl overflow-hidden border border-violet-500/25 my-5">
                    <ProjectVisualPreview project={project} />
                </div>

                {/* Problem & How I Solved It */}
                <div className="grid md:grid-cols-2 gap-4 mb-5">
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                        <div className="text-xs font-mono uppercase tracking-wider text-rose-300 mb-1.5">
                            The Problem
                        </div>
                        <p className="text-sm text-slate-300 leading-relaxed">{project.challenge}</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-violet-500/[0.06] border border-violet-500/25">
                        <div className="text-xs font-mono uppercase tracking-wider text-violet-300 mb-1.5">
                            How I Built It
                        </div>
                        <p className="text-sm text-slate-200 leading-relaxed">{project.solution}</p>
                    </div>
                </div>

                {/* Key Highlights */}
                <div className="p-5 rounded-2xl bg-obsidian-950/60 border border-white/10 mb-5">
                    <div className="text-xs font-mono uppercase tracking-wider text-emerald-300 mb-3">
                        Key Features & Highlights
                    </div>
                    <ul className="space-y-2">
                        {project.results.map((res, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-200">
                                <span className="mt-0.5 w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-xs shrink-0">
                                    ✓
                                </span>
                                <span>{res}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tools Used */}
                <div className="mb-6">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Tools & Technologies Used
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 rounded-xl text-xs font-mono bg-violet-500/15 text-violet-200 border border-violet-500/30"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Action Footer */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                    <div className="flex flex-wrap items-center gap-3">
                        {project.liveUrl ? (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-violet-500/20 hover:bg-violet-500/30 border border-violet-400/40 text-xs font-mono font-semibold text-white transition"
                            >
                                <span>Visit {project.domainLabel}</span>
                                <span>↗</span>
                            </a>
                        ) : (
                            <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-violet-500/15 border border-violet-400/30 text-xs font-mono text-violet-200">
                                <span>{project.domainLabel}</span>
                            </span>
                        )}
                        <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition"
                        >
                            <span>GitHub (@joramleonardo) ↗</span>
                        </a>
                    </div>

                    <Link
                        href={`/contact?project=${project.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl btn-violet-shimmer text-xs sm:text-sm font-semibold text-white shadow-lg"
                    >
                        <span>Ask About a Project Like This</span>
                        <span>→</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}


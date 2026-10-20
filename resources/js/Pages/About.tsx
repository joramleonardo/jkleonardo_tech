import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import PortfolioLayout from '@/Layouts/PortfolioLayout';
import SpotlightCard from '@/Components/Portfolio/SpotlightCard';
import ProfileAvatar from '@/Components/Portfolio/ProfileAvatar';
import {
    PROCESS_STEPS,
    PROJECTS,
    RESUME_EDUCATION,
    RESUME_EXPERIENCE,
    RESUME_PROJECTS,
    RESUME_REFERENCES,
    RESUME_SKILL_GROUPS,
    STUDIO_PROFILE,
} from '@/data/portfolioData';

export default function About() {
    const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
    const liveProjects = PROJECTS.filter((p) => Boolean(p.liveUrl));

    return (
        <PortfolioLayout>
            <Head title="About Me & Resume — Joram Kate Leonardo" />

            {/* PERSONAL PROFILE & RESUME HEADER */}
            <section className="pt-10 pb-16 sm:pt-16 sm:pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SpotlightCard tilt={false} className="p-6 sm:p-10 lg:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                            {/* Left: Profile Picture & Quick Contact Info */}
                            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
                                <ProfileAvatar size="xl" />

                                <div>
                                    <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                                        {STUDIO_PROFILE.founderName}
                                    </h1>
                                    <p className="text-sm font-mono text-violet-300 mt-1">
                                        {STUDIO_PROFILE.founderTitle} • {STUDIO_PROFILE.brandName}{' '}
                                        {STUDIO_PROFILE.brandSuffix}
                                    </p>
                                    <p className="text-xs text-slate-400 font-mono mt-1">
                                        📍 {STUDIO_PROFILE.location}
                                    </p>
                                </div>

                                <div className="w-full pt-3 border-t border-white/10 space-y-2 text-xs font-mono text-slate-300">
                                    <div className="flex items-center justify-center lg:justify-start gap-2">
                                        <span className="text-violet-400">Phone:</span>
                                        <a href={`tel:${STUDIO_PROFILE.phone.replace(/\s+/g, '')}`} className="hover:text-white transition">
                                            {STUDIO_PROFILE.phone}
                                        </a>
                                    </div>
                                    <div className="flex items-center justify-center lg:justify-start gap-2">
                                        <span className="text-violet-400">Portfolio Email:</span>
                                        <a
                                            href={`mailto:${STUDIO_PROFILE.email}`}
                                            className="hover:text-white transition truncate"
                                        >
                                            {STUDIO_PROFILE.email}
                                        </a>
                                    </div>
                                    <div className="flex items-center justify-center lg:justify-start gap-2">
                                        <span className="text-violet-400">Personal Email:</span>
                                        <a
                                            href={`mailto:${STUDIO_PROFILE.personalEmail}`}
                                            className="hover:text-white transition truncate"
                                        >
                                            {STUDIO_PROFILE.personalEmail}
                                        </a>
                                    </div>
                                    <div className="flex items-center justify-center lg:justify-start gap-2">
                                        <span className="text-violet-400">GitHub:</span>
                                        <a
                                            href={STUDIO_PROFILE.githubUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-emerald-300 hover:underline"
                                        >
                                            github.com/joramleonardo ↗
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Personal Bio & Resume Actions */}
                            <div className="lg:col-span-8 space-y-5">
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-xs font-mono text-violet-300">
                                    <span>// ABOUT ME & OFFICIAL RESUME</span>
                                </div>

                                <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
                                    Full Stack Web Developer turning complex workflows into{' '}
                                    <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-indigo-400 bg-clip-text text-transparent">
                                        auditable digital platforms.
                                    </span>
                                </h2>

                                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                                    {STUDIO_PROFILE.resumeSummary}
                                </p>

                                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                                    <a
                                        href={STUDIO_PROFILE.resumePdfUrl}
                                        download="Joram-Kate-Leonardo-Resume.pdf"
                                        className="px-6 py-3.5 rounded-2xl btn-violet-shimmer text-sm font-bold text-white shadow-lg"
                                    >
                                        Download Resume (PDF) ↓
                                    </a>
                                    <a
                                        href={STUDIO_PROFILE.resumePdfUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 text-sm font-semibold text-white transition"
                                    >
                                        View Resume PDF ↗
                                    </a>
                                    <Link
                                        href="/contact"
                                        className="px-5 py-3.5 rounded-2xl bg-violet-500/15 hover:bg-violet-500/25 border border-violet-400/30 text-sm font-semibold text-violet-200 hover:text-white transition"
                                    >
                                        Contact / Hire Me →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SpotlightCard>
                </div>
            </section>

            {/* RESUME SECTION: EXPERIENCE, EDUCATION & REFERENCES */}
            <section className="py-12 sm:py-16 scroll-reveal-css">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Left 7 Columns: Work Experience */}
                        <div className="lg:col-span-7 space-y-6">
                            <div>
                                <div className="text-xs font-mono uppercase tracking-widest text-violet-400 mb-2">
                                    // RESUME • EXPERIENCE
                                </div>
                                <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white">
                                    Work Experience
                                </h2>
                            </div>

                            {RESUME_EXPERIENCE.map((item) => (
                                <SpotlightCard key={`${item.role}-${item.period}`} tilt={false} className="p-6 sm:p-8 space-y-4">
                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                        <div>
                                            <h3 className="text-xl font-bold font-display text-white">{item.role}</h3>
                                            <div className="text-xs font-mono text-violet-300 mt-0.5">
                                                {item.organization}
                                            </div>
                                        </div>
                                        <span className="px-3 py-1 rounded-full text-xs font-mono bg-violet-500/20 text-violet-200 border border-violet-400/30">
                                            {item.period}
                                        </span>
                                    </div>

                                    <ul className="space-y-2 pt-2 border-t border-white/10">
                                        {item.highlights.map((point) => (
                                            <li
                                                key={point}
                                                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
                                            >
                                                <span className="mt-1 w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-[10px] shrink-0">
                                                    ✓
                                                </span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </SpotlightCard>
                            ))}
                        </div>

                        {/* Right 5 Columns: Education, Live Links & References */}
                        <div className="lg:col-span-5 space-y-6">
                            <div>
                                <div className="text-xs font-mono uppercase tracking-widest text-violet-400 mb-2">
                                    // EDUCATION & REFERENCES
                                </div>
                                <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white">
                                    Education & Links
                                </h2>
                            </div>

                            {RESUME_EDUCATION.map((edu) => (
                                <SpotlightCard key={edu.degree} tilt={false} className="p-6 space-y-2">
                                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-violet-500/20 text-violet-300 border border-violet-500/30">
                                        {edu.period}
                                    </span>
                                    <h3 className="text-lg font-bold font-display text-white pt-1">{edu.degree}</h3>
                                    <div className="text-sm font-semibold text-violet-300">{edu.school}</div>
                                    <p className="text-xs sm:text-sm text-slate-300 pt-1 leading-relaxed">
                                        {edu.details}
                                    </p>
                                </SpotlightCard>
                            ))}

                            {/* Live Deployed Projects List on Resume */}
                            <SpotlightCard tilt={false} className="p-6 space-y-4">
                                <div className="text-xs font-mono uppercase tracking-wider text-violet-300">
                                    Live Portfolio Links (*.jkleonardo.tech)
                                </div>
                                <div className="space-y-2.5">
                                    {liveProjects.map((proj) => (
                                        <a
                                            key={proj.id}
                                            href={proj.liveUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="p-3.5 rounded-xl bg-obsidian-950/70 hover:bg-violet-500/15 border border-white/10 hover:border-violet-400/40 flex items-center justify-between gap-3 transition"
                                        >
                                            <div className="min-w-0">
                                                <div className="text-sm font-bold text-white truncate">
                                                    {proj.title}
                                                </div>
                                                <div className="text-xs font-mono text-violet-300 truncate">
                                                    {proj.domainLabel}
                                                </div>
                                            </div>
                                            <span className="text-xs font-mono text-emerald-300 shrink-0">
                                                Live ↗
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </SpotlightCard>

                            {/* Character References */}
                            <SpotlightCard tilt={false} className="p-6 space-y-4">
                                <div className="text-xs font-mono uppercase tracking-wider text-violet-300">
                                    Character References
                                </div>
                                <div className="space-y-3">
                                    {RESUME_REFERENCES.map((ref) => (
                                        <div
                                            key={ref.name}
                                            className="p-4 rounded-xl bg-obsidian-950/70 border border-white/10 space-y-1"
                                        >
                                            <div className="text-sm font-bold text-white">{ref.name}</div>
                                            <div className="text-xs text-violet-300">
                                                {ref.role}, {ref.organization}
                                            </div>
                                            <div className="text-xs font-mono text-slate-400 pt-0.5">
                                                Phone: {ref.phone}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </SpotlightCard>
                        </div>
                    </div>
                </div>
            </section>

            {/* KEY ENGINEERING PROJECTS & INFORMATION SYSTEMS FROM RESUME */}
            <section className="py-14 sm:py-18 scroll-reveal-css">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-10">
                        <div className="text-xs font-mono uppercase tracking-widest text-violet-400 mb-2">
                            // KEY ENGINEERING PROJECTS • ENTERPRISE & DOST-STII
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
                            Key Engineering Projects & Information Systems
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {RESUME_PROJECTS.map((sys) => (
                            <SpotlightCard key={sys.title} tilt={false} className="p-6 sm:p-7 flex flex-col justify-between">
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
                                                Live Demo ↗
                                            </a>
                                        )}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                                        {sys.title}
                                    </h3>
                                    {sys.subtitle && (
                                        <div className="text-xs font-mono text-violet-300 mt-0.5">
                                            {sys.subtitle}
                                        </div>
                                    )}
                                    <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                                        {sys.description}
                                    </p>

                                    {sys.highlights && sys.highlights.length > 0 && (
                                        <ul className="mt-3.5 space-y-1.5 border-t border-white/10 pt-3">
                                            {sys.highlights.map((bullet) => (
                                                <li
                                                    key={bullet}
                                                    className="flex items-start gap-2 text-xs text-slate-200 leading-relaxed"
                                                >
                                                    <span className="text-emerald-400 mt-0.5 shrink-0">•</span>
                                                    <span>{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
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
            </section>

            {/* SKILLS & TOOLS */}
            <section className="py-16 sm:py-20 scroll-reveal-css">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-10">
                        <div className="text-xs font-mono uppercase tracking-widest text-violet-400 mb-2">
                            // CORE COMPETENCIES & TECHNICAL SKILLS
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
                            Technical Stack & Core Competencies
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {RESUME_SKILL_GROUPS.map((group) => (
                            <SpotlightCard key={group.category} tilt={false} className="p-6 sm:p-7">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-bold font-display text-white">{group.category}</h3>
                                    <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-violet-500/20 text-violet-300 border border-violet-400/30">
                                        {group.badge}
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {group.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium bg-obsidian-950/80 text-slate-200 border border-white/10"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </SpotlightCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* SIMPLE 4-STEP WORKFLOW */}
            <section className="py-16 sm:py-20 border-t border-violet-500/15 bg-obsidian-900/30 scroll-reveal-css">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-10">
                        <div className="text-xs font-mono uppercase tracking-widest text-violet-400 mb-2">
                            // HOW I WORK
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
                            Simple 4-Step Process
                        </h2>
                        <p className="text-slate-400 mt-2 text-sm sm:text-base">
                            Here is how we go from your initial idea to a finished, live website.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        <div className="lg:col-span-5 space-y-3">
                            {PROCESS_STEPS.map((item, idx) => {
                                const active = activeStepIndex === idx;
                                return (
                                    <button
                                        key={item.step}
                                        type="button"
                                        onClick={() => setActiveStepIndex(idx)}
                                        className={`w-full p-4 rounded-2xl text-left border transition-all flex items-center justify-between gap-4 ${
                                            active
                                                ? 'bg-gradient-to-r from-violet-600/30 to-purple-900/30 border-violet-400 text-white shadow-[0_0_25px_rgba(139,92,246,0.2)]'
                                                : 'bg-obsidian-950/70 border-white/10 text-slate-300 hover:border-violet-500/30 hover:text-white'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3.5">
                                            <span
                                                className={`w-9 h-9 rounded-xl font-mono text-xs font-bold flex items-center justify-center ${
                                                    active
                                                        ? 'bg-violet-500 text-white'
                                                        : 'bg-white/5 text-violet-300 border border-white/10'
                                                }`}
                                            >
                                                {item.step}
                                            </span>
                                            <div>
                                                <div className="text-sm sm:text-base font-bold font-display">
                                                    {item.title}
                                                </div>
                                                <div className="text-xs font-mono text-violet-300/90">
                                                    {item.timeline}
                                                </div>
                                            </div>
                                        </div>
                                        <span className="text-violet-300 font-mono">→</span>
                                    </button>
                                );
                            })}
                        </div>

                        <div className="lg:col-span-7">
                            <SpotlightCard tilt={false} className="p-6 sm:p-9">
                                <span className="px-3 py-1 rounded-full text-xs font-mono bg-violet-500/20 text-violet-200 border border-violet-400/30">
                                    {PROCESS_STEPS[activeStepIndex].timeline}
                                </span>

                                <h3 className="text-2xl font-bold font-display text-white mt-4">
                                    {PROCESS_STEPS[activeStepIndex].title}
                                </h3>

                                <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                                    {PROCESS_STEPS[activeStepIndex].description}
                                </p>

                                <div className="mt-6 pt-5 border-t border-white/10">
                                    <div className="text-xs font-mono uppercase tracking-wider text-violet-300 mb-3">
                                        What’s Included:
                                    </div>
                                    <div className="grid sm:grid-cols-3 gap-3">
                                        {PROCESS_STEPS[activeStepIndex].deliverables.map((deliv) => (
                                            <div
                                                key={deliv}
                                                className="p-3.5 rounded-xl bg-obsidian-950/80 border border-violet-500/25"
                                            >
                                                <span className="text-emerald-400 text-xs font-mono block mb-1">
                                                    ✓ Included
                                                </span>
                                                <span className="text-xs sm:text-sm font-semibold text-white">
                                                    {deliv}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </SpotlightCard>
                        </div>
                    </div>
                </div>
            </section>
        </PortfolioLayout>
    );
}


import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import PortfolioLayout from '@/Layouts/PortfolioLayout';
import SpotlightCard from '@/Components/Portfolio/SpotlightCard';
import ProfileAvatar from '@/Components/Portfolio/ProfileAvatar';
import ProjectVisualPreview from '@/Components/Portfolio/ProjectVisualPreview';
import ProjectCaseStudyModal from '@/Components/Portfolio/ProjectCaseStudyModal';
import {
    PROJECTS,
    ProjectItem,
    RESUME_EXPERIENCE,
    SERVICES,
    STUDIO_PROFILE,
    TESTIMONIALS,
} from '@/data/portfolioData';

export default function Welcome() {
    const featuredProjects = PROJECTS;
    const [activeHeroProject, setActiveHeroProject] = useState<ProjectItem>(featuredProjects[0]);
    const [selectedModalProject, setSelectedModalProject] = useState<ProjectItem | null>(null);

    const techMarqueeItems = [
        'Joram Kate S. Leonardo',
        'JKLeonardo Tech',
        'Laravel & PHP',
        'React & TypeScript',
        'Vue.js & Inertia.js',
        'Tailwind CSS',
        'velaaromaph.jkleonardo.tech',
        'workscheduler.jkleonardo.tech',
        'christmasparty.jkleonardo.tech',
        'ticketingportal.jkleonardo.tech',
        'github.com/joramleonardo',
    ];

    return (
        <PortfolioLayout>
            <Head title="Joram Leonardo — Personal Web Portfolio & Resume" />

            {/* HERO SECTION WITH PROFILE PHOTO */}
            <section className="relative pt-8 pb-20 sm:pt-14 sm:pb-28 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                        {/* Left Column: Personal Introduction + Profile Picture */}
                        <div className="lg:col-span-7 space-y-6">
                            {/* Profile Picture + Availability Badge Row */}
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                <ProfileAvatar size="lg" />
                                <div className="space-y-1.5">
                                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-xs font-mono text-violet-200">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                                        <span>{STUDIO_PROFILE.availabilityText}</span>
                                    </div>
                                    <div className="text-sm font-mono text-slate-300">
                                        {STUDIO_PROFILE.founderName} •{' '}
                                        <span className="text-violet-300">{STUDIO_PROFILE.location}</span>
                                    </div>
                                </div>
                            </div>

                            <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.08]">
                                Hi, I’m Joram — I build websites & web apps under{' '}
                                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-indigo-400 bg-clip-text text-transparent">
                                    JKLeonardo Tech.
                                </span>
                            </h1>

                            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                                {STUDIO_PROFILE.tagline} Whether you need an online shop, a team scheduler, an event
                                website, or a personal site—I can build it for you from start to finish.
                            </p>

                            {/* Primary & Secondary CTAs */}
                            <div className="flex flex-wrap items-center gap-3.5 pt-2">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl btn-violet-shimmer text-base font-bold text-white shadow-[0_0_35px_-5px_rgba(139,92,246,0.65)]"
                                >
                                    <span>Have Your Website Created</span>
                                    <span className="text-lg">→</span>
                                </Link>

                                <Link
                                    href="/projects"
                                    className="inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/15 hover:border-violet-400/40 text-base font-semibold text-slate-100 transition-all"
                                >
                                    <span>View My Projects</span>
                                    <span className="px-2 py-0.5 rounded-lg text-xs font-mono bg-violet-500/25 text-violet-200 border border-violet-400/30">
                                        {PROJECTS.length}
                                    </span>
                                </Link>

                                <Link
                                    href="/about"
                                    className="inline-flex items-center gap-2 px-5 py-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-sm font-mono text-violet-300 hover:text-white transition"
                                >
                                    <span>My Resume / CV</span>
                                    <span>→</span>
                                </Link>
                            </div>

                            {/* Quick Personal Highlights */}
                            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-5">
                                {STUDIO_PROFILE.stats.map((stat) => (
                                    <div key={stat.label}>
                                        <div className="text-2xl sm:text-3xl font-extrabold font-display bg-gradient-to-r from-white via-violet-200 to-violet-400 bg-clip-text text-transparent">
                                            {stat.value}
                                        </div>
                                        <div className="text-xs font-semibold text-slate-200 mt-0.5">{stat.label}</div>
                                        <div className="text-[11px] text-slate-400 font-mono">{stat.detail}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Interactive Live Project Switcher Showcase */}
                        <div className="lg:col-span-5">
                            <SpotlightCard className="p-4 sm:p-5 border-violet-500/30 shadow-[0_0_60px_-15px_rgba(139,92,246,0.35)]">
                                <div className="flex items-center justify-between gap-2 mb-3">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                                        <span className="text-xs font-mono uppercase tracking-wider text-violet-300">
                                            My Live Websites
                                        </span>
                                    </div>
                                    <a
                                        href={activeHeroProject.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-[11px] font-mono text-emerald-300 hover:text-white bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-0.5 rounded-full transition"
                                    >
                                        Open Live Site ↗
                                    </a>
                                </div>

                                {/* Selector Pills for All 4 Live Projects */}
                                <div className="grid grid-cols-4 gap-1 p-1 rounded-xl bg-obsidian-950/90 border border-white/10 mb-4">
                                    {featuredProjects.map((proj) => (
                                        <button
                                            key={proj.id}
                                            type="button"
                                            onClick={() => setActiveHeroProject(proj)}
                                            className={`px-2 py-2 rounded-lg text-[11px] font-medium truncate transition ${
                                                activeHeroProject.id === proj.id
                                                    ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-md shadow-violet-600/30'
                                                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                                            }`}
                                        >
                                            {proj.title.split(' ')[0]}
                                        </button>
                                    ))}
                                </div>

                                {/* Interactive Visual Preview */}
                                <div
                                    onClick={() => setSelectedModalProject(activeHeroProject)}
                                    className="cursor-pointer rounded-xl overflow-hidden border border-white/10 hover:border-violet-400/40 transition"
                                >
                                    <ProjectVisualPreview project={activeHeroProject} />
                                </div>

                                {/* Active Project Quick Summary & Action */}
                                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                                    <div className="min-w-0">
                                        <div className="text-sm font-bold text-white truncate">
                                            {activeHeroProject.title}
                                        </div>
                                        <a
                                            href={activeHeroProject.liveUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-xs font-mono text-violet-300 hover:underline truncate block"
                                        >
                                            {activeHeroProject.domainLabel} ↗
                                        </a>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => setSelectedModalProject(activeHeroProject)}
                                        className="px-3.5 py-2 rounded-xl bg-violet-500/20 hover:bg-violet-500/30 border border-violet-400/30 text-xs font-mono text-violet-200 transition shrink-0"
                                    >
                                        Details →
                                    </button>
                                </div>
                            </SpotlightCard>
                        </div>
                    </div>
                </div>
            </section>

            {/* INFINITE SKILLS & SUBDOMAIN MARQUEE */}
            <section className="py-5 border-y border-violet-500/15 bg-obsidian-900/50 overflow-hidden">
                <div className="flex w-max animate-marquee space-x-8">
                    {[...techMarqueeItems, ...techMarqueeItems].map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-3 text-xs sm:text-sm font-mono text-slate-300 tracking-wide"
                        >
                            <span className="text-violet-400">✦</span>
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* FEATURED WEB PROJECTS SECTION */}
            <section id="featured-projects" className="py-20 sm:py-28 scroll-reveal-css">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div>
                            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-violet-400 mb-2">
                                <span>// 01. My Web Projects</span>
                            </div>
                            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
                                Websites & Apps I’ve Built
                            </h2>
                            <p className="text-slate-400 mt-2 max-w-2xl text-sm sm:text-base">
                                Here are my live web projects hosted on{' '}
                                <code className="text-violet-300">*.jkleonardo.tech</code>. Click any project to read
                                what it does or visit the live site directly.
                            </p>
                        </div>

                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-violet-500/15 hover:bg-violet-500/25 border border-violet-400/30 text-sm font-semibold text-violet-200 transition self-start md:self-auto"
                        >
                            <span>See All Projects</span>
                            <span>→</span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                        {featuredProjects.map((project) => (
                            <SpotlightCard key={project.id} className="flex flex-col justify-between p-5 sm:p-6">
                                <div>
                                    {/* Top Meta Tags */}
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

                                    {/* Interactive Visual Mockup */}
                                    <div
                                        onClick={() => setSelectedModalProject(project)}
                                        className="cursor-pointer rounded-xl overflow-hidden border border-white/10 group-hover:border-violet-400/40 transition mb-5"
                                    >
                                        <ProjectVisualPreview project={project} compact />
                                    </div>

                                    {/* Title & Description */}
                                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-violet-300 transition">
                                        {project.title}
                                    </h3>
                                    <p className="text-xs font-mono text-violet-300/90 mt-0.5">{project.subtitle}</p>
                                    <p className="text-sm text-slate-300 mt-3 leading-relaxed">{project.description}</p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-white/10 space-y-4">
                                    {/* Tech Stack Pills */}
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

                                    {/* Card Footer Links */}
                                    <div className="flex items-center justify-between gap-3 pt-1">
                                        <button
                                            type="button"
                                            onClick={() => setSelectedModalProject(project)}
                                            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-violet-300 hover:text-white transition"
                                        >
                                            <span>View Project Details</span>
                                            <span>→</span>
                                        </button>

                                        <div className="flex items-center gap-2">
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="px-3.5 py-2 rounded-xl bg-violet-500/20 hover:bg-violet-500/30 border border-violet-400/30 text-xs font-mono text-white transition"
                                            >
                                                Visit Live Site ↗
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SpotlightCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHAT I CAN BUILD FOR YOU */}
            <section id="services" className="py-20 sm:py-24 scroll-reveal-css">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <div className="text-xs font-mono uppercase tracking-widest text-violet-400 mb-2">
                            // 02. What I Can Build For You
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
                            Simple, Custom Web Solutions
                        </h2>
                        <p className="text-slate-400 mt-3 text-sm sm:text-base">
                            Whether you need an online store, a custom tool for your team, an event website, or a
                            personal portfolio—I build websites that are easy to use and easy to manage.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {SERVICES.map((service, index) => (
                            <SpotlightCard key={service.id} className="p-6 sm:p-8 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-5">
                                        <span className="px-3 py-1 rounded-xl text-xs font-mono bg-violet-500/15 text-violet-300 border border-violet-500/30">
                                            0{index + 1} // SERVICE
                                        </span>
                                        <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600/30 to-fuchsia-600/20 border border-violet-400/30 flex items-center justify-center text-violet-300 font-bold">
                                            ✦
                                        </span>
                                    </div>

                                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                                        {service.title}
                                    </h3>
                                    <p className="text-xs font-mono text-violet-300 mt-1">{service.tagline}</p>
                                    <p className="text-sm text-slate-300 mt-3 leading-relaxed">{service.description}</p>

                                    <ul className="mt-5 space-y-2">
                                        {service.deliverables.map((item) => (
                                            <li
                                                key={item}
                                                className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                                    <span className="text-xs text-emerald-300 font-mono">{service.impact}</span>
                                    <Link
                                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                                        className="text-xs font-semibold text-violet-300 hover:text-white shrink-0 transition"
                                    >
                                        Ask About This →
                                    </Link>
                                </div>
                            </SpotlightCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* RESUME / CV QUICK SNAPSHOT SECTION */}
            <section id="resume-preview" className="py-16 sm:py-20 scroll-reveal-css">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SpotlightCard tilt={false} className="p-6 sm:p-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-start gap-5">
                                <ProfileAvatar size="xl" />
                                <div>
                                    <div className="text-xs font-mono uppercase tracking-widest text-violet-400 mb-1">
                                        // 03. Personal Resume & Background
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                                        {STUDIO_PROFILE.founderName}
                                    </h2>
                                    <p className="text-sm font-mono text-violet-300 mt-1">
                                        {STUDIO_PROFILE.founderTitle} ({STUDIO_PROFILE.brandName}{' '}
                                        {STUDIO_PROFILE.brandSuffix})
                                    </p>
                                    <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                                        Looking for a dedicated web developer for your team or project? Check out my
                                        full resume, skills, and work background on the About & Resume page.
                                    </p>
                                    <div className="mt-5 flex flex-wrap gap-3">
                                        <Link
                                            href="/about"
                                            className="px-5 py-2.5 rounded-xl btn-violet-shimmer text-xs sm:text-sm font-bold text-white"
                                        >
                                            View Full Resume / CV →
                                        </Link>
                                        <a
                                            href={STUDIO_PROFILE.githubUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-200 transition"
                                        >
                                            GitHub (@joramleonardo) ↗
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-7 space-y-4">
                                {RESUME_EXPERIENCE.map((exp) => (
                                    <div
                                        key={exp.role}
                                        className="p-5 rounded-2xl bg-obsidian-950/70 border border-white/10 space-y-2"
                                    >
                                        <div className="flex flex-wrap items-center justify-between gap-2">
                                            <div className="text-base font-bold text-white">{exp.role}</div>
                                            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-violet-500/20 text-violet-300 border border-violet-500/30">
                                                {exp.period}
                                            </span>
                                        </div>
                                        <div className="text-xs font-mono text-slate-400">
                                            {exp.organization} • {exp.location}
                                        </div>
                                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                            {exp.summary}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </SpotlightCard>
                </div>
            </section>

            {/* FEEDBACK FROM PROJECTS */}
            <section id="testimonials" className="py-16 sm:py-20 scroll-reveal-css">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div>
                            <div className="text-xs font-mono uppercase tracking-widest text-violet-400 mb-2">
                                // 04. Project Feedback
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
                                Built for Real People & Teams
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {TESTIMONIALS.map((t) => (
                            <SpotlightCard key={t.id} className="p-6 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="text-amber-400 text-sm tracking-widest">★★★★★</div>
                                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                                            {t.metricHighlight}
                                        </span>
                                    </div>
                                    <p className="text-sm text-slate-200 leading-relaxed italic">"{t.quote}"</p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center text-xs font-bold text-white">
                                            {t.avatarInitials}
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-white">{t.author}</div>
                                            <div className="text-xs text-violet-300 font-mono">{t.company}</div>
                                        </div>
                                    </div>
                                </div>
                            </SpotlightCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* BOTTOM CALL TO ACTION */}
            <section className="py-16 sm:py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative rounded-3xl overflow-hidden p-8 sm:p-14 text-center border border-violet-400/40 bg-gradient-to-br from-violet-900/50 via-obsidian-900 to-fuchsia-950/50 shadow-[0_0_90px_-20px_rgba(139,92,246,0.5)]">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-violet-200 mb-5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                            <span>Open for Freelance Projects & Job Opportunities</span>
                        </div>

                        <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white max-w-2xl mx-auto leading-tight">
                            Want to have your website or project created by me?
                        </h2>

                        <p className="text-slate-300 mt-4 max-w-xl mx-auto text-sm sm:text-base">
                            Send me a message with your idea or inquiry and I’ll get back to you right away.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="px-8 py-4 rounded-2xl btn-violet-shimmer text-base font-bold text-white shadow-xl"
                            >
                                Contact Me Now →
                            </Link>
                            <a
                                href={STUDIO_PROFILE.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 text-sm font-mono font-semibold text-white transition"
                            >
                                GitHub (@joramleonardo) ↗
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Details Modal */}
            <ProjectCaseStudyModal
                project={selectedModalProject}
                onClose={() => setSelectedModalProject(null)}
            />
        </PortfolioLayout>
    );
}


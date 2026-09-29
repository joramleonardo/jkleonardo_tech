import React, { useEffect, useRef, useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { PROJECTS, STUDIO_PROFILE } from '@/data/portfolioData';

interface PortfolioLayoutProps {
    children: React.ReactNode;
}

export default function PortfolioLayout({ children }: PortfolioLayoutProps) {
    const { url } = usePage();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [copiedEmail, setCopiedEmail] = useState(false);

    const scrolledRef = useRef(false);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const spotlightRef = useRef<HTMLDivElement>(null);

    // Zero-Re-Render Passive Scroll & Cursor Listeners
    useEffect(() => {
        let rafScrollId: number | null = null;
        let rafMouseId: number | null = null;

        const updateScrollUI = () => {
            const y = window.scrollY;
            const isPastThreshold = y > 24;

            if (isPastThreshold !== scrolledRef.current) {
                scrolledRef.current = isPastThreshold;
                setScrolled(isPastThreshold);
            }

            if (progressBarRef.current) {
                const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
                const progress = Math.min(1, Math.max(0, y / maxScroll));
                progressBarRef.current.style.transform = `scaleX(${progress})`;
            }
            rafScrollId = null;
        };

        const handleScroll = () => {
            if (rafScrollId === null) {
                rafScrollId = requestAnimationFrame(updateScrollUI);
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (rafMouseId !== null) return;
            const clientX = e.clientX;
            const clientY = e.clientY;
            rafMouseId = requestAnimationFrame(() => {
                if (spotlightRef.current) {
                    spotlightRef.current.style.background = `radial-gradient(600px circle at ${clientX}px ${clientY}px, rgba(139, 92, 246, 0.10), transparent 75%)`;
                }
                rafMouseId = null;
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        updateScrollUI();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
            if (rafScrollId !== null) cancelAnimationFrame(rafScrollId);
            if (rafMouseId !== null) cancelAnimationFrame(rafMouseId);
        };
    }, []);

    const scrollToTopSmooth = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const isActive = (path: string) => {
        if (path === '/') return url === '/';
        return url.startsWith(path);
    };

    const handleCopyEmail = () => {
        navigator.clipboard?.writeText(STUDIO_PROFILE.email);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
    };

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'My Projects', href: '/projects', badge: `${PROJECTS.length}` },
        { name: 'About & Resume', href: '/about' },
        { name: 'Contact Me', href: '/contact' },
    ];

    return (
        <div className="min-h-screen bg-obsidian-950 text-slate-100 relative selection:bg-violet-500/30 selection:text-white flex flex-col">
            {/* Top GPU-Composited Violet Scroll Progress Bar */}
            <div className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-transparent pointer-events-none">
                <div
                    ref={progressBarRef}
                    style={{ transform: 'scaleX(0)', transformOrigin: '0% 50%' }}
                    className="h-full w-full bg-gradient-to-r from-violet-500 via-fuchsia-400 to-indigo-400 will-change-transform"
                />
            </div>

            {/* Lightweight Zero-Blur Fixed Background */}
            <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-aurora-mesh">
                <div className="absolute inset-0 bg-violet-grid opacity-50" />
                <div
                    ref={spotlightRef}
                    className="absolute inset-0"
                    style={{
                        background:
                            'radial-gradient(600px circle at 50vw 30vh, rgba(139, 92, 246, 0.10), transparent 75%)',
                    }}
                />
            </div>

            {/* Sticky Navigation Bar */}
            <header
                className={`sticky top-0 z-40 transition-colors duration-200 ${
                    scrolled
                        ? 'py-3 bg-obsidian-950/90 backdrop-blur-md border-b border-violet-500/20 shadow-lg'
                        : 'py-5 bg-transparent'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
                    {/* Brand Logo: JKLeonardo Tech */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700 p-[1px] shadow-[0_0_20px_rgba(139,92,246,0.4)] overflow-hidden">
                            <img
                                src={STUDIO_PROFILE.profilePhotoUrl}
                                alt={STUDIO_PROFILE.founderName}
                                className="w-full h-full object-cover object-[center_22%] rounded-[11px]"
                            />
                        </div>
                        <div>
                            <div className="flex items-center gap-1.5">
                                <span className="text-lg font-bold font-display tracking-tight text-white">
                                    {STUDIO_PROFILE.brandName}
                                </span>
                                <span className="text-lg font-bold font-display tracking-tight bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                                    {STUDIO_PROFILE.brandSuffix}
                                </span>
                            </div>
                            <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-400">
                                {STUDIO_PROFILE.shortName} • Web Portfolio
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-2xl bg-obsidian-900/90 border border-white/10">
                        {navLinks.map((item) => {
                            const active = isActive(item.href);
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-colors flex items-center gap-2 ${
                                        active
                                            ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-[0_0_16px_rgba(139,92,246,0.35)]'
                                            : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                                    }`}
                                >
                                    <span>{item.name}</span>
                                    {item.badge && (
                                        <span
                                            className={`px-1.5 py-0.2 rounded-md text-[10px] font-mono ${
                                                active
                                                    ? 'bg-white/20 text-white'
                                                    : 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                                            }`}
                                        >
                                            {item.badge}
                                        </span>
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Right Actions: GitHub + Contact */}
                    <div className="hidden md:flex items-center gap-3">
                        <a
                            href={STUDIO_PROFILE.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-violet-400/40 text-xs font-mono text-slate-200 hover:text-white transition"
                            title="GitHub — @joramleonardo"
                        >
                            <svg className="w-4 h-4 text-violet-300" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                />
                            </svg>
                            <span>@joramleonardo</span>
                        </a>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl btn-violet-shimmer text-sm font-semibold text-white shadow-lg"
                        >
                            <span>Work With Me</span>
                            <span>→</span>
                        </Link>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white"
                        aria-label="Toggle Menu"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu Drawer */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-3 mx-4 p-4 rounded-2xl glass-panel border border-violet-500/30 space-y-2">
                        {navLinks.map((item) => {
                            const active = isActive(item.href);
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium ${
                                        active
                                            ? 'bg-violet-600 text-white'
                                            : 'text-slate-300 hover:bg-white/5 hover:text-white'
                                    }`}
                                >
                                    <span>{item.name}</span>
                                    {item.badge && (
                                        <span className="px-2 py-0.5 rounded-full text-xs font-mono bg-violet-500/20 text-violet-200">
                                            {item.badge} Live
                                        </span>
                                    )}
                                </Link>
                            );
                        })}
                        <a
                            href={STUDIO_PROFILE.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-mono text-violet-300 hover:bg-white/5"
                        >
                            <span>GitHub ({STUDIO_PROFILE.githubHandle})</span>
                            <span>↗</span>
                        </a>
                        <div className="pt-2 border-t border-white/10">
                            <Link
                                href="/contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl btn-violet-shimmer text-sm font-semibold text-white"
                            >
                                <span>Send an Inquiry</span>
                                <span>→</span>
                            </Link>
                        </div>
                    </div>
                )}
            </header>

            {/* Main Page Content */}
            <main className="relative z-10 flex-1">{children}</main>

            {/* Floating Smooth Scroll-To-Top Button */}
            {scrolled && (
                <button
                    type="button"
                    onClick={scrollToTopSmooth}
                    aria-label="Scroll to top"
                    className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-2xl glass-panel border border-violet-500/40 text-violet-200 hover:text-white hover:border-violet-400 shadow-lg flex items-center justify-center transition-transform hover:-translate-y-1"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                </button>
            )}

            {/* Personal Footer */}
            <footer className="relative z-10 mt-24 border-t border-violet-500/20 bg-obsidian-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
                        {/* Column 1: Personal Brand & Bio */}
                        <div className="md:col-span-5 space-y-4">
                            <Link href="/" className="inline-flex items-center gap-3">
                                <img
                                    src={STUDIO_PROFILE.profilePhotoUrl}
                                    alt={STUDIO_PROFILE.founderName}
                                    className="w-10 h-10 rounded-xl object-cover object-[center_22%] border border-violet-400/40"
                                />
                                <div>
                                    <span className="text-xl font-bold font-display text-white">
                                        {STUDIO_PROFILE.brandName}{' '}
                                        <span className="text-violet-400">{STUDIO_PROFILE.brandSuffix}</span>
                                    </span>
                                    <span className="block text-xs text-slate-400">
                                        Personal Portfolio & Resume of {STUDIO_PROFILE.founderName}
                                    </span>
                                </div>
                            </Link>
                            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
                                {STUDIO_PROFILE.tagline}
                            </p>
                            <div className="flex flex-wrap items-center gap-3 pt-1">
                                <button
                                    type="button"
                                    onClick={handleCopyEmail}
                                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/30 text-xs font-mono text-violet-200 transition"
                                >
                                    <span>{copiedEmail ? '✓ Copied to Clipboard!' : STUDIO_PROFILE.email}</span>
                                </button>
                                <a
                                    href={STUDIO_PROFILE.githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-200 hover:text-white transition"
                                >
                                    <span>github.com/joramleonardo</span>
                                    <span>↗</span>
                                </a>
                            </div>
                        </div>

                        {/* Column 2: Sitemap */}
                        <div className="md:col-span-2 space-y-3">
                            <div className="text-xs font-mono uppercase tracking-wider text-violet-300">Pages</div>
                            <ul className="space-y-2.5 text-sm">
                                <li>
                                    <Link href="/" className="text-slate-400 hover:text-white transition">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/projects" className="text-slate-400 hover:text-white transition">
                                        My Projects ({PROJECTS.length})
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className="text-slate-400 hover:text-white transition">
                                        About & Resume
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-slate-400 hover:text-white transition">
                                        Contact Me
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Live Projects */}
                        <div className="md:col-span-3 space-y-3">
                            <div className="text-xs font-mono uppercase tracking-wider text-violet-300">
                                My Live Websites
                            </div>
                            <ul className="space-y-2.5 text-sm">
                                {PROJECTS.map((proj) => (
                                    <li key={proj.id}>
                                        <a
                                            href={proj.liveUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-slate-400 hover:text-violet-300 transition flex items-center justify-between gap-2"
                                        >
                                            <span className="truncate">{proj.title}</span>
                                            <span className="text-[11px] font-mono text-violet-400 shrink-0">↗</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 4: Connect */}
                        <div className="md:col-span-2 space-y-3">
                            <div className="text-xs font-mono uppercase tracking-wider text-violet-300">
                                Quick Links
                            </div>
                            <ul className="space-y-2.5 text-sm">
                                {STUDIO_PROFILE.socials.map((soc) => (
                                    <li key={soc.name}>
                                        <a
                                            href={soc.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-slate-400 hover:text-white transition flex items-center justify-between gap-1.5"
                                        >
                                            <span className="truncate">{soc.name}</span>
                                            <span className="text-xs text-violet-400 shrink-0">↗</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
                        <div>
                            © {new Date().getFullYear()} {STUDIO_PROFILE.founderName} ({STUDIO_PROFILE.brandName}{' '}
                            {STUDIO_PROFILE.brandSuffix}).
                        </div>
                        <div className="flex items-center gap-4">
                            <a
                                href={STUDIO_PROFILE.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-violet-300 transition"
                            >
                                github.com/joramleonardo
                            </a>
                            <span>•</span>
                            <span>Philippines</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}


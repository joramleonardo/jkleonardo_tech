import React, { useEffect, useState } from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import PortfolioLayout from '@/Layouts/PortfolioLayout';
import SpotlightCard from '@/Components/Portfolio/SpotlightCard';
import ProfileAvatar from '@/Components/Portfolio/ProfileAvatar';
import { FAQS, PROJECTS, STUDIO_PROFILE } from '@/data/portfolioData';

const SERVICE_OPTIONS = [
    'Personal / Business Website',
    'Online Shop / E-Commerce',
    'Custom Web App / Tool',
    'Event / Booking Website',
    'Job / Hiring Opportunity',
];

const BUDGET_OPTIONS = [
    '₱5,000 – ₱15,000',
    '₱15,000 – ₱30,000',
    '₱30,000 – ₱60,000',
    '₱60,000+ Custom',
    'Open / Let’s Discuss',
];

const TIMELINE_OPTIONS = [
    '1 – 2 Weeks',
    '2 – 4 Weeks',
    '1 – 2 Months',
    'Flexible',
];

export default function Contact() {
    const { props } = usePage<{ flash?: { success?: string } }>();
    const [submittedSuccess, setSubmittedSuccess] = useState(false);
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
    const [referencedProjectTitle, setReferencedProjectTitle] = useState<string | null>(null);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        timeline: '',
        message: '',
        reference_project: '',
    });

    // Pre-populate form fields if visitor clicked from a specific project or service
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            const projectSlug = params.get('project');
            const serviceParam = params.get('service') || params.get('category');

            if (projectSlug) {
                const matched = PROJECTS.find((p) => p.slug === projectSlug);
                if (matched) {
                    setReferencedProjectTitle(matched.title);
                    setData((prev) => ({
                        ...prev,
                        reference_project: matched.title,
                    }));
                }
            }

            if (serviceParam) {
                const matchedService = SERVICE_OPTIONS.find((s) =>
                    s.toLowerCase().includes(serviceParam.toLowerCase().split(' ')[0])
                );
                if (matchedService) {
                    setData((prev) => ({ ...prev, service: matchedService }));
                }
            }
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/contact', {
            preserveScroll: true,
            onSuccess: () => {
                setSubmittedSuccess(true);
            },
        });
    };

    const handleCopyEmail = () => {
        navigator.clipboard?.writeText(STUDIO_PROFILE.email);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
    };

    return (
        <PortfolioLayout>
            <Head title="Contact Me — Send an Inquiry" />

            <section className="pt-10 pb-20 sm:pt-16 sm:pb-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="max-w-3xl mb-12">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-xs font-mono text-violet-300 mb-4">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                            <span>// CONTACT ME • OPEN FOR PROJECTS & INQUIRIES</span>
                        </div>
                        <h1 className="text-4xl sm:text-6xl font-extrabold font-display text-white tracking-tight leading-tight">
                            Let’s talk about your{' '}
                            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-indigo-400 bg-clip-text text-transparent">
                                next website or project.
                            </span>
                        </h1>
                        <p className="text-slate-300 mt-4 text-base sm:text-lg">
                            Send me a quick inquiry below or email me directly at{' '}
                            <a
                                href={`mailto:${STUDIO_PROFILE.email}`}
                                className="text-violet-300 hover:underline font-mono"
                            >
                                {STUDIO_PROFILE.email}
                            </a>
                            .
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                        {/* Left Column: Contact Form */}
                        <div className="lg:col-span-7">
                            <SpotlightCard tilt={false} className="p-6 sm:p-10">
                                {submittedSuccess || props?.flash?.success ? (
                                    <div className="py-8 text-center space-y-6">
                                        <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 text-3xl shadow-[0_0_30px_rgba(52,211,153,0.3)]">
                                            ✓
                                        </div>
                                        <div className="space-y-2">
                                            <div className="text-xs font-mono uppercase tracking-widest text-emerald-300">
                                                INQUIRY SENT
                                            </div>
                                            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                                                Thank you{data.name ? `, ${data.name}` : ''}!
                                            </h2>
                                            <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto">
                                                I’ve received your inquiry and will reply to your email as soon as
                                                possible.
                                            </p>
                                        </div>

                                        {(data.service || data.budget || data.timeline || data.reference_project) && (
                                            <div className="p-4 rounded-2xl bg-obsidian-950/80 border border-white/10 max-w-md mx-auto text-left text-xs font-mono space-y-1.5 text-slate-300">
                                                {data.service && (
                                                    <div>
                                                        <span className="text-slate-500">Project Type:</span>{' '}
                                                        {data.service}
                                                    </div>
                                                )}
                                                {data.budget && (
                                                    <div>
                                                        <span className="text-slate-500">Estimated Budget:</span>{' '}
                                                        {data.budget}
                                                    </div>
                                                )}
                                                {data.timeline && (
                                                    <div>
                                                        <span className="text-slate-500">Timeline:</span>{' '}
                                                        {data.timeline}
                                                    </div>
                                                )}
                                                {data.reference_project && (
                                                    <div>
                                                        <span className="text-slate-500">Referenced Project:</span>{' '}
                                                        {data.reference_project}
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    reset();
                                                    setSubmittedSuccess(false);
                                                }}
                                                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-white transition"
                                            >
                                                Send Another Message
                                            </button>
                                            <Link
                                                href="/projects"
                                                className="px-5 py-2.5 rounded-xl btn-violet-shimmer text-xs font-semibold text-white"
                                            >
                                                View My Projects →
                                            </Link>
                                        </div>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {referencedProjectTitle && (
                                            <div className="p-3.5 rounded-xl bg-violet-500/15 border border-violet-400/30 flex items-center justify-between gap-3 text-xs">
                                                <div className="flex items-center gap-2 text-violet-200">
                                                    <span className="text-violet-400">✦</span>
                                                    <span>
                                                        Inquiring about a project like:{' '}
                                                        <strong className="text-white">{referencedProjectTitle}</strong>
                                                    </span>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setReferencedProjectTitle(null);
                                                        setData('reference_project', '');
                                                    }}
                                                    className="text-slate-400 hover:text-white"
                                                >
                                                    ✕
                                                </button>
                                            </div>
                                        )}

                                        {/* Required Contact Details First for Easy Inquiry */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label
                                                    htmlFor="contact-name"
                                                    className="block text-xs font-medium text-slate-300 mb-1.5"
                                                >
                                                    Your Name *
                                                </label>
                                                <input
                                                    id="contact-name"
                                                    type="text"
                                                    required
                                                    value={data.name}
                                                    onChange={(e) => setData('name', e.target.value)}
                                                    placeholder="Juan Dela Cruz"
                                                    className="w-full px-4 py-3 rounded-xl bg-obsidian-950/90 border border-white/15 focus:border-violet-400 focus:ring-1 focus:ring-violet-400 text-sm text-white placeholder-slate-500"
                                                />
                                                {errors.name && (
                                                    <p className="text-xs text-rose-400 mt-1">{errors.name}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="contact-email"
                                                    className="block text-xs font-medium text-slate-300 mb-1.5"
                                                >
                                                    Your Email *
                                                </label>
                                                <input
                                                    id="contact-email"
                                                    type="email"
                                                    required
                                                    value={data.email}
                                                    onChange={(e) => setData('email', e.target.value)}
                                                    placeholder="you@example.com"
                                                    className="w-full px-4 py-3 rounded-xl bg-obsidian-950/90 border border-white/15 focus:border-violet-400 focus:ring-1 focus:ring-violet-400 text-sm text-white placeholder-slate-500"
                                                />
                                                {errors.email && (
                                                    <p className="text-xs text-rose-400 mt-1">{errors.email}</p>
                                                )}
                                            </div>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="contact-company"
                                                className="block text-xs font-medium text-slate-300 mb-1.5"
                                            >
                                                Business Name or Website Link <span className="text-slate-500">(Optional)</span>
                                            </label>
                                            <input
                                                id="contact-company"
                                                type="text"
                                                value={data.company}
                                                onChange={(e) => setData('company', e.target.value)}
                                                placeholder="Optional"
                                                className="w-full px-4 py-3 rounded-xl bg-obsidian-950/90 border border-white/15 focus:border-violet-400 focus:ring-1 focus:ring-violet-400 text-sm text-white placeholder-slate-500"
                                            />
                                        </div>

                                        {/* Optional Service Type */}
                                        <div>
                                            <label className="block text-xs font-mono uppercase tracking-wider text-violet-300 mb-2.5">
                                                What Can I Build For You?{' '}
                                                <span className="text-slate-500 normal-case">(Optional)</span>
                                            </label>
                                            <div className="flex flex-wrap gap-2">
                                                {SERVICE_OPTIONS.map((option) => {
                                                    const active = data.service === option;
                                                    return (
                                                        <button
                                                            key={option}
                                                            type="button"
                                                            onClick={() =>
                                                                setData('service', active ? '' : option)
                                                            }
                                                            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium border transition ${
                                                                active
                                                                    ? 'bg-violet-600 text-white border-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.4)]'
                                                                    : 'bg-obsidian-950/70 text-slate-300 border-white/10 hover:border-violet-500/40 hover:text-white'
                                                            }`}
                                                        >
                                                            {option}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        {/* Optional Budget (in Philippine Peso ₱) & Timeline */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-xs font-mono uppercase tracking-wider text-violet-300 mb-2.5">
                                                    Estimated Budget (₱){' '}
                                                    <span className="text-slate-500 normal-case">(Optional)</span>
                                                </label>
                                                <div className="flex flex-wrap gap-2">
                                                    {BUDGET_OPTIONS.map((option) => {
                                                        const active = data.budget === option;
                                                        return (
                                                            <button
                                                                key={option}
                                                                type="button"
                                                                onClick={() =>
                                                                    setData('budget', active ? '' : option)
                                                                }
                                                                className={`px-3 py-1.5 rounded-xl text-xs font-mono border transition ${
                                                                    active
                                                                        ? 'bg-violet-600 text-white border-violet-400'
                                                                        : 'bg-obsidian-950/70 text-slate-300 border-white/10 hover:border-violet-500/40'
                                                                }`}
                                                            >
                                                                {option}
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-xs font-mono uppercase tracking-wider text-violet-300 mb-2.5">
                                                    Target Launch Timeline{' '}
                                                    <span className="text-slate-500 normal-case">(Optional)</span>
                                                </label>
                                                <div className="flex flex-wrap gap-2">
                                                    {TIMELINE_OPTIONS.map((option) => {
                                                        const active = data.timeline === option;
                                                        return (
                                                            <button
                                                                key={option}
                                                                type="button"
                                                                onClick={() =>
                                                                    setData('timeline', active ? '' : option)
                                                                }
                                                                className={`px-3 py-1.5 rounded-xl text-xs font-mono border transition ${
                                                                    active
                                                                        ? 'bg-violet-600 text-white border-violet-400'
                                                                        : 'bg-obsidian-950/70 text-slate-300 border-white/10 hover:border-violet-500/40'
                                                                }`}
                                                            >
                                                                {option}
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Optional Project Goals / Message */}
                                        <div>
                                            <label
                                                htmlFor="contact-message"
                                                className="block text-xs font-medium text-slate-300 mb-1.5"
                                            >
                                                Project Goals, Features & Message{' '}
                                                <span className="text-slate-500">(Optional)</span>
                                            </label>
                                            <textarea
                                                id="contact-message"
                                                rows={4}
                                                value={data.message}
                                                onChange={(e) => setData('message', e.target.value)}
                                                placeholder="Tell me a little about your project idea, or simply leave a short note..."
                                                className="w-full px-4 py-3 rounded-xl bg-obsidian-950/90 border border-white/15 focus:border-violet-400 focus:ring-1 focus:ring-violet-400 text-sm text-white placeholder-slate-500"
                                            />
                                            {errors.message && (
                                                <p className="text-xs text-rose-400 mt-1">{errors.message}</p>
                                            )}
                                        </div>

                                        <div className="pt-2 flex justify-end">
                                            <button
                                                type="submit"
                                                disabled={processing}
                                                className="w-full sm:w-auto px-8 py-4 rounded-2xl btn-violet-shimmer text-sm sm:text-base font-bold text-white shadow-xl disabled:opacity-50"
                                            >
                                                {processing ? 'Sending Inquiry...' : 'Send Inquiry →'}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </SpotlightCard>
                        </div>

                        {/* Right Column: Personal Contact Card & FAQ */}
                        <div className="lg:col-span-5 space-y-6">
                            {/* Direct Contact Card with Profile Picture */}
                            <SpotlightCard tilt={false} className="p-6 sm:p-7 space-y-5">
                                <div className="flex items-center gap-4 pb-4 border-b border-white/10">
                                    <ProfileAvatar size="md" />
                                    <div>
                                        <div className="text-base font-bold font-display text-white">
                                            {STUDIO_PROFILE.founderName}
                                        </div>
                                        <div className="text-xs font-mono text-violet-300">
                                            {STUDIO_PROFILE.founderTitle}
                                        </div>
                                        <div className="text-xs text-slate-400 mt-0.5">
                                            {STUDIO_PROFILE.location}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="p-4 rounded-xl bg-obsidian-950/70 border border-white/10 flex items-center justify-between gap-3">
                                        <div className="min-w-0">
                                            <div className="text-[11px] font-mono text-slate-400">DIRECT EMAIL</div>
                                            <div className="text-sm font-bold text-white font-mono truncate">
                                                {STUDIO_PROFILE.email}
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={handleCopyEmail}
                                            className="px-3 py-1.5 rounded-lg bg-violet-500/20 hover:bg-violet-500/30 border border-violet-400/30 text-xs font-mono text-violet-200 transition shrink-0"
                                        >
                                            {copiedEmail ? '✓ Copied' : 'Copy'}
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="p-4 rounded-xl bg-obsidian-950/70 border border-white/10">
                                            <div className="text-[11px] font-mono text-slate-400">USUAL REPLY</div>
                                            <div className="text-sm font-bold text-emerald-300 mt-0.5">
                                                {STUDIO_PROFILE.responseTime}
                                            </div>
                                        </div>
                                        <div className="p-4 rounded-xl bg-obsidian-950/70 border border-white/10">
                                            <div className="text-[11px] font-mono text-slate-400">GITHUB</div>
                                            <a
                                                href={STUDIO_PROFILE.githubUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-sm font-bold text-violet-300 hover:text-white mt-0.5 block truncate"
                                            >
                                                {STUDIO_PROFILE.githubHandle} ↗
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SpotlightCard>

                            {/* Client FAQ Accordion */}
                            <SpotlightCard tilt={false} className="p-6 sm:p-7">
                                <div className="text-xs font-mono uppercase tracking-wider text-violet-300 mb-4">
                                    Common Questions
                                </div>
                                <div className="space-y-2.5">
                                    {FAQS.map((faq, idx) => {
                                        const isOpen = openFaqIndex === idx;
                                        return (
                                            <div
                                                key={faq.question}
                                                className="rounded-xl bg-obsidian-950/70 border border-white/10 overflow-hidden"
                                            >
                                                <button
                                                    type="button"
                                                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                                                    className="w-full px-4 py-3.5 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-white hover:text-violet-300 transition"
                                                >
                                                    <span>{faq.question}</span>
                                                    <span className="text-violet-400 font-mono text-base shrink-0">
                                                        {isOpen ? '−' : '+'}
                                                    </span>
                                                </button>
                                                {isOpen && (
                                                    <div className="px-4 pb-4 text-xs text-slate-300 leading-relaxed border-t border-white/5 pt-2.5">
                                                        {faq.answer}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </SpotlightCard>
                        </div>
                    </div>
                </div>
            </section>
        </PortfolioLayout>
    );
}


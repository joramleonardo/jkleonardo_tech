import React from 'react';
import { ProjectItem } from '@/data/portfolioData';

interface ProjectVisualPreviewProps {
    project: ProjectItem;
    compact?: boolean;
}

export default function ProjectVisualPreview({ project, compact = false }: ProjectVisualPreviewProps) {
    return (
        <div className="relative w-full h-full min-h-[225px] bg-obsidian-950 overflow-hidden select-none flex flex-col justify-between p-3.5 sm:p-4">
            {/* Ambient Gradient Backdrop (Zero-Filter Radial Glow for Fast Scroll) */}
            <div
                className="pointer-events-none absolute inset-0 opacity-60 group-hover:opacity-90 transition-opacity duration-300"
                style={{
                    background:
                        'radial-gradient(240px circle at 90% 10%, rgba(139, 92, 246, 0.22), rgba(217, 70, 239, 0.08) 50%, transparent 80%)',
                }}
            />
            <div className="pointer-events-none absolute inset-0 bg-violet-grid opacity-40" />

            {/* Browser Chrome Header with Real Live Subdomain */}
            <div className="relative z-10 flex items-center justify-between px-3 py-2 rounded-t-xl bg-white/[0.04] border border-white/10">
                <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-obsidian-950/80 border border-white/10 text-[10px] font-mono text-slate-300 truncate max-w-[230px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span className="truncate">{project.domainLabel}</span>
                </div>
                <div className="text-[10px] font-mono text-violet-300 bg-violet-500/15 border border-violet-400/20 px-1.5 py-0.5 rounded">
                    LIVE
                </div>
            </div>

            {/* Dynamic Mockup Canvas Based on Real Project Type */}
            <div className="relative z-10 flex-1 bg-obsidian-900/90 border-x border-b border-white/10 rounded-b-xl p-3.5 flex flex-col justify-between overflow-hidden">
                {project.previewType === 'vela-aroma' && (
                    <div className="grid grid-cols-12 gap-3 items-center h-full">
                        <div className="col-span-5 h-28 rounded-xl bg-gradient-to-br from-purple-900/60 via-violet-800/40 to-fuchsia-900/50 border border-violet-400/25 flex flex-col items-center justify-center p-2.5 text-center relative overflow-hidden">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-violet-400 to-rose-300 blur-md opacity-50 absolute" />
                            <span className="relative text-xs font-display tracking-wider uppercase text-white font-bold">
                                VELA AROMA
                            </span>
                            <span className="relative text-[9px] text-violet-200 mt-0.5">
                                Dessert-Inspired Candles
                            </span>
                            <span className="relative mt-2 px-2 py-0.5 rounded-full bg-white/10 text-[9px] font-mono text-amber-200">
                                250ml • ₱380
                            </span>
                        </div>
                        <div className="col-span-7 space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-semibold text-white truncate">
                                    Amethyst Night Cream
                                </span>
                                <span className="text-[10px] font-mono text-emerald-300 bg-emerald-500/15 px-1.5 py-0.5 rounded">
                                    In Stock
                                </span>
                            </div>
                            <div className="text-[10px] text-slate-300 line-clamp-2">
                                Calming Lavender & Sweet Taro • Custom Orders & Admin CMS
                            </div>
                            <div className="grid grid-cols-2 gap-1.5 pt-0.5">
                                <div className="py-1.5 px-2 rounded-md bg-gradient-to-r from-violet-600 to-fuchsia-600 text-[10px] font-semibold text-white text-center">
                                    Shop Catalog
                                </div>
                                <div className="py-1.5 px-2 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-violet-200 text-center">
                                    Custom Orders
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {project.previewType === 'work-scheduler' && (
                    <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-[10px] uppercase tracking-wider text-violet-300 font-mono">
                                    SHIFTSYNC • ACTIVE ROSTER PATTERN
                                </div>
                                <div className="text-sm font-bold text-white font-display">
                                    Weekly Shift & Overtime Matrix
                                </div>
                            </div>
                            <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-mono">
                                /share/token
                            </span>
                        </div>
                        <div className="grid grid-cols-5 gap-1.5 pt-1">
                            {[
                                { day: 'MON', shift: '08:00-17:00', tag: 'Regular' },
                                { day: 'TUE', shift: '08:00-17:00', tag: 'Regular' },
                                { day: 'WED', shift: '10:00-19:00', tag: 'Override' },
                                { day: 'THU', shift: '08:00-19:00', tag: '+2h OT' },
                                { day: 'FRI', shift: '08:00-17:00', tag: 'Regular' },
                            ].map((slot, i) => (
                                <div
                                    key={slot.day}
                                    className={`p-1.5 rounded-lg border text-center ${
                                        i === 3
                                            ? 'bg-violet-600/30 border-violet-400 text-white'
                                            : i === 2
                                              ? 'bg-fuchsia-600/20 border-fuchsia-400/40 text-fuchsia-100'
                                              : 'bg-white/[0.03] border-white/10 text-slate-300'
                                    }`}
                                >
                                    <div className="text-[9px] font-mono text-violet-300">{slot.day}</div>
                                    <div className="text-[9px] font-mono font-semibold mt-0.5 truncate">
                                        {slot.shift}
                                    </div>
                                    <div className="text-[8px] font-mono opacity-80 mt-0.5">{slot.tag}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {project.previewType === 'christmas-party' && (
                    <div className="space-y-2.5">
                        <div className="flex items-center justify-between p-2 rounded-lg bg-violet-500/10 border border-violet-400/25">
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-fuchsia-300">🎁</span>
                                <span className="text-[11px] font-semibold text-white">
                                    Secret Santa & Party Hub
                                </span>
                            </div>
                            <span className="text-[10px] font-mono text-emerald-300 bg-emerald-500/15 px-2 py-0.5 rounded">
                                Codename Verified
                            </span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center">
                            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10">
                                <div className="text-[9px] font-mono text-violet-300">WISHLIST</div>
                                <div className="text-xs font-bold text-white mt-0.5">Code Lookup</div>
                            </div>
                            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10">
                                <div className="text-[9px] font-mono text-fuchsia-300">FOOD SPLIT</div>
                                <div className="text-xs font-bold text-white mt-0.5">GCash Sync</div>
                            </div>
                            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10">
                                <div className="text-[9px] font-mono text-amber-300">LIVE POLLS</div>
                                <div className="text-xs font-bold text-white mt-0.5">Party Awards</div>
                            </div>
                        </div>
                    </div>
                )}

                {project.previewType === 'ticketing-portal' && (
                    <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-[10px] font-mono text-cyan-300">
                                    SERVICE DESK • SLA QUEUE
                                </div>
                                <div className="text-sm font-bold text-white">
                                    Real-Time Ticket Triage & Resolution
                                </div>
                            </div>
                            <span className="px-2 py-0.5 rounded bg-violet-500/20 text-violet-200 text-[10px] font-mono border border-violet-400/30">
                                99.9% SLA
                            </span>
                        </div>
                        <div className="space-y-1.5">
                            {[
                                { id: '#TKT-1042', title: 'Production SSL & DNS Provisioning', status: 'Resolved', color: 'text-emerald-300 bg-emerald-500/15' },
                                { id: '#TKT-1045', title: 'Role-Based Access Permission Sync', status: 'In Progress', color: 'text-violet-300 bg-violet-500/20' },
                            ].map((tkt) => (
                                <div
                                    key={tkt.id}
                                    className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-[10px]"
                                >
                                    <div className="flex items-center gap-2 truncate">
                                        <span className="font-mono text-violet-300">{tkt.id}</span>
                                        <span className="text-slate-200 truncate">{tkt.title}</span>
                                    </div>
                                    <span className={`px-1.5 py-0.5 rounded font-mono text-[9px] shrink-0 ${tkt.color}`}>
                                        {tkt.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {!compact && (
                    <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
                        <span className="text-slate-400 font-mono truncate">{project.domainLabel}</span>
                        <span className="text-violet-300 font-semibold font-mono">
                            {project.impactMetric} {project.impactLabel}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}

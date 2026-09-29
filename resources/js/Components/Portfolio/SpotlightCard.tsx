import React, { useEffect, useRef } from 'react';

interface SpotlightCardProps {
    children: React.ReactNode;
    className?: string;
    tilt?: boolean;
    spotlightColor?: string;
    onClick?: () => void;
}

export default function SpotlightCard({
    children,
    className = '',
    tilt = true,
    spotlightColor = 'rgba(139, 92, 246, 0.20)',
    onClick,
}: SpotlightCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const spotlightRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        return () => {
            if (rafRef.current !== null) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current || rafRef.current !== null) return;
        const clientX = e.clientX;
        const clientY = e.clientY;

        rafRef.current = requestAnimationFrame(() => {
            if (!cardRef.current) {
                rafRef.current = null;
                return;
            }
            const rect = cardRef.current.getBoundingClientRect();
            const x = clientX - rect.left;
            const y = clientY - rect.top;

            if (spotlightRef.current) {
                spotlightRef.current.style.opacity = '1';
                spotlightRef.current.style.background = `radial-gradient(420px circle at ${x}px ${y}px, ${spotlightColor}, transparent 70%)`;
            }

            if (tilt) {
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -3.5;
                const rotateY = ((x - centerX) / centerX) * 3.5;
                cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(0)`;
            }

            rafRef.current = null;
        });
    };

    const handleMouseLeave = () => {
        if (rafRef.current !== null) {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
        }
        if (spotlightRef.current) {
            spotlightRef.current.style.opacity = '0';
        }
        if (cardRef.current && tilt) {
            cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
        }
    };

    return (
        <div
            ref={cardRef}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative overflow-hidden rounded-2xl glass-panel glass-panel-hover group ${className}`}
        >
            {/* Dynamic Radial Cursor Spotlight Inside Card (Updated via DOM Ref, Zero Re-renders) */}
            <div
                ref={spotlightRef}
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 z-0"
            />

            {/* Top subtle violet specular highlight */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />

            <div className="relative z-10 h-full">{children}</div>
        </div>
    );
}

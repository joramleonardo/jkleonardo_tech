import React, { useState } from 'react';
import { STUDIO_PROFILE } from '@/data/portfolioData';

interface ProfileAvatarProps {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
    showStatusDot?: boolean;
}

export default function ProfileAvatar({
    size = 'md',
    className = '',
    showStatusDot = true,
}: ProfileAvatarProps) {
    const [imgSrc, setImgSrc] = useState<string>(STUDIO_PROFILE.profilePhotoUrl);
    const [imgFailed, setImgFailed] = useState<boolean>(false);

    const sizeClasses = {
        sm: 'w-11 h-11 rounded-xl text-sm',
        md: 'w-16 h-16 rounded-2xl text-lg',
        lg: 'w-24 h-24 sm:w-28 sm:h-28 rounded-3xl text-2xl',
        xl: 'w-28 h-28 sm:w-36 sm:h-36 rounded-3xl text-3xl',
    }[size];

    const handleError = () => {
        if (imgSrc !== STUDIO_PROFILE.fallbackPhotoUrl) {
            setImgSrc(STUDIO_PROFILE.fallbackPhotoUrl);
        } else {
            setImgFailed(true);
        }
    };

    return (
        <div className={`relative inline-block shrink-0 ${className}`}>
            {/* Soft Violet Glow Ring */}
            <div
                className={`${sizeClasses} p-[2px] bg-gradient-to-br from-violet-400 via-fuchsia-500 to-indigo-600 shadow-[0_0_30px_rgba(139,92,246,0.45)] overflow-hidden`}
            >
                <div className="w-full h-full rounded-[inherit] bg-obsidian-950 overflow-hidden flex items-center justify-center">
                    {!imgFailed ? (
                        <img
                            src={imgSrc}
                            alt={STUDIO_PROFILE.founderName}
                            onError={handleError}
                            className="w-full h-full object-cover object-[center_22%]"
                        />
                    ) : (
                        <span className="font-display font-extrabold text-white bg-gradient-to-br from-violet-500 to-fuchsia-600 w-full h-full flex items-center justify-center">
                            JK
                        </span>
                    )}
                </div>
            </div>

            {showStatusDot && (
                <span
                    title="Available for projects & opportunities"
                    className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-obsidian-950 shadow-[0_0_10px_rgba(52,211,153,0.8)]"
                />
            )}
        </div>
    );
}


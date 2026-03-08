"use client"
import React, { useEffect, useState, memo } from 'react';
import {
    BrainCircuit,
    Container,
    GitBranch,
    Database,
    Network,
    TerminalSquare
} from "lucide-react";

// --- Type Definitions ---
type IconType = 'tensorflow' | 'docker' | 'git' | 'database' | 'data' | 'cpp';

type GlowColor = 'cyan' | 'purple';

interface SkillIconProps {
    type: IconType;
}

interface SkillConfig {
    id: string;
    orbitRadius: number;
    size: number;
    speed: number;
    iconType: IconType;
    phaseShift: number;
    glowColor: GlowColor;
    label: string;
}

interface OrbitingSkillProps {
    config: SkillConfig;
    angle: number;
}

interface GlowingOrbitPathProps {
    radius: number;
    glowColor?: GlowColor;
    animationDelay?: number;
}

// --- Improved SVG Icon Components ---
const iconComponents: Record<IconType, { component: () => React.JSX.Element; color: string }> = {
    tensorflow: {
        component: () => <BrainCircuit className="w-full h-full text-orange-500" strokeWidth={1.5} />,
        color: '#f97316' // orange-500
    },
    docker: {
        component: () => <Container className="w-full h-full text-blue-500" strokeWidth={1.5} />,
        color: '#3b82f6' // blue-500
    },
    git: {
        component: () => <GitBranch className="w-full h-full text-red-500" strokeWidth={1.5} />,
        color: '#ef4444' // red-500
    },
    database: {
        component: () => <Database className="w-full h-full text-green-500" strokeWidth={1.5} />,
        color: '#22c55e' // green-500
    },
    data: {
        component: () => <Network className="w-full h-full text-yellow-500" strokeWidth={1.5} />,
        color: '#eab308' // yellow-500
    },
    cpp: {
        component: () => <TerminalSquare className="w-full h-full text-purple-500" strokeWidth={1.5} />,
        color: '#a855f7' // purple-500
    }
};

// --- Memoized Icon Component ---
const SkillIcon = memo(({ type }: SkillIconProps) => {
    const IconComponent = iconComponents[type]?.component;
    return IconComponent ? <IconComponent /> : null;
});
SkillIcon.displayName = 'SkillIcon';

// --- Configuration for the Orbiting Skills ---
const skillsConfig: SkillConfig[] = [
    // Inner Orbit
    {
        id: 'tensorflow',
        orbitRadius: 100,
        size: 45,
        speed: 1,
        iconType: 'tensorflow',
        phaseShift: 0,
        glowColor: 'cyan',
        label: 'TensorFlow'
    },
    {
        id: 'docker',
        orbitRadius: 100,
        size: 45,
        speed: 1,
        iconType: 'docker',
        phaseShift: (2 * Math.PI) / 3,
        glowColor: 'cyan',
        label: 'Docker'
    },
    {
        id: 'git',
        orbitRadius: 100,
        size: 45,
        speed: 1,
        iconType: 'git',
        phaseShift: (4 * Math.PI) / 3,
        glowColor: 'cyan',
        label: 'Git'
    },
    // Outer Orbit
    {
        id: 'database',
        orbitRadius: 180,
        size: 50,
        speed: -0.6,
        iconType: 'database',
        phaseShift: 0,
        glowColor: 'purple',
        label: 'MongoDB / SQL'
    },
    {
        id: 'data',
        orbitRadius: 180,
        size: 50,
        speed: -0.6,
        iconType: 'data',
        phaseShift: (2 * Math.PI) / 3,
        glowColor: 'purple',
        label: 'Pandas / Numpy / Scikit-Learn'
    },
    {
        id: 'cpp',
        orbitRadius: 180,
        size: 45,
        speed: -0.6,
        iconType: 'cpp',
        phaseShift: (4 * Math.PI) / 3,
        glowColor: 'purple',
        label: 'C++'
    },
];

// --- Memoized Orbiting Skill Component ---
const OrbitingSkill = memo(({ config, angle }: OrbitingSkillProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const { orbitRadius, size, iconType, label } = config;

    const x = Math.cos(angle) * orbitRadius;
    const y = Math.sin(angle) * orbitRadius;

    return (
        <div
            className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
            style={{
                width: `${size}px`,
                height: `${size}px`,
                transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
                zIndex: isHovered ? 20 : 10,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`
          relative w-full h-full p-2.5 bg-[#030303]/90 backdrop-blur-md
          rounded-full flex items-center justify-center
          transition-all duration-300 cursor-pointer border border-white/5
          ${isHovered ? 'scale-125 shadow-2xl z-50' : 'shadow-lg hover:shadow-xl'}
        `}
                style={{
                    boxShadow: isHovered
                        ? `0 0 30px ${iconComponents[iconType]?.color}40, 0 0 60px ${iconComponents[iconType]?.color}20`
                        : undefined
                }}
            >
                <SkillIcon type={iconType} />
                {isHovered && (
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/95 backdrop-blur-md rounded-md text-xs font-medium text-white/90 whitespace-nowrap pointer-events-none border border-white/10 shadow-xl">
                        {label}
                    </div>
                )}
            </div>
        </div>
    );
});
OrbitingSkill.displayName = 'OrbitingSkill';

// --- Optimized Orbit Path Component ---
const GlowingOrbitPath = memo(({ radius, glowColor = 'cyan', animationDelay = 0 }: GlowingOrbitPathProps) => {
    const glowColors = {
        cyan: {
            primary: 'rgba(99, 102, 241, 0.2)', // indigo-500 matched
            secondary: 'rgba(99, 102, 241, 0.1)',
            border: 'rgba(99, 102, 241, 0.2)'
        },
        purple: {
            primary: 'rgba(244, 63, 94, 0.2)', // rose-500 matched
            secondary: 'rgba(244, 63, 94, 0.1)',
            border: 'rgba(244, 63, 94, 0.2)'
        }
    };

    const colors = glowColors[glowColor] || glowColors.cyan;

    return (
        <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
            style={{
                width: `${radius * 2}px`,
                height: `${radius * 2}px`,
                animationDelay: `${animationDelay}s`,
            }}
        >
            {/* Glowing background */}
            <div
                className="absolute inset-0 rounded-full animate-pulse"
                style={{
                    background: `radial-gradient(circle, transparent 30%, ${colors.secondary} 70%, ${colors.primary} 100%)`,
                    boxShadow: `0 0 60px ${colors.primary}, inset 0 0 60px ${colors.secondary}`,
                    animation: 'pulse 4s ease-in-out infinite',
                    animationDelay: `${animationDelay}s`,
                }}
            />

            {/* Static ring for depth */}
            <div
                className="absolute inset-0 rounded-full"
                style={{
                    border: `1px solid ${colors.border}`,
                    boxShadow: `inset 0 0 20px ${colors.secondary}`,
                }}
            />
        </div>
    );
});
GlowingOrbitPath.displayName = 'GlowingOrbitPath';

// --- Main App Component ---
export function OrbitingSkills() {
    const [time, setTime] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        let animationFrameId: number;
        let lastTime = performance.now();

        const animate = (currentTime: number) => {
            const deltaTime = (currentTime - lastTime) / 1000;
            lastTime = currentTime;

            setTime(prevTime => prevTime + deltaTime);
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);

    const orbitConfigs: Array<{ radius: number; glowColor: GlowColor; delay: number }> = [
        { radius: 100, glowColor: 'cyan', delay: 0 },
        { radius: 180, glowColor: 'purple', delay: 1.5 }
    ];

    return (
        <div className="w-full flex items-center justify-center p-8">
            <div
                className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] flex items-center justify-center"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >

                {/* Central "Code" Icon with enhanced glow */}
                <div className="w-20 h-20 bg-gradient-to-br from-[#030303] to-[#121212] border border-white/10 rounded-full flex items-center justify-center z-10 relative shadow-2xl">
                    <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-xl animate-pulse"></div>
                    <div className="absolute inset-0 rounded-full bg-rose-500/20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="relative z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#818cf8" /> {/* indigo-400 */}
                                    <stop offset="100%" stopColor="#fb7185" /> {/* rose-400 */}
                                </linearGradient>
                            </defs>
                            <polyline points="16 18 22 12 16 6"></polyline>
                            <polyline points="8 6 2 12 8 18"></polyline>
                        </svg>
                    </div>
                </div>

                {/* Render glowing orbit paths */}
                {orbitConfigs.map((config) => (
                    <GlowingOrbitPath
                        key={`path-${config.radius}`}
                        radius={config.radius}
                        glowColor={config.glowColor}
                        animationDelay={config.delay}
                    />
                ))}

                {/* Render orbiting skill icons */}
                {skillsConfig.map((config) => {
                    const angle = time * config.speed + (config.phaseShift || 0);
                    return (
                        <OrbitingSkill
                            key={config.id}
                            config={config}
                            angle={angle}
                        />
                    );
                })}
            </div>
        </div>
    );
}

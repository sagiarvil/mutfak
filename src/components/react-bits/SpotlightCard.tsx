import React, { useRef, useState } from 'react';

export interface SpotlightCardProps {
  children?: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  badge?: string;
  title: string;
  description: string;
  icon?: string;
  href?: string;
}

/**
 * MOTOR: React Bits (reactbits.dev)
 * SpotlightCard — Akıcı imleç takip eden radial-glow aydınlatmalı kurumsal kart
 */
export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  title,
  description,
  badge,
  icon = "✨",
  href = "/maliyet-hesapla/",
  spotlightColor = "rgba(203, 0, 15, 0.15)",
  className = "",
  children
}) => {
  const divRef = useRef<HTMLAnchorElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <a
      ref={divRef}
      href={href}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-red-600/30 group block ${className}`}
      style={{
        boxShadow: opacity > 0 ? "0 20px 40px -15px rgba(23, 33, 39, 0.12)" : ""
      }}
    >
      {/* React Bits: Spotlight Glow Overlay */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(450px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)`,
        }}
      />

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-3xl p-3 bg-slate-50 rounded-xl border border-slate-100 group-hover:scale-110 transition-transform duration-300">
              {icon}
            </span>
            {badge && (
              <span className="td-badge-pop text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-red-50 text-red-600 border border-red-100">
                {badge}
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
            {title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            {description}
          </p>
        </div>

        {children}

        <div className="flex items-center text-sm font-bold text-slate-900 group-hover:text-red-600 transition-colors pt-4 border-t border-slate-100">
          <span>Detayları İncele</span>
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default SpotlightCard;

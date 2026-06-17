import React from "react";
import { Mail } from "lucide-react";
import { SOCIALS } from "../../../constants/data";

/* ── Custom SVG icons ─────────────────────────────────────── */
const IconLinkedIn = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
    </svg>
);

const IconInstagram = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
);

const IconTwitterX = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
);

const IconThreads = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.065c0-3.478.848-6.32 2.521-8.437C5.845 1.245 8.594.068 12.18.044h.013c2.895.019 5.386.802 7.405 2.328 1.897 1.43 3.188 3.414 3.837 5.898l-2.208.525c-.522-2.01-1.58-3.617-3.147-4.779-1.618-1.205-3.672-1.829-6.093-1.854-3.004.02-5.267.925-6.725 2.69C3.817 6.688 3.138 9.105 3.138 12.066c0 3.001.68 5.437 2.021 7.238 1.459 1.793 3.726 2.703 6.736 2.724 2.594-.017 4.63-.74 6.053-2.15 1.462-1.45 2.234-3.555 2.234-6.086v-.392h-8.09v-2.138h10.274v2.53c0 3.248-1.004 5.834-2.986 7.694-1.904 1.786-4.468 2.7-7.194 2.714z"/>
    </svg>
);

const ICON_MAP = {
    email:     Mail,
    linkedin:  IconLinkedIn,
    instagram: IconInstagram,
    twitter:   IconTwitterX,
    threads:   IconThreads,
};

/**
 * Renders clickable social icon links.
 * @param {string} size  - "sm" | "md" | "lg"
 * @param {string} variant - "muted" | "gold"
 */
export const SocialLinks = ({ size = "md", variant = "muted" }) => {
    const iconSize   = size === "sm" ? 16 : size === "lg" ? 22 : 18;
    const baseClass  = variant === "gold"
        ? "text-portfolio-textDim hover:text-portfolio-gold"
        : "text-portfolio-textDim hover:text-portfolio-text";

    return (
        <div className="flex items-center gap-4">
            {SOCIALS.map(({ id, label, href }) => {
                const Icon = ICON_MAP[id] || Mail;
                return (
                    <a
                        key={id}
                        href={href}
                        target={id !== "email" ? "_blank" : undefined}
                        rel={id !== "email" ? "noreferrer" : undefined}
                        aria-label={label}
                        title={label}
                        className={`${baseClass} transition-all duration-200 hover:-translate-y-0.5`}
                    >
                        <Icon size={iconSize} />
                    </a>
                );
            })}
        </div>
    );
};

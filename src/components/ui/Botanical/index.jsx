import React from "react";

export const Botanical = ({ className = "", style = {}, flip = false, opacity = 0.18 }) => {
    const gold = "#C9963A";
    return (
        <svg
            viewBox="0 0 200 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${className} pointer-events-none select-none ${flip ? "-scale-x-100" : ""}`}
            style={{ opacity, ...style }}
            aria-hidden="true"
        >
            <path d="M100 280 C100 280 100 100 100 20"           stroke={gold} strokeWidth="0.8" strokeLinecap="round" />
            <path d="M100 200 C100 200 60 170 30 140"            stroke={gold} strokeWidth="0.8" strokeLinecap="round" />
            <path d="M100 200 C100 200 140 170 170 140"          stroke={gold} strokeWidth="0.8" strokeLinecap="round" />
            <path d="M100 240 C100 240 70 220 50 200"            stroke={gold} strokeWidth="0.6" strokeLinecap="round" />
            <path d="M100 240 C100 240 130 220 150 200"          stroke={gold} strokeWidth="0.6" strokeLinecap="round" />
            <path d="M100 160 C100 160 55 130 25 100"            stroke={gold} strokeWidth="0.7" strokeLinecap="round" />
            <path d="M100 160 C100 160 145 130 175 100"          stroke={gold} strokeWidth="0.7" strokeLinecap="round" />
            <path d="M100 120 C100 120 70 90 55 60"              stroke={gold} strokeWidth="0.5" strokeLinecap="round" />
            <path d="M100 120 C100 120 130 90 145 60"            stroke={gold} strokeWidth="0.5" strokeLinecap="round" />
            <ellipse cx="30"  cy="138" rx="18" ry="10" fill="none" stroke={gold} strokeWidth="0.5" transform="rotate(-30 30 138)"  />
            <ellipse cx="170" cy="138" rx="18" ry="10" fill="none" stroke={gold} strokeWidth="0.5" transform="rotate(30 170 138)"  />
            <ellipse cx="50"  cy="198" rx="12" ry="7"  fill="none" stroke={gold} strokeWidth="0.5" transform="rotate(-20 50 198)"  />
            <ellipse cx="150" cy="198" rx="12" ry="7"  fill="none" stroke={gold} strokeWidth="0.5" transform="rotate(20 150 198)"  />
            <circle cx="100" cy="20"  r="4" fill={gold} opacity="0.6" />
            <circle cx="25"  cy="98"  r="3" fill={gold} opacity="0.4" />
            <circle cx="175" cy="98"  r="3" fill={gold} opacity="0.4" />
        </svg>
    );
};

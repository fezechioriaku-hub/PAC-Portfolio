import React from "react";
import { Leaf } from "lucide-react";

const TERMS = [
    "Nutrition Science", "Content Strategy", "Carousel Design",
    "Medical Writing", "Brand Storytelling", "Sensory Evaluation",
    "Evidence-Based Content", "Audience Growth",
];

export const Marquee = () => (
    <div className="border-t border-b border-portfolio-border py-6 overflow-hidden bg-gradient-to-r from-portfolio-bg via-portfolio-surface to-portfolio-bg">
        <div className="marquee-track">
            {[...Array(2)].map((_, rep) =>
                TERMS.map((t, i) => (
                    <span
                        key={`${rep}-${i}`}
                        className="inline-flex items-center gap-6 text-[13px] text-portfolio-textDim tracking-[0.12em] uppercase font-medium px-8"
                    >
                        <Leaf size={12} className="text-portfolio-borderGold flex-shrink-0" />
                        {t}
                    </span>
                ))
            )}
        </div>
    </div>
);

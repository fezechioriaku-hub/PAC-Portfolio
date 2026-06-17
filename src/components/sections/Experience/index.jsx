import React from "react";
import { BarChart3, FileText } from "lucide-react";
import { TIMELINE } from "../../../constants/data";
import { Reveal } from "../../ui/Reveal";

/** Single timeline card */
const TimelineItem = ({ icon: Icon, period, role, org, desc, index }) => (
    <Reveal delay={(index % 2) * 0.15} y={40}>
        <div className="tl-item relative bg-portfolio-card px-6 md:px-14 py-8 md:py-12 overflow-hidden h-full group cursor-default transition-colors duration-300 hover:bg-portfolio-surface">
            {/* Faint index number */}
            <div
                className="tl-num absolute top-6 right-8 font-serif text-[80px] font-bold leading-none select-none transition-colors duration-400"
                style={{ color: "#1E2419" }}
            >
                {String(index + 1).padStart(2, "0")}
            </div>

            {/* Orb + period */}
            <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="tl-orb w-12 h-12 rounded-full bg-portfolio-surface border border-portfolio-border flex items-center justify-center flex-shrink-0 transition-all duration-400">
                    <Icon size={20} className="tl-icon text-portfolio-sageMid transition-colors duration-400" />
                </div>
                <span className="text-xs text-portfolio-textDim tracking-[0.1em] uppercase font-semibold">{period}</span>
            </div>

            <h3 className="font-serif text-[26px] font-semibold text-portfolio-text mb-2 relative z-10">{role}</h3>
            <div className="text-sm text-portfolio-gold font-medium mb-5 tracking-[0.04em] relative z-10">{org}</div>
            <p className="text-sm text-portfolio-textMuted leading-[1.8] font-light relative z-10">{desc}</p>
        </div>
    </Reveal>
);

/** Experience section */
export const Experience = ({ onOpenCv }) => (
    <section
        id="experience"
        className="px-5 md:px-10 py-20 md:py-36 relative bg-gradient-to-b from-portfolio-surface to-portfolio-bg"
    >
        <div className="max-w-[1200px] mx-auto relative z-10">
            <Reveal y={60}>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-20">
                    <div>
                        <div className="text-xs tracking-[0.16em] uppercase text-portfolio-gold font-semibold flex items-center gap-2.5 mb-5">
                            <BarChart3 size={14} /> Career Journey
                        </div>
                        <h2 className="font-serif text-[48px] md:text-[64px] font-light text-portfolio-text leading-[1.05]">
                            Built at the<br />
                            <em className="font-semibold text-portfolio-sageLight not-italic">Intersection.</em>
                        </h2>
                    </div>
                    <div className="flex-shrink-0">
                        <button
                            onClick={onOpenCv}
                            className="flex items-center gap-2.5 border border-portfolio-borderGold text-portfolio-gold px-7 py-3.5 rounded text-[13px] tracking-[0.08em] uppercase font-semibold transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-portfolio-gold hover:text-portfolio-bg hover:shadow-[0_4px_20px_#C9963A33] hover:-translate-y-[2px]"
                        >
                            <FileText size={15} /> View Full CV
                        </button>
                    </div>
                </div>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-portfolio-border rounded-lg overflow-hidden shadow-[0_24px_48px_rgba(0,0,0,0.15)]">
                {TIMELINE.map((item, i) => (
                    <TimelineItem key={i} {...item} index={i} />
                ))}
            </div>
        </div>
    </section>
);

import React from "react";
import {
    Microscope, FlaskConical, BarChart3, Salad, Leaf,
    GraduationCap, Stethoscope, Hospital,
} from "lucide-react";
import { Reveal } from "../../ui/Reveal";
import { Botanical } from "../../ui/Botanical";

const RESEARCH_PERKS = [
    { icon: FlaskConical, text: "Full project formulation to analysis" },
    { icon: BarChart3,    text: "ANOVA & Duncan's Multiple Range Test" },
    { icon: Salad,        text: "Nutritional & sensory evaluation testing" },
    { icon: Leaf,         text: "Local foods reducing import dependence" },
];

const CREDENTIALS = [
    {
        icon: GraduationCap, label: "Education",
        title: "BSc Human Nutrition & Dietetics",
        sub: "Michael Okpara University of Agriculture",
        meta: "Apr 2021 – Jul 2025",
        accent: "text-portfolio-sage border-portfolio-sage/30 bg-portfolio-sage/10",
        hover: "hover:border-portfolio-sage",
    },
    {
        icon: Stethoscope, label: "Clinical",
        title: "Clinical Nutrition Practice",
        sub: "Federal Teaching Hospital, AE-FUTHA",
        meta: "Jul – Aug 2024",
        accent: "text-portfolio-gold border-portfolio-borderGold/50 bg-portfolio-gold/10",
        hover: "hover:border-portfolio-gold",
    },
    {
        icon: Hospital, label: "Food Service",
        title: "Food & Beverage Operations",
        sub: "Ryan Hotel & Suites, Abakaliki",
        meta: "Sep – Nov 2024",
        accent: "text-portfolio-textDim border-portfolio-border bg-portfolio-textDim/10",
        hover: "hover:border-portfolio-textDim",
    },
];

/** Research perk chip */
const PerkChip = ({ icon: Icon, text }) => (
    <div className="research-perk flex gap-4 items-start p-5 bg-portfolio-surface rounded transition-colors duration-300 hover:bg-portfolio-card">
        <Icon size={16} className="text-portfolio-sageMid mt-0.5 flex-shrink-0" />
        <span className="text-sm text-portfolio-textMuted leading-[1.6] font-light">{text}</span>
    </div>
);

/** Credential card */
const CredCard = ({ icon: Icon, label, title, sub, meta, accent, hover, index }) => (
    <Reveal delay={0.2 + index * 0.1} y={30}>
        <div className={`bg-portfolio-card border border-portfolio-border rounded-lg px-6 md:px-10 py-6 md:py-8 flex gap-4 md:gap-6 items-start transition-all duration-300 cursor-default group ${hover} hover:translate-x-1`}>
            <div className={`w-12 h-12 rounded-full border flex items-center justify-center flex-shrink-0 ${accent}`}>
                <Icon size={20} />
            </div>
            <div>
                <div className="text-[11px] text-portfolio-textDim tracking-[0.12em] uppercase mb-2 font-semibold">{label}</div>
                <div className="font-serif text-xl font-semibold text-portfolio-text mb-1.5">{title}</div>
                <div className="text-[13px] text-portfolio-textMuted mb-2 font-light">{sub}</div>
                <div className={`text-xs font-semibold opacity-80 ${accent.split(" ")[0]}`}>{meta}</div>
            </div>
        </div>
    </Reveal>
);

/** Research section */
export const Research = () => (
    <section id="research" className="relative px-5 md:px-10 py-20 md:py-36 max-w-[1200px] mx-auto">
        <Botanical className="absolute -right-5 top-[20%] w-40 h-60" opacity={0.1} />

        <Reveal y={60}>
            <div className="text-xs tracking-[0.16em] uppercase text-portfolio-gold font-semibold flex items-center gap-2.5 mb-5">
                <Microscope size={14} /> Academic Research
            </div>
            <h2 className="font-serif text-[48px] md:text-[64px] font-light text-portfolio-text leading-[1.05] mb-12 md:mb-20">
                Science at the<br />
                <em className="font-semibold text-portfolio-goldLight not-italic">Root.</em>
            </h2>
        </Reveal>

        <div className="flex flex-col lg:grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-14 items-start">
            {/* Main research card */}
            <Reveal y={40} delay={0.1}>
                <div
                    className="bg-portfolio-card border border-portfolio-border rounded-lg overflow-hidden shadow-[0_24px_48px_rgba(0,0,0,0.15)] transition-transform duration-400 cursor-default hover:-translate-y-1"
                >
                    {/* Card header */}
                    <div className="relative bg-gradient-to-br from-portfolio-sage/10 to-portfolio-gold/5 px-6 md:px-14 py-8 md:py-14 border-b border-portfolio-border overflow-hidden">
                        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[radial-gradient(circle,#4A7C3F1A_0%,transparent_70%)] pointer-events-none" />
                        <div className="inline-flex items-center gap-2.5 bg-portfolio-gold/10 border border-portfolio-borderGold px-5 py-2 rounded-full mb-8 relative z-10">
                            <FlaskConical size={12} className="text-portfolio-gold" />
                            <span className="text-[11px] text-portfolio-gold tracking-[0.12em] uppercase font-semibold">
                                Research Project · 2025
                            </span>
                        </div>
                        <h3 className="font-serif text-[32px] font-semibold text-portfolio-text leading-[1.3] relative z-10">
                            Mineral Analysis & Sensory Evaluation of Fruit-Legume Cookies Made
                            from Cooking Banana, Soybean & Dates
                        </h3>
                    </div>

                    {/* Perks */}
                    <div className="px-6 md:px-14 py-8 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {RESEARCH_PERKS.map((p, i) => <PerkChip key={i} {...p} />)}
                    </div>
                </div>
            </Reveal>

            {/* Credentials */}
            <div className="flex flex-col gap-6">
                {CREDENTIALS.map((c, i) => <CredCard key={i} {...c} index={i} />)}
            </div>
        </div>
    </section>
);

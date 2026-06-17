import React from "react";
import { Leaf, ArrowUpRight, MapPin, Star, ChevronDown } from "lucide-react";
import { STATS } from "../../../constants/data";
import { Botanical } from "../../ui/Botanical";
import { SocialLinks } from "../../ui/SocialLinks";

const MINI_STATS = [
    { val: "BSc",  sub: "Nutrition & Dietetics" },
    { val: "5+",   sub: "Years Creating" },
    { val: "3K+",  sub: "Community" },
];

const TAGS = ["Nutrition & Dietetics", "Content Strategy", "Graphic Design", "Medical Writing"];

/** Hero left column */
const HeroLeft = ({ scrollTo, scrollY }) => (
    <div className="relative">
        {/* Tag */}
        <div className="flex items-center gap-2.5 mb-7">
            <Leaf size={14} className="text-portfolio-gold flex-shrink-0" />
            <span className="text-[11px] tracking-[0.16em] uppercase text-portfolio-gold font-semibold">
                Nutritionist · Content Creator · Designer
            </span>
        </div>

        {/* Headline */}
        <h1
            className="font-serif font-light leading-[1.05] text-portfolio-text mb-7 tracking-[-0.02em]"
            style={{ fontSize: "clamp(52px,6vw,84px)" }}
        >
            Science Into<br />
            <em className="font-semibold text-portfolio-goldLight not-italic">Stories.</em><br />
            Stories Into<br />
            <em className="font-semibold text-portfolio-sageLight not-italic">Impact.</em>
        </h1>

        {/* Sub */}
        <p className="text-[17px] leading-[1.8] text-portfolio-textMuted mb-11 max-w-[480px] font-light">
            I bridge the gap between complex nutrition science and content that resonates —
            educating audiences, building brand trust, and driving measurable results for
            health and wellness brands.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 items-center flex-wrap mb-10">
            <button
                onClick={() => scrollTo("Services")}
                className="flex items-center gap-2 bg-portfolio-gold text-portfolio-bg border-none cursor-pointer px-9 py-4 text-sm font-semibold tracking-[0.06em] rounded transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_8px_24px_#C9963A33] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_#C9963A4D]"
            >
                View Services <ArrowUpRight size={16} />
            </button>
            <button
                onClick={() => scrollTo("Contact")}
                className="bg-transparent text-portfolio-textMuted border border-portfolio-border cursor-pointer px-9 py-4 text-sm font-medium tracking-[0.06em] rounded transition-all duration-300 hover:border-portfolio-textDim hover:text-portfolio-text"
            >
                Get In Touch
            </button>
        </div>

        {/* Social links */}
        <SocialLinks variant="gold" />

        {/* Mini stats */}
        <div className="mt-14 pt-10 border-t border-portfolio-border flex gap-14">
            {MINI_STATS.map(({ val, sub }) => (
                <div key={val}>
                    <div className="font-serif text-[32px] font-semibold text-portfolio-goldLight leading-none">{val}</div>
                    <div className="text-[13px] text-portfolio-textMuted mt-1.5 tracking-[0.04em]">{sub}</div>
                </div>
            ))}
        </div>

        {/* Scroll hint */}
        <div
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-500"
            style={{ opacity: scrollY > 20 ? 0 : 0.6 }}
        >
            <span className="text-[10px] tracking-[0.16em] uppercase text-portfolio-textDim font-semibold">Scroll</span>
            <ChevronDown
                size={16}
                className="text-portfolio-textDim"
                style={{ animation: "chevron-bounce 1.5s ease-in-out infinite alternate" }}
            />
        </div>
    </div>
);

/** Stat grid card */
const StatCard = ({ icon: Icon, val, label }) => (
    <div className="bg-portfolio-card p-7 transition-colors duration-300 hover:bg-portfolio-surface">
        <div className="flex items-center gap-2.5 mb-3">
            <Icon size={16} className="text-portfolio-gold flex-shrink-0" />
            <span className="text-[11px] text-portfolio-textMuted tracking-[0.06em] uppercase font-semibold">{label}</span>
        </div>
        <div className="font-serif text-[34px] font-semibold text-portfolio-goldLight leading-none">{val}</div>
    </div>
);

/** Hero right card */
const HeroCard = () => (
    <div className="relative">
        {/* Rotating ring */}
        <div
            className="absolute -inset-6 border border-portfolio-border rounded-full z-0"
            style={{ animation: "spin-slow 40s linear infinite" }}
        >
            {[0, 90, 180, 270].map(deg => (
                <div
                    key={deg}
                    className="absolute w-2 h-2 rounded-full bg-portfolio-gold top-1/2 left-1/2"
                    style={{
                        transform: `rotate(${deg}deg) translateX(calc(50% + 284px)) translateY(-50%)`,
                        animation: `pulse-gold ${2 + deg / 90}s ease-in-out infinite`,
                        boxShadow: "0 0 12px #C9963A",
                    }}
                />
            ))}
        </div>

        {/* Card body */}
        <div className="relative z-10 bg-portfolio-card/90 backdrop-blur-xl border border-portfolio-border rounded-lg overflow-hidden shadow-[0_24px_48px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)]">
            {/* Profile photo header */}
            <div className="relative bg-gradient-to-br from-portfolio-surface to-portfolio-card border-b border-portfolio-border overflow-hidden">
                {/* Photo */}
                <div className="relative h-56 overflow-hidden">
                    <img
                        src="/pac.png"
                        alt="Precious Chinonyerem Akidi"
                        className="w-full h-full object-cover object-top"
                        style={{ objectPosition: "50% 15%" }}
                    />
                    {/* Gradient overlay bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-portfolio-card via-transparent to-transparent" />
                </div>

                {/* Name + location overlay */}
                <div className="px-8 pt-4 pb-5">
                    <div className="flex items-end justify-between">
                        <div>
                            <div className="font-serif text-2xl font-semibold text-portfolio-text">Precious C. Akidi</div>
                            <div className="text-[13px] text-portfolio-textMuted flex items-center gap-1.5 mt-1">
                                <MapPin size={12} className="text-portfolio-textDim" />
                                Abakaliki, Ebonyi State, Nigeria
                            </div>
                        </div>
                        <SocialLinks size="sm" variant="gold" />
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                        {TAGS.map(tag => (
                            <span key={tag} className="bg-portfolio-sage/10 text-portfolio-sageLight border border-portfolio-sage/20 px-3 py-1 rounded-full text-[11px] font-medium tracking-[0.04em]">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-px bg-portfolio-border">
                {STATS.map(s => <StatCard key={s.label} {...s} />)}
            </div>

            {/* Quote */}
            <div className="px-8 py-6 flex gap-4 items-start bg-gradient-to-r from-portfolio-surface to-portfolio-card">
                <Star
                    size={16}
                    className="text-portfolio-gold mt-0.5 flex-shrink-0"
                    style={{ animation: "pulse-gold 2s ease-in-out infinite" }}
                />
                <p className="text-[13px] text-portfolio-textMuted italic leading-[1.8] m-0">
                    "She opens her mouth with wisdom, and the teaching of kindness is on her tongue."
                    <span className="not-italic text-[11px] text-portfolio-textDim block mt-2">— Prov. 31:26</span>
                </p>
            </div>
        </div>
    </div>
);

/** Hero section */
export const Hero = ({ scrollTo, scrollY }) => (
    <section
        id="about"
        className="relative max-w-[1200px] mx-auto px-5 md:px-10 pt-32 md:pt-[120px] pb-20 flex flex-col lg:grid items-center gap-16 lg:gap-20 min-h-screen"
        style={{ gridTemplateColumns: "1fr minmax(0, 520px)" }}
    >
        <Botanical className="absolute -left-16 top-[10%] w-[180px] h-[270px] hidden md:block" opacity={0.12} />
        <Botanical className="absolute -right-10 bottom-[5%] w-[140px] h-[210px] hidden md:block" opacity={0.08} flip />

        <div className="order-2 lg:order-1 w-full">
            <HeroLeft scrollTo={scrollTo} scrollY={scrollY} />
        </div>
        <div className="order-1 lg:order-2 w-full max-w-[480px] lg:max-w-none mx-auto">
            <HeroCard />
        </div>
    </section>
);

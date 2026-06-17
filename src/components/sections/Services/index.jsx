import React from "react";
import { FlaskConical, Users, ArrowUpRight } from "lucide-react";
import { SERVICES, CLIENTS } from "../../../constants/data";
import { Reveal } from "../../ui/Reveal";
import { Divider } from "../../ui/Divider";

/** Single service card */
const ServiceCard = ({ icon: Icon, title, desc, tag, index }) => (
    <Reveal delay={index * 0.15} y={40}>
        <div className="svc-card relative bg-portfolio-card px-10 py-14 h-full overflow-hidden cursor-default group transition-colors duration-300 hover:bg-portfolio-surface">
            {/* Top gold glow on hover */}
            <div className="svc-glow absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-portfolio-gold to-transparent opacity-0 transition-opacity duration-400" />

            <div className="mb-9">
                <span className="text-[11px] tracking-[0.14em] uppercase text-portfolio-textDim font-semibold">
                    {`0${index + 1}`} — {tag}
                </span>
            </div>
            <Icon
                size={32}
                className="text-portfolio-sageMid mb-8 transition-colors duration-400 group-hover:text-portfolio-gold"
            />
            <h3 className="font-serif text-[26px] font-semibold text-portfolio-text mb-5 leading-[1.2]">{title}</h3>
            <p className="text-sm text-portfolio-textMuted leading-[1.8] font-light">{desc}</p>
        </div>
    </Reveal>
);

/** Client row */
const ClientRow = ({ name, index, isLast }) => (
    <div className={`flex items-center gap-6 pb-6 cursor-pointer group ${!isLast ? "border-b border-portfolio-border" : ""}`}>
        <div className="w-8 h-8 border border-portfolio-borderGold rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-portfolio-borderGold/20 group-hover:scale-110">
            <span className="font-serif text-sm font-semibold text-portfolio-gold">0{index + 1}</span>
        </div>
        <span className="text-base text-portfolio-text font-normal transition-colors duration-300 group-hover:text-portfolio-goldLight">{name}</span>
        <ArrowUpRight
            size={16}
            className="text-portfolio-textDim ml-auto transition-all duration-300 group-hover:text-portfolio-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
    </div>
);

/** Services section */
export const Services = () => (
    <section id="services" className="px-5 md:px-10 py-20 md:py-36 max-w-[1200px] mx-auto">
        {/* Heading row */}
        <Reveal y={60}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
                <div>
                    <div className="text-xs tracking-[0.16em] uppercase text-portfolio-gold font-semibold flex items-center gap-2.5 mb-5">
                        <FlaskConical size={14} /> What I Offer
                    </div>
                    <h2 className="font-serif text-[48px] md:text-[64px] font-light text-portfolio-text leading-[1.05]">
                        Content That<br />
                        <em className="font-semibold text-portfolio-goldLight not-italic">Converts.</em>
                    </h2>
                </div>
                <p className="max-w-[360px] text-[15px] text-portfolio-textMuted leading-[1.8] font-light pb-2.5">
                    I combine clinical nutrition knowledge with strategic content creation —
                    a combination most health brands can't find in one person.
                </p>
            </div>
        </Reveal>

        <Reveal delay={0.2}><Divider /></Reveal>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-portfolio-border border border-portfolio-border rounded-lg overflow-hidden mb-24 shadow-[0_24px_48px_rgba(0,0,0,0.2)]">
            {SERVICES.map((svc, i) => (
                <ServiceCard key={svc.title} {...svc} index={i} />
            ))}
        </div>

        {/* Clients panel */}
        <Reveal y={60}>
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-px bg-portfolio-border rounded-lg overflow-hidden shadow-[0_24px_48px_rgba(0,0,0,0.2)]">
                {/* Left */}
                <div className="relative bg-gradient-to-br from-portfolio-surface to-portfolio-card px-8 lg:px-16 py-12 lg:py-[72px]">
                    <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[radial-gradient(circle,#C9963A11_0%,transparent_70%)] pointer-events-none" />
                    <div className="text-xs tracking-[0.16em] uppercase text-portfolio-gold font-semibold flex items-center gap-2.5 mb-8 relative z-10">
                        <Users size={14} /> I Work With
                    </div>
                    <h3 className="font-serif text-[44px] font-light text-portfolio-text leading-[1.15] mb-6 relative z-10">
                        Health-forward brands<br />who know great content<br />
                        is <em className="text-portfolio-goldLight font-semibold not-italic">non-negotiable.</em>
                    </h3>
                </div>
                {/* Right */}
                <div className="bg-portfolio-card px-8 lg:px-14 py-12 lg:py-[72px] flex flex-col justify-center gap-6">
                    {CLIENTS.map((c, i) => (
                        <ClientRow key={c} name={c} index={i} isLast={i === CLIENTS.length - 1} />
                    ))}
                </div>
            </div>
        </Reveal>
    </section>
);

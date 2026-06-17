import React from "react";
import { Leaf, Mail, Globe } from "lucide-react";
import { Reveal } from "../../ui/Reveal";
import { Botanical } from "../../ui/Botanical";
import { SocialLinks } from "../../ui/SocialLinks";

export const Contact = () => (
    <section
        id="contact"
        className="relative px-5 md:px-10 py-20 md:py-40 overflow-hidden bg-gradient-to-b from-portfolio-bg to-portfolio-surface"
    >
        {/* Decorative botanicals */}
        <Botanical
            className="absolute -left-10 top-1/2 -translate-y-1/2 w-60 h-[360px]"
            opacity={0.06}
        />
        <Botanical
            className="absolute -right-10 top-1/2 -translate-y-1/2 w-60 h-[360px]"
            opacity={0.06}
            flip
        />

        <div className="max-w-[720px] mx-auto text-center relative z-10">
            <Reveal y={60}>
                    {/* Leaf orb */}
                    <div className="flex justify-center mb-8">
                        <div className="w-16 h-16 rounded-full border border-portfolio-borderGold bg-portfolio-gold/5 flex items-center justify-center shadow-[0_0_24px_#C9963A1A]">
                            <Leaf size={24} className="text-portfolio-gold" />
                        </div>
                    </div>

                    <div className="text-xs tracking-[0.16em] uppercase text-portfolio-gold font-semibold mb-6">
                        Start a Conversation
                    </div>

                    <h2 className="font-serif text-[48px] md:text-[68px] font-light text-portfolio-text leading-[1.05] mb-8">
                        Let's Create<br />
                        <em className="font-semibold text-portfolio-goldLight not-italic">Together.</em>
                    </h2>

                    <p className="text-[17px] text-portfolio-textMuted leading-[1.8] mb-14 font-light">
                        Whether you need a one-time content project or an ongoing partnership —
                        let's turn your health message into content that actually moves people.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center mb-12">
                        <a
                            href="mailto:preciouschinonyerem16@gmail.com"
                            className="inline-flex w-full sm:w-auto justify-center items-center gap-3 bg-portfolio-gold text-portfolio-bg px-8 md:px-10 py-4 rounded text-[15px] font-semibold tracking-[0.04em] no-underline transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_8px_24px_#C9963A33] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_#C9963A4D]"
                            style={{ padding: "18px 32px" }}
                        >
                            <Mail size={18} /> Send an Email
                        </a>
                        <a
                            href="https://www.linkedin.com/in/preciouschinonyeremakidi"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex w-full sm:w-auto justify-center items-center gap-3 border border-portfolio-border text-portfolio-textMuted px-8 md:px-10 rounded text-[15px] font-medium tracking-[0.04em] no-underline transition-all duration-300 hover:border-portfolio-textDim hover:text-portfolio-text"
                            style={{ padding: "18px 32px" }}
                        >
                            <Globe size={18} /> Connect on LinkedIn
                        </a>
                    </div>

                    <div className="flex justify-center">
                        <SocialLinks size="lg" variant="gold" />
                    </div>

                    {/* Email footer line */}
                    {/* <div className="mt-20 pt-10 border-t border-portfolio-border">
                    <p className="text-[13px] text-portfolio-textDim tracking-[0.06em]">
                        preciouschinonyerem16@gmail.com
                    </p>
                </div> */}
                </Reveal>
            </div>
        </section>
    );

import React from "react";
import { LinkedInEmbed } from 'react-social-media-embed';
import { FEATURED_POSTS } from "../../../constants/data";
import { Reveal } from "../../ui/Reveal";

export const FeaturedPosts = () => {
    if (!FEATURED_POSTS || FEATURED_POSTS.length === 0) return null;

    return (
        <section className="relative px-5 md:px-10 pt-20 pb-10 bg-gradient-to-b from-portfolio-surface to-portfolio-bg overflow-hidden z-10">
            <div className="max-w-[1200px] mx-auto">
                <Reveal y={60}>
                    <div className="text-center mb-12">
                        <div className="text-xs tracking-[0.16em] uppercase text-portfolio-gold font-semibold mb-4">
                            Top Content
                        </div>
                        <h3 className="font-serif text-[44px] font-light text-portfolio-text leading-[1.05]">
                            Featured <em className="font-semibold text-portfolio-sageLight not-italic">Posts.</em>
                        </h3>
                    </div>
                    
                    <div className="flex justify-center gap-10 flex-wrap py-10">
                        {FEATURED_POSTS.map((url, i) => {
                            const rotation = i % 2 === 0 ? '-rotate-2' : 'rotate-2';
                            const translateY = i % 2 === 0 ? 'translate-y-2' : '-translate-y-2';

                            return (
                                <div 
                                    key={i} 
                                    className={`group relative p-[3px] rounded-[16px] bg-gradient-to-br from-portfolio-gold/50 via-portfolio-surface to-portfolio-sageMid/50 transition-all duration-500 hover:z-20 hover:scale-[1.03] hover:rotate-0 hover:translate-y-0 shadow-[0_16px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_0_40px_#C9963A4D] ${rotation} ${translateY}`}
                                >
                                    <div className="relative w-[85vw] sm:w-[325px] max-w-[325px] rounded-[13px] overflow-hidden bg-[#ffffff]">
                                        <LinkedInEmbed url={url} width="100%" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

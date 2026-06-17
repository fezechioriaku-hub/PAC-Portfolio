import React, { useState, useEffect } from "react";
import { Nav } from "./components/layout/Nav";
import { Hero } from "./components/sections/Hero";
import { Marquee } from "./components/sections/Marquee";
import { Services } from "./components/sections/Services";
import { Experience } from "./components/sections/Experience";
import { Research } from "./components/sections/Research";
import { FeaturedPosts } from "./components/sections/FeaturedPosts";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/layout/Footer";
import { CvModal } from "./components/ui/CvModal";

export default function Portfolio() {
    const [active, setActive] = useState("About");
    const [scrollY, setScrollY] = useState(0);
    const [isCvOpen, setIsCvOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrollY(window.scrollY);
            
            // Simple scroll spy logic
            const sections = ["about", "services", "experience", "research", "contact"];
            const current = sections.find(id => {
                const el = document.getElementById(id);
                if (!el) return false;
                const rect = el.getBoundingClientRect();
                return rect.top <= 100 && rect.bottom >= 100;
            });
            
            if (current) {
                setActive(current.charAt(0).toUpperCase() + current.slice(1));
            }
        };
        
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id.toLowerCase());
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 60; // Offset for fixed nav
            window.scrollTo({ top, behavior: "smooth" });
            setActive(id);
        }
    };

    return (
        <div className="font-sans bg-portfolio-bg text-portfolio-text min-h-screen overflow-x-hidden selection:bg-portfolio-gold/20 selection:text-portfolio-goldPale">
            <Nav active={active} scrollY={scrollY} scrollTo={scrollTo} />
            <Hero scrollTo={scrollTo} scrollY={scrollY} />
            <Marquee />
            <Services />
            <Experience onOpenCv={() => setIsCvOpen(true)} />
            <Research />
            <FeaturedPosts />
            <Contact />
            <Footer />
            
            {/* CV Modal */}
            <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
        </div>
    );
}
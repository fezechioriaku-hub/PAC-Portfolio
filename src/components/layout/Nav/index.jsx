import React, { useState, useEffect } from "react";
import { Mail, Menu, X } from "lucide-react";
import { NAV } from "../../../constants/data";

export const Nav = ({ active, scrollY, scrollTo }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "unset";
    }, [isOpen]);

    const handleNavClick = (n) => {
        scrollTo(n);
        setIsOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            scrollY > 60 || isOpen ? "border-b border-portfolio-border bg-portfolio-bg/90 backdrop-blur-xl saturate-150" : "border-b border-transparent bg-transparent"
        }`}>
            <div className="max-w-[1200px] mx-auto px-5 md:px-10 h-[72px] flex items-center justify-between">
                <div 
                    className="font-serif text-xl md:text-2xl font-semibold text-portfolio-goldLight tracking-[0.04em] cursor-pointer relative z-[201]" 
                    onClick={() => handleNavClick("About")}
                >
                    Precious Akidi
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-10 items-center">
                    {NAV.map(n => (
                        <button 
                            key={n} 
                            onClick={() => scrollTo(n)} 
                            className={`relative text-[13px] font-medium tracking-[0.08em] uppercase py-1 transition-colors duration-300 group ${
                                active === n ? "text-portfolio-goldLight" : "text-portfolio-textMuted hover:text-portfolio-text"
                            }`}
                        >
                            {n}
                            <span className={`absolute bottom-[-4px] left-0 h-[2px] bg-portfolio-gold transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] rounded-[2px] ${
                                active === n ? "w-full" : "w-0 group-hover:w-full"
                            }`}></span>
                        </button>
                    ))}
                    <a 
                        href="mailto:preciouschinonyerem16@gmail.com" 
                        className="flex items-center gap-2.5 border border-portfolio-borderGold text-portfolio-gold px-6 py-2.5 rounded text-[13px] tracking-[0.08em] uppercase font-semibold transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-portfolio-gold hover:text-portfolio-bg hover:shadow-[0_4px_20px_#C9963A33] hover:-translate-y-[2px]"
                    >
                        <Mail size={14} /> Hire Me
                    </a>
                </div>

                {/* Mobile Hamburger Toggle */}
                <button 
                    className="md:hidden text-portfolio-text relative z-[201] p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden fixed inset-0 top-[72px] bg-portfolio-bg/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] h-[calc(100vh-72px)] ${
                isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
            }`}>
                {NAV.map(n => (
                    <button 
                        key={n} 
                        onClick={() => handleNavClick(n)} 
                        className={`text-2xl font-serif tracking-[0.05em] uppercase py-2 transition-colors duration-300 ${
                            active === n ? "text-portfolio-goldLight" : "text-portfolio-textMuted hover:text-portfolio-text"
                        }`}
                    >
                        {n}
                    </button>
                ))}
                <div className="w-full px-10 mt-4">
                    <a 
                        href="mailto:preciouschinonyerem16@gmail.com" 
                        className="flex items-center justify-center gap-2.5 bg-portfolio-gold text-portfolio-bg py-4 rounded text-sm tracking-[0.08em] uppercase font-semibold shadow-[0_8px_24px_#C9963A33]"
                    >
                        <Mail size={16} /> Hire Me
                    </a>
                </div>
            </div>
        </nav>
    );
};

import React from "react";
import { Leaf } from "lucide-react";

export const Divider = () => (
    <div className="flex items-center gap-4 mb-12">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-portfolio-border" />
        <Leaf size={14} className="text-portfolio-gold flex-shrink-0" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-portfolio-border" />
    </div>
);

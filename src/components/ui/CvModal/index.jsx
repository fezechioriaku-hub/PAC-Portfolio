import React, { useEffect } from "react";
import { X, Download, ExternalLink, FileText, Loader2 } from "lucide-react";
import { CV_CONFIG } from "../../../constants/data";

export const CvModal = ({ isOpen, onClose }) => {
    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const drivePreviewUrl = `https://drive.google.com/file/d/${CV_CONFIG.googleDriveId}/preview`;
    const driveDownloadUrl = `https://drive.google.com/uc?export=download&id=${CV_CONFIG.googleDriveId}`;
    const driveViewUrl = `https://drive.google.com/file/d/${CV_CONFIG.googleDriveId}/view?usp=sharing`;

    return (
        <div 
            className="fixed inset-0 bg-portfolio-bg/85 backdrop-blur-md z-[300] flex items-center justify-center p-4 md:p-6 transition-all duration-300"
            onClick={onClose}
        >
            <div 
                className="relative bg-portfolio-card border border-portfolio-border rounded-lg max-w-4xl w-full h-[85vh] flex flex-col shadow-[0_24px_48px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="px-6 py-4 flex items-center justify-between border-b border-portfolio-border bg-portfolio-surface/50">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-portfolio-gold/10 rounded-md text-portfolio-gold">
                            <FileText size={20} />
                        </div>
                        <div>
                            <h3 className="font-serif text-lg font-semibold text-portfolio-text leading-tight">Curriculum Vitae</h3>
                            <p className="text-xs text-portfolio-textMuted mt-0.5">Precious Chinonyerem Akidi</p>
                        </div>
                    </div>
                    <button 
                        onClick={onClose}
                        className="p-1.5 rounded-full text-portfolio-textMuted hover:text-portfolio-text hover:bg-portfolio-surface transition-all duration-200"
                        aria-label="Close CV Modal"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Body / PDF Preview */}
                <div className="flex-1 w-full bg-portfolio-surface relative flex flex-col justify-center items-center min-h-[250px]">
                    {/* Visual Loading Indicator / Background fallback */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-0">
                        <Loader2 className="animate-spin text-portfolio-gold mb-3" size={28} />
                        <p className="text-sm text-portfolio-textMuted max-w-[280px]">
                            Loading preview from Google Drive...
                        </p>
                        <p className="text-xs text-portfolio-textDim mt-2 max-w-[320px]">
                            If the preview does not load, you can download the file directly using the button below.
                        </p>
                    </div>

                    {/* PDF iframe */}
                    <iframe
                        src={drivePreviewUrl}
                        className="relative w-full h-full border-none z-10 bg-transparent"
                        allow="autoplay"
                        title="CV Preview"
                    />
                </div>

                {/* Footer Actions */}
                <div className="px-6 py-4 border-t border-portfolio-border bg-portfolio-surface/50 flex flex-col sm:flex-row gap-3 sm:justify-between items-center">
                    <div className="text-[11px] text-portfolio-textDim text-center sm:text-left">
                        * Fetches live from Google Drive to guarantee the latest version.
                    </div>
                    <div className="flex flex-wrap gap-2.5 w-full sm:w-auto justify-end">
                        <a 
                            href={driveDownloadUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-portfolio-gold text-portfolio-bg px-5 py-2.5 rounded text-sm font-semibold tracking-[0.04em] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_4px_12px_rgba(201,150,58,0.2)] hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(201,150,58,0.3)] w-full sm:w-auto"
                        >
                            <Download size={15} /> Download PDF
                        </a>
                        <a 
                            href={driveViewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 border border-portfolio-border text-portfolio-textMuted px-5 py-2.5 rounded text-sm font-semibold tracking-[0.04em] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-portfolio-textDim hover:text-portfolio-text hover:-translate-y-0.5 w-full sm:w-auto"
                        >
                            <ExternalLink size={15} /> Open in Drive
                        </a>
                        <button 
                            onClick={onClose}
                            className="hidden sm:block text-portfolio-textDim hover:text-portfolio-textMuted px-4 py-2.5 text-sm font-medium transition-colors duration-200"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

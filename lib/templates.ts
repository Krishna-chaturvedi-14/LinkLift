
import { ResumeData } from "./types";
import ModernPortfolio from "@/components/templates/ModernPortfolio";

export interface Template {
    id: string;
    name: string;
    thumbnail: string; // URL or path to image
    component: React.ComponentType<{ data: ResumeData }>;
}

import ThreeDPortfolio from "@/components/templates/ThreeDPortfolio";

export const TEMPLATES: Record<string, Template> = {
    "default": {
        id: "default",
        name: "Terminal (Default)",
        thumbnail: "/templates/terminal-thumb.png", // Placeholder
        component: () => null // We'll handle the default case in the page logic for now
    },
    "modern": {
        id: "modern",
        name: "Modern Clean",
        thumbnail: "/templates/modern-thumb.png", // Placeholder
        component: ModernPortfolio
    },
    "3d": {
        id: "3d",
        name: "3D Interactive",
        thumbnail: "/templates/3d-thumb.png", // Placeholder
        component: ThreeDPortfolio
    }
};

export const DEFAULT_TEMPLATE_ID = "default";

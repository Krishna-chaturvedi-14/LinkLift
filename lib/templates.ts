
import { ResumeData } from "./types";
import ModernPortfolio from "@/components/templates/ModernPortfolio";

export interface Template {
    id: string;
    name: string;
    thumbnail: string; // URL or path to image
    component: React.ComponentType<{ data: ResumeData }>;
}

export const TEMPLATES: Record<string, Template> = {
    "default": {
        id: "default",
        name: "Terminal (Default)",
        thumbnail: "/templates/terminal-thumb.png", // Placeholder
        component: () => null // We'll handle the default case specially or import the component later
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
        component: () => null // Placeholder until ported
    }
};

export const DEFAULT_TEMPLATE_ID = "default";

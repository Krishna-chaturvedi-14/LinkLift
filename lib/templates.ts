
import { ResumeData } from "./types";
import ModernPortfolio from "@/components/templates/ModernPortfolio";

export interface Template {
    id: string;
    name: string;
    thumbnail: string; // URL or path to image
    component: React.ComponentType<{ data: ResumeData }>;
}

import TerminalPortfolio from "@/components/templates/TerminalPortfolio";
import ThreeDPortfolio from "@/components/templates/ThreeDPortfolio";
import SeraPortfolio from "@/components/templates/SeraPortfolio";
import AntoinePortfolio from "@/components/templates/AntoinePortfolio";
import FigmaPortfolio from "@/components/templates/FigmaPortfolio";
import MidnightPortfolio from "@/components/templates/MidnightPortfolio";
import MinimalistPortfolio from "@/components/templates/MinimalistPortfolio";

export const TEMPLATES: Record<string, Template> = {
    "default": {
        id: "default",
        name: "Dev Console",
        thumbnail: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=800&q=80",
        component: TerminalPortfolio
    },
    "modern": {
        id: "modern",
        name: "Ascend Clean",
        component: ModernPortfolio,
        thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
    },
    "3d": {
        id: "3d",
        name: "Nexus 3D",
        component: ThreeDPortfolio,
        thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    },
    sera: {
        id: "sera",
        name: "Cosmic Flow",
        component: SeraPortfolio,
        thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    },
    antoine: {
        id: "antoine",
        name: "Brutalist Impact",
        component: AntoinePortfolio,
        thumbnail: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80",
    },
    figma: {
        id: "figma",
        name: "Pixel Perfect",
        component: FigmaPortfolio,
        thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    },
    midnight: {
        id: "midnight",
        name: "Neon Midnight",
        component: MidnightPortfolio,
        thumbnail: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80", // Using placeholder image for now
    },
    minimalist: {
        id: "minimalist",
        name: "Zenith Mono",
        component: MinimalistPortfolio,
        thumbnail: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80", // Using placeholder minimalist image
    },
};

export const DEFAULT_TEMPLATE_ID = "default";

import { Metadata } from 'next';
import { TEMPLATES } from '@/lib/templates';
import { RESUME_EXAMPLES } from '@/lib/resume-examples';

export const metadata: Metadata = {
    title: 'Template Preview',
    description: 'Preview of LinkLift resume templates',
};

// We use the first example data as our dummy data
import { ResumeData } from '@/lib/types';
const DUMMY_DATA = RESUME_EXAMPLES[0].output as unknown as ResumeData;

// We add a few extras to make it look nicer
const ENHANCED_DATA = {
    ...DUMMY_DATA,
    bio: "I am a passionate software engineer with a knack for building scalable web applications and intuitive user experiences. I thrive in fast-paced environments and love solving complex technical challenges.",
    github: "github.com/johndoe",
    linkedin: "linkedin.com/in/johndoe",
    projects: [
        {
            title: "AI Customer Support Bot",
            description: "Developed an AI-powered customer support bot using OpenAI API and Next.js, reducing response times by 80%.",
            technologies: ["Next.js", "OpenAI", "TailwindCSS"],
            link: "#"
        },
        {
            title: "E-Commerce Platform Redux",
            description: "Led the frontend architecture for a high-traffic e-commerce platform processing $1M+ daily volume.",
            technologies: ["React", "Redux", "Node.js", "PostgreSQL"],
            link: "#"
        },
        {
            title: "Real-time Analytics Dashboard",
            description: "Built a complex data visualization dashboard rendering millions of data points instantly.",
            technologies: ["Vue.js", "D3.js", "Firebase"],
            link: "#"
        }
    ]
};

export default async function TemplatePreviewPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const TemplateComponent = TEMPLATES[resolvedParams.id]?.component;

    if (!TemplateComponent) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                Template not found.
            </div>
        );
    }

    // Render the template without any external wrapping so it acts as a perfect preview element
    return (
        <div className="preview-container overflow-hidden pointer-events-none select-none">
            <TemplateComponent data={ENHANCED_DATA} />

            {/* Inject a script or style to prevent interactions and hide scrollbars while still allowing our automated hover scroll */}
            <style dangerouslySetInnerHTML={{
                __html: `
                body, html {
                    margin: 0;
                    padding: 0;
                    overflow: hidden !important; /* Hide scrollbars */
                    pointer-events: none !important; /* Disable all clicks and interactions inside the iframe */
                    user-select: none !important;
                }
                
                /* Some templates have sticky/fixed headers that look weird when scrolling in an iframe. Hide them if necessary or let them be. */
            `}} />
        </div>
    );
}

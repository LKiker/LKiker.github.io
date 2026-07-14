import testVideo from "../assets/videos/6804128-uhd_4096_2160_25fps.mp4";
import testPoster from "../assets/images/Screenshot 2026-07-13 155455.png?url";

export interface Project {
    id: string;                // slug, used for routing/anchors if needed
    order: number;              // explicit ordering, decoupled from array position
    title: string;
    eyebrow: string;            // e.g. "01 — Web Development"
    category: 'web' | 'vr' | 'embedded' | 'other';
    description: string;        // short, for both pages
    longDescription?: string;   // optional, only if immersive page wants more copy
    tags: string[];             // e.g. ["Astro", "TypeScript", "GSAP"]
    links: {
        github?: string;
        live?: string;
    };
    media: {
        video?: string;           // path/URL for immersive page
        poster?: string;          // fallback image while video loads
        edgeColor?: string;       // for the video edge-dissolve match, if not scroll-derived
    };
    featured: boolean;          // could let simple.astro filter/sort featured-first
}

export const projects: Project[] = [
    {
        id: 'molecular-lens-ar',
        order: 1,
        title: "Molecular Lens AR",
        eyebrow: "01 - Unity Development",
        category: 'vr',
        description: "Mixed-reality educational tool built for the Meta Quest 3. It places a 3D protein model into the users physical environment and enables interactive learning through direct manipulation, click-into-model exploration, and a built-in multiple-choice quiz.",
        tags: [],
        links: {
            github: 'https://github.com/LKiker/MolecularLensAR',
        },
        media: {
            video: testVideo,
            poster: testPoster,
        },
        featured: true,
    },
        {
        id: 'ripple-simulation',
        order: 2,
        title: "Ripple Simulation",
        eyebrow: "02 - WebGL and Shaders",
        category: 'web',
        description: "Interactive 2D and 3D water ripple simulation built from scratch using WebGL. It visualizes real-time wave propagation on a heightmap and allows users to inject energy through mouse interaction, demonstrating core physics and real-time graphics concepts.",
        tags: [],
        links: {
            github: 'https://github.com/LKiker/ripple-simulation',
        },
        media: {
        },
        featured: false,
    },
  // ...
];
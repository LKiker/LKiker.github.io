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
        description: "mixed-reality educational tool built for the Meta Quest 3. It places a 3D protein model into the users physical environment and enables interactive learning through direct manipulation, click-into-model exploration, and a built-in multiple-choice quiz.",
        tags: [],
        links: {
            github: 'https://github.com/LKiker/MolecularLensAR',
        },
        media: {
        },
        featured: true,
    },
  // ...
];
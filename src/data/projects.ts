import treesVideo from "../assets/videos/trees.mp4";
import treesImage from "../assets/images/trees.png?url";
import cityVideo from "../assets/videos/city.mp4";
import cityImage from "../assets/images/city.png?url";
import officeVideo from "../assets/videos/office.mp4";
import officeImage from "../assets/images/office.png?url";
import molecularLens from "../assets/images/molecularlens.gif";

export interface Project {
    id: string;                // slug, used for routing/anchors if needed
    order: number;              // explicit ordering, decoupled from array position
    title: string;
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
        gif?: {                   // animated alternative to video — no play/pause control,
                                   // so pair with `poster` if you want a still fallback for
                                   // prefers-reduced-motion. Width/height (from the un-suffixed
                                   // image import, not `?url`) let the card size itself to the
                                   // gif's native aspect ratio instead of forcing a fixed box.
            src: string;
            width: number;
            height: number;
        };
        poster?: string;          // fallback image while video loads, or reduced-motion
                                   // fallback when paired with `gif`
        edgeColor?: string;       // for the video edge-dissolve match, if not scroll-derived
    };
    featured: boolean;          // could let simple.astro filter/sort featured-first
}

export const projects: Project[] = [
    {
        id: 'molecular-lens-ar',
        order: 1,
        title: "Molecular Lens AR",
        category: 'vr',
        description: "Mixed-reality educational tool built for the Meta Quest 3. It places a 3D protein model into the users physical environment and enables interactive learning through direct manipulation, click-into-model exploration, and a built-in multiple-choice quiz.",
        tags: [],
        links: {
            github: 'https://github.com/LKiker/MolecularLensAR',
        },
        media: {
            gif: molecularLens,
        },
        featured: true,
    },

    {
        id: 'ripple-simulation',
        order: 2,
        title: "Ripple Simulation",
        category: 'web',
        description: "Interactive 2D and 3D water ripple simulation built from scratch using WebGL. It visualizes real-time wave propagation on a heightmap and allows users to inject energy through mouse interaction, demonstrating core physics and real-time graphics concepts.",
        tags: [],
        links: {
            github: 'https://github.com/LKiker/ripple-simulation',
        },
        media: {
            video: treesVideo,
            poster: treesImage,
        },
        featured: true,
    },
    
    {
        id: 'unity-urp-shader-showcase',
        order: 3,
        title: "Unity URP Shader Showcase",
        category: 'other',
        description: "Stylized shaders (Toon, Water) rendered on a custom robot model using Unity URP.",
        tags: [],
        links: {
            github: 'https://github.com/LKiker/unity-shader-showcase',
        },
        media: {
            video: cityVideo,
            poster: cityImage,
        },
        featured: true,
    },

    {
        id: 'aquarium filtration system',
        order: 4,
        title: "Aquarium Filtration System",
        category: 'other',
        description: "75 gallon aquarium stand and sump designed for handling the flow and filtration of African Cichlids.",
        tags: [],
        links: {
            github: 'https://github.com/LKiker',
        },
        media: {
            video: officeVideo,
            poster: officeImage,
        },
        featured: true,
    },

    {
        id: 'this site',
        order: 4,
        title: "This Website",
        category: 'other',
        description: "Ocean themed portfolio site built in Astro and utilizing GSAP animations.",
        tags: [],
        links: {
            github: 'https://github.com/LKiker',
        },
        media: {
            video: treesVideo,
            poster: treesImage,
        },
        featured: true,
    },
];
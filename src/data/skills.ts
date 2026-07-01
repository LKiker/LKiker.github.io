export interface SkillCategory {
    id: string;
    label: string;              // e.g. "Languages", "Frameworks & Libraries", "Tools"
    skills: string[];            // simple list; keep it flat, no need to over-model this
}

export const skillCategories: SkillCategory[] = [
    {
        id: 'languages',
        label: 'Languages',
        skills: ['TypeScript', 'C#', 'Python'],
    },
    {
        id: 'frameworks',
        label: 'Frameworks & Libraries',
        skills: ['Astro', 'Unity', 'GSAP'],
    },
  // ...
];
export type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type ElementString = 'div' | 'section' | 'span' | 'article' | 'aside' | 'header' | 'footer' | 'nav' | 'main' | 'ul' | 'li';

export type ThinLink = { link: string; text: string; };

export type Project = {
    title: string;
    description: string;
    image: string;
    technologies: string[];
}

export type Experience = {
    company: string;
    start: string;
    end: string;
    position: string;
    description: string;
    technologies: string[];
}

export type ProjectList = { type: "projects", data: Project[] };

export type ExperienceList = { type: "experience", data: Experience[] };
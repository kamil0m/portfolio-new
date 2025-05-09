import TechnologyUsed from "./technologyUsed_interface";

export default interface Project {
    id: string;
    name: string;
    description: string;
    context: string;
    technologiesUsed: TechnologyUsed[];
    technologiesOthers: TechnologyUsed[];
    color: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
}
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  detailsUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "admin-support",
    title: "Administrative Support Excellence",
    description: "Led document management initiatives resulting in 30% improved efficiency in file retrieval and organization.",
    image: "projects/admin.png",
    imageAlt: "Administrative Support Project",
    detailsUrl: "#",
    repoUrl: "#"
  },
  {
    id: "data-management",
    title: "Data Management System",
    description: "Implemented a comprehensive data organization system that enhanced information accessibility by 40%.",
    image: "projects/front.png",
    imageAlt: "Data Management Project",
    detailsUrl: "#",
    repoUrl: "#"
  }
]; 
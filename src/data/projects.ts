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
    id: "admin",
    title: "Admin funnel management system",
    description: "Led document management initiatives resulting in 30% improved efficiency in file retrieval and organization.",
    image: "https://media-hosting.imagekit.io//ee112c4ccc76434e/adminDashboardangel.png?Expires=1834211870&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=1jNL26TlXVBhd9vADI50RGRK9ItvI8TuN4YKcRG4MmsWm2DTdm2Dzf7247FozmCCBFT2FpXIDFcGP5qhrc~vs2OTu2C3EJZKcCV6UOkBgfS0bI6H9Va~L5vh4hpyVWqLTYwZugNmm550FsUthp9NrLcYKDf1OeD1VbRhEq-JwvzXDHDDRndZvfRe1gPMLWbYeGsRy1ItaMrGGH9JXQcRUWYA26ujwBkUxiZ4gK6CtC8uJYGYkIuBVcJGr0esdNA7uLPHgt53JjQ3R0o6Oqxa5HXyXhkkHbCz6J5uKPhv05CZNGpm~hpHRmna5a6Bscoz8~Yx~osfLuD2jrCNaU-lgg__",
    imageAlt: "Administrative Support Project",
    detailsUrl: "https://front-desk-system-f5aqs75qw-dumps-projects.vercel.app/",
    repoUrl: "#"
  },
  {
    id: "front-end",
    title: "Client Management System",
    description: "Implemented a comprehensive data organization system that enhanced information accessibility by 40%.",
    image: "https://media-hosting.imagekit.io//9a5a413135804aa4/frontendProjectANgel.png?Expires=1834210725&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ylmx2H68Cbwn~RajYT00xeoc0eHj6--TfD0JrrQWaYSXPKljVCSlvv5Gw6uZowqsrbQBg5QwCVoB~d-zgQ2ycZFgtEAKVWTv3y3xPF3LeWPDCLpCQmf33xUfhCRaf2wsu8AsqpgrtvOtycz7ALqHUfBzeUSJ7ewZZMaBwFO4BVPWy5vjH55RtuEQ6qUzmE~G~kffjbOTWhCXrhEKMbLFkAox9Uwh58yBFzzANkZRcJb4zSuR-XLQCtcOjE8xfacZxcjnq57zqVF6P9lDeJ8f3gvEF~q0XHdI-3BYrWK-zvzfh5RR7R5z3zYBTO1dTbiwrUDRjd-byCV~gqnQFAC7~g__",
    imageAlt: "Data Management Project",
    detailsUrl: "https://front-desk-system-f5aqs75qw-dumps-projects.vercel.app/guest",
    repoUrl: "#"
  }
]; 
export type projectsType = Array<{
  id: number;
  img_url: string;
  webiste_url: string;
  git_url: string;
  title: string;
  description: string;
  type: "frontend" | "fullstack";
  platform: "frontendmentor" | "personnal";
  tag: Array<string>;
  date: string;
}>;

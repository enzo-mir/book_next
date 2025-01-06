import { getTranslation } from "./translation";

const t = getTranslation();

const filterByHtml = t.data.filter((project) =>
  project.tag.includes("Html" && "Css" && "Js") && !project.tag.includes("Api") && !project.tag.includes("Json") && !project.tag.includes("React")
    ? true
    : false
);
const filterByApi = t.data.filter((project) =>
  project.tag.includes("Api") || (project.tag.includes("Json") && !filterByHtml.includes(project)) ? true : false
);
const filterByAdonis = t.data.filter((project) =>
  project.tag.includes("AdoniJs") || project.tag.includes("Typescript") || (project.tag.includes("React") && !filterByApi.includes(project))
    ? true
    : false
);

export { filterByHtml, filterByApi, filterByAdonis };

import data from "../provider/data.json";

const filterByHtml = data.filter((project) =>
  project.tag.includes("Html" && "Css" && "Js") && !project.tag.includes("Api") && !project.tag.includes("Json") && !project.tag.includes("React")
    ? true
    : false
);
const filterByApi = data.filter((project) =>
  project.tag.includes("Api") || (project.tag.includes("Json") && !filterByHtml.includes(project)) ? true : false
);
const filterByAdonis = data.filter((project) =>
  project.tag.includes("AdoniJs") || project.tag.includes("Typescript") || (project.tag.includes("React") && !filterByApi.includes(project))
    ? true
    : false
);

export { filterByHtml, filterByApi, filterByAdonis };

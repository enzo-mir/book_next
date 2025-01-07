import type { data } from "locales/data/en.json";
const filterByHtml = (datas: typeof data) =>
  datas.filter(
    (project) =>
      project.tag.includes("Html") &&
      project.tag.includes("Css") &&
      project.tag.includes("Js") &&
      !project.tag.includes("Api") &&
      !project.tag.includes("Json") &&
      !project.tag.includes("React")
  );

const filterByApi = (datas: typeof data) =>
  datas.filter((project) => (project.tag.includes("Api") || project.tag.includes("Json")) && !filterByHtml(datas).includes(project));

const filterByAdonis = (datas: typeof data) =>
  datas.filter(
    (project) =>
      (project.tag.includes("AdoniJs") || project.tag.includes("Typescript") || project.tag.includes("React")) &&
      !filterByApi(datas).includes(project)
  );

export { filterByHtml, filterByApi, filterByAdonis };

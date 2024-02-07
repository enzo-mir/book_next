"use client";
import React, { ElementRef, useRef } from "react";
import style from "../style/book/nav.module.css";
import { filter_store } from "../data/filter_store";
import { motion } from "framer-motion";
import datas from "../data/data.json";

const Nav = () => {
  const [filter, setFilter] = filter_store((state) => [state.filter, state.setFilter]);
  const tagsConstRef = useRef<ElementRef<"ol">>(null);
  function getTags() {
    const arr: Array<string> = [];
    datas.map((data) => {
      return data.tag.map((tag) => {
        !arr.includes(tag) && arr.push(tag);
      });
    });
    return arr;
  }

  function handleChangeFilterDate(e: React.MouseEvent, datasetFilter: "true" | "false") {
    (e.currentTarget as HTMLButtonElement).dataset.filter = (e.currentTarget as HTMLButtonElement).dataset.filter === "true" ? "false" : "true";
    const filterBy = datasetFilter === "false" ? "old" : "recent";
    setFilter({ ...filter, date: filterBy });
  }
  function handleChangeFilterTags(tag: string) {
    setFilter({ ...filter, tags: [...filter.tags, tag], search: "" });
  }
  function handleChangeFilterType(target: HTMLSelectElement) {
    setFilter({ ...filter, type: target.value as "frontend" | "fullstack" | "all", search: "" });
  }
  const displayTagsOption = () => {
    tagsConstRef.current!.dataset.visible = tagsConstRef.current?.dataset.visible === "false" ? "true" : "false";
  };

  return (
    <motion.nav initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }} className={style.nav}>
      <ul>
        <li>
          Date{" "}
          <button
            className={style.buttonDate}
            data-filter="false"
            onClick={(e) => handleChangeFilterDate(e, e.currentTarget.dataset.filter as "true" | "false")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="15" viewBox="0 0 24 15" fill="none">
              <path d="M22.5 2.375L12.25 12.625L2 2.375" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </li>
        <li className={style.liTags}>
          <button onClick={displayTagsOption}>Tags</button>
          <ol data-visible="false" ref={tagsConstRef}>
            {getTags().map((tag, index) => {
              return (
                <li key={index} className={filter.tags.includes(tag) ? "selected" : ""} onClick={(e) => handleChangeFilterTags(tag)}>
                  {tag}
                </li>
              );
            })}
          </ol>
        </li>
        <li>
          Type
          <select
            name="typeFilter"
            value={filter.type}
            id="typeFilter"
            onChange={(e: React.ChangeEvent) => handleChangeFilterType(e.target as HTMLSelectElement)}
          >
            <option value="all">All</option>
            <option value="frontend">Front End</option>
            <option value="fullstack">Full Stack</option>
          </select>
        </li>

        <li className={style.search}>
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilter({ type: "all", tags: [], date: "recent", search: e.target.value })}
            type="search"
            value={filter.search}
            name="searchFilter"
            id="searchFilter"
            placeholder="Search projects by title"
          />
        </li>
      </ul>
    </motion.nav>
  );
};

export default Nav;

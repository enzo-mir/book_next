"use client";
import React from "react";
import style from "../style/book/nav.module.css";
import { filter_store } from "../data/filter_store";
import { motion } from "framer-motion";

const Nav = () => {
  const [filter, setFilter] = filter_store((state) => [state.filter, state.setFilter]);

  function handleChangeFilterDate(e: React.MouseEvent, datasetFilter: "true" | "false") {
    (e.currentTarget as HTMLButtonElement).dataset.filter = (e.currentTarget as HTMLButtonElement).dataset.filter === "true" ? "false" : "true";
    const filterBy = datasetFilter === "false" ? "old" : "recent";
    setFilter({ ...filter, date: filterBy });
  }
  function handleChangeFilterPlatform(target: HTMLSelectElement) {
    setFilter({ ...filter, platform: target.value as "all" | "frontendmentor" | "personnal", search: "" });
  }
  function handleChangeFilterType(target: HTMLSelectElement) {
    setFilter({ ...filter, type: target.value as "all" | "frontend" | "fullstack", search: "" });
  }
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
        <li>
          Platform
          <select
            name="platformFilter"
            id="platformFilter"
            onChange={(e: React.ChangeEvent) => handleChangeFilterPlatform(e.target as HTMLSelectElement)}
            value={filter.platform}
          >
            <option value="all">All</option>
            <option value="frontendmentor">Front End Mentor</option>
            <option value="personnal">Personnal</option>
          </select>
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilter({ type: "all", platform: "all", date: "recent", search: e.target.value })}
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

"use client";
import React from "react";
import style from "../style/nav.module.css";

const Nav = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          Date{" "}
          <button
            className={style.buttonDate}
            onClick={(e: React.MouseEvent) =>
              ((e.currentTarget as HTMLButtonElement).dataset.filter =
                (e.currentTarget as HTMLButtonElement).dataset.filter === "true" ? "false" : "true")
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="15" viewBox="0 0 24 15" fill="none">
              <path d="M22.5 2.375L12.25 12.625L2 2.375" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </li>
        <li>
          Platform
          <select name="platformFilter" id="platformFilter">
            <option value="">All</option>
            <option value="frontendmentor">Front End Mentor</option>
            <option value="personnal">Personnal</option>
          </select>
        </li>
        <li>
          Type
          <select name="typeFilter" id="typeFilter">
            <option value="">All</option>
            <option value="frontend">Front End</option>
            <option value="fullstack">Full Stack</option>
          </select>
        </li>

        <li className={style.search}>
          <input type="search" name="searchFilter" id="searchFilter" placeholder="Search projects by title" />
          <button>Search</button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

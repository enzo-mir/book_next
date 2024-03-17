import React from "react";
import GithubIcon from "../images/github.svg";
import FrontEndMentor from "../images/front_end_mentor.svg";
import SendEmail from "../images/send_email.svg";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/portfolio">portfolio</a>
          </li>
          <li>
            <a href="/about">about me</a>
          </li>
        </ul>
      </nav>
      <h1>miraglio enzo</h1>
      <ul>
        <li>
          <a href="#">
            <GithubIcon />
          </a>
        </li>
        <li>
          <a href="">
            <FrontEndMentor />
          </a>
        </li>
        <li>
          <a href="">
            <SendEmail />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;

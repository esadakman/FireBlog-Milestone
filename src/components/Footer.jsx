import React from "react";
import footerStyle from "./ComponentsStyles/Footer.module.scss";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
const Footer = () => {
  return (
    <div>
      <div className={footerStyle["FooterStyle"]}>
        <div className={footerStyle["TextStyle"]}>
          <p>
            Copyright &#169;
            {new Date().getFullYear()} Esad Akman
          </p>
        </div>
        <div className={footerStyle["Logos"]}>
          <a
            href="https://esadakman.github.io/"
            target="_blank"
            rel="noreferrer"
            title="Portfolio Page"
          >
            <LanguageIcon />
          </a>
          <a
            href="https://github.com/esadakman"
            target="_blank"
            rel="noreferrer"
            title="Github Page"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/esadakman/"
            target="_blank"
            rel="noreferrer"
            title="Linkedin Page"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

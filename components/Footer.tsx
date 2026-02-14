/**
 * Created by genesisbell on 15/12/25
 */
"use client";
import React from "react";

//Assets
import "./Footer.css";
import {
  Github,
  Linkedin,
  Twitter,
} from "@/public/icons";

export default function Footer() {

  const date = new Date().getFullYear();

  const socials = [
    {
      id: 1,
      link: "https://github.com/genesisbell",
      icon: <Github />,
    },
    {
      id: 2,
      link: "https://www.linkedin.com/in/genesisbell/",
      icon: <Linkedin />,
    },
    {
      id: 3,
      link: "https://twitter.com/genesisbbell",
      icon: <Twitter />,
    },
  ];

  return (
    <footer>
      <div className="socials">
        {
          socials.map(s => (
            <a href={ s.link } key={ s.id } target="_blank" rel="noreferrer">
              { s.icon }
            </a>
          ))
        }
      </div>
      <hr />
      <div className="copyright">
        <div className="me">
          <p>Made with ♥ by</p>
          <a href="https://genesisbell.com/" target="_blank" rel="noreferrer">
            Genesis Bell
          </a>
        </div>
        <p>{ `Copyright © ${ date }` }</p>
      </div>
    </footer>
  );
}

/**
 * Created by genesisbell on 15/12/25
 */
"use client";


import { useState } from "react";
import "./Navbar.css";
import { getDictionary } from "@/lib/i18n";


export default function Navbar() {
  const i18n = getDictionary("en_US");
  const [open, setOpen] = useState(false);

  function handleCloseNavbar() {
    setOpen(false);
  }


  return (
    <header>
      <nav className="nav">
        <span className="logo">{ i18n.navbar.brand }</span>


        <ul className={ `links ${ open ? "open" : "" }` }>
          <li><a href="#home" onClick={ handleCloseNavbar }>{ i18n.navbar.home }</a></li>
          <li><a href="#about" onClick={ handleCloseNavbar }>{ i18n.navbar.about }</a></li>
          <li><a href="#contact" onClick={ handleCloseNavbar }>{ i18n.navbar.contact }</a></li>
        </ul>


        <button
          className="hamburger"
          onClick={ () => setOpen(!open) }
          aria-label="Toggle navigation menu"
          aria-expanded={ open }
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}

/**
 * Created by genesisbell on 15/12/25
 */
"use client";


import { useState } from "react";
import styles from "./Navbar.module.css";


export default function Navbar() {
  const [open, setOpen] = useState(false);


  return (
    <header className={ styles.header }>
      <nav className={ styles.nav }>
        <span className={ styles.logo }>Margaret Software</span>


        <ul className={ `${ styles.links } ${ open ? styles.open : "" }` }>
          <li><a href="#home" onClick={ () => setOpen(false) }>Home</a></li>
          <li><a href="#about" onClick={ () => setOpen(false) }>About</a></li>
          <li><a href="#contact" onClick={ () => setOpen(false) }>Contact</a></li>
        </ul>


        <button
          className={ styles.hamburger }
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

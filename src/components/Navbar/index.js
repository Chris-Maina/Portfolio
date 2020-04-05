import React from 'react';
import { Link } from 'react-scroll';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';

import styles from './styles';

const NavbarComponent = () => {
  return (
    <Navbar fixed="top" expand="sm" style={styles.container}>
      <NavbarBrand style={styles.navBrand}>Chris Maina</NavbarBrand>
      <NavbarCollapse className="justify-content-end">
          <Link
            style={styles.navLink}
            activeClass="active"
            to="welcome"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >Welcome</Link>

          <Link
            style={styles.navLink}
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >About</Link>

          <Link
            style={styles.navLink}
            activeClass="active"
            to="technologies"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >Technologies</Link>


          <Link
            style={styles.navLink}
            activeClass="active"
            to="hobbies"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >Hobbies</Link>

          <Link
            style={styles.navLink}
            activeClass="active"
            to="footer"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >Contact</Link>
      </NavbarCollapse>
    </Navbar>
  )
}

export default NavbarComponent;

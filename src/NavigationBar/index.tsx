import { Navbar, Nav, NavItem, NavLink } from "reactstrap";

import "./index.css";

const NavigationBar = () => (
  <Navbar sticky="top">
    <Nav>
      <NavItem>
        <NavLink href="#intro">Intro</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#faq">FAQ</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#sponsor">Sponsors</NavLink>
      </NavItem>
      {/* <NavItem><NavLink href="#demographics">Demographics</NavLink></NavItem> */}
      <NavItem>
        <NavLink href="#schedule">Schedule</NavLink>
      </NavItem>
      {/* <NavItem>
        <NavLink href="#team">Team</NavLink>
      </NavItem> */}
      {/* <NavItem><NavLink href="#map">Map</NavLink></NavItem> */}
    </Nav>
  </Navbar>
);

export default NavigationBar;

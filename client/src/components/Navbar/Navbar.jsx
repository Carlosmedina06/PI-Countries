import React, { useState } from "react";
import {
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
} from "./NavbarStyle.js";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { FcGlobe } from "react-icons/fc";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const ShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  }

  return (
    <Container>
      <Wrapper>
          <LogoContainer>
          <Link to="/countries">
            <FcGlobe />
            Carlos Medina
          </Link>
          </LogoContainer>
          <MobileIcon onClick={ShowMobileMenu}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <Menu open={showMobileMenu}>
            <MenuItem>
              <MenuItemLink onClick={ShowMobileMenu}>
                <Link to='/countries'>
                  Home
                </Link>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <Link to='/create'>
                  Add Activity
                </Link>
              </MenuItemLink>
            </MenuItem>
          </Menu>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
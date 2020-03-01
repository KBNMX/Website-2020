import React from 'react';
import { Link } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';
import NavbarWrapper, { MenuWrapper, Button } from './navbar.style';

import logoImage from 'common/src/assets/image/charity/logo.svg';
import heartImage from 'common/src/assets/image/charity/heart-red.png';

const Navbar = () => {
  return (
    <NavbarWrapper className="navbar">
      <Container fullWidth={true}>
        <Link className="logo" to="/">
          <Image src={logoImage} alt="KëbabNation" />
        </Link>
        <MenuWrapper>
          <AnchorLink className="smooth_scroll" href="#testimonial" offset={81}>
            Antes de venir
          </AnchorLink>
          <a
            href="https://www.facebook.com/pg/kebabnation/reviews/"
            target="_blank"
          >
            <Button>
              <span className="text">LEE LAS OPINIONES</span>
              <Image src={heartImage} alt="Charity Landing" />
            </Button>
          </a>
        </MenuWrapper>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;

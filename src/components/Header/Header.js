import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DeskstopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DeskstopNav>
        <MobileActions>
          <Icon id="shopping-bag" />
          <VisuallyHidden>Open cart</VisuallyHidden>

          <Icon id="search" />
          <VisuallyHidden>Search</VisuallyHidden>

          <>
            <Icon id="menu" onClick={() => setShowMobileMenu(true)} />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </>
        </MobileActions>
        <MenuAlign />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow: auto;
  @media ${QUERIES.tabletandBelow} {
    border-top: 4px solid ${COLORS.gray[900]};
    align-items: center;
    justify-content: space-between;
  }

  @media ${QUERIES.mobileandBelow} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DeskstopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;
  @media ${QUERIES.tabletandBelow} {
    display: none;
  }
`;
const MobileActions = styled.nav`
  display: none;
  @media ${QUERIES.tabletandBelow} {
    gap: 32px;
    display: flex;
  }
  @media ${QUERIES.mobileandBelow} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;
  @media ${QUERIES.tabletandBelow} {
    flex: revert;
  }
`;

const MenuAlign = styled.div`
  flex: 1;
  @media ${QUERIES.tabletandBelow} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;

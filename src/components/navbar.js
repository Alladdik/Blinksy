import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #2c3e50;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const NavLink = styled(Link)`
  color: #ecf0f1;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: bold;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: #3498db;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #3498db;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #3498db;
  animation: ${pulse} 2s infinite;
`;

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  return (
    <NavbarContainer>
      <NavList>
        <NavItem>
          <Logo>Blinksy</Logo>
        </NavItem>
        <NavItem>
          <NavLink 
            to="/" 
            onClick={() => setActiveLink('home')}
            style={activeLink === 'home' ? {color: '#3498db'} : {}}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink 
            to="/profile" 
            onClick={() => setActiveLink('profile')}
            style={activeLink === 'profile' ? {color: '#3498db'} : {}}
          >
            Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink 
            to="/chat" 
            onClick={() => setActiveLink('chat')}
            style={activeLink === 'chat' ? {color: '#3498db'} : {}}
          >
            Chat
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink 
            to="/followers" 
            onClick={() => setActiveLink('followers')}
            style={activeLink === 'followers' ? {color: '#3498db'} : {}}
          >
            Followers
          </NavLink>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
};

export default Navbar;
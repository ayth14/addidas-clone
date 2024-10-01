import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const MenuListContainer = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  padding: 0 50px;
  background-color: white;
  transition: all 0.3s ease;
  z-index: 100;
  ${(props) => (props.$isActive ? `display: flex;` : `display: none;`)}

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    animation: ${(props) => (props.$isOpen ? slideIn : slideOut)} 0.5s forwards;
  }
`;

// Mobile Hamburger Icon
const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  width: 30px;
  height: 3px;
  background-color: black;
  position: relative;

  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 30px;
    height: 3px;
    position: absolute;
    left: 0;
    transition: all 0.3s ease;
  }

  &::before {
    top: -10px;
  }

  &::after {
    bottom: -10px;
  }

  @media (max-width: 768px) {
    dispalay: block;
  }

  ${(props) =>
    props.$isActive &&
    `
    background-color: transparent;
    &::before {
      transform: rotate(45deg);
      top: 0;
    }
    &::after {
      transform: rotate(-45deg);
      bottom: 0;
    }
  `}
`;

// Close Icon for mobile
const CloseIcon = styled.div`
  display: block;
  cursor: pointer;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  right: 20px;

  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 30px;
    height: 3px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s ease;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

const LeftColumn = styled.div`
  width: 25%;
  padding: 1rem;

  .static-column-item {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 1rem;
    display: block;
  }

  .menu-list {
    .menu-item {
      margin-bottom: 0.5rem;

      a {
        font-size: 1rem;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightColumn = styled.div`
  width: 75%;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  .heading {
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-weight: bold;
  }

  .menu-list {
    .menu-item {
      margin-bottom: 0.5rem;

      a {
        font-size: 1rem;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileDropdown = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    padding: 1rem;

    .menu-section {
      margin-bottom: 1rem;

      .heading {
        font-size: 1.125rem;
        font-weight: bold;
        margin-bottom: 0.75rem;
      }

      .menu-list {
        .menu-item {
          margin-bottom: 0.5rem;

          a {
            font-size: 1rem;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
`;

const MenuList = ({ isActive, staticColumn, items, onMouseLeaveMenu }) => {
  const [menuActive, setMenuActive] = useState(false);

  const handleMouseLeave = (e) => {
    const related = e.relatedTarget;
    if (
      !related ||
      !(related instanceof Node) ||
      !e.currentTarget.contains(related) 
    ) {
      setTimeout(() => {
        onMouseLeaveMenu();
      }, 0);
    }
  };

  return (
    <>
      {/* Menu Container */}
      <MenuListContainer
        $isActive={isActive}
        $menuActive={menuActive}
        onMouseLeave={handleMouseLeave}
      >
        {/* Static Left Column */}
        <LeftColumn>
          <div>
            <a className="static-column-item">{staticColumn.title}</a>

            <ul className="menu-list">
              {staticColumn.leftItems.map((listItem, idx) => (
                <li key={idx} className="menu-item">
                  <a href={listItem.link}>{listItem.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {staticColumn.personalize && (
            <div className="personlize-container">
              <a
                href={staticColumn.personalize.link}
                className="static-column-item"
              >
                {staticColumn.personalize.title}
              </a>
            </div>
          )}

          {staticColumn.sale && (
            <div className="sale-container">
              <a href={staticColumn.sale.link} className="static-column-item">
                {staticColumn.sale.title}
              </a>
            </div>
          )}
        </LeftColumn>

        {/* Menu List for Desktop */}
        <RightColumn>
          {items &&
            items.map((item, index) => (
              <div key={index} className="menu-section">
                <p className="heading">{item.heading}</p>
                <ul className="menu-list">
                  {item.list.map((listItem, idx) => (
                    <li key={idx} className="menu-item">
                      <a href={listItem.link}>{listItem.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </RightColumn>
      </MenuListContainer>
    </>
  );
};

export default MenuList;

import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import TopBar from "./TopBar";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import logo from "../../assets/images/logos/adidas.svg";
import MenuList from "./MenuList";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem; /* Adjusted for px-6 */
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  @media (min-width: 768px) {
    padding: 0 2rem;
  }

  @media (min-width: 1024px) {
    padding: 0 3rem;
  }
`;

const RightList = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 1.5rem 1rem;
    gap: 1rem;
  }
`;

const ListItem = styled.li`
  margin: 0 0.75rem;
`;

const Nav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 1.5rem;
    padding: 0.5rem 0;
  }
`;

const NavLink = styled.a`
  font-size: 0.875rem;
  color: #4a5568;
  text-transform: uppercase;
  &:hover {
    color: black;
    border-bottom: 3px solid #000;
  }
`;

const SearchBarContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eceff1;
    border: none;

  &:focus {
    border: 1px solid #000;
  }
`;

const SearchInput = styled.input`
  padding: 0.25rem 0.75rem;
  border-radius: 0;
  font-size: 0.875rem;
  width: 100%;
  background-color: #eceff1;
  display: none;
  &:focus {
    border: none;
  }
  &:focus-visible {
    border: none;
    outline: 0;
  }
      @media (min-width: 768px) {
    display: flex;
  }
`;

const SearchIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: none;
  align-items: center;
  padding-right: 10px;
    @media (min-width: 768px) {
    display: flex;
  }
`;
const MobileSearchIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: none;
  align-items: center;
  padding-right: 10px;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const bounce = keyframes`
0%,9%,18% {
        transform: translateY(0)
    }

    2% {
        transform: translateY(-10px)
    }

    3% {
        transform: translateY(-3px)
    }

    5% {
        transform: translateY(-8px)
    }

    7% {
        transform: translateY(-2px)
    }

    11% {
        transform: translateY(-10px)
    }

    12% {
        transform: translateY(-3px)
    }

    14% {
        transform: translateY(-8px)
    }

    16% {
        transform: translateY(-2px)
    }
`;

const IconLink = styled.a`
  position: relative;
  font-size: 24px;
  color: #000;
  text-decoration: none;

  i {
    color: #333;
    font-size: 1.5rem;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;

const NotificationBadge = styled.span`
  position: absolute;
  top: -5px;
  right: -8px;
  background-color: #ffd200;
  color: #000;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  animation: ${bounce} 2s infinite;

  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
    font-size: 10px;
    top: -3px;
    right: -8px;
  }

  @media (max-width: 480px) {
    width: 14px;
    height: 14px;
    font-size: 8px;
    top: -2px;
    right: -6px;
  }
`;

const MobileMenuWrapper = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: none; /* Hide on desktop */
  }
`;

const HamburgerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  z-index: 10;
`;

const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Background overlay */
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: 9;
`;

const MenuContentWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 75%;
  height: 100%;
  background-color: white;
  padding: 1rem;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease-in-out;
  z-index: 40;
`;

const MenuButton = styled.button`
  width: 100%;
  text-align: left;
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BackButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
`;

const MenuSection = styled.div`
  padding-left: 1rem;
`;

const MenuLink = styled.a`
  display: block;
  padding: 0.25rem 0;
  text-decoration: none;
  color: #333;
  &:hover {
    color: #007bff; /* Customize hover color */
  }
`;

const SectionHeading = styled.h4`
  font-weight: bold;
  margin-top: 1rem;
`;

const Header = () => {
  const [menuItems] = useState([
    {
      navHeading: {
        title: "Men",
        link: "/men",
        bold: true,
      },
      staticColumn: {
        title: "Featured",
        leftItems: [
          { title: "New Arrivals", link: "/men-new_arrivals" },
          { title: "adidas Sportswear", link: "/men-sportswear" },
          { title: "Online Exclusives", link: "/men-online_exclusive" },
          {
            title: "Members Exclusive - Extra 15% Off",
            link: "/men-special_offer",
          },
          { title: "Essentials", link: "/men-essentials" },
          { title: "Samba, Gazelle, Spezial", link: "/men-t_toe" },
        ],
        personalize: {
          title: "Personalisable Products",
          link: "/men-personalize",
        },
        sale: { title: "Sale", link: "/men-oulet" },
      },
      items: [
        {
          heading: "FOOTWEAR",
          list: [
            { title: "Running", link: "/men-running-shoes" },
            { title: "Walking", link: "/men-walking" },
            { title: "Sneakers", link: "/sneakers-men" },
            { title: "Slides", link: "/men-slides" },
            { title: "Sandals", link: "/men-sandals" },
          ],
        },
        {
          heading: "CLOTHING",
          list: [
            { title: "T-Shirts & Tank Tops", link: "/men-t_shirts" },
            { title: "Shorts", link: "/men-shorts" },
            { title: "Joggers & Track Pants", link: "/men-pants" },
            { title: "Originals", link: "/men-originals-clothing " },
            { title: "Swimwear", link: "/men-swim-clothing" },
          ],
        },
      ],
    },
    {
      navHeading: {
        title: "Women",
        link: "/women",
        bold: true,
      },
      staticColumn: {
        title: "Featured",
        leftItems: [
          { title: "New Arrivals", link: "/women-new_arrivals" },
          { title: "Online Exclusives", link: "/women-online_exclusive" },
          {
            title: "Members Exclusive - Extra 15% Off",
            link: "/women-special_offer",
          },
          { title: "Essentials", link: "/women-essentials" },
          { title: "Samba, Gazelle, Spezial", link: "/women-t_toe" },
        ],
        personalize: {
          title: "Personalisable Products",
          link: "/women-personalize",
        },
        sale: { title: "Sale", link: "/women-oulet" },
      },
      items: [
        {
          heading: "FOOTWEAR",
          list: [
            { title: "Running", link: "/men-running-shoes" },
            { title: "Walking", link: "/men-walking" },
            { title: "Sneakers", link: "/sneakers-men" },
            { title: "Slides", link: "/men-slides" },
            { title: "Sandals", link: "/men-sandals" },
          ],
        },
        {
          heading: "CLOTHING",
          list: [
            { title: "T-Shirts & Tank Tops", link: "/men-t_shirts" },
            { title: "Shorts", link: "/men-shorts" },
            { title: "Joggers & Track Pants", link: "/men-pants" },
            { title: "Originals", link: "/men-originals-clothing " },
            { title: "Swimwear", link: "/men-swim-clothing" },
          ],
        },
      ],
    },
    {
      navHeading: {
        title: "Kids",
        link: "/kids",
        bold: true,
      },
      staticColumn: {
        title: "Featured",
        leftItems: [
          { title: "New Arrivals", link: "/men-new_arrivals" },
          { title: "adidas Sportswear", link: "/men-sportswear" },
          { title: "Online Exclusives", link: "/men-online_exclusive" },
          {
            title: "Members Exclusive - Extra 15% Off",
            link: "/men-special_offer",
          },
          { title: "Essentials", link: "/men-essentials" },
          { title: "Samba, Gazelle, Spezial", link: "/men-t_toe" },
        ],
        personalize: {
          title: "Personalisable Products",
          link: "/men-personalize",
        },
        sale: { title: "Sale", link: "/men-oulet" },
      },
      items: [
        {
          heading: "FOOTWEAR",
          list: [
            { title: "Running", link: "/men-running-shoes" },
            { title: "Walking", link: "/men-walking" },
            { title: "Sneakers", link: "/sneakers-men" },
            { title: "Slides", link: "/men-slides" },
            { title: "Sandals", link: "/men-sandals" },
          ],
        },
        {
          heading: "CLOTHING",
          list: [
            { title: "T-Shirts & Tank Tops", link: "/men-t_shirts" },
            { title: "Shorts", link: "/men-shorts" },
            { title: "Joggers & Track Pants", link: "/men-pants" },
            { title: "Originals", link: "/men-originals-clothing " },
            { title: "Swimwear", link: "/men-swim-clothing" },
          ],
        },
      ],
    },
    {
      navHeading: {
        title: "Sports",
        link: "/sports",
        bold: false,
      },
      staticColumn: {
        title: "Featured",
        leftItems: [
          { title: "New Arrivals", link: "/men-new_arrivals" },
          { title: "adidas Sportswear", link: "/men-sportswear" },
          { title: "Online Exclusives", link: "/men-online_exclusive" },
          {
            title: "Members Exclusive - Extra 15% Off",
            link: "/men-special_offer",
          },
          { title: "Essentials", link: "/men-essentials" },
          { title: "Samba, Gazelle, Spezial", link: "/men-t_toe" },
        ],
        personalize: {
          title: "Personalisable Products",
          link: "/men-personalize",
        },
        sale: { title: "Sale", link: "/men-oulet" },
      },
      items: [
        {
          heading: "",
          list: [],
        },
      ],
    },
    {
      navHeading: {
        title: "lifestyle",
        link: "/lifestyle",
        bold: false,
      },
      staticColumn: {
        title: "Featured",
        leftItems: [
          { title: "New Arrivals", link: "/men-new_arrivals" },
          { title: "adidas Sportswear", link: "/men-sportswear" },
          { title: "Online Exclusives", link: "/men-online_exclusive" },
          {
            title: "Members Exclusive - Extra 15% Off",
            link: "/men-special_offer",
          },
          { title: "Essentials", link: "/men-essentials" },
          { title: "Samba, Gazelle, Spezial", link: "/men-t_toe" },
        ],
        personalize: {
          title: "Personalisable Products",
          link: "/men-personalize",
        },
        sale: { title: "Sale", link: "/men-oulet" },
      },
      items: [],
    },
    {
      navHeading: {
        title: "sale",
        link: "/sale",
        bold: true,
      },
      staticColumn: {
        title: "Featured",
        leftItems: [
          { title: "New Arrivals", link: "/men-new_arrivals" },
          { title: "adidas Sportswear", link: "/men-sportswear" },
          { title: "Online Exclusives", link: "/men-online_exclusive" },
          {
            title: "Members Exclusive - Extra 15% Off",
            link: "/men-special_offer",
          },
          { title: "Essentials", link: "/men-essentials" },
          { title: "Samba, Gazelle, Spezial", link: "/men-t_toe" },
        ],
        personalize: {
          title: "Personalisable Products",
          link: "/men-personalize",
        },
        sale: { title: "Sale", link: "/men-oulet" },
      },
      items: [],
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(null);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
    setActiveIndex(null);
    setCurrentSection(null);
  };

  const navMenuToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle active index
  };

  const goBack = () => {
    if (currentSection !== null) {
      setCurrentSection(null);
    } else {
      setActiveIndex(null);
    }
  };

  const toggleSearchBar = () => {
    setSearchOpen(!isSearchOpen);
  };

  return (
    <>
      {/* TopBar component can go here */}
      <TopBar />
      <RightList>
        <ul className="flex items-center">
          <ListItem>
            <a
              href="#"
              className="text-gray-600"
              style={{ fontSize: "12px", fontWeight: 500, lineHeight: "16px" }}
            >
              Help
            </a>
          </ListItem>
          <ListItem>
            <a
              href="#"
              className="text-gray-600"
              style={{ fontSize: "12px", fontWeight: 500, lineHeight: "16px" }}
            >
              Orders & Returns
            </a>
          </ListItem>
          <ListItem>
            <a
              href="#"
              className="text-gray-600"
              style={{ fontSize: "12px", fontWeight: 500, lineHeight: "16px" }}
            >
              Sign Up
            </a>
          </ListItem>
          <ListItem>
            <a
              href="#"
              className="text-gray-600"
              style={{ fontSize: "12px", fontWeight: 500, lineHeight: "16px" }}
            >
              Log In
            </a>
          </ListItem>
        </ul>
      </RightList>
      <HeaderContainer>
        {/* Mobile Navigation */}
        <MobileMenuWrapper>
          <HamburgerButton onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </HamburgerButton>

          {/* Menu Overlay */}
          <MenuOverlay isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />

          {/* Mobile Menu Content */}
          <MenuContentWrapper isOpen={isMobileMenuOpen} className="relative">
            <div className="flex items-center justify-between w-full">
              <div className="w-6 h-6"></div>
              <a href="/">
                <img src={logo} alt="Logo" className="w-12 h-12" />
              </a>
              <HamburgerButton
                className="flex justify-end"
                onClick={toggleMobileMenu}
              >
                <FiX />
              </HamburgerButton>
            </div>

            {/* Back button for sub-menus */}
            {currentSection !== null && (
              <BackButton onClick={goBack}>
                <FiChevronUp /> Backz
              </BackButton>
            )}

            {/* Render menu items */}
            {currentSection === null ? (
              menuItems.map((menuItem, index) => (
                <div key={index}>
                  <MenuButton
                    onClick={() => navMenuToggle(index)}
                    bold={menuItem.navHeading.bold}
                  >
                    {menuItem.navHeading.title}
                    {activeIndex === index ? (
                      <FiChevronUp />
                    ) : (
                      <FiChevronDown />
                    )}
                  </MenuButton>
                  {activeIndex === index && (
                    <MenuSection>
                      {menuItem.staticColumn.leftItems.map((leftItem, i) => (
                        <MenuLink key={i} href={leftItem.link}>
                          {leftItem.title}
                        </MenuLink>
                      ))}
                      {menuItem.items.map((section, i) => (
                        <div key={i}>
                          <SectionHeading
                            onClick={() => setCurrentSection(i)}
                            style={{ cursor: "pointer" }}
                          >
                            {section.heading}
                          </SectionHeading>
                        </div>
                      ))}
                    </MenuSection>
                  )}
                </div>
              ))
            ) : (
              <MenuSection>
                {menuItems[activeIndex]?.items[currentSection]?.list.map(
                  (listItem, j) => (
                    <MenuLink key={j} href={listItem.link}>
                      {listItem.title}
                    </MenuLink>
                  )
                )}
              </MenuSection>
            )}
          </MenuContentWrapper>
        </MobileMenuWrapper>
        {/* Adidas Logo */}
        <a href="/">
          <img src={logo} alt="Adidas Logo" className="w-12 h-12" />
        </a>

        {/* Navigation Links */}
        <Nav>
          <ul className="hidden md:flex gap-4">
            {menuItems.map((navItem, index) => {
              let isActive = activeIndex === index;
              return (
                <li key={`nav-${index}`}>
                  <NavLink
                    href={navItem.navHeading.link}
                    className={`${
                      navItem.navHeading.bold ? "font-bold" : "font-normal"
                    } `}
                    onMouseEnter={() => navMenuToggle(index)}
                    onMouseLeave={() => navMenuToggle(null)}
                  >
                    {navItem.navHeading.title}
                  </NavLink>

                  <MenuList
                    isActive={isActive}
                    staticColumn={navItem.staticColumn}
                    items={navItem.items}
                    onMouseLeaveMenu={navMenuToggle}
                  />
                </li>
              );
            })}
          </ul>
        </Nav>

        {/* Icons for cart, user, wishlist */}
        <IconsContainer>
          <SearchBarContainer>
            <SearchInput type="text" placeholder="Search" />
            <SearchIcon>
              <i className="fas fa-search"></i>
            </SearchIcon>
            <MobileSearchIcon>
              <i className="fas fa-search"></i>
            </MobileSearchIcon>
          </SearchBarContainer>
          <IconLink href="#">
            <i className="fas fa-user fa-sm"></i>
            <NotificationBadge>1</NotificationBadge>
          </IconLink>
          <IconLink href="#">
            <i className="fa fa-heart" aria-hidden="true"></i>
          </IconLink>
          <IconLink href="/cart">
            <i className="fa fa-shopping-bag" aria-hidden="true"></i>
          </IconLink>
        </IconsContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;

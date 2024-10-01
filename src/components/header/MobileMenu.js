import { useState } from "react";
import styled from "styled-components";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi"; // Hamburger, Close, Chevron icons

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
  position: fixed;
  top: 1rem;
  left: 1rem;
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
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
  z-index: 10;
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

const MobileMenu = ({ logo, menuItems }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null); 
  const [currentSection, setCurrentSection] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
    setActiveIndex(null);
    setCurrentSection(null);
  };

  
  const navMenuToggle = (index) => {
    if (currentSection === null) {
      setActiveIndex((prevState) => (prevState === index ? null : index));
    } else {
      
      setCurrentSection(index);
    }
  };


  const goBack = () => {
    if (currentSection !== null) {
      setCurrentSection(null); 
    } else {
      setActiveIndex(null); 
    }
  };

  return (
    <>
      {/* Hamburger Button */}
      <HamburgerButton onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FiX /> : <FiMenu />}
      </HamburgerButton>

      {/* Menu Overlay */}
      <MenuOverlay isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />

      {/* Mobile Menu Content */}
      <MenuContentWrapper isOpen={isMobileMenuOpen} className="relative">
        <div className="flex items-center">
          <a href="/">
            <img src={logo} alt="Logo" className="w-12 h-12" />
          </a>
          <HamburgerButton
            className="w-full justify-end"
            onClick={toggleMobileMenu}
          >
            <FiX />
          </HamburgerButton>
        </div>

        {/* Back button for sub-menus */}
        {currentSection !== null && (
          <BackButton onClick={goBack}>
            <FiChevronUp /> Back
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
                {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
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
          // Display items in the clicked section
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
    </>
  );
};

export default MobileMenu;
